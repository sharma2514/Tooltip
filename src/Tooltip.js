import React from "react";
import "./index.css";

const Tooltip = (props) => {
  return (
    <div className="main">
      <div id="option-tag">
        <h2>Select position for tooltip information:</h2>
        <select onChange={props.onChangeOption}>
          <option value="top">Top</option>
          <option value="left">Left</option>
          <option value="bottom">Bottom</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div className="buttons">
        {/* for top position */}
        <div id="tooltip-psoition">
          {props.state.isHover && props.state.selectPos === "top" && (
            <div className="position" id="top-pos">
              <div>The tooltip is at {props.state.selectPos} position. </div>
            </div>
          )}
          {/* for left position */}
          {props.state.isHover && props.state.selectPos === "left" && (
            <div className="position" id="left-pos">
              <div>The tooltip is at {props.state.selectPos} position.</div>
            </div>
          )}
          {/* for bottom position */}
          {props.state.isHover && props.state.selectPos === "bottom" && (
            <div className="position" id="bottom-pos">
              <div>The tooltip is at {props.state.selectPos} position. </div>
            </div>
          )}
          {/* for right position */}
          {props.state.isHover && props.state.selectPos === "right" && (
            <div className="position" id="right-pos">
              <div>The tooltip is at {props.state.selectPos} position. </div>
            </div>
          )}
        </div>
        <button
          id="press"
          onMouseEnter={props.onMouseIn}
          onMouseLeave={props.onMouseOut}
        >
          Press
        </button>
      </div>
    </div>
  );
};

export default Tooltip;
