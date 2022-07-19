import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.value + 1 });
  };

  formatCount() {
    if (this.state.value === 0) {
      return "Zero";
    } else {
      return this.state.value;
    }
  }

  render() {
    console.log(this.props);

    let classes = "badge m-2 bg-";

    if (this.state.value === 0) {
      classes = classes + "warning"; // badge m-2 bg-warning
    } else {
      classes = classes + "primary"; // badge m-2 bg-primary
    }

    return (
      <div>
        {this.props.children}
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
