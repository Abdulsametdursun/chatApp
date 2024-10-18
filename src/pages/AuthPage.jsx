import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './../firebase/config';

const AuthPage = ({ setIsAuth }) => {
  const handleClick = () => {
    // After click Sign in button
    signInWithPopup(auth, provider)
      .then(res => {
        // LocalStorage to manage the application in which the session is open
        localStorage.setItem('TOKEN', res.user.refreshToken);

        // Make user's auth true
        setIsAuth(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Room</h1>
        <p>To continue please sign in</p>
        <button onClick={handleClick}>
          <img src="/g-logo.png" alt="Google Logo" />
          <span>Sign In with Google</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
