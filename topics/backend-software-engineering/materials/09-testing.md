[Back to front page](topics/backend-software-engineering/index.md)

# Testing

##### Available Resources

- [What is Software Testing?](https://www.guru99.com/software-testing-introduction-importance.html)
- [Testing Pyramid](https://www.browserstack.com/guide/testing-pyramid-for-test-automation)

## Introduction

Testing is a systematic process used to evaluate the functionality, performance, and quality of software or systems to ensure they meet specified requirements and standards.

It involves various methodologies and levels, including unit testing (testing individual components), integration testing (verifying interactions between components), system testing (assessing the entire system’s behavior), and acceptance testing (confirming it meets user needs).

Testing can be manual or automated and aims to identify defects, validate that features work as intended, and ensure the system performs reliably under different conditions.

Effective testing is critical for delivering high-quality software and mitigating risks before deployment.

## Integration Testing

Integration testing focuses on verifying the interactions between different components or modules of a software system to ensure they work together as expected.

It comes after unit testing and tests how modules communicate with each other, often using APIs, databases, or third-party services. The goal is to catch issues related to the integration points, such as data mismatches, protocol errors, or misconfigurations. Integration tests help ensure that independently developed components can function seamlessly as part of a larger system, making them crucial for identifying bugs that wouldn’t surface in isolated unit tests.

## Unit Testing

Unit testing is a software testing method where individual components or units of a program are tested in isolation to ensure they function correctly.

This approach focuses on verifying the smallest testable parts of an application, such as functions or methods, by executing them with predefined inputs and comparing the results to expected outcomes.

Unit tests are typically automated and written by developers during the coding phase to catch bugs early, facilitate code refactoring, and ensure that each unit of code performs as intended. By isolating and testing each component, unit testing helps improve code reliability and maintainability.

## Functional Testing

Functional testing is where software is tested to ensure functional requirements are met. Usually, it is a form of black box testing in which the tester has no understanding of the source code; testing is performed by providing input and comparing expected/actual output.

dIt contrasts with non-functional testing, which includes performance, load, scalability, and penetration testing.
