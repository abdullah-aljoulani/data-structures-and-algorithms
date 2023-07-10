##  stack-queue-pseudo

**Summary**
The code implements a PseudoQueue class  that mimics the functionality of a queue using two stacks. The PseudoQueue class provides enqueue and dequeue methods to insert and extract values in a first-in, first-out (FIFO) manner. It internally utilizes two Stack instances to manage the queue operations.

**Description**
The PseudoQueue class is implemented using the concept of two stacks. The enqueue operation adds a value to the queue, while the dequeue operation removes and returns the oldest value from the queue.

To enqueue a value, the code transfers all elements from stack1 to stack2, making stack1 empty. Then, the new value is pushed onto stack1. Finally, all the elements from stack2 are transferred back to stack1, ensuring that the new value is added to the bottom of the stack.

To dequeue a value, the code simply pops the top element from stack1, as it corresponds to the oldest value in the queue.

**whiteboard**

![Stack-queue-pseudo whiteboard ](./Untitled%20(10).jpg)