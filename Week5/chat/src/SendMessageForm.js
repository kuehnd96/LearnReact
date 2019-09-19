import React from "react"

class SendMessageForm extends React.Component {
    constructor() {
        super()

        this.state = {
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.props.sendMessage(this.state.message);

        this.setState({
            message: ''
        })
    }
    
    render() {
        return (
            <form 
                className="send-message-form"
                onSubmit={this.handleSubmit}>
                <input
                    onChange="{this.handlerChange}"
                    value="{this.state.message}"
                    placeholder="Type your message and hit ENTER"
                    type="text" 
                />
            </form>
        )
    }
}

export default SendMessageForm