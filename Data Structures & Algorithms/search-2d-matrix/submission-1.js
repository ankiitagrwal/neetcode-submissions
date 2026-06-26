class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROW = matrix.length, COL = matrix[0].length;
        let top =0, bottom = ROW-1;
        while (top<=bottom){
            let row= Math.floor((top + bottom) / 2)
            if(target > matrix[row][matrix[row].length-1]){
                top = row +1
            }
            else if (target < matrix[row][0]){
                bottom = row -1
            }
            else {
                break
            }
        }
        if (!(top <= bottom)) {
            return false
        }
        let row = Math.floor((top + bottom) / 2)
        let left =0, right = COL-1
        while (left<= right){
            let m = Math.floor((left + right) / 2)
            if(target > matrix[row][m]){
                left = m +1
            }
            else if (target < matrix[row][m]){
                right = m -1
            }
            else {
                return true
            }
        }
        return false
    }
}
