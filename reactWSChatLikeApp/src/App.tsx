import { useEffect, useRef, useState } from "react"

export default function App() {
  const [messages, setMessages] = useState(['hello man'])
  const wsRef = useRef();
  const inputRef = useRef<HTMLInputElement>("");

  useEffect(() => {
    const wss = new WebSocket("ws://localhost:8080")
    wss.onmessage = (event) => {
      setMessages(m => [...m, event.data])
    }
    wsRef.current = wss;
    wss.onopen = () => {
      wss.send(JSON.stringify({
        type: 'join',
        payload: {
          'roomId': 'red'
        }
      }))
    }

    return () => {
      wss.close()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-blue-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Chat Room</h1>
        
        <div className="space-y-4 mb-6 h-96 overflow-auto p-4 bg-gray-50 rounded-md border border-gray-200">
          {messages.map((m, index) => (
            <div key={index} className="p-3 bg-gray-100 rounded-lg shadow-sm">
              <p className="text-gray-700">{m}</p>
            </div>
          ))}
        </div>

        <div className="flex space-x-4">
          <input
            type="text"
            ref={inputRef}
            className="flex-1 p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Type a message..."
          />
          <button
            onClick={() => {
              wsRef.current.send(JSON.stringify({
                type: "chat",
                payload: {
                  message: inputRef.current.value
                }
              }))
            }}
            className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
