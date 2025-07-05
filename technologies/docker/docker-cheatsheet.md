# Docker Cheatsheet

#cheatsheet

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications

---
## The Docker Platform

Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security lets you run many containers simultaneously on a given host. 

Containers are lightweight and contain everything needed to run the application, so you don't need to rely on what's installed on the host. You can share containers while you work, and be sure that everyone you share with gets the same container that works in the same way.

Docker provides tooling and a platform to manage the lifecycle of your containers:

- Develop your application and its supporting components using containers.
- The container becomes the unit for distributing and testing your application.
- When you're ready, deploy your application into your production environment, as a container or an orchestrated service. This works the same whether your production environment is a local data center, a cloud provider, or a hybrid of the two.

---
## Docker Images

A *Docker Image* is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container.

An an example - for a *PostgreSQL* image, that image will package the database binaries, config files, and other dependencies. For a Python web app, it'll include the Python runtime, your app code, and all of its dependencies.

There are two important principles of images:

1. Images are immutable. Once an image is created, it can't be modified. You can only make a new image or add changes on top of it.
2. Container images are composed of layers. Each layer represents a set of file system changes that add, remove, or modify files.

These two principles let you to extend or add to existing images. For example, if you are building a Python app, you can start from the Python Image and add additional layers to install your app's dependencies and add your code. This lets you focus on your app, rather than Python itself.

### Finding Images

[Docker Hub](https://hub.docker.com/) is the default global marketplace for storing and distributing images. It has over 100,000 images created by developers that you can run locally. You can search for Docker Hub images and run them directly from Docker Desktop.

For example, [Redis](https://hub.docker.com/_/redis) and [Memcached](https://hub.docker.com/_/memcached) are a few popular ready-to-go Docker Official Images. You can download these images and have these services up and running in a matter of seconds. There are also base images, like the [Node.js](https://hub.docker.com/_/node) Docker image, that you can use as a starting point and add your own files and configurations.

### Basic Image Commands

```javascript
docker image ls // List images
docker image pull // Download an image from a registry
docker image push // Upload an image to a registry
docker image rm // Remove one or more images
```

---
## Docker Containers

A *Docker Container* is a runtime instance of a *Docker Image*.

Simply put, containers are isolated processes for each of your app's components. Each component - the frontend app, the API engine, and the database - runs in its own isolated environment, completely isolated from everything else on your machine.

Here's what makes them awesome. Containers are:

- **Self-contained** - Each container has everything it needs to function with no reliance on any pre-installed dependencies on the host machine.
- **Isolated** - Since containers are run in isolation, they have minimal influence on the host and other containers, increasing the security of your applications.
- **Independent** - Each container is independently managed. Deleting one container won't affect any others.
- **Portable** - Containers can run anywhere! The container that runs on your development machine will work the same way in a data center or anywhere in the cloud!
### Containers versus Virtual Machines(VMs)

Without getting too deep, a VM is an entire operating system with its own kernel, hardware drivers, programs, and applications. Spinning up a VM only to isolate a single application is a lot of overhead.

A container is simply an isolated process with all of the files it needs to run. If you run multiple containers, they all share the same kernel, allowing you to run more applications on less infrastructure.
### Docker Containers versus Docker Images

You can think of *Docker Images* as the read-only blueprint and of *Docker Containers* as their runtime instances.

Pretty much like classes and objects(instances) of these classes.

### Basic Container Commands

```javascript
docker container ls // List running containers (to list all, use the -a flag)
docker container run // Create and run a new container from an image
docker container start // Start one or more stopped containers
docker container stop // Stop one or more running containers
docker container exec // Execute a command in a running container
docker exec -it container bash // Opens an interactive terminal within the container
```

---
## Docker Volumes

Volumes are persistent data stores for containers, created and managed by Docker. You can create a volume explicitly using the `docker volume create` command, or Docker can create a volume during container or service creation.

When you create a volume, it's stored within a directory on the Docker host. When you mount the volume into a container, this directory is what's mounted into the container. This is similar to the way that bind mounts work, except that volumes are managed by Docker and are isolated from the core functionality of the host machine.

---
## Docker Compose

Let's imagine you are developing a complex app - web server, databases, message queues, caches, and a variety of other services.

You can use multiple `docker run` commands to start multiple containers, but it will bring a lot of overhead and makes it hard to clean up.

With Docker Compose, you can define all of your containers and their configurations in a single YAML file. If you include this file in your code repository, anyone that clones your repository can get up and running with a single command.

### Docker Compose In-depth

Honestly, there's too much going on here to include it in the cheatsheet. Please refer to the following resources: 

- [Docker Compose Documentation - Docker.com](https://docs.docker.com/compose/)
- [Docker Compose QuickStart - Docker.com](https://docs.docker.com/compose/gettingstarted/)

### Basic Docker Compose Commands

```javascript
docker compose up -d --build // pulls images, runs all the containers
docker compose down // removes everything
docker compose down --volumes // removes everything, including volumes
```

---

## DockerFile

Docker can build images automatically by reading the instructions from a Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. 

### Fundamentals Commands

| Instruction                                                              | Description                                            |
| ------------------------------------------------------------------------ | ------------------------------------------------------ |
| [`ADD`](https://docs.docker.com/reference/dockerfile/#add)               | Add local or remote files and directories.             |
| [`ARG`](https://docs.docker.com/reference/dockerfile/#arg)               | Use build-time variables.                              |
| [`CMD`](https://docs.docker.com/reference/dockerfile/#cmd)               | Specify default commands.                              |
| [`COPY`](https://docs.docker.com/reference/dockerfile/#copy)             | Copy files and directories.                            |
| [`ENTRYPOINT`](https://docs.docker.com/reference/dockerfile/#entrypoint) | Specify default executable.                            |
| [`ENV`](https://docs.docker.com/reference/dockerfile/#env)               | Set environment variables.                             |
| [`EXPOSE`](https://docs.docker.com/reference/dockerfile/#expose)         | Describe which ports your application is listening on. |
| [`VOLUME`](https://docs.docker.com/reference/dockerfile/#volume)         | Create volume mounts.                                  |
| [`WORKDIR`](https://docs.docker.com/reference/dockerfile/#workdir)       | Change working directory.                              |
### DockerFile In-depth

Honestly, there's too much going on there to summarize it in the cheatsheet. Please refer to the official reference - [Docker.com Reference - DockerFile](https://docs.docker.com/reference/dockerfile/)

---
## Docker Init

The `docker init` command is currently one of the easiest ways to bootstrap your Docker configuration files.

Docker Desktop provides the `docker init` CLI command. Run `docker init` in your project directory to be walked through the creation of the following files with sensible defaults for your project:

- `.dockerignore`
- `Dockerfile`
- `compose.yaml`
- `README.Docker.md`

After `docker init` has completed, you may need to modify the created files and tailor them to your project. 

---

## Docker Registries

Registries are used to store container images and provide us with a way to share them with team members.

An image registry is a centralized location for storing and sharing your container images. It can be either public or private.

While Docker Hub is a popular and the default option, there are many other available container registries available today, including *Amazon Elastic Container Registry (ECR)*, *Azure Container Registry (ACR)* and *Google Container Registry (GCR)*. You can even run your private registry on your local system or inside your organization. 

---