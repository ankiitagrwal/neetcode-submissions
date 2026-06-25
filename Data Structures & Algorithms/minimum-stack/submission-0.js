class MinStack {
    constructor() {}
     list = []
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.list.push(val)
    }
    
    /**
     * @return {void}
     */
    pop() {
        this.list.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.list.pop()
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.list)
    }
}
