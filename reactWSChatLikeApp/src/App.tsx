import { useEffect, useRef, useState } from "react"

export default function App() {
  const [messages, setMessages] = useState([{ text: "hello man", sender: "server" }])
  const wsRef = useRef();
  const inputRef = useRef<HTMLInputElement>("");

  useEffect(() => {
    const wss = new WebSocket("ws://localhost:8080")
    wss.onmessage = (event) => {
      setMessages(m => [...m, { text: event.data, sender: "server" }])
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

  const handleSendMessage = () => {
    const message = inputRef.current.value;
    if (message.trim()) {
      // Add the user's message to the chat
      setMessages(m => [...m, { text: message, sender: "user" }]);
      
      // Send the message to the WebSocket server
      wsRef.current.send(JSON.stringify({
        type: "chat",
        payload: { message }
      }));

      // Clear the input field after sending the message
      inputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-blue-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Chat Room</h1>
        
        <div className="space-y-4 mb-6 h-96 overflow-auto p-4 bg-gray-50 rounded-md border border-gray-200">
          {messages.map((m, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg shadow-sm max-w-xs ${
                m.sender === "user" ? "bg-indigo-600 text-white ml-auto" : "bg-gray-100 text-gray-700"
              }`}
            >
              <p>{m.text}</p>
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
            onClick={handleSendMessage}
            className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
