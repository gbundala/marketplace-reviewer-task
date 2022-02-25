COMPLETENESS: 2/4
EFFICIENCY: 4/4
STYLE: 2/4
DOCUMENTATION: 3/4

Positive Aspects of the submission

Aspects of the submission that could be improved

The application does run with the `print` method being invoked in line 51 of the file. The method in JavaScript/TypeScript for printing to the console is `console.log`

Use of styling libraries/ VS Code extensions
In order to enhance consistency of your code, You may want to use code styling libraries such as prettier and beautify in order to enforce styling in your code. **`Line 15`**, the closing curly braces should be in the next line in line with other closing curly braces. You can also use the Airbnb Style Guide: https://github.com/airbnb/javascript
Link: https://airbnb.io/javascript/react/

Use of descriptive variable names
In order to enhance the documentation of your code through both code it self and through useful comments it is key to use descriptive variable names. The variable `string` used in `Line 5` is very generic and can be easily confused with the type `String`. I know names can be a tricky business to get it perfectly right even for experience developers but trying something like `wordInput` or `alphabetInput` can provide a clue to a developer in the team who reads this file. Another variable name that can be improved is the `shift` variable

Wrongly denoting a `number` parameter to be a `string`
In `Line 15` a modulus operator is made on the value of the shift variable which has been denoted to be a string in the arguments of the `caesar_cipher` function. The function is however appropriately called with the number variable at the end of the file.

Overall feedback
