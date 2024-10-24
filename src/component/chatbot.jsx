import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [width, setWidth] = useState(window.innerWidth <= 500 ? 300 : 550);
  const chatBoxRef = useRef(null);
  const resizeRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [loading, setLoading] = useState(false);

  const datas = [
    { 
        name: 'Cheese Burger', 
        category: 'food', 
        type: 'makanan berat', 
        flavor: 'gurih', 
        ordered_item: 90, 
        price: 10000, 
        store: 'Supermarket A', 
        location: 'Jakarta', 
        period: '2024-09'
    },
    { 
        name: 'Crispy Sandwich', 
        category: 'food', 
        type: 'makanan berat', 
        flavor: 'gurih', 
        ordered_item: 70, 
        price: 12000, 
        store: 'Supermarket B', 
        location: 'Bandung', 
        period: '2024-09'
    },
    { 
        name: 'Toffe’s Cake', 
        category: 'food', 
        type: 'makanan penutup', 
        flavor: 'manis', 
        ordered_item: 50, 
        price: 10000, 
        store: 'Supermarket A', 
        location: 'Jakarta', 
        period: '2024-08'
    },
    { 
        name: 'Dancake', 
        category: 'food', 
        type: 'makanan ringan', 
        flavor: 'manis', 
        ordered_item: 1, 
        price: 10000, 
        store: 'Supermarket B', 
        location: 'Surabaya', 
        period: '2024-08'
    },
    // Tambahkan lebih banyak data sesuai kebutuhan
];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      const question = input;
      setInput('');

      await callGeminiAPI(question);
    }
  };

  const callGeminiAPI = async (question) => {
    if (!question) {
      alert('Silakan masukkan pertanyaan terlebih dahulu.');
      return;
    }

    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      // Kata kunci terkait makanan
      const foodKeywords = ['makanan', 'menu', 'makan', 'burger', 'sandwich', 'cake'];

      // Deteksi apakah pertanyaan terkait makanan
      const isFoodRelated = foodKeywords.some((keyword) =>
        question.toLowerCase().includes(keyword)
      );

      // Gabungkan data makanan jika pertanyaan terkait makanan
      let combinedMessage = question;
      if (isFoodRelated) {
        const dataString = datas
          .map((item) => `${item.name} - ${item.price} - ${item.flavor} - ${item.ordered_item} - ${item.type} - ${item.store} - ${item.location} - ${item.period}`)
          .join(', ');
        combinedMessage += `. Berikut adalah beberapa menu makanan yang tersedia: ${dataString}`;
      }

      const result = await model.generateContent(combinedMessage);
      const aiMessage = { sender: 'bot', text: result.response.text() };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { sender: 'bot', text: 'Terjadi kesalahan saat memanggil API.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
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
    const handleWindowResize = () => {
      if (window.innerWidth <= 500) {
        setWidth(300);
      } else {
        setWidth(550);
      }
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', stopResize);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChat}
        className="bg-[#FB9333] text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:bg-[#f39c4a]"
      >
        💬
      </button>

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
          <h1 className="text-lg font-bold">ChatBot</h1>
          <button onClick={toggleChat} className="focus:outline-none">
            ❌
          </button>
        </div>

        <div className="text-[14px] p-4 h-64 flex flex-col overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded max-w-max ${
                message.sender === 'bot'
                  ? 'bg-gray-200 text-black self-start'
                  : 'bg-[#FB9333] text-white self-end text-right'
              } flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
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
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

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
