# Code Review of TypScript Task Submitted

## Assessment based on the 4 main aspects

We have asssessed the performance of the student in the four areas and have given marks based on the performance. A total of 4 Points basis has been used for each of the aspects of the code review.

1. COMPLETENESS/CORRECTNESS: 2/4
2. EFFICIENCY: 3/4
3. STYLE: 2/4
4. DOCUMENTATION: 3/4

### Completeness/ Correctness

The submitted code is not fully correct. The print method does not print the respective value in the console. Further details below

### Efficiency

The efficiency of the codebase is mainly affected due to the incorrectness as noted above, however the code is also having inconsistent type denotation which lowers that point on its efficiency. In line 5 the `shift` variable is assigned to be a `String` however in line 13 and 15 the `shift` value is used in mathematical operations which can only be efficiently computed only on `Number` variable

### Style

As detailed below under the section for "aspects of the submission that could be improved" the stlying of the code is not fully consistent and it can therefore be improved and resubmitted

### Documentation

Documentation refers to the extent to which the code is self descriptive and another team member can easily follow through and understand the what the code is doing and the expected output. There are areas of the of the documentation of the code that can be improved. Mainly on writting sufficient comments that are descriptive and provide detailed information

## Positive Aspects of the submission

This is a great submission, with sound logic in the code base as well as shows an ability to select and use an appropriate method to create an algorithm that provides the intended result

## Aspects of the submission that could be improved

The application doesn't run with the `print` method being invoked in line 51 of the file. The method in JavaScript/TypeScript for printing to the console is `console.log`

### Use of styling libraries/ VS Code extensions

In order to enhance consistency of your code, You may want to use code styling libraries such as prettier and beautify in order to enforce styling in your code. **`Line 15`**, the closing curly braces should be in the next line in line with other closing curly braces. You can also use the Airbnb Style Guide: https://github.com/airbnb/javascript
Link: https://airbnb.io/javascript/react/

### Use of descriptive variable names

In order to enhance the documentation of your code through both code it self and through useful comments it is key to use descriptive variable names. The variable `string` used in `Line 5` is very generic and can be easily confused with the type `String`. I know names can be a tricky business to get it perfectly right even for experience developers but trying something like `wordInput` or `alphabetInput` can provide a clue to a developer in the team who reads this file. Another variable name that can be improved is the `shift` variable

### Wrongly denoting a `number` parameter to be a `string`

In `Line 15` a modulus operator is made on the value of the shift variable which has been denoted to be a string in the arguments of the `caesar_cipher` function. The function is however appropriately called with the number variable at the end of the file.

### Documentation is not sufficient

Documentation is necessary to provide sufficient context and help other team members fully understand the code base through elaborate and clear commments. The code base does have some few comments in almost every line which is very good but the comments are not sufficiently elaborative. For instance in line 20 the comment says "Valid Alphabet Characters", which provides a clue what the `if` statement aims to do but does not give enough information to enable another team member to easily follow what the algorithm is doing and what is the expected result from it, this should be made very clear in the comments. A good test of the sufficiency of your documentation is that the comments should me more than the code.

## Overall feedback

This is a good submission and the logic for the caesar_cipher is algorithm is sound except for the few areas that needs to be addressed above to ensure it works perfectly. Once those are addressed the code works and gives the correct results.
