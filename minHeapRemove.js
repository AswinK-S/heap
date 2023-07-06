class minHeap{
    constructor(){
        this.heapArray=[]
        this.size=0;
    }
    getParentIdx(index){
        return Math.floor((index-1)/2)
    }
    getLeftChildIdx(index){
        return index*2+1;
    }
    getRightChildIdx(index){
        return index*2+2;
    }
    hasParent(index){
        return this.getParentIdx(index)>=0;
    }
    hasLeftChild(index){
        return this.getLeftChildIdx(index)<this.size;
    }
    hasRightChild(index){
        return this.getRightChildIdx(index)<this.size;

    }
    parent(index){
       return this.heapArray[this.getParentIdx(index)]
    }
    leftChild(index){
        return this.heapArray[this.getLeftChildIdx(index)]
    }
    rightChild(index){
        return this.getRightChildIdx(index)
    }
    
    swap(parentIdx,childIdx){
        let temp =this.heapArray[parentIdx];
        this.heapArray[parentIdx]=this.heapArray[childIdx];
        this.heapArray[childIdx]=temp;
    }

    insert(element){
        this.heapArray[this.size]=element;
        this.size++;
        this.heapifyUp(this.size-1);
    }

    heapifyUp(index){
        if(this.hasParent(index) && this.parent(index)>this.heapArray[index]){
            this.swap(this.getParentIdx(index),index)
            this.heapifyUp(this.getParentIdx(index))
        }
        console.log(this.heapArray)
    }

    remove(){
        if(this.size===0){
            throw new Error("Heap is empty");
        }
        let removed=this.heapArray[0];
        this.heapArray[0]=this.heapArray[this.size-1];
        this.size--;
        this.heapifyDown(0);
        return  removed ;
    }

    heapifyDown(index){
        let smallest=index;
        if(this.hasLeftChild(index) && this.heapArray[smallest] > this.heapArray[this.getLeftChildIdx(index)]){
            smallest=this.getLeftChildIdx(index);
        }
        if(this.hasRightChild(index) && this.heapArray[smallest] > this.heapArray[this.getRightChildIdx(index)]){
        smallest=this.getRightChildIdx(index);
        }
        if(smallest !=index){
            this.swap(index,smallest)
            this.heapifyDown(smallest)
        }
    }

}

let heap = new minHeap();
heap.insert(20)
heap.insert(30)
heap.insert(40)
heap.insert(50)
heap.insert(60)
heap.insert(70)
heap.insert(35)
console.log(heap.remove())  

