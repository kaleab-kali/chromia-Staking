# Chromia Todo-list Application

## Author Information
- **Name:** Kaleab Girma  
- **Email:** kaleab.girma.official@gmail.com

---

## Project Description
This project is a **multi-user todo-list application** built using Chromia's Rell language and the FT4 library. The application allows users to:
- Create an account using an **EVM wallet** (e.g., MetaMask).
- Add, update, complete, and delete tasks.
- View tasks filtered by status (completed or pending) and sorted by due date.

---

## How It Works
The application consists of two main components:
1. **Backend**: Built using Chromia Rell and FT4 for user authentication and task management.
2. **Frontend**: Built using React and TypeScript, providing a user-friendly interface for managing tasks.

### Backend
- **User Management**: Users can register and log in using their Ethereum wallet.
- **Task Management**: Users can add, update, complete, and delete tasks. Tasks are stored on the blockchain and are only accessible to the user who created them.

### Frontend
- **User Authentication**: Users connect their Ethereum wallet to log in.
- **Task Management Interface**: Users can view, add, update, complete, and delete tasks.
- **Filters and Sorting**: Tasks can be filtered by status (completed or pending) and sorted by due date.

---

## Setup Instructions
Follow these steps to set up and run the project locally.

### Prerequisites
- **Node.js**: Install from [nodejs.org](https://nodejs.org/).
- **MetaMask**: Install the browser extension from [metamask.io](https://metamask.io/).
- **Rell Extension for VS Code**: Install from the VS Code marketplace.

### Step 1: Clone the Repository
```bash
git clone https://github.com/kaleab-kali/chromia-todo-list.git
cd chromia-todo-list