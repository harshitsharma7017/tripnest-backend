# 🧳 Tripnest Backend

Tripnest is a scalable event booking platform that empowers users to discover and participate in events while giving admins full control over managing events and user access.

## ⚙️ Tech Stack

- **Server**: Node.js with Express.js
- **Database**: MongoDB using Mongoose
- **Auth**: JSON Web Tokens (JWT) – Access & Refresh Tokens
- **Others**: dotenv, cors

## 🚀 Features

### 👤 User Management
- Create and update user profiles
- Admins can block or delete users
- Blocked users cannot book events

### 🔐 Authentication
- Login with access and refresh token flow
- Protected routes for authorized access

### 📅 Event Management
- Admins can create, update, delete events
- Users can view, book, or cancel events

### 🧾 Booking System
- Users can book or cancel events
- Bookings are tied to user profiles

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/harshitsharma7017/tripnest-backend.git
cd tripnest-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
ACCESS_SECRET=your_access_token_secret
REFRESH_SECRET=your_refresh_token_secret
```

### 4. Start the Server
```bash
npm start
```

## 🔗 API Endpoints

### 👤 Users
| Method | Endpoint              | Description              | Auth  |
|--------|-----------------------|--------------------------|-------|
| POST   | /users                | Create new user profile  | Public |
| PUT    | /users/:id            | Update user profile      | User   |
| GET    | /users                | List all users (admin)   | Admin  |
| PUT    | /users/block/:id      | Block a user             | Admin  |
| DELETE | /users/delete/:id     | Delete a user            | Admin  |

### 🔐 Authentication
| Method | Endpoint   | Description             |
|--------|------------|-------------------------|
| POST   | /login     | Login and receive tokens |
| POST   | /refresh   | Refresh access token     |

### 🎟 Events
| Method | Endpoint     | Description             | Auth  |
|--------|--------------|-------------------------|-------|
| POST   | /events      | Create new event        | Admin |
| GET    | /events      | View all events         | Public |
| PUT    | /events/:id  | Update event            | Admin |
| DELETE | /events/:id  | Delete event            | Admin |

### 📅 Bookings
| Method | Endpoint             | Description          | Auth |
|--------|----------------------|----------------------|------|
| POST   | /book/:eventId       | Book an event        | User |
| DELETE | /book/:eventId       | Cancel booking       | User |
| GET    | /bookings/:userId    | Get user's bookings  | User |

## 🤝 Contribution Guidelines

Pull requests are welcome! If you'd like to contribute, fork the repo and submit your changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

## 📄 License

This project is licensed under the MIT License.

---

Made with 💻 by Harshit Sharma
