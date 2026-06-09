class MinStack {
    constructor() {
        this.list =[],
        this.minStack =[]
    }
     
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.list.push(val)
        if(this.minStack.length === 0){
            this.minStack.push(val)
        } else {
            this.minStack.push(Math.min(val, ...this.minStack))
        }
    }
    
    /**
     * @return {void}
     */
    pop() {
        this.list.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.list[this.list.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length-1]
    }
}
