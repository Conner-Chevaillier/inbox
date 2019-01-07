import React from 'react';
import Compose from './Compose';

const Toolbar = (props) => {
    let unreadCount = props.messages.reduce((tally,current) => {
        return tally += current.read ? 0 : 1;
    },0);

    return(
        <div className="row toolbar">
            <div className="col-md-12">
                <p className="pull-right">
                <span className="badge badge">{
                    unreadCount
                }</span>{ unreadCount > 0 && unreadCount === 1 ? 'unread message' : 'unread messages' }</p>
                <a onClick={props.compose} className="btn btn-danger">
                    <i className="fa fa-plus"></i>
                </a>
                <button onClick = {props.selector} className="btn btn-default">
                    <i className={props.allSpark}></i>
                </button>
                <button onClick={props.markRead} className="btn btn-default">Mark As Read</button>
                <button onClick={props.markUnread} className="btn btn-default">Mark As Unread</button>
                <select onChange={props.labelMeElmo} className="form-control label-select">
                    <option selected disabled>Apply label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>
                <select onChange={props.unlabelMeElmo} className="form-control label-select">
                    <option selected disabled>Remove label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>
                <button onClick={props.delete} className="btn btn-default">
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    );
}

export default Toolbar;