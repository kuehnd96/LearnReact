import React from 'react';
import MessageList from "./MessageList"

/*

instance locator: v1:us1:58358383-107a-400c-9ae9-bbd142203629
test token provider: https://us1.pusherplatform.io/services/chatkit_token_provider/v1/58358383-107a-400c-9ae9-bbd142203629/token
Room id: 69cd8b0b-8353-4aeb-a103-1731beccb35f
username: perbogen

*/

const DUMMY_DATA = [
  {
      senderId: "perbogen",
      text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
]

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: DUMMY_DATA
    };
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
