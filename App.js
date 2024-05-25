/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h1 tag</h2>
 *       </div>
 *  <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h1 tag</h2>
 *       </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React 🚀"),
    React.createElement("h2", {}, "by Akshay Saini"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // object
