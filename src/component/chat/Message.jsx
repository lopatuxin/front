import React from 'react';
import styles from './Message.module.css';

const Message = ({ text, isOwn }) => {
    return (
        <div className={`${styles.message} ${isOwn ? styles.own : ''}`}>
            <p>{text}</p>
        </div>
    );
};

export default Message;
