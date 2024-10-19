import React, { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [width, setWidth] = useState(350); // Lebar awal chatbot
  const chatBoxRef = useRef(null);
  const resizeRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'Thank you for your message!' },
        ]);
      }, 1000);
    }
  };

  const startResize = (e) => {
    setIsResizing(true);
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', stopResize);
  };

  const handleResize = (e) => {
    if (isResizing && chatBoxRef.current) {
      const newWidth = e.clientX - chatBoxRef.current.getBoundingClientRect().left;
      if (newWidth >= 200 && newWidth <= 500) {
        setWidth(newWidth);
      }
    }
  };

  const stopResize = () => {
    setIsResizing(false);
    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', stopResize);
  };

  useEffect(() => {
    return () => {
      // Cleanup event listeners when component unmounts
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', stopResize);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Icon Chatbot */}
      <button
        onClick={toggleChat}
        className="bg-[#FB9333] text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:bg-[#f39c4a]"
      >
        💬
      </button>

      {/* Pop-up Chat Window */}
      <div
        ref={chatBoxRef}
        className={`${
          isOpen ? 'block' : 'hidden'
        } mx-5 fixed bottom-16 right-4 max-w-full bg-white rounded-lg shadow-lg border border-orange-500 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
        style={{ width: `${width}px` }}
      >
        <div className="flex justify-between items-center p-4 bg-[#FB9333] text-white rounded-t-lg">
          <h2 className="text-lg font-bold">ChatBot</h2>
          <button onClick={toggleChat} className="focus:outline-none">
            ❌
          </button>
        </div>
        {/* <div className="p-4 h-64 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded max-w-[80%] ${
                message.sender === 'bot'
                  ? 'bg-gray-200 text-black self-start'
                  : 'bg-blue-500 text-white self-end text-right'
              } flex ${
                message.sender === 'bot' ? 'justify-start' : 'justify-end'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div> */}

<div className="text-[14px] p-4 h-64 flex flex-col overflow-y-auto">
  {messages.map((message, index) => (
    <div
      key={index}
      className={`mb-2 p-2 rounded max-w-max ${
        message.sender === 'bot'
          ? 'bg-gray-200 text-black self-start'
          : 'bg-[#FB9333] text-white self-end text-right '
      } flex ${
        message.sender === 'bot' ? 'justify-start' : 'justify-end'
      }`}
    >
      {message.text}
    </div>
  ))}
</div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-300">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <button
            type="submit"
            className="mt-2 w-full bg-[#FB9333] text-white py-2 rounded hover:bg-[#e39041] transition duration-200"
          >
            Send
          </button>
        </form>
        {/* Resize Handle */}
        <div
          ref={resizeRef}
          onMouseDown={startResize}
          className="w-2 h-2 bg-[#FB9333] cursor-se-resize absolute bottom-0 right-0"
        ></div>
      </div>
    </div>
  );
};

export default ChatBot;
