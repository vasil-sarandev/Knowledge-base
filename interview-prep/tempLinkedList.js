class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const node = new Node(value)
        this.head = node;
        this.tail = node;
        this.length = 1;
    }

    push = (value) => {
        const node = new Node(value)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }

    pop = () => {
        if (!this.length === 0) return undefined
        let prev = this.head
        let temp = this.head
        while (temp.next) {
            prev = temp
            temp = temp.next
        }
        this.tail = prev
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }

    unshift = (value) => {
        const node = new Node(value)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }

    shift = () => {
        if (this.length === 0) return undefined
        let temp = this.head
        this.head = this.head.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        temp.next = null
        return temp
    }

    get = (index) => {
        if (index < 0 || index > this.length) return undefined

        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }

    set = (index, value) => {
        const node = this.get(index)
        if (node) {
            node.value = value
            return true
        }
        return false
    }

    insert = (index, value) => {
        if (index === 0) return this.unshift(value)
        if (index === this.length - 1) return this.push(value)
        if (index < 0 || index > this.length) return false

        const node = new Node(value)
        const prev = this.get(index - 1)

        node.next = prev.next
        prev.next = node
        this.length++
        return true
    }

    remove = (index) => {
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        if (index < 0 || index > this.length) return undefined

        const prev = this.get(index - 1)
        const temp = prev.next

        prev.next = temp.next
        temp.next = null
        this.length--
        return temp
    }

    reverse = () => {
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let next = temp.next
        let prev = null

        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
    }
}