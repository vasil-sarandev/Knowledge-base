[Back to Computer Science frontpage](topics/computer-science/computer-science.md)

# Processes and Threads

Processes and threads are the basic building blocks of a computer program. They are the smallest units of execution in a program. 

A Process is an instance of a program that is being executed and a Thread is a sequence of instructions within a process that can be executed independently of other code.

## Process Forking

Process forking is a way to create a new process from an existing process. The new process is a copy of the existing process. The new process is called a child process and the existing process is called a parent process.

[Fork System Call in Operating System](https://www.geeksforgeeks.org/fork-system-call-in-operating-system/)

## Memory Management

Memory management is the process of allocating and deallocating memory. It is a very important part of any programming language.

https://en.wikipedia.org/wiki/Memory_management

### Garbage Collection

Garbage collection is a strategy for automatically detecting memory allocated to objects that are no longer usable in a program, and returning that allocated memory to a pool of free memory locations. 

This method is in contrast to "manual" memory management where a programmer explicitly codes memory requests and memory releases in the program. While automatic garbage collection has the advantages of reducing programmer workload and preventing certain kinds of memory allocation bugs, garbage collection does require memory resources of its own, and can compete with the application program for processor time.

### Reference Counting

Reference counting is a strategy for detecting that memory is no longer usable by a program by maintaining a counter for how many independent pointers point to the memory. 

Whenever a new pointer points to a piece of memory, the programmer is supposed to increase the counter. When the pointer changes where it points, or when the pointer is no longer pointing to any area or has itself been freed, the counter should decrease. When the counter drops to zero, the memory should be considered unused and freed.

### Memory Pools

A memory pool is a technique of automatically deallocating memory based on the state of the application, such as the lifecycle of a request or transaction. 

The idea is that many applications execute large chunks of code which may generate memory allocations, but that there is a point in execution where all of those chunks are known to be no longer valid. 

For example, in a web service, after each request the web service no longer needs any of the memory allocated during the execution of the request. Therefore, rather than keeping track of whether or not memory is currently being referenced, the memory is allocated according to the request or lifecycle stage with which it is associated. When that request or stage has passed, all associated memory is deallocated simultaneously.

## Lock / Mutex / Semaphore

A **lock** allows only one thread to enter the part that's locked and the lock is not shared with any other processes.

A **mutex** is the same as a lock but it can be system wide (shared by multiple processes).

A **semaphore** does the same as a mutex but allows x number of threads to enter, this can be used for example to limit the number of cpu, io or ram intensive tasks running at the same time.

[What is the difference between lock, mutex and semaphore?](https://stackoverflow.com/questions/2332765/what-is-the-difference-between-lock-mutex-and-semaphore)

## Concurrency and Parallelism

### Concurrency

**Concurrency** is about managing multiple tasks at the same time (interleaving), but not necessarily executing them simultaneously. 

**Concurrency** is ideal for I/O-bound tasks where the program spends time waiting for external events (like reading a file or fetching data from the internet).

### Parallelism

**Parallelism** is about executing multiple tasks at the exact same time. **Parallelism** is beneficial for CPU-bound tasks that require heavy computations.

## CPU Scheduling

CPU Scheduling is the process of selecting a process from the ready queue and allocating the CPU to it. The selection of a process is based on a particular scheduling algorithm. The scheduling algorithm is chosen depending on the type of system and the requirements of the processes.

Here is the list of some of the most commonly used scheduling algorithms:

- **Round Robin (RR):** The process is allocated the CPU for a fixed time slice. The time slice is usually 10 milliseconds. It is a preemptive algorithm.
- **First Come First Serve (FCFS):** The process that arrives first is allocated the CPU first. It is a non-preemptive algorithm.
- **Shortest Job First (SJF):** The process with the smallest execution time is allocated the CPU first. It is a non-preemptive algorithm.
- **Shortest Remaining Time First (SRTF):** The process with the smallest remaining execution time is allocated the CPU first. It is a preemptive algorithm.
- **Priority Scheduling:** The process with the highest priority is allocated the CPU first. It is a preemptive algorithm.
- **Multi-level Queue Scheduling:** The processes are divided into different queues based on their priority. The process with the highest priority is allocated the CPU first. It is a preemptive algorithm.
- **Multi-level Feedback Queue Scheduling:** The processes are divided into different queues based on their priority. The process with the highest priority is allocated the CPU first. If a process is preempted, it is moved to the next queue. It is a preemptive algorithm.
- **Highest Response Ratio Next(HRRN):** CPU is allotted to the next process which has the highest response ratio and not to the process having less burst time. It is a Non-Preemptive algorithm.
- **Lottery Scheduling:** The process is allocated the CPU based on a lottery system. It is a preemptive algorithm.

## CPU Interrupts

CPU Interrupts are a way for the CPU to communicate with the rest of the computer. They are a way for the CPU to tell the rest of the computer that it needs to do something. 

dFor example, if the CPU is running a program and it needs to read from the keyboard, it will send an interrupt to the keyboard to tell it to send the data to the CPU. The CPU will then wait for the keyboard to send the data and then continue running the program.