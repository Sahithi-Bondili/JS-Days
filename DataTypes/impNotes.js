// NaN Scenarios:
0/0;
1+undefined; //(Any arithmetic operations performed in combination with undefined gives NaN)
'Hello'-'World' //(Any arithmetic operations performed on strings except Addition(+)), gives NaN)
1+NaN; //(Any arithmetic operations performed in combination with NaN gives NaN)

//True/False represents 1/0 respectively. So the above notes apply accordingly with Boolean.

// undefined scenarios
let firstName; // undefined: Any variable left with just definition gives undefined.

// infinity
1/0; // Any number divided by 0 gives infinity.

// Const
const totalMarks = 100;
totalMarks = 160; // Gives error. Any variable initiated with const Keyword can not be updated.
const secondsPerMinute; // Gives error. Any variable initiated with const Keyword should be assigned.

// Errors
const secondsPerMinute; // Uncaught SyntaxError: Missing initializer in const declaration
firstName; // Uncaught ReferenceError: firstName is not defined. Explanation: When we tried to access the variable which is never defined.
'Hello'-*8; // Uncaught SyntaxError: Unexpected token '*'
'Hello''World'; // Uncaught SyntaxError: Unexpected string
let let = 0; // Uncaught SyntaxError: let is disallowed as a lexically bound name. Explanation: We should not use the javascript keywords as variable names.
const age = 10;
let age = 200; // Uncaught SyntaxError: Identifier 'age' has already been declared
