import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  formatCount() {
    if (this.state.count === 0) {
      return "Zero";
    } else {
      return this.state.count;
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
    console.log('props', this.props);

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
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
