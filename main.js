console.log("math:", typeof math); // Should print "object"

let expression = "";

function appendToExpression(value) {
    // Append the value to the expression
     let cond1=['+','-','*','/','.',')','('].includes(value);
    let cond2=['+','-','*','/','.'].includes(expression[expression.length-1]);
    const len=document.querySelector('.exp').offsetWidth;
    if (expression[expression.length-1] !=value || !cond1) {

        if (expression.length === 0 && (value === '+' || value === '.' || value === '*' || value === '/' || value === ')')) {
            // Prevent starting with an operator
            return;}
        
        if (cond2 && (value === '+' || value === '.' || value === '*' || value === '/' || value === ')'))
        {return;}

        expression += value;
        document.querySelector('.exp').textContent = expression;
        const newlen=document.querySelector('.exp').offsetWidth;
        const expdiv=document.querySelector('.exp');
        expdiv.scrollLeft=expdiv.scrollWidth;
        
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