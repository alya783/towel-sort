
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(arguments.length === 0 || matrix.length === 0){
        return [];
    } else{
        let arr = [];
        for(let i = 0; i < matrix.length; i++){
            for(let k = 0; k < matrix[i].length; k++){
                let col = i % 2;
                if(col === 0){
                    arr.push(matrix[i][k]);
                } else{
                    arr.push(matrix[i][matrix[i].length - k - 1]);
                }   
            }
        }
	
        return arr;
    }
}
