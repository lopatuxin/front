import React, { useState } from 'react';
import Message from './Message';
import styles from './Chat.module.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const sendMessage = (event) => {
        event.preventDefault();
        if (newMessage !== '') {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    return (
        <div className={styles.chat}>
            <div className={styles.messages}>
                {messages.map((message, index) => (
                    <Message key={index} text={message} />
                ))}
            </div>
            <form onSubmit={sendMessage} className={styles.form}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Send</button>
            </form>
        </div>
    );
};

export default Chat;
