'use client'

import { useState, useEffect, useRef } from 'react'
import { Terminal, Play, Square, RotateCcw, Download, Upload, BookOpen } from 'lucide-react'

export default function PracticePage() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState<string[]>([])
  const [currentCommand, setCurrentCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalRef = useRef<HTMLDivElement>(null)

  const mockCommands = {
    'kubectl version': 'Client Version: v1.28.0\nServer Version: v1.28.0',
    'kubectl get pods': 'NAME                    READY   STATUS    RESTARTS   AGE\nnginx-pod              1/1     Running   0          2m\nredis-pod              1/1     Running   0          1m',
    'kubectl get nodes': 'NAME           STATUS   ROLES           AGE   VERSION\nminikube       Ready    control-plane   5m    v1.28.0',
    'kubectl create deployment nginx --image=nginx': 'deployment.apps/nginx created',
    'kubectl get deployments': 'NAME    READY   UP-TO-DATE   AVAILABLE   AGE\nnginx   1/1     1            1           30s',
    'help': 'Available commands:\n- kubectl version\n- kubectl get pods\n- kubectl get nodes\n- kubectl create deployment <name> --image=<image>\n- kubectl get deployments\n- kubectl delete deployment <name>\n- clear\n- help'
  }

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim()
    if (!trimmedCommand) return

    // Add command to history
    setCommandHistory(prev => [...prev, trimmedCommand])
    setHistoryIndex(-1)

    // Add command to output
    setTerminalOutput(prev => [...prev, `$ ${trimmedCommand}`])

    // Execute command
    if (trimmedCommand === 'clear') {
      setTerminalOutput([])
    } else if (mockCommands[trimmedCommand as keyof typeof mockCommands]) {
      const output = mockCommands[trimmedCommand as keyof typeof mockCommands]
      setTerminalOutput(prev => [...prev, output])
    } else {
      setTerminalOutput(prev => [...prev, `Command not found: ${trimmedCommand}\nType 'help' for available commands.`])
    }

    setCurrentCommand('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentCommand)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentCommand('')
      }
    }
  }

  const resetTerminal = () => {
    setTerminalOutput([])
    setCurrentCommand('')
    setCommandHistory([])
    setHistoryIndex(-1)
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalOutput])

  const quickCommands = [
    { command: 'kubectl version', description: 'Check Kubernetes version' },
    { command: 'kubectl get pods', description: 'List all pods' },
    { command: 'kubectl get nodes', description: 'List all nodes' },
    { command: 'kubectl create deployment nginx --image=nginx', description: 'Create nginx deployment' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Kubernetes Practice Environment
          </h1>
          <p className="text-gray-600 mb-6">
            Practice Kubernetes commands in a safe, simulated environment. 
            Perfect for learning without affecting real clusters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Terminal Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <Terminal className="h-5 w-5 text-gray-600 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-900">Terminal</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsTerminalOpen(!isTerminalOpen)}
                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    {isTerminalOpen ? <Square className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
                    {isTerminalOpen ? 'Stop' : 'Start'}
                  </button>
                  <button
                    onClick={resetTerminal}
                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Reset
                  </button>
                </div>
              </div>

              <div className="p-4">
                {isTerminalOpen ? (
                  <div className="bg-gray-900 text-green-400 font-mono text-sm rounded-lg p-4 h-96 overflow-y-auto" ref={terminalRef}>
                    <div className="mb-4">
                      <div className="text-blue-400 mb-2">
                        Welcome to Kubernetes Practice Environment!
                      </div>
                      <div className="text-gray-400 mb-2">
                        This is a simulated kubectl environment. Type 'help' for available commands.
                      </div>
                    </div>
                    
                    {terminalOutput.map((line, index) => (
                      <div key={index} className="mb-1">
                        {line.split('\n').map((subLine, subIndex) => (
                          <div key={subIndex}>{subLine}</div>
                        ))}
                      </div>
                    ))}
                    
                    <div className="flex items-center">
                      <span className="text-green-400">$ </span>
                      <input
                        type="text"
                        value={currentCommand}
                        onChange={(e) => setCurrentCommand(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent text-green-400 flex-1 outline-none ml-1"
                        placeholder="Enter kubectl command..."
                        autoFocus
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Terminal className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Terminal Not Running</h3>
                    <p className="text-gray-600 mb-4">
                      Click "Start" to begin practicing Kubernetes commands.
                    </p>
                    <button
                      onClick={() => setIsTerminalOpen(true)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Start Terminal
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Commands */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Commands</h3>
              <div className="space-y-3">
                {quickCommands.map((cmd, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="font-mono text-sm text-gray-900 mb-1">
                      {cmd.command}
                    </div>
                    <div className="text-xs text-gray-600">
                      {cmd.description}
                    </div>
                    <button
                      onClick={() => {
                        if (isTerminalOpen) {
                          setCurrentCommand(cmd.command)
                          executeCommand(cmd.command)
                        }
                      }}
                      disabled={!isTerminalOpen}
                      className="mt-2 text-xs text-blue-600 hover:text-blue-700 disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                      Run Command
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* YAML Validator */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">YAML Validator</h3>
              <div className="space-y-3">
                <textarea
                  placeholder="Paste your Kubernetes YAML here..."
                  className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md text-sm font-mono resize-none"
                />
                <button className="w-full px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                  Validate YAML
                </button>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Resources</h3>
              <div className="space-y-3">
                <a
                  href="/tutorials"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span className="text-sm">Kubernetes Tutorials</span>
                </a>
                <a
                  href="/community"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span className="text-sm">Community Forum</span>
                </a>
                <a
                  href="/docs"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span className="text-sm">Documentation</span>
                </a>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Practice Tips</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Start with basic kubectl commands</li>
                <li>• Use tab completion for command options</li>
                <li>• Check the help command for guidance</li>
                <li>• Practice with different resource types</li>
                <li>• Try creating and deleting resources</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
