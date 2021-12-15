export default class MaxCrossSubArray{
    private maxSum: number = -10000;
    private maxIndex = 100;
    private arraySum = -10000;
    private leftIndex = 100;
    private rightIndex = 100;

    findCrossMax(array: number[], lowIndex: number, midIndex: number, highIndex: number){
        
    }

    findMax(array: number[], startIndex: number, endIndex: number){
        for(let i = startIndex; i <= endIndex; i ++){
            if(this.maxSum == -10000){
                this.arraySum = array[i]; 
                this.firstIteration(this.arraySum , i);   
            }else{
                this.arraySum = array[i] + this.arraySum;
                this.compareSubArraies(array, this.arraySum, i);
            }
        }
        console.log(this.maxIndex + '//' + this.maxSum);
        // console.log('max sum : ' + this.maxSum + '////' + 'max index : ' + this.maxIndex + 'array sum : ' + this.arraySum);
    }

    compareSubArraies(array: number[], arraySum: number , index: number){
        if(arraySum > this.maxSum){
            this.substitue(arraySum, index);
        }else{
            // console.log("no change");
        }
        // console.log('max sum : ' + this.maxSum + '  ' + 'max index : ' + this.maxIndex + 'array sum : ' + this.arraySum);
    }
    
    private firstIteration(arraySum: number , index: number){
        // console.log('first iteration');
        this.maxSum = arraySum;
        this.maxIndex = index;
        // console.log('max sum : ' + this.maxSum + '  ' + 'max index : ' + this.maxIndex + 'array sum : ' + this.arraySum);
    }
    
    private substitue(arraySum: number , index: number){
        // console.log('substitute');
        this.maxSum = arraySum;
        this.maxIndex = index;
        // console.log('max sum : ' + this.maxSum + '  ' + 'max index : ' + this.maxIndex + 'array sum : ' + this.arraySum);
    }
}

let test = new MaxCrossSubArray();
test.findMax([-3,0,-8,14], 0, 3);