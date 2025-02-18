**# 📚 Real-Time Chat Application (Node.js + React.js + Socket.io)

## 📌 **Project Overview**
This project is a real-time chat application built with:
- **Backend:** Node.js with Express and Socket.io
- **Frontend:** React.js
- **Authentication:** JWT (JSON Web Tokens)
- **Storage:** In-memory arrays (No database)

## 🛠️ **Tech Stack**
| Layer         | Technology               | Purpose                           |
|---------------|-------------------------|-----------------------------------|
| Backend       | Node.js + Express       | Server and API endpoints         |
| Real-Time     | Socket.io               | Real-time messaging (WebSockets) |
| Frontend      | React.js + React Router | User Interface (UI)              |
| Authentication| JWT                    | Secure user login                |
| Storage       | In-Memory Arrays       | Store users and messages         |

## 📂 **Project Structure**
```
project-root/
├── server/                 # Backend (Node.js)
│   └── server.js           # Main server file
└── client/                 # Frontend (React.js)
    └── src/
        ├── pages/          # Register, Login, Chat pages
        ├── api/api/js      # API calls to backend
        └── socket.js       # Socket.io client
```

## 🚀 **Setup and Run the Project**
### 1️⃣ **Backend Setup:**
```bash
cd server
npm install
node server.js
```
- **API:** `http://localhost:5000`
- ✅ Endpoints:
  - `POST /register` - Register a new user
  - `POST /login` - Login and receive JWT token

### 2️⃣ **Frontend Setup:**
```bash
cd client
npm install
npm start
```
- **App URL:** `http://localhost:3000`
- ✅ Pages:
  - `/register` - Register user
  - `/login` - Login with phone number
  - `/chat` - Real-time chat room

## 🧪 **How to Test the Application:**
1. Open two browser windows.
2. **Register** users in one tab.
3. **Login** both users and join the chat.
4. **Send messages** and see real-time updates.

## 🛡️ **JWT Authentication:**
- Users login with their phone number and receive a **JWT token**.
- The token is stored in `localStorage`.
- All protected routes require the token.

## 📹 **Demo Video:** [Insert Video Link]
## 📂 **Jira Card:** [Insert Jira Link]

## 📝 **Contributors:**
- 🚀 [Your Name]
- 🎨 [Other Team Members]

✅ **Project Completed:** 🎉 Ready for Submission! 🚀

