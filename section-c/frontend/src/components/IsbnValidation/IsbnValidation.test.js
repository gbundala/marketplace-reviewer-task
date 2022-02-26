// Import libraries and frameworks
import React from "react";
import testRenderer from "react-test-renderer";
import { unmountComponentAtNode } from "react-dom";

// Import component to be tested
import IsbnStringValidation from "./IsbnValidation";

// Initialize the target element to render our components
// temporarily while testing
let targetContainerEl = null;

// Setting up and Tearing down the the target element
// in order to isolate the effects of the test to itself

// SetUp
beforeEach(() => {
  // Setting up the targetElement for rendering during the tests
  // Then appending it to the body of the HTML
  targetContainerEl = document.createElement("div");
  document.body.appendChild(targetContainerEl);
});

// Tear Down
afterEach(() => {
  // Cleaning up the effects of the test
  unmountComponentAtNode(targetContainerEl);
  targetContainerEl.remove();
  targetContainerEl = null;
});

/**
 *
 * SNAPSHOT TESTING
 */

test("SearchCriteria component renders inline with snapshot", () => {
  const tree = testRenderer.create(<IsbnStringValidation />).toJSON();

  expect(tree).toMatchSnapshot();
});
