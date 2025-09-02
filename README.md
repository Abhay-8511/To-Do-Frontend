# To-Do List Frontend (React)

This is the frontend for a modern To-Do List application, built with **React** and **Vite**. It provides a clean, responsive user interface to interact with a backend API, allowing users to manage their tasks seamlessly.

### ✨ Live Demo

**[https://to-do-front.netlify.app/]**

---
## Features

- **Add New Tasks**: Quickly add tasks through a simple input form.
- **Mark as Complete**: Click on a task to toggle its completion status.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Dynamic UI**: The interface updates instantly after every action.
- **Loading & Error States**: Provides clear feedback to the user during API requests or if something goes wrong.

---
## Technology Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern frontend build tool for fast development.
- **Axios**: A promise-based HTTP client for making API requests.
- **CSS**: For custom styling and a responsive layout.

---
## Getting Started

Follow these instructions to get a local copy up and running for development and testing.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or later) and npm
- A running instance of the corresponding [To-Do List Backend API](<your-backend-repo-link>).

### 1. Clone the Repository

```bash
git clone https://github.com/Abhay-8511/To-Do-Frontend.git
cd todo-frontend
```

### 2. Install Dependencies

Install the required npm packages.
```bash
npm install
```

### 3. Set Up Environment Variables

Create a file named `.env` in the root of the project and add the following variable. This tells the frontend where to find the backend API.

For local development, this should point to your local backend server.
```env
VITE_API_BASE_URL=http://localhost:3000
```
For a deployed version, this should be the public URL of your deployed backend (e.g., from Render).
```env
VITE_API_BASE_URL=[https://your-backend-api.onrender.com](https://your-backend-api.onrender.com)
```

### 4. Run the Development Server

Start the Vite development server.
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

---
## Deployment

This application is deployed on **Netlify**. The `VITE_API_BASE_URL` environment variable was set in the Netlify build settings to point to the live backend API hosted on Render.

---
## Challenges Faced

1.  **State Management**: A key challenge was managing the application's state in a synchronized way with the backend. Using React's `useState` hook was essential for holding the list of todos, the current input value, and loading/error states. The `useEffect` hook was used to fetch the initial data when the application first loads, ensuring the UI always starts with the most current data.

2.  **Handling Asynchronous Operations**: All interactions with the backend (fetching, adding, updating, deleting) are asynchronous. Implementing this required using `async/await` syntax for all API calls. To improve user experience, a `loading` state was added to provide feedback while waiting for a response, and an `error` state was used to gracefully display messages to the user if an API call failed.