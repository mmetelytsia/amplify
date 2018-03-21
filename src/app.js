import React from "react";
import ReactDOM from "react-dom";
import './style.css';

class App extends React.Component {

    constructor(props) {
      super();
        this.state = {
            count: 0
        }
    }

    increment(e) {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement(e) {
      if (this.state.count > 0) {
          this.setState({
              count: this.state.count - 1
          });
      }
    }

    render() {

      var exclamations = [];
      for (var i = 0; i < this.state.count; i++) {
              exclamations.push('!');
      };
        return (
            <div>
                <h2>Hello World!{exclamations}</h2>
                <button onClick={this.increment.bind(this)}>Add exclamation mark!</button>
                <button onClick={this.decrement.bind(this)}>Remove exclamation mark!</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);