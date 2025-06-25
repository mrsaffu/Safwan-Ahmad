/*
Problem-3: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
 
  Output: (examples)
    1) input a = 1, then output : 1
    2) input a = 2, then output : 1
    3) input a = 3, then output : 1, 3, 5
    4) input a = 4, then output : 1, 3, 5
    5) input a = 5, then output : 1, 3, 5, 7, 9
    6) input a = 6, then output : 1, 3, 5, 7, 9
    
    */

function conditionalOddSeries(a) {
    const result = [];
    const limit = a % 2 === 0 ? a - 1 : a;

    for (let i = 1; i <= limit; i += 2) {
        result.push(i);
    }

    console.log(result.join(', '));
}

// Example usage:
conditionalOddSeries(1);
conditionalOddSeries(2);
conditionalOddSeries(3);
conditionalOddSeries(4);
conditionalOddSeries(5);
conditionalOddSeries(6);

