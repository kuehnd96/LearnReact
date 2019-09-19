import React from 'react';
import Chatkit from "@pusher/chatkit-client"

import MessageList from "./MessageList"


const chatInstanceLocator = "v1:us1:58358383-107a-400c-9ae9-bbd142203629"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/58358383-107a-400c-9ae9-bbd142203629/token";
const roomId = "69cd8b0b-8353-4aeb-a103-1731beccb35f";
const username = "perborgen";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: chatInstanceLocator,
      userId: username,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
    })

    chatManager.connect()
    .then(currentUser => {
      console.log("Connected as user ", currentUser)

      this.currentUser = currentUser

      this.currentUser.subscribeToRoomMultipart({
        roomId: roomId,
        hooks: {
          onMessage: message => {
            console.log("New message ", message)
            
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      })
    })
    .catch(error => {
      console.error("error:", error)
    })
  }
  
  render() {
    return (
      <div className="app">
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default App;
