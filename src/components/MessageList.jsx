import React from 'react';
import Message from './Message.jsx'

const MessageList = (props) => {
    let listOMessages = props.messages.map((item, i) => <Message key={i} showMeBody={props.showMeBody} starMe={props.starMe} selector={props.selector} info={item}/>)
    return(
        <div className="container">
            { listOMessages }
        </div>
    );
}

export default MessageList;