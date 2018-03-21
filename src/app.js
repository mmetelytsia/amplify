import React from "react";
import ReactDOM from "react-dom";

// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello World!</div>;
//   }
// }
//
// var mountNode = document.getElementById("app");
// ReactDOM.render(<HelloMessage />, mountNode);

class App extends React.Component {

    constructor(props) {
      super();
        this.state = {
            count: 0
        }
    }

    onClick(e) {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {

      var exclamations = [];
      for (var i = 0; i < this.state.count; i++) {
              exclamations.push('!');
      };
        return (
            <div>
                <h2>Hello World!{exclamations}</h2>
                <button onClick={this.onClick.bind(this)}>Add exclamation mark!</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);