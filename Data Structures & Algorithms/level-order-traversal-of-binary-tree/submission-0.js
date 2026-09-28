/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const res =[];
        if(!root) return res
        const que = [root]
        while(que.length){
            const level =[]
            const size = que.length;
            for(let i =0; i<size; i++){
                const node = que.shift();
                level.push(node.val)
                if(node.left) que.push(node.left)
                if(node.right) que.push(node.right)  
                    
            }
            res.push(level)
        }
        return res
    }
}
