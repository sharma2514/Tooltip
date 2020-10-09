import React from "react";
import Tooltip from "./Tooltip";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isHover: false,
      selectPos: "top",
    };
  }

  handlMouseEnter = () => {
    this.setState(
      {
        isHover: true, // hover state changing
      },
      () => console.log("hovering on button", this.state.isHover)
    );
  };

  handlMouseLeave = () => {
    this.setState(
      {
        isHover: false, // hover state changing
      },
      () => console.log("hovering on button", this.state.isHover)
    );
  };

  handleOptionChange = (e) => {
    this.setState(
      {
        selectPos: e.target.value,
      },
      () => console.log("show top tooltip", this.state.selectPos)
    );
  };

  render() {
    return (
      <Tooltip
        onMouseIn={this.handlMouseEnter}
        onMouseOut={this.handlMouseLeave}
        onChangeOption={this.handleOptionChange}
        state={this.state}
      />
    );
  }
}

export default App;
