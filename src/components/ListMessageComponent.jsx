import React, { Component } from 'react'
import MessageService from '../services/MessageService'

class ListMessageComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                messages: []
        }
        this.createMessage=this.createMessage.bind(this);
        this.deleteMessageClicked = this.deleteMessageClicked.bind(this)
    }

    viewEmployee(){
        this.props.history.push('');
    }
   createMessage(){
       this.props.history.push('add-message');
   }
   deleteMessageClicked(id) {
    MessageService.deleteMessage(id)
        .then(
            response => {
                this.setState({ message: `Delete of message ${id} Successful` })
                this.refreshMessages()
            }
        )

}
refreshMessages() {
    MessageService.getMessages()//HARDCODED
        .then(
            response => {
                console.log(response);
                this.setState({ messages: response.data })
            }
        )
}
    componentDidMount(){
        MessageService.getMessages().then((res) => {
            this.setState({ messages: res.data});
        });
    }


    render() {
        return (
            <div>
                 <h2 className="text-center">Messages List</h2>
                 <br></br>
                 <div> <button className="btn btn-success" onClick={this.createMessage}>Add message</button></div>
                
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Message </th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.messages.map(
                                        mes=> 
                                        <tr key = {mes.id}>
                                            
                                    <td> {mes.message}</td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteMessageClicked(mes.id)}>Delete</button></td>
 
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListMessageComponent
