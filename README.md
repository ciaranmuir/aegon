# Project Setup and Instructions

## Prerequisites

Before starting the project, ensure you have an up-to-date version of Node.js and npm installed on your system. You can check your versions by running:

```bash
node -v
npm -v
```

If you do not have Node.js installed, you can download it from the [official website](https://nodejs.org/).

## Backend Setup

To set up the backend, navigate to the `backend` directory and run the following commands:

#### 1. Navigate to the backend directory
```bash
cd backend
```

Note: If you are following on from the frontend setup, you can run the following command to navigate to the backend directory:
```bash
cd ../backend
```

#### 2. Install the dependencies
```bash
npm install
```

#### 3. To run the development server
```bash
npm run dev
```
This will start a development server on `http://localhost:3000/`.

#### 4. To build for production
```bash
npm run build
```

#### 5. To run the development server
```bash
npm start
```

This will start a development server on `http://localhost:3000/`.


## Frontend Setup

To set up the frontend, navigate to the `frontend` directory and run the following commands:

#### 1. Navigate to the frontend directory
```bash
cd frontend
```
#### 2. Install the dependencies
```bash
npm install
```
#### 3. To build for production
```bash
npm run build
```
This will create populate a `dist` directory in the `frontend` folder with the bundled js application.

#### 4. To run the development server
```bash
npm start
```

This will start a development server on `http://localhost:9000/` and open the application in your default browser.

