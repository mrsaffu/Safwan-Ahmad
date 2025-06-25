/*

Problem-2: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
  Output: (examples)
    1) input a = 1, then output : 1
    2) input a = 2, then output : 1, 3
    3) input a = 3, then output : 1, 3, 5
    4) input a = 4, then output : 1, 3, 5, 7
    5) input a = x, then output : 1, 3, 5, 7, .......
    */

    function generateOddSeries(a) {
    const result = [];
    for (let i = 0; i < a; i++) {
        result.push(2 * i + 1);
    }
    console.log(result.join(', '));
}

// Example usage:
generateOddSeries(1);
generateOddSeries(2);
generateOddSeries(3);
generateOddSeries(4);
generateOddSeries(10);