import React from 'react';

function Message({message, isShow}) {
  return isShow ? <p>{message}</p> : null;
}

export default Message;
