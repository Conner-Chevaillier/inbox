import React from 'react';
import '../index.css';  
import Labeler from './Labeler';
import Body from './Body';

const Message = (props) => {
    let listOTags = props.info.labels.map((item, i) => <Labeler key={i} label={item}/>)
    let body = props.info.displayed ? <Body body={props.info.body} toggler={props.info.displayed}/> : <div></div>
    
    return(
        <div>
            <div className={(props.info.read ? "row message read" + " " : "row message unread" + " ") + (props.info.selected ? " selected":"")} >
                <div  className="col-xs-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input id={props.info.id} onChange={props.selector} type="checkbox" checked={props.info.selected} />
                        </div>
                        <div id={props.info.id} onClick={props.showMeBody} className="col-xs-2">
                            <i id={props.info.id} onClick={props.starMe} className={props.info.starred ? "fas fa-star" : "far fa-star"}></i>
                        </div>
                    </div>
                </div>
                <div id={props.info.id} onClick={props.showMeBody} className="col-xs-11">
                    {listOTags}
                    <a id={props.info.id} onClick={props.showMeBody} href="#">{props.info.subject}</a>
                </div>
            </div>
            {body}
        </div>
    );
}

export default Message;