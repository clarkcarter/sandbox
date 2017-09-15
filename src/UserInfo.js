import React from 'react';
import Avatar from './Avatar';
import Name from './Name';

const UserInfo = (props) => {
  return (
    <div className="UserInfo">
      <Avatar avatarUrl={props.avatarUrl}/>
      <Name name={props.name}/>
    </div>
  )
}

export default UserInfo;
