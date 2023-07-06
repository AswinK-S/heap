class minHeap{
    constructor(){
        this.storage=[];
        this.size=0;
    }

    getParentIndex(index){
        return Math.floor((index-1)/2);
    }
    getLeftChildIndex(index){
        return (2*index)+1;
    }
    getRightChildIndex(index){
        return (2*index)+2;
    }
    hasParent(index){
       return this.getParentIndex(index)>=0;
    }
    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.size;
    }
    hasRightChild(index){
        return this.getRightChildIndex(index) < this.size;
    }
    Parent(index){
        return this.storage[this.getParentIndex(index)];
    }
    LeftChild(index){
        return this.storage[this.getLeftChildIndex(index)];
    }
    RightChild(index){
        return this.storage[this.getRightChildIndex(index)];
    }

    swap(parentIdx,childIdx){
        let temp=this.storage[parentIdx];
        this.storage[parentIdx]=this.storage[childIdx];
        this.storage[childIdx]=temp;
    }

    insert(element){
        this.storage[this.size]=element;
        this.size++;
        this.heapUp(this.size-1);
    }

    heapUp(index){
        if(this.hasParent(index) && this.Parent(index) > this.storage[index]){
            this.swap(this.getParentIndex(index),index);
            this.heapUp(this.getParentIndex(index));
        }
        console.log(this.storage);
    }
}

let heap = new minHeap();
heap.insert(50)
heap.insert(40)
heap.insert(30)
heap.insert(25)
heap.insert(35)
heap.insert(5)

