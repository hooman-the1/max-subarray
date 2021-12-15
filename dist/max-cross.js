"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MaxCrossSubArray {
    constructor() {
        this.maxSum = -10000;
        this.maxIndex = 100;
        this.arraySum = -10000;
        this.leftIndex = 100;
        this.rightIndex = 100;
    }
    findCrossMax(array, lowIndex, midIndex, highIndex) {
    }
    findMax(array, startIndex, endIndex) {
        for (let i = startIndex; i <= endIndex; i++) {
            if (this.maxSum == -10000) {
                this.arraySum = array[i];
                this.firstIteration(this.arraySum, i);
            }
            else {
                this.arraySum = array[i] + this.arraySum;
                this.compareSubArraies(array, this.arraySum, i);
            }
        }
        console.log(this.maxIndex + '//' + this.maxSum);
        // console.log('max sum : ' + this.maxSum + '////' + 'max index : ' + this.maxIndex + 'array sum : ' + this.arraySum);
    }
    compareSubArraies(array, arraySum, index) {
        if (arraySum > this.maxSum) {
            this.substitue(arraySum, index);
        }
        else {
            // console.log("no change");
        }
        // console.log('max sum : ' + this.maxSum + '  ' + 'max index : ' + this.maxIndex + 'array sum : ' + this.arraySum);
    }
    firstIteration(arraySum, index) {
        // console.log('first iteration');
        this.maxSum = arraySum;
        this.maxIndex = index;
        // console.log('max sum : ' + this.maxSum + '  ' + 'max index : ' + this.maxIndex + 'array sum : ' + this.arraySum);
    }
    substitue(arraySum, index) {
        // console.log('substitute');
        this.maxSum = arraySum;
        this.maxIndex = index;
        // console.log('max sum : ' + this.maxSum + '  ' + 'max index : ' + this.maxIndex + 'array sum : ' + this.arraySum);
    }
}
exports.default = MaxCrossSubArray;
let test = new MaxCrossSubArray();
test.findMax([-3, 0, -8, 14], 0, 3);
