class MaxHeap{
constructor(){
    this.heap=[]
}

insert(element){
    this.heap.push(element);
    this.bubbleUp(element);
}

bubbleUp(element){
    let idx=this.heap.length-1;
    while(idx > 0){
        let parentIdx=Math.floor((idx-1)/2);
        let parent =this.heap[parentIdx];
        if(element <= parent){
            break;
        }
        this.heap[parentIdx]=element;
        this.heap[idx]=parent;
        idx = parentIdx;

    }
    console.log(this.heap)
}
}

let heap=new MaxHeap()
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);




