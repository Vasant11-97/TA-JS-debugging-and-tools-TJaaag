/*
#### Get full name

1. Write a function that takes two input `firstName` and `lastName` and returns full name. You will get the full name by adding first and last name with an space.
2. After writing the function write two tests for above function
3. Make the first test fail and look at the output
4. After making the first test fail do you see the output of the second test?

*/

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
 let nameData = fullName("Vasant", "Saraswat");

let expected = "Vasant Saraswat";

if(nameData !== expected){
    throw new Error(`${expected} is not same as the ${nameData}`);
}

expected = "Chirag Saraswat";

// NO


/*
1. Write a function that takes two input `amount` and `taxRate` and returns the total amount by `amount + (amount * taxRate) `
2. Write two tests for the above function
3. Make the first test fail and look at the output
4. After making the first test fail do you see the output of the second test?
*/

function taxCalculator(amount, taxrate){
    return amount + (amount * taxrate);
}

let firstValue = taxCalculator(100, 2);

// let expected = 300;

if(firstValue !== expected){
    throw new Error(`${firstValue} is not equal to the ${expected}`);
}

expected = 400;