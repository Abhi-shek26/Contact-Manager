# 📇 Contact Manager – MERN Stack Application

A simple **Contact Management Web Application** built using the **MERN stack** as part of a technical interview assignment.  
The application allows users to submit contact details, view saved contacts in real time, and delete them — all without page reloads.

The focus of this project is **core MERN functionality, clean architecture, and deployment readiness**, rather than heavy UI styling.

---

## 🚀 Live Demo

👉 **Deployed URL:https://contact-manager-0x2x.onrender.com**  

---

## 🛠 Tech Stack

**Frontend**
- React.js (Vite)
- useState for state management
- Axios for API calls
- Plain CSS for styling

**Backend**
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose ODM

**Deployment**
- Render (single service for frontend + backend)

---

## ✨ Features

- Add a new contact (name, email, phone, message)
- Client-side form validation
- View all saved contacts instantly (no page reload)
- Delete a contact
- Success feedback on form submission
- Console logs for add/delete actions (debug-friendly)
- Responsive and clean UI
- Data persisted in MongoDB

---

## 📁 Project Structure

```
contact-manager/
│
├── backend/
│ ├── config/ # MongoDB connection
│ ├── controllers/ # API logic
│ ├── models/ # Mongoose schema
│ ├── routes/ # API routes
│ └── server.js # Express entry point
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ ├── index.html
│ └── package.json
│
├── .gitignore
├── package.json # Root scripts for deployment
└── README.md

```


---

## 🔌 API Endpoints

| Method | Endpoint            | Description              |
|------|---------------------|--------------------------|
| POST | `/api/contacts`     | Create a new contact     |
| GET  | `/api/contacts`     | Fetch all contacts       |
| DELETE | `/api/contacts/:id` | Delete a contact         |

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:
```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```
> ⚠️ `.env` is ignored via `.gitignore` and should never be committed.

---

## 🧪 Running Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/Contact-Manager.git
cd Contact-Manager
```
### 2️⃣ Install backend dependencies
```bash
cd backend
npm install
```
### 3️⃣ Install frontend dependencies
```bash
cd ../frontend
npm install
```
### 4️⃣ Build frontend
```bash
npm run build
```
### 5️⃣ Start the server
```bash
cd ..
npm start
```

### Open in browser:
```
http://localhost:5000
```
## 🧠 Notes

1. Frontend and backend are deployed together as a single service.
2. Express serves the built React files.
3. MongoDB Atlas is used for cloud database storage.
4. The application follows a functionality-first approach as per task instructions.





