/**
 * Testing the isbn13 validator utility function
 *
 * In the testing for the function we have defined we use
 * chai and mocha frameworks
 *
 * We define the expected values to represent those values we
 * expect to be returned by the function given the input string
 * (str).
 *
 * Then we test this expectation using the chai expect() method
 */

// IMPORTS

// The isbn13 util file
import { isbn13 } from "./isbn13";

// Testing framework 'chai'
import chai from "chai";
const expect = chai.expect;

// Testing
describe("ISBN Validator Accurately works", function () {
  describe("Accurately returns the correct response based on expectation", function () {
    it("string 9780316066525 is Valid", function () {
      const str = "9780316066525";
      const expectedValidation = "Valid";
      const actualValidation = isbn13(str);
      // eslint-disable-next-line jest/valid-expect
      expect(actualValidation).to.equal(expectedValidation);
    });

    it("string '817450494X' returns '9788174504944'", function () {
      const str = "817450494X";
      const expectedValidation = "9788174504944";
      const actualValidation = isbn13(str);
      // eslint-disable-next-line jest/valid-expect
      expect(actualValidation).to.equal(expectedValidation);
    });

    it("string '3866155239' returns '9783866155237'", function () {
      const str = "3866155239";
      const expectedValidation = "9783866155237";
      const actualValidation = isbn13(str);
      // eslint-disable-next-line jest/valid-expect
      expect(actualValidation).to.equal(expectedValidation);
    });

    it("string '9783866155237' returns 'Valid'", function () {
      const str = "9783866155237";
      const expectedValidation = "Valid";
      const actualValidation = isbn13(str);
      // eslint-disable-next-line jest/valid-expect
      expect(actualValidation).to.equal(expectedValidation);
    });

    it("string '9780345453747' returns 'Valid'", function () {
      const str = "9780345453747";
      const expectedValidation = "Valid";
      const actualValidation = isbn13(str);
      // eslint-disable-next-line jest/valid-expect
      expect(actualValidation).to.equal(expectedValidation);
    });

    it("string '0316066524' returns '9780316066525'", function () {
      const str = "0316066524";
      const expectedValidation = "9780316066525";
      const actualValidation = isbn13(str);
      // eslint-disable-next-line jest/valid-expect
      expect(actualValidation).to.equal(expectedValidation);
    });

    it("string '031606652X' returns 'Invalid'", function () {
      const str = "031606652X";
      const expectedValidation = "Invalid";
      const actualValidation = isbn13(str);
      // eslint-disable-next-line jest/valid-expect
      expect(actualValidation).to.equal(expectedValidation);
    });

    it("string '9783876155237' returns 'Invalid'", function () {
      const str = "'9783876155237'";
      const expectedValidation = "Invalid";
      const actualValidation = isbn13(str);
      // eslint-disable-next-line jest/valid-expect
      expect(actualValidation).to.equal(expectedValidation);
    });

    it("string '0345453747' returns 'Invalid'", function () {
      const str = "0345453747";
      const expectedValidation = "Invalid";
      const actualValidation = isbn13(str);
      // eslint-disable-next-line jest/valid-expect
      expect(actualValidation).to.equal(expectedValidation);
    });
  });
});
