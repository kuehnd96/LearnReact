import React from "react"

class MessageList extends React.Component {
    render() {
        return (
            <ul className="message-list">
                {this.props.messages.map(message => {
                    return (
                        <li key={message.id} className="message">
                            <div>
                                {message.senderId}
                            </div>
                            <div>
                                {message.parts[0].payload.content}
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default MessageList