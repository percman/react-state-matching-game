import React from "react";
import "./TileSelector.css";
import useHover from "../../hooks";

const TileSelector = (props) => {
  const [ref, hovered] = useHover();
  const dropdown = (
    <div className="tileSelectorContent">
      <div
        className="number"
        onClick={async () => {
          props.handleNumTileChange(4);
        }}
      >
        4
      </div>
      <div
        className="number"
        onClick={async () => {
          props.handleNumTileChange(16);
        }}
      >
        16
      </div>
      <div
        className="number"
        onClick={async () => {
          props.handleNumTileChange(36);
        }}
      >
        36
      </div>
    </div>
  );

  return (
    <div className="tileSelector">
      <div>Number of Tiles</div>
      <div className="tileSelectorDropdown" ref={ref}>
        {props.numTiles}
        {hovered ? dropdown : null}
      </div>
    </div>
  );
};

export default TileSelector;
