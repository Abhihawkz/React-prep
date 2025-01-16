import { useEffect, useRef, useState } from "react"

export default function App() {
  const [messages,setMessages] = useState(['hello man'])
  const wsRef = useRef();
  const inputRef = useRef<HTMLInputElement>("");
  useEffect(()=>{
    const wss = new WebSocket("ws://localhost:8080")
    wss.onmessage = (event)=>{
      setMessages(m => [...m,event.data])
    }
    wsRef.current = wss;
    wss.onopen = ()=>{
      wss.send(JSON.stringify({
        type:'join',
        payload:{
          'roomId':'red'
        }
      }))
    }

    return ()=>{
      wss.close()
    }
  },[])
  return (
    <div>
      <div>
        {messages.map(m => <div key={Math.random()}>{m}</div>)}
      </div>
      <div>
        <input type="text"  ref={inputRef}/>
        <button onClick={()=>{
          wsRef.current.send(JSON.stringify({
            type:"chat",
            payload:{
              message:inputRef.current.value
            }
          }))
        }}>Send Message</button>
      </div>
    </div>
  )
}