import React, { useState } from "react";
import "./IsbnValidation.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { isbn13 } from "../../utils/isbn13";

/**
 *
 *
 */

export default function IsbnStringValidation() {
  const [confirmedIsbn, setConfirmedIsbn] = useState("");
  const [isbnString, setIsbnString] = useState("");

  // POST Request
  function handleConfirmIsbn(isbnString) {
    const validationResponse = isbn13(isbnString);
    console.log(validationResponse);
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
