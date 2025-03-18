[Back to Architectural Patterns](08-architectural-patterns.md)
## Microkernel
A microkernel is an architectural pattern in operating system design that aims to minimize the amount of code running in kernel mode (i.e., privileged mode with direct access to hardware resources) and instead move as much functionality as possible into user mode.

This is done by providing a small, minimalistic core kernel that only handles basic tasks such as memory management, process scheduling, and inter-process communication (IPC), and leaving all other functionality to be implemented in user-mode processes.
### Available Resources
- [Overview of Microkernel Architecture - O'Reily](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch03.html)