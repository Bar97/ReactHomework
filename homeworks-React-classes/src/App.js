import "./App.css";

import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      max: 0,
      min: 0,
      step: 1,
    };
  }

  handleMin = (e) => {
    this.setState({
      min: +e.target.value,
      count: +e.target.value,
    });
  };
  handleMax = (e) => {
    if (e.target.value) {
      this.setState({ max: +e.target.value });
    }
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };
  handleAdd = () => {
    this.setState({ count: this.state.count + +this.state.step });
  };
  handleSub = () => {
    this.setState({ count: this.state.count - +this.state.step });
  };
  handleStep = (e) => {
    if (e.target.value) {
      this.setState({ step: +e.target.value });
    }
  };
  render() {
    const { count, max, min, step } = this.state;
    return (
      <>
        <div className="form">
          <div className="reset">
            <button onClick={this.handleReset}>Reset</button>
          </div>

          <input
            type="text"
            placeholder="max value"
            onChange={this.handleMax}
          ></input>
          <input
            type="text"
            placeholder="min value"
            onChange={this.handleMin}
          ></input>
          <input
            onChange={this.handleStep}
            type="text"
            placeholder="step"
          ></input>

          <div className="count">
            <button
              disabled={count + step >= max && max > 0}
              onClick={this.handleAdd}
            >
              +
            </button>
            <h1>Count {count}</h1>
            <button disabled={min > 0} onClick={this.handleSub}>
              -
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
