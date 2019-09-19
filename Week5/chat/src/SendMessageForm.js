import React from "react"

class SendMessageForm extends React.Component {
    constructor() {
        super()

        this.state = {
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    
    render() {
        return (
            <form className="send-message-form">
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