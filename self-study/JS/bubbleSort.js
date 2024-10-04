/*

input: [8,5,7,9,10];
sort adcanet element if they are not in correct order. so in first pass larget element will be place at its correct position which is last;
in second pass, second largest element will be place...so on

we need to do this process n - 1 times.
[8, 5, 7, 9, 10]

otput: [4,5,7,8,9,10];

*/

//https://www.interviewbit.com/courses/programming/arrays/bubble-sort/


let arr = [8, 5, 7, 9, 10];

console.log("bubble sort: ", bubbleSort(arr));

function bubbleSort(arr) {
    let n = arr.length;
    let swapped = false;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 2; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
};