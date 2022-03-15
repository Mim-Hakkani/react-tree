import React from "react";
import Tree from "react-d3-tree";
import orgChartJson from "./Data/org-chart.json";
import { useCenteredTree } from "./helpers";
// import "./styles.css";

const containerStyles = {
  width: "100vw",
  height: "100vh"
};

// Here we're using `renderCustomNodeElement` to represent each node
// as an SVG `rect` instead of the default `circle`.
const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g>

    {/* <rect width="40" height="40" x="-20" fill="red"/> */}

    {/* <image  href="https://www.w3schools.com/howto/img_avatar.png"    height="50" width="50" alt="" 
    />

    <text >Mim</text> */}
  
      <text fill="red" x="-10" y="5" strokeWidth="1">{nodeDatum.name}</text>
   
   
       {/* <text fill="red" x="-10" y="5" strokeWidth="1">
        Department
      </text>  */}
    {/* <rect width="40" height="40" x="-20" fill="red" onClick={toggleNode}  /> */}
    {/* <text fill="green" strokeWidth="1" x="20">
      {nodeDatum.name}
    </text> */}
    {/* {nodeDatum.attributes?.department && (
      <text fill="red" x="20" dy="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text> */}
    {/* )} */}
  </g>
);

const D3_tree = () => {

       const [dimensions, translate, containerRef] = useCenteredTree();
  return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        data={orgChartJson}
        dimensions={dimensions}
        translate={translate}
        renderCustomNodeElement={renderRectSvgNode}
        orientation="vertical"
      />
    </div>
    );
};

export default D3_tree;