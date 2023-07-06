class MinHeap{
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
            if(element >= parent){
                break;
            }
            this.heap[parentIdx]=element;
            this.heap[idx]=parent;
            idx = parentIdx;
    
        }
        console.log(this.heap)
    }
    }
    
    let heap=new MinHeap()
    heap.insert(20)
    heap.insert(30)
    heap.insert(40)
    heap.insert(50)
    heap.insert(60)
    heap.insert(70)
    heap.insert(35)