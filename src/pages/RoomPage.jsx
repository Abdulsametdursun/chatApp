import { useRef } from 'react';

const RoomPage = ({ setIsAuth, setRoom }) => {
  const inputRef = useRef(null);

  const logout = () => {
    // update the state
    setIsAuth(false);
    // remove from localstorage
    localStorage.removeItem('TOKEN');
  };

  // enter room
  const handleSubmit = e => {
    e.preventDefault();
    // get room name from input
    const roomName = e.target[0].value;

    // update the state
    setRoom(roomName);
  };

  // handle input change
  const handleInputChange = e => {
    if (e.target.value === 'or write a name you want') {
      // clear the input field if "or write a name you want" is selected
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Room</h1>
      <p>Choose a Room to Enter</p>
      <input
        type="text"
        list="rooms"
        placeholder="Enter or select a room"
        ref={inputRef}
        onChange={handleInputChange}
      />
      <datalist id="rooms">
        <option value="General" />
        <option value="Sports" />
        <option value="Movies" />
        <option value="Technology" />
        <option value="or write a name you want" />
      </datalist>
      <button type="submit">Enter Room</button>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </form>
  );
};

export default RoomPage;
