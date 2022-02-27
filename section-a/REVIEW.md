# Code Review of TypScript Task Submitted

## Date and Time Reviewed

Reviewed By: Gabriel Bundala  
Date Reviewed: 26th February 2022

## Assessment based on the 4 main aspects

We have asssessed your performance in the four areas and have given marks based on the performance. A total of 4 Points basis has been used for each of the aspects of the code review.

Below are your scores for each of these aspects and underneath is the explanation for each score:

1. COMPLETENESS/CORRECTNESS: 2/4
2. EFFICIENCY: 3/4
3. STYLE: 2/4
4. DOCUMENTATION: 3/4

### Completeness/ Correctness

The submitted code is not fully correct. The print method does not print the respective value in the console. The `console.log()` should however be used if you want to print a value to the console. Regarding your use of TypeScript Generics, in particular in line 5 you have used the `<T>` generic declaration however the syntax is not particularly correct, hence you may need to refactor this. The generic declaration is normally immediately followed by the arguments definition for the function (hence consider repositioning the `<T>` declaration in line 5, and ensure that the generic is appropriately defined when using the function). Also consider whether using a generic is the best use case here.
Here is the link for more details on Generics and guidance: https://www.typescriptlang.org/docs/handbook/2/generics.html

Further details below

### Efficiency

The efficiency of the codebase is mainly affected due to the incorrectness as noted above, however the code is also having inconsistent type denotation which lowers that point on its efficiency. In line 5 the `shift` variable is assigned to be a `String` however in line 13 and 15 the `shift` value is used in mathematical operations which can only be efficiently computed only on `Number` variable. This also affects line 33 since the `shift` is used here in a mathematical computation.

### Style

As detailed below under the section for "aspects of the submission that could be improved" the stlying of the code is not fully consistent and it can therefore be improved and resubmitted

### Documentation

Documentation refers to the extent to which the code is self descriptive and another team member can easily follow through and understand the what the code is doing and the expected output. There are areas of the of the documentation of the code that can be improved. Mainly on writting sufficient comments that are descriptive and provide detailed information

## Positive Aspects of the submission

This is a great submission, you followed instructions very well with sound logic in the code base as well as showing an ability to select and use an appropriate method to create an algorithm that provides the intended result for the ceasar_cipher.

## Aspects of the submission that could be improved

The application doesn't run with the `print` method being invoked in line 51 of the file. The method in JavaScript/TypeScript for printing to the console is `console.log`

### Use of styling libraries/ VS Code extensions

In order to enhance consistency of your code, You may want to use code styling libraries such as prettier and beautify in order to enforce styling in your code. **`Line 15`**, the closing curly braces should be in the next line in order to align with other closing curly braces. You can also use the Airbnb Style Guide and Google Style Guide to enhance the consistency of your style: https://github.com/airbnb/javascript, https://airbnb.io/javascript/react/ and https://google.github.io/styleguide/jsguide.html

### Use of descriptive variable names

In order to enhance the documentation of your code through both code itself and through useful comments it is key to use descriptive variable names. The variable `string` used in `Line 5` is very generic and can be easily confused with the type `String`. I know names can be a tricky business to get it perfectly right even for experienced developers but trying something like `wordInput` or `alphabetInput` can provide a clue to a developer in the team who reads this file. Another variable name that can be improved is the `shift` variable name. Try your best to be as descriptive as possible while being alert to not be overly verbose with naming of variables and functions in your code base.

### Wrongly denoting a `number` parameter to be a `string`

In `Line 15` a modulus operator is made on the value of the shift variable which has been denoted to be a string in the arguments of the `caesar_cipher` function. The function is however appropriately called with the number variable at the end of the file in line 51. Care should therefore be taken to ensure that your refactor your code before submission which would enable you to catch some of these errors in your codebase.

### Documentation is not sufficient

Documentation is necessary to provide sufficient context and help other team members fully understand the code base through elaborate and clear commments. Also to help you understand your code when your review it after a certain time. The code base does have some few comments in almost every line which is very good but the comments are not sufficiently elaborative. For instance in line 20 the comment says "Valid Alphabet Characters", which provides a clue about what the `if` statement aims to do but does not give enough information to enable another team member to easily follow what the algorithm is doing and what is the expected result from it, this should be made very clear in the comments. A good test of the sufficiency of your documentation is that the quantity of comments in your codebase should me more than the code, however this is not a rule and importantly is the quality of the comments and documentation rather than quantity.

## Overall feedback

This is a good submission overall and the logic for the caesar_cipher is algorithm is sound except for the few areas that needs to be addressed above to ensure it works perfectly. Once those are addressed the code works and gives the correct results. Please revit and refactor your code and resubmit for assessment. Thank you!
