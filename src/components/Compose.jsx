import React from 'react';
import '../index.css'; 

const Compose = (props) => {
    
    return(
        <form className="form-horizontal well">
            <div className="form-group">
                <div className="col-sm-8 col-sm-offset-2">
                    <h4>Compose Message</h4>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
                <div className="col-sm-8">
                    <input onChange={props.logger} type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject"/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="body" className="col-sm-2 control-label">Body</label>
                <div className="col-sm-8">
                    <textarea onChange={props.logger} name="body" id="body" className="form-control"></textarea>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-8 col-sm-offset-2">
                    <input onClick={props.submitMessage} type="submit" value="Send" className="btn btn-primary"/>
                </div>
            </div>
        </form>
    );
}

export default Compose;