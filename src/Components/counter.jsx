import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  formatCount() {
    if (this.state.value === 0) {
      return "Zero";
    } else {
      return this.state.value;
    }
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";

    if (this.state.value === 0) {
      return classes + "warning"; // badge m-2 bg-warning
    } else {
      return classes + "primary"; // badge m-2 bg-primary
    }
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
