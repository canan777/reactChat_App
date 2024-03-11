import { auth } from "../firebase/config";

const Message = ({ data }) => {
  // eğerki oturumu açık olan kişinin id'si
  // mesajı atan kişinin id'siyle eşleşirse:
  if (auth.currentUser?.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  // id eşleşmezse bunu bas:
  return (
    <div className="msg-other">
      <p className="user-info">
        <img src={data.author.photo} alt="profil" />
        <span>{data.author.name}</span>
      </p>

      <p className="msg-text">{data.text}</p>
    </div>
  );
};

export default Message;
