import { useEffect, useRef, useState } from "react"

export default function App() {
  const [messages, setMessages] = useState([{ text: "Hello! Welcome to the chat.", sender: "server" }])
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
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-indigo-300 to-blue-500 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-xl p-6 space-y-6">
        <h1 className="text-4xl font-bold text-center text-indigo-700">Chat Room</h1>
        
        <div className="space-y-4 h-96 overflow-auto p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-md">
          {messages.map((m, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl shadow-sm max-w-xs ${
                m.sender === "user" ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white ml-auto" : "bg-gray-100 text-gray-800"
              }`}
            >
              <p>{m.text}</p>
            </div>
          ))}
        </div>

        <div className="flex space-x-4 items-center">
          <input
            type="text"
            ref={inputRef}
            className="flex-1 p-4 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 placeholder-gray-500"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="px-6 py-3 text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
