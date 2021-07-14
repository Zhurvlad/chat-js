import {ChatEngine} from 'react-chat-engine'
import React from "react";
import ChatFeed from "./Component/ChatFeed";
import LoginForm from "./Component/LoginForm";
import './App.css'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>


    return (
        <ChatEngine
            height='100vh'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            projectID='006d343c-7f3c-43fa-b6a9-818f906b5b80'
            renderChatFeed ={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App;
