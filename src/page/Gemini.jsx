import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const GeminiChatBot = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]); // Menyimpan semua pesan
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };

  const callGeminiAPI = async () => {
    if (!question) {
      alert('Silakan masukkan pertanyaan terlebih dahulu.');
      return;
    }

    // Menambahkan pesan pengguna ke daftar pesan
    const userMessage = { sender: 'user', text: question };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setLoading(true);
    setQuestion(''); // Mengosongkan input setelah mengirim

    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      // Menghasilkan konten
      const result = await model.generateContent(question);
      const aiMessage = { sender: 'ai', text: result.response.text() };

      // Menambahkan respons AI ke daftar pesan
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { sender: 'ai', text: 'Terjadi kesalahan saat memanggil API.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center' }}>
      {/* Input Pertanyaan */}
      <div style={cardStyle}>
        <h3>Masukkan Pertanyaan</h3>
        <textarea
          value={question}
          onChange={handleInputChange}
          placeholder="Masukkan pertanyaan di sini..."
          style={textareaStyle}
        />
        <button onClick={callGeminiAPI} disabled={loading} style={buttonStyle}>
          {loading ? 'Mengirim...' : 'Kirim Pertanyaan'}
        </button>
      </div>

      {/* Tampilkan Pesan */}
      <div style={chatBoxStyle}>
        <h3>Chat</h3>
        {messages.map((message, index) => (
          <div key={index} style={message.sender === 'user' ? userMessageStyle : aiMessageStyle}>
            <strong>{message.sender === 'user' ? 'Anda:' : 'AI:'}</strong> {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  width: '300px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const textareaStyle = {
  width: '100%', // Mengatur lebar ke 100%
  height: '100px',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '14px',
};

const buttonStyle = {
  padding: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: 'white',
  cursor: 'pointer',
};

const chatBoxStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '10px',
  width: '300px',
  height: '200px',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
};

const userMessageStyle = {
  alignSelf: 'flex-end',
  backgroundColor: '#d1ecf1',
  borderRadius: '4px',
  padding: '5px',
  margin: '5px 0',
};

const aiMessageStyle = {
  alignSelf: 'flex-start',
  backgroundColor: '#e2e3e5',
  borderRadius: '4px',
  padding: '5px',
  margin: '5px 0',
};

export default GeminiChatBot;
