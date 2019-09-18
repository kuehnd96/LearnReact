import React from 'react';

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
        <Title />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </div>
    )
  }
}

export default App;
