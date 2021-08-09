import App from "./App.jsx";
import LandingPage from "./LandingPage.jsx";
import React from "react";
import ReactDOM from "react-dom";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer";

afterEach(cleanup);

test("Landing Page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LandingPage></LandingPage>, div);
});

test("Landing Page renders correctly when user is not authenticated", () => {
  const { getByTestId } = render(
    <LandingPage authenticateUser={false} />
  );
  // expect(getByTestId("landing-page"));
});

test("Landing Page matches snapshot", () => {
  const tree = renderer
    .create(<LandingPage authenticateUser={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
