import React, { useState } from "react";
import "./IsbnValidation.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { isbn13 } from "../../utils/isbn13";

/**
 * Isbn String Validation Component
 *
 * The component handles the business logic of calling
 * the isbn13() method which is the function that holds
 * the algorithm to test the validity of isbn as well convert
 * a valid isbn-10 into an isbn-13
 *
 * This component also handles the presentational bit and the
 * user interface necessary to enable the user to enter the
 * isbn string that needs to be validated and the button
 * to trigger the event handler to validate/confirm an isbn
 *
 */

export default function IsbnStringValidation() {
  // State variables
  const [confirmedIsbn, setConfirmedIsbn] = useState("");
  const [isbnString, setIsbnString] = useState("");

  // Event handler to confirm ISBN
  function handleConfirmIsbn(isbnString) {
    const validationResponse = isbn13(isbnString);

    setConfirmedIsbn(validationResponse);
  }

  return (
    <div className="main-wrapper">
      <h1>ISBN13</h1>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter the ISBN string"
          name="isbnString"
          value={isbnString}
          onChange={(e) => {
            setIsbnString(e.target.value);
          }}
        />
        <Button
          variant="outline-secondary"
          className="verify-isbn-button"
          onClick={() => {
            setIsbnString("");
            handleConfirmIsbn(isbnString);
          }}
        >
          Verify ISBN-13
        </Button>
      </InputGroup>

      <div className="response-wrapper">{confirmedIsbn && confirmedIsbn}</div>
    </div>
  );
}
