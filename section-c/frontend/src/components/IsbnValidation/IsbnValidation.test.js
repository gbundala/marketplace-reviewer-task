// Import libraries and frameworks
import React from "react";
import testRenderer from "react-test-renderer";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

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

// UNIT Testing

// TESTING VALIDATION AFTER BUTTON CLICK
test("handleConfirmIsbn is called when the Verify ISBN-13 button is clicked", () => {
  //   Mock the handleConfirmIsbn
  //    event handlers function using jest
  const handleConfirmIsbn = jest.fn();

  //   Action of rendering the component on the jestdom
  act(() => {
    const str = "";

    render(
      <IsbnStringValidation handleConfirmIsbn={() => handleConfirmIsbn(str)} />,
      targetContainerEl
    );
  });

  // Grab the button element and trigger click events
  // assertions upon initial rendering
  const buttonEl = document.getElementsByClassName(
    "verify-isbn-button btn btn-outline-secondary"
  )[0];
  expect(buttonEl.innerHTML).toBe("Verify ISBN-13");
  console.log("butttttoooooon", buttonEl.innerHTML);

  //   Grab the response element
  const responseEl = document.getElementsByClassName("response-wrapper")[0];

  //   Action to dispatch the click event
  act(() => {
    buttonEl.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // assertions after event

  //   expect(handleConfirmIsbn).toHaveBeenCalledTimes(1);
  expect(responseEl.innerHTML).toBe("Valid");

  //   LOOP: BUTTON EVENT CALLED SEVERAL TIMES
  //   Acting of firing event a number of times
  act(() => {
    for (let i = 0; i < 7; i++) {
      buttonEl.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  //   Asserting on the values and number of Times functions
  //   are called after event being dispatched a set number of times

  expect(handleConfirmIsbn).toHaveBeenCalledTimes(8);

  //   expect(buttonEl.innerHTML).toBe("Search iTunes");
});

/**
 *
 * SNAPSHOT TESTING
 */

test("SearchCriteria component renders inline with snapshot", () => {
  const tree = testRenderer.create(<IsbnStringValidation />).toJSON();

  expect(tree).toMatchSnapshot();
});
