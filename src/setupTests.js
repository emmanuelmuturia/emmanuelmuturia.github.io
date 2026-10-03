import "@testing-library/jest-dom";

jest.mock("react-awesome-reveal", () => {
  const React = require("react");
  const passthrough = ({children}) =>
    React.createElement(React.Fragment, null, children);

  return {
    Fade: passthrough
  };
});

Object.defineProperty(window, "scrollTo", {
  value: jest.fn(),
  writable: true
});
