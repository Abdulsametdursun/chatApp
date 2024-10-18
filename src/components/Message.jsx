import { auth } from '../firebase/config';

const Message = ({ data }) => {
  // if current user id is = message sender show this:
  if (auth.currentUser.uid === data.author.uid) {
    return <p className="msg-user">{data.text}</p>;
  }

  // if not show this:
  return (
    <div className="msg-other">
      <p className="user-info">
        <img src={data.author.photo} />
        <span>{data.author.name}</span>
      </p>
      <p className="msg-text">{data.text}</p>
    </div>
  );
};

export default Message;
