import React from 'react';
import '../index.css';

const Labeler = (props) => {
    return(
        <span className="label label-warning">{props.label}</span>
    );
}

export default Labeler;