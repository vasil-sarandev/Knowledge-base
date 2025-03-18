[Back to Architectural Patterns](08-architectural-patterns.md)
## Circuit Breaker
The Circuit Breaker pattern can prevent an application from repeatedly trying to execute an operation that's likely to fail. Allowing it to continue without waiting for the fault to be fixed or wasting CPU cycles while it determines that the fault is long lasting. The Circuit Breaker pattern also enables an application to detect whether the fault has been resolved. If the problem appears to have been fixed, the application can try to invoke the operation.

A circuit breaker acts as a proxy for operations that might fail. The proxy should monitor the number of recent failures that have occurred, and use this information to decide whether to allow the operation to proceed, or return an exception immediately.
### Available Resources
- [Circuit Breaker Pattern-Azure](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker)