import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import axios from 'axios';
import moment from 'moment';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

// const ENDPOINT = 'https://react-socket-server-cheng.herokuapp.com';
// const ENDPOINT = 'https://react-websocket-server-cheng.herokuapp.com';

const SEVER_ENDPOINT = "http://localhost:5000";
const API_ENDPOINT = 'https://test-g5y7.randomforest.ee/api';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  

  useEffect(() => {

    const { name, room } = queryString.parse(location.search);
    console.log("location.search===",location.search)

    socket = io(SEVER_ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [SEVER_ENDPOINT, location.search]);
  
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    const params = { room_name : room.trim().toLowerCase() };   

    axios.post(API_ENDPOINT +'/roomData', params)
        .then(response => {
          let tempArr = response.data.response
          let newArr = []
          for (let i = 0; i < tempArr.length; i++) {
            let newObj = {}
            newObj.user = tempArr[i].user_name
            newObj.text = tempArr[i].message
            newObj.time = moment(tempArr[i].created_at).format('h:mm a')
            newArr.push(newObj)
          }
          setMessages(newArr)
        });

    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
      console.log("messages==>", messages)
      console.log("message-----", message)
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} time={time} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;
