# Docker

Docker enables you to package and run an application in a **container** — a lightweight, portable, and isolated environment. Containers ensure consistency across environments: local dev, CI/CD pipelines, cloud, or production.

---
## Resources

- **Deep Dives**
	- [Dockerfile Reference](https://docs.docker.com/reference/dockerfile/) – Build image instructions
	- [Docker Compose Reference](https://docs.docker.com/compose/) – Multi-container config
	- [Building Images](https://docs.docker.com/get-started/docker-concepts/building-images/)

- **Docs & References** 
	- [Docker Official Docs](https://docs.docker.com/)
	- [Awesome Docker GitHub List](https://github.com/veggiemonk/awesome-docker) – Curated tools, articles, tutorials

---
## Core Concepts

- **Docker Image**  
  A read-only blueprint for a container. Contains:
  - App code
  - System libraries and dependencies
  - Runtime instructions (from a `Dockerfile`)

- **Docker Container**  
  A running instance of an image. It's:
  - Ephemeral (you can create/destroy easily)
  - Isolated (network, filesystem, processes)
  - Portable (runs anywhere Docker is installed in the exact same way)

Typically, each component of your app (e.g., frontend, backend, DB) runs in its own container.

---
## Containers vs Virtual Machines (VMs)

Without getting too deep, a VM is an entire operating system with its own kernel, hardware drivers, programs, and applications. Spinning up a VM only to isolate a single application is a lot of overhead. A container is simply an isolated process with all of the files it needs to run. If you run multiple containers, they all share the same kernel, allowing you to run more applications on less infrastructure.

>  **Bottom line:** Containers are faster, lighter, and more scalable than VMs for most application-level use cases.

---


