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
    <div className="font-sans p-6">
      <div className="mb-6 border-b border-gray-300 pb-4">
        {messages.map((m, index) => (
          <div key={index} className="p-2 bg-gray-100 mb-2 rounded-md">
            {m}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          ref={inputRef}
          className="p-3 text-lg border rounded-md border-gray-300 w-72 mr-4"
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
          className="p-3 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </div>
    </div>
  )
}
