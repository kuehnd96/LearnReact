import React from 'react';
import MessageList from "./MessageList"

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
