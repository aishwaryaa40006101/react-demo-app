import React, { Component } from 'react'
import MessageService from '../services/MessageService';

class CreateMessageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            message: '',
            
        }
       
        this.saveOrUpdateMessage = this.saveOrUpdateMessage.bind(this);
        this.changeMessage=this.changeMessage.bind(this);
        }

    saveOrUpdateMessage = (e) => {
        e.preventDefault();
        let mes = {message: this.state.message};
        console.log('message => ' + JSON.stringify(mes));

        // step 5
       // if(this.state.id === '_add'){
            MessageService.createMessage(mes).then(res =>{
                this.props.history.push('');
            });
        
    }
    
    cancel(){
        this.props.history.push('');
    }
     
    changeMessage= (event) => {
        this.setState({message: event.target.value});
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Message</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                      
                                        <div className = "form-group">
                                            <label> Message </label>
                                            <input type="text"  name="message" id="message" className="form-control" 
                                                 value={this.state.message} onChange={this.changeMessage} />
                                   </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateMessage}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateMessageComponent