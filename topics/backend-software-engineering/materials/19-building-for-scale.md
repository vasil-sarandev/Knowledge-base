[Back to front page](topics/backend-software-engineering/backend-software-engineering.md)

# Building For Scale

Speaking in general terms, scalability is the ability of a system to handle a growing amount of work by adding resources to it. A software that was conceived with a scalable architecture in mind, is a system that will support higher workloads without any fundamental changes to it, but don’t be fooled, this isn’t magic. You’ll only get so far with smart thinking without adding more sources to it. When you think about the infrastructure of a scalable system, you have two main ways of building it: using on-premises resources or leveraging all the tools a cloud provider can give you.

The main difference between on-premises and cloud resources will be **flexibility**, on cloud providers you don’t really need to plan ahead, you can upgrade your infrastructure with a couple of clicks, while with on-premises resources you will need a certain level of planning.

## Linked Materials

- [Mitigation Strategies](mitigation-strategies.md)
- [Migration Strategies](migration-strategies.md)

## Horizontal and Vertical Scaling

Horizontal scaling (scaling out/in) involves adding or removing instances of resources, such as servers or containers, to handle increased or decreased loads. It distributes the workload across multiple instances to improve performance and redundancy. This method enhances the system’s capacity by expanding the number of nodes in a distributed system.

Vertical scaling (scaling up/down) involves increasing or decreasing the resources (CPU, memory, storage) of a single instance or server to handle more load or reduce capacity. This method improves performance by upgrading the existing hardware or virtual machine but has limits based on the maximum capacity of the individual resource.

## Observability

Observability refers to the ability to understand and monitor the internal state of a system based on its external outputs, such as metrics, logs, and traces. It encompasses collecting, analyzing, and visualizing data to gain insights into system performance, detect anomalies, and troubleshoot issues. Effective observability involves integrating these data sources to provide a comprehensive view of system behavior, enabling proactive management and rapid response to problems. It helps in understanding complex systems, improving reliability, and optimizing performance by making it easier to identify and address issues before they impact users.

- [DataDog Docs](https://docs.datadoghq.com/)
- [AWS CloudWatch Docs](https://aws.amazon.com/cloudwatch/getting-started/)
- [Sentry Docs](https://docs.sentry.io/)

## Instrumentation, Monitoring, and Telemetry

Instrumentation, monitoring, and telemetry are critical components for ensuring system reliability and performance. 

- _Instrumentation_ refers to embedding code or tools within applications to capture key metrics, logs, and traces. 
- _Monitoring_ involves observing these metrics in real time to detect anomalies, failures, or performance issues, often using dashboards and alerting systems. 
- _Telemetry_ is the automated collection and transmission of this data from distributed systems, enabling visibility into system behavior. 

Together, these practices provide insights into the health, usage, and performance of systems, aiding in proactive issue resolution and optimizing overall system efficiency.

### Monitoring

Monitoring involves continuously observing and tracking the performance, availability, and health of systems, applications, and infrastructure. It typically includes collecting and analyzing metrics, logs, and events to ensure systems are operating within desired parameters. 

Monitoring helps detect anomalies, identify potential issues before they escalate, and provides insights into system behavior. It often involves tools and platforms that offer dashboards, alerts, and reporting features to facilitate real-time visibility and proactive management. Effective monitoring is crucial for maintaining system reliability, performance, and for supporting incident response and troubleshooting.

A few popular tools are **Grafana**, **Sentry**, **Mixpanel**, **NewRelic**.

### Telemetry

Telemetry involves the automated collection, transmission, and analysis of data from remote or distributed systems to monitor their performance and health. It provides real-time insights into system operations, helping to identify and diagnose issues, optimize performance, and ensure reliability. 

Telemetry systems collect metrics such as resource usage, error rates, and system events, which are then analyzed to detect anomalies, track trends, and inform decision-making. 

This data-driven approach is crucial for maintaining and improving the performance and stability of software applications, networks, and hardware systems.

[What is telemetry and how does it work?](https://www.techtarget.com/whatis/definition/telemetry)
## Available Resources

- [Scalable Architecture: A Definition and How-To Guide](https://www.sentinelone.com/blog/scalable-architecture/)