const RoomPage = ({ setRoom, setIsAuth }) => {
    // formun gönderilmesinde çalışır
    const handleSubmit = (e) => {
        e.preventDefault();

        const room = e.target[0].value;

        setRoom(room.toUpperCase());
    };

  return (
    <form onSubmit={handleSubmit} className="room-page">
        <h1>Chat Odası</h1>
        <p>Hangi Odaya Gireceksiniz</p>
        <input placeholder="ör:haftasonu" type="text" />
        <button type="submit">Odaya Gir</button>
        <button 
        onClick={()=>{
          setIsAuth(false);
          localStorage.removeItem('TOKEN');
        }} 
        type="button">Çıkış Yap</button>
    </form>
  )
}

export default RoomPage;
