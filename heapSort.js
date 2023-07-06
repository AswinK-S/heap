class MinHeap {
    constructor() {
        this.storage = [];
        this.size = 0;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }
    getRightChildIndex(index) {
        return 2 * index + 2;
    }
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.size;
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.size;
    }
    parent(index) {
        return this.storage[this.getParentIndex(index)];
    }
    leftChild(index) {
        return this.storage[this.getLeftChildIndex(index)];
    }
    rightChild(index) {
        return this.storage[this.getRightChildIndex(index)];
    }

    swap(parentIdx, childIdx) {
        let temp = this.storage[parentIdx];
        this.storage[parentIdx] = this.storage[childIdx];
        this.storage[childIdx] = temp;
    }

    insert(element) {
        this.storage[this.size] = element;
        this.size++;
        this.heapUp(this.size - 1);
    }

    heapUp(index) {
        if (this.hasParent(index) && this.parent(index) > this.storage[index]) {
            this.swap(this.getParentIndex(index), index);
            this.heapUp(this.getParentIndex(index));
        }
    }

    removeMin() {
        if (this.size === 0) {
            return null;
        }

        const min = this.storage[0];
        this.storage[0] = this.storage[this.size - 1];
        this.size--;
        this.heapDown(0);
        return min;
    }

    heapDown(index) {
        let smallestChildIndex;
        if (this.hasLeftChild(index)) {
            smallestChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallestChildIndex = this.getRightChildIndex(index);
            }

            if (this.storage[index] > this.storage[smallestChildIndex]) {
                this.swap(index, smallestChildIndex);
                this.heapDown(smallestChildIndex);
            }
        }
    }

    heapSort() {
        const sortedArray = [];
        while (this.size > 0) {
            sortedArray.push(this.removeMin());
        }
        return sortedArray;
    }
}

let heap = new MinHeap();
heap.insert(50);
heap.insert(40);
heap.insert(30);
heap.insert(25);
heap.insert(35);
heap.insert(5);

const sortedArray = heap.heapSort();
console.log(sortedArray);
