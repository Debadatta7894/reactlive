

export function useQueue(){
    var collection = [];
    this.print = function (){
        console.log(collection);
    }
    this.enqueue = function (element) {
        console.push(element);
    }
    this.dequeue = function () {
        return collection.shift();
    }
    this.front = function () {
        return collection[0];
    }
    this.isEmpty = function () {
        return collection.length === 0;
    }
    this.size = function () {
        return collection.length;
    }
}

// Login.jsx
// const queue = newQueue();
       
//     useEffect(()=>{
//         queue.enqueue("A");
//         console.log(queue.size());
//         console.log(queue.dequeue());
//     },[]);