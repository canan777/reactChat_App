import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";

const AuthPage = ({ setIsAuth }) => {
    // giriş butonuna tıklanınca
    const handleClick = () => {
      signInWithPopup(auth,provider)
    // başarıyla giriş yapılırsa:
      .then((data) => {
    // state'i güncelle 
    setIsAuth(true);
    // token'i local'de sakla
    localStorage.setItem('TOKEN', data.user.refreshToken);
      });
    };
    
      return (
        <div className="container">
          <div className="auth">
            <h1>Chat Odası</h1>
    
            <p>Devam Etmek İçin Giriş Yapın</p>
    
            <button onClick={handleClick}>
                <img src="/g-logo.png"/>
                <span>Google İle Gir</span>
                </button>
          </div>
        </div>
      );
    };
    
export default AuthPage;
