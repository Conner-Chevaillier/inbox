import React from 'react';
import '../index.css';  

const Body = (props) => {
    return(
        <div class="row message-body">
            <div class="col-xs-11 col-xs-offset-1">
                {props.body}
            </div>
        </div>
    );
}

export default Body;