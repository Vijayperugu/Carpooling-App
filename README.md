# Car Polling App

A full-stack MERN (MongoDB, Express, React, Node.js) application for real-time car pooling between users and captains (drivers). The app allows users to request rides, captains to accept and start rides, OTP verification for ride start, real-time ride status updates via Socket.IO, and payment completion.

---

## Features

- **User Registration & Login:** Users can sign up and log in to request rides.
- **Captain Registration & Login:** Captains (drivers) can sign up and log in to accept rides.
- **Ride Request:** Users can request a ride by entering pickup and destination locations.
- **Ride Matching:** Captains receive real-time ride requests and can accept them.
- **OTP Verification:** Before starting a ride, the captain must enter an OTP provided to the user.
- **Real-Time Updates:** Socket.IO is used for real-time communication between users and captains (ride status, ride start, ride completion).
- **Ride Status:** Rides have statuses: pending, accepted, riding, completed, cancelled.
- **Payment Flow:** Users can mark payment as done at the end of the ride.
- **Logout Functionality:** Both users and captains can log out securely.

---

## Folder Structure

```
CarPollingApp/
│
├── backend/
│   ├── controllers/
│   │   └── rideControllers.js
│   ├── models/
│   │   └── ride.js
│   ├── routes/
│   │   └── rideRoutes.js
│   └── server.js
│
├── frontend/
│   └── basic/
│       ├── src/
│       │   ├── components/
│       │   │   ├── Navbar.jsx
│       │   │   ├── ConfirmRidePopUp.jsx
│       │   │   └── RidePopUp.jsx
│       │   ├── pages/
│       │   │   ├── Home.jsx
│       │   │   ├── CaptainHome.jsx
│       │   │   ├── Riding.jsx
│       │   │   ├── CaptainRiding.jsx
│       │   │   └── ...
│       │   ├── App.jsx
│       │   └── ...
│       └── ...
└── README.md
```

---

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/CarPollingApp.git
cd CarPollingApp
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

- Create a `.env` file if needed for MongoDB connection string and other secrets.
- Example `.env`:
  ```
  MONGO_URI=mongodb://localhost:27017/carpolling
  PORT=4000
  JWT_SECRET="vijay"
  ```

- Start the backend server:
  ```bash
  npm start
  ```
  The backend will run on `http://localhost:4000`.

### 3. Setup the Frontend

```bash
cd ../frontend/basic
npm install
npm start
```
- The frontend will run on `http://localhost:3000`.

---

## API Endpoints (Backend)

- `POST /api/user/signup` - User registration
- `POST /api/user/login` - User login
- `POST /api/captain/signup` - Captain registration
- `POST /api/captain/login` - Captain login
- `POST /api/rides` - Create a new ride
- `PUT /api/rides/:id` - Update ride (accept by captain)
- `POST /api/rides/start-ride` - Start ride with OTP verification
- `POST /api/rides/complete-ride` - Mark ride as completed

---

## Real-Time Events (Socket.IO)

- `joinRoom` - Join a room for user or captain by ID
- `newRide` - Sent to captain when a new ride is requested
- `rideStarted` - Sent to both user and captain when ride starts after OTP verification
---

## What Has Been Implemented

- **User and Captain Authentication:** Secure login and registration for both roles.
- **Ride Creation and Matching:** Users can request rides; captains receive and accept them.
- **OTP Verification:** Secure ride start with OTP.
- **Real-Time Communication:** All ride status changes are pushed instantly to both user and captain using Socket.IO.
- **Ride Status Management:** Status transitions: pending → accepted → riding → completed.
- **Payment Flow:** User can mark payment as done at the end of the ride.
- **Logout:** Proper logout for both user and captain.
- **Error Handling:** Basic error handling for missing ride data and navigation.

---

## How the Flow Works

1. **User logs in and requests a ride.**
2. **Captain logs in and receives ride requests in real time.**
3. **Captain accepts a ride; user is notified.**
4. **Captain enters OTP to start the ride; both are navigated to their respective "riding" screens.**
5. **After ride, captain marks ride as complete; both are notified and status is updated.**
6. **User can mark payment as done.**
7. **Both can log out at any time.**

---

## Notes

- Make sure MongoDB is running locally or update the connection string in `.env`.
- The frontend and backend must run simultaneously for full functionality.
- For production, update CORS and environment variables as needed.
