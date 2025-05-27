# 🛡️ Authentication & Comment Permission Service

This is a backend service built with **Node.js**, **Express**, and **MongoDB** to handle:

- ✅ User Authentication
- ✅ Role-based Access Control (read, write, delete)
- ✅ Comment Management (based on permissions)
- ✅ JWT Token System (access + refresh tokens)
- ✅ Password encryption and mock password reset

---

## 📁 Project Structure

```
auth-comment-service/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── .env
├── index.js
```

---

## 🚀 Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/SachinWariyal/Authentication-and-Comment-Permission-Service
cd auth-comment-service
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set up `.env`
Create a `.env` file in the root with:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth-comment-service
JWT_SECRET=<your_generated_jwt_secret>
JWT_REFRESH_SECRET=<your_generated_refresh_secret>
```

Generate secrets using:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 4. Start MongoDB
```bash
mongod
```

### 5. Run the App
```bash
node index.js
```

Server runs at: `http://localhost:5000`

---

## 📬 API Endpoints

### 🧑‍💻 Auth Routes

| Method | Route                     | Description           |
|--------|--------------------------|-----------------------|
| POST   | /api/auth/signup         | Register user         |
| POST   | /api/auth/login          | Login and get tokens  |
| POST   | /api/auth/refresh        | Get new access token  |
| POST   | /api/auth/logout         | Invalidate tokens     |
| POST   | /api/auth/forgot-password| Mock reset token      |

### 🛡️ Permission Route

| Method | Route             | Description          |
|--------|------------------|----------------------|
| POST   | /api/permissions | Set user permissions |

```json
{
  "userId": "mongo_user_id",
  "permissions": ["read", "write", "delete"]
}
```

### 💬 Comment Routes (Requires Access Token)

| Method | Route              | Description              |
|--------|-------------------|--------------------------|
| GET    | /api/comments      | Get all comments (read)  |
| POST   | /api/comments      | Add comment (write)      |
| DELETE | /api/comments/:id  | Delete comment (delete)  |

Header:
```
Authorization: Bearer <accessToken>
```

---

## 🧪 Testing Flow

1. Sign up a new user
2. Log in and get `accessToken`, `refreshToken`
3. Use `/api/permissions` to assign permissions
4. Test `/api/comments` endpoints with your token

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcrypt
- dotenv

---

## 👨‍💻 Author

**Sachin Wariyal**

If you find this helpful, consider ⭐ starring the repo!