import { useState } from 'react';
import AuthPage from './pages/AuthPage';
import RoomPage from './pages/RoomPage';
import ChatPage from './pages/ChatPage';

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('TOKEN'));
  const [room, setRoom] = useState(null);

  // Sent to sign in page if not sign in
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }

  // Sent to choose room if sign in
  return (
    <div className="container">
      {room ? (
        // if the room selected > go to chatPage
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        // if the room is not selected > go to roomPage
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
