import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counterArray: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 4 },
      { id: 5, value: 0 },
    ],
  };
  handleDelete = (id) => {
    const counterArray = this.state.counterArray.filter(
      (counter) => counter.id !== id
    );
    this.setState({ counterArray });
  };
  handleIncrement = (id) => {
    const counterArray = this.state.counterArray.map((c) => {
      if (c.id === id) c.value += 1;
      return c;
    });
    this.setState({ counterArray });
  };
  handleReset = () => {
    const counterArray = this.state.counterArray.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counterArray });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counterArray.filter((c) => c.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counterArray={this.state.counterArray}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
