import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { useEffect, useState } from 'react';
import Message from '../components/Message';

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);

  // get collection reference
  const messagesCol = collection(db, 'messages');

  // create filters
  const queryOptions = query(
    messagesCol,
    where('room', '==', room),
    orderBy('createdAt', 'asc')
  );

  // save the message to database
  const handleSubmit = async e => {
    e.preventDefault();
    const text = e.target[0].value;

    // add new document to database
    // reference to collection
    // data document going to create
    await addDoc(messagesCol, {
      text,
      room,
      author: {
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL || 'https://via.placeholder.com/40',
        uid: auth.currentUser.uid,
      },
      createdAt: serverTimestamp(),
    });

    // reset the text area
    e.target.reset();
  };

  useEffect(() => {
    // watch live changes on collection
    // use function every time when collection is changed
    const unsub = onSnapshot(queryOptions, snapshot => {
      const tempMsg = [];
      // use all docs in to the doc.data
      snapshot.docs.forEach(doc => tempMsg.push(doc.data()));
      // get data from tempMsg, send them to the state
      setMessages(tempMsg);
    });
    // end the sub when user exit
    return () => unsub();
  }, []);

  return (
    <div className="chat-page">
      <header>
        <p>{auth?.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Exit Room</button>
      </header>
      <main>
        {messages.map((data, i) => (
          <Message data={data} key={i} />
        ))}
      </main>
      <form onSubmit={handleSubmit}>
        <input type="text" required placeholder="Enter your message..." />
        <button>Sent</button>
      </form>
    </div>
  );
};

export default ChatPage;
