console.log("math:", typeof math); // Should print "object"

let expression = "";

function appendToExpression(value) {
    // Append the value to the expression
    let cond=['+','-','*','/','.',')','('].includes(value);
    const len=document.querySelector('.exp').offsetWidth;
    if  (len<360 &&  (expression[expression.length-1] !=value || !cond)) {

        if (expression.length === 0 && (value === '+' || value === '.' || value === '*' || value === '/' || value === ')')) {
            // Prevent starting with an operator
            return;}

        expression += value;
        document.querySelector('.exp').textContent = expression;
        
        if (expression.length > 20) {
            document.querySelector('.exp').style.fontSize = "1.5rem"; // Adjust font size for long expressions
        }
    }
}

function clearExpression() {
    // Clear the expression
    expression = "";
    document.querySelector('.exp').textContent = expression;
}

function backspace() {
    // Clear the expression and reset the display
    expression=document.querySelector('.exp').textContent;
    expression = expression.slice(0, -1);
    document.querySelector('.exp').textContent = expression;}

function calculateResult() {
   expression=document.querySelector('.exp').textContent;
   try {
       // Evaluate the expression and display the result
           const result =math.evaluate(expression);
           document.querySelector('.exp').textContent = result;
           expression = result.toString(); // Update expression to the result for further calculations
       } catch (error) {
           // Handle any errors that occur during evaluation
           if (expression === "") {
               document.querySelector('.exp').textContent = "";
            } 
            else{console.error("Error evaluating expression:", error);
            document.querySelector('.exp').textContent = "Error";
            expression = ""; }// Reset expression on error
       }
    }