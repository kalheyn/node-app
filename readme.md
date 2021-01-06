# NODE-APP

The Node-App is a mock-video store web application built with Node, Express, and MongoDB. It is based on [The Complete Node.js Course](https://codewithmosh.com/p/the-complete-node-js-course) by [Mosh Hamedani](https://github.com/mosh-hamedani). The topics covered in the course and demonstrated in the Node application are listed below.

## Getting Started

You can follow these instructions to run this web application on your own machine.

### Download Files

Get started by downloading the files from this git repository. Here is one way of doing so:

1. Code > Download ZIP
2. Save ZIP and extract files

### Install Node.js

You need to have Node.js installed on your machine in order to run this application. You can check for the version to see whether it's installed or just download it from [Nodejs.org](https://nodejs.org/en/download/).

```
$ node -v
> v10.15.3
```

```
brew install node
```

If you don't already have [Homebrew](https://brew.sh/) installed, make sure to do that first.

### Download Node Packages

To download all of the packages used in the application, you'll need Node Package Manager (NPM). Luckily, this is automatically installed with Node.js. You might still want to make sure that it's installed by checking the NPM version.

```
npm -v
> 6.14.10
```

Once it's installed, NPM will automatically download the packages listed in package.json. Just navigate to the project folder and run the install.

```
npm install
```

### Start the App

You now have everything you need to run the application. You can run the application manually with the Node command or use Nodemon to monitor for any changes and automatically restart the server.

```
node index.js
```

```
nodemon index.js
```

You can now explore the application in your browser by navigating to whatever port the application is using (probably [http://localhost:3000/](http://localhost:3000/)).

Since there isn't much of a front-end, yu'll probably want to use a service like [Postman](https://www.postman.com/) to test the HTTP GET, POST, PUT, and DELETE requests.

## Key Topics

### Getting Started

### Node Module System

### Node Package Manager (NPM)

### Building RESTful API's Using Express

### Express - Advanced Topics

### Asynchronous JavaScript

### CRUD Operations Using Mongoose

### Mongo - Data Validation

### Mongoose - Modeling Relationships between Connected Data

### Authentication and Authorization

### Handling and Logging Errors

### Unit Testing

### Integration Testing

### Test-Driven Development

### Deployment
