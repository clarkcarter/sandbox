import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from './UserInfo';
import Text from './Text';
import Timestamp from './Timestamp';

const Comment = (props) => {
  return (
    <div className="Comment">
      <UserInfo name={props.author.name} avatarUrl={props.author.avatarUrl}/>
      <Text text={props.text}/>
      <Timestamp date={props.date}/>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />,
  document.getElementById('root')
);
