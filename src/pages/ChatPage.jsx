import {
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
    where,
  } from 'firebase/firestore';
  import { auth, db } from './../firebase/config';
  import { useEffect } from 'react';
  import { useState } from 'react';
  import Message from '../components/Message';
  
  const ChatPage = ({ room, setRoom }) => {
    const [messages, setMessages] = useState([]);
    // mesaj gönderlince
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // kolleksiyonun referasnını alma
      const messagesCol = collection(db, 'messages');
  
      // kolleksiyona yeni döküman ekle
      await addDoc(messagesCol, {
        text: e.target[0].value,
        room,
        author: {
          name: auth.currentUser?.displayName,
          id: auth.currentUser?.uid,
          photo: auth.currentUser.photoURL,
        },
        createdAt: serverTimestamp(),
      });
  
      // formu sıfırla
      e.target.reset();
    };
  
    // bu odada gönderilen mesajları anlık olarak getir
    useEffect(() => {
      // kolleksiyonun referasnını alma
      const messagesCol = collection(db, 'messages');
  
      // filtreleme ayarları yap
      const q = query(
        messagesCol,
        where('room', '==', room),
        orderBy('createdAt', 'asc')
      );
  
      // anlık olarak bir kolleksiyondaki değişimleri izeler
      // kollekisyon her değşitiğinde veridğimiz fonksiyona
      // kolleksiyondaki dökümaları parametre olarak gönderir
      onSnapshot(q, (snapshot) => {
        //  verilerin geçici olark tutulduğu dizi
        const tempMsg = [];
  
        // dökümnları dön, verilerine eriş, diziye aktar
        snapshot.docs.forEach((doc) => {
          tempMsg.push(doc.data());
        });
  
        // mesajları state'e aktar
        setMessages(tempMsg);
      });
    }, []);
  
    return (
      <div className="chat-page">
        <header>
          <p>{auth.currentUser?.displayName}</p>
          <p>{room}</p>
          <button onClick={() => setRoom(null)}>Farklı Oda</button>
        </header>
  
        <main>
          {messages.map((data, i) => (
            <Message key={i} data={data} />
          ))}
        </main>
  
        <form onSubmit={handleSubmit}>
          <input
            required
            placeholder="mesajınızı yazınız"
            type="text"
          />
          <button>Gönder</button>
        </form>
      </div>
    );
  };
  
  export default ChatPage;