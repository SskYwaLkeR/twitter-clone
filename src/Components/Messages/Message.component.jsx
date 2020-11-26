import { useState, useRef, useEffect } from 'react'
import socketIOClient from 'socket.io-client'

function Message() {
    let [messages, setMessage] = useState([])
    const socketRef = useRef()

    useEffect(() => {
        socketRef.current = socketIOClient('http://localhost:4000', {
            query: { message: 'message' },
        })

        socketRef.current.on('newChatMessage', message => {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socketRef.current.id,
            }
            setMessage(messages => [...messages, incomingMessage])
        })

        return () => {
            socketRef.current.disconnect()
        }
    })

    const sendMessage = messageBody => {
        socketRef.current.emit('newChatMessage', {
            body: messageBody,
            senderId: socketRef.current.id,
        })
    }

    return (
        <div>
            <h1>Messages</h1>
            <input
                type="text"
                name="message"
                id="message"
                placeholder="Type your message"
            />
            <button>Send</button>
        </div>
    )
}

export default Message
