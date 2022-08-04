var sumOf = function(num, target){
    for(let i = 0; i < num.length; i++){
        for(let j = i+1; j < num.length; j++){
            if(num[i] + num[j] == target){
                return [i, j];
            }
        }
    }
}

console.log(sumOf([15, 7, 2, 11],9));
console.log(sumOf([2, 3, 4],6));
console.log(sumOf([4, 5, 6, 1], 10));