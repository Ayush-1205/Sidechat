import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Sidebar.css';

const Sidebar = () => {
  // State for chat messages
  const [messages, setMessages] = useState([]);

  // State for selected theme
  const [theme, setTheme] = useState('light');

  // Fetch messages from an API or initialize with default data
  useEffect(() => {
    // Implement fetching messages from an API here
    // Or initialize messages with default data
  }, []);

  // Function to send a new message
  const sendMessage = async (message) => {
    // You can replace this with your own API endpoint
    const apiUrl = '/api/sendMessage';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();

      // Update messages state with the sent and received messages
      const sentMessage = {
        text: message,
        sender: 'User',
        timestamp: new Date().toISOString(),
        code: true, // Indicate that the sent message should be displayed with code syntax highlighting
      };
      const receivedMessage = {
        text: data.message,
        sender: 'Server',
        timestamp: new Date().toISOString(),
      };
      setMessages((prevMessages) => [...prevMessages, sentMessage, receivedMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Function to toggle between light and dark theme
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className={`sidebar ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="chat-interface" style={{ overflowY: 'scroll', height: '100%' }}>
        <div className="message-list">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <div className="avatar">{message.sender.charAt(0)}</div>
              <div className="message-content">
                <div className="sender">{message.sender}</div>
                <div className="text">
                  {message.code ? (
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                      {message.text}
                    </SyntaxHighlighter>
                  ) : (
                    <div>{message.text}</div>
                  )}
                </div>
                <div className="timestamp">{message.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type your message..."
            onKeyDown={async (e) => {
              if (e.key === 'Enter' && e.target.value.trim() !== '') {
                await sendMessage(e.target.value);
                e.target.value = '';
              }
            }}
          />
          <button
            onClick={async () => {
              const input = document.querySelector('.message-input input');
              if (input.value.trim() !== '') {
                await sendMessage(input.value);
                input.value = '';
              }
            }}
          >
            Send
          </button>
        </div>
      </div>
      <div className="sidebar-settings">
        <div className="theme-toggle">
          <span>Theme:</span>
          <label>
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === 'light'}
              onChange={() => handleThemeChange('light')}
            />
            Light
          </label>
          <label>
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === 'dark'}
              onChange={() => handleThemeChange('dark')}
            />
            Dark
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


