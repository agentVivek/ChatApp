# ChatApp

A real-time chat application built with **React, Node.js, Express, MongoDB, and Socket.io**. The app features **JWT authentication, real-time messaging, user search functionality, and online user tracking**.

## 🚀 Features
- **User Authentication**: Sign up, login, and persist sessions using **JWT**.
- **Real-time Messaging**: Instant messaging powered by **Socket.io**.
- **Online Users Tracking**: View currently active users.
- **Search Functionality**: Find users and conversations easily.
- **Secure Communication**: Data is securely stored in **MongoDB**.
- **Responsive UI**: Optimized for both mobile and desktop.

## 🛠 Tech Stack
### **Frontend**
- React.js (with Context API for state management)
- Tailwind CSS

### **Backend**
- Node.js & Express.js
- MongoDB (Mongoose ORM)
- Socket.io (for real-time communication)
- JSON Web Token (JWT) for authentication

## 📦 Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ChatApp.git
   cd ChatApp
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the backend directory and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```

4. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

5. **Start the frontend**
   ```bash
   cd frontend
   npm start
   ```

6. **Open the app in the browser**
   ```
   http://localhost:5000
   ```

## 📌 Project Structure
```
ChatApp/
│── frontend/      # React app
│── backend/       # Express server
│── .env           # Environment variables
│── package.json   # Dependencies
│── README.md      # Project documentation
```

## 🛠 API Endpoints
| Method | Endpoint         | Description          |
|--------|----------------|----------------------|
| POST   | /api/auth/signup | Register a new user |
| POST   | /api/auth/login  | Authenticate user   |
| POST   | /api/auth/logout  | Logout user   |
| GET    | /api/messages/send/:id | Send a new message |
| POST   | /api/messages/:id | Fetch a new message |
| GET    | /api/users | Get users |

## 🎯 Future Enhancements
- **Group chats**
- **File sharing**

## 🤝 Contributing
Feel free to fork and contribute to this project. Open a pull request with your updates.

Made with ❤️ by [Vivek Kumar]

