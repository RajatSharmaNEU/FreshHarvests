Copy code
# E-commerce Application(Fresh Harvest)

## Online Fresh Grocery Item Store

### Functionality Supported
- **Login and Sign up for new user**: Users can create an account or log in to their existing account to access the store.
- **Email verification using OTP**: An OTP (One-Time Password) is sent to the user's email for verification during the sign-up process.
- **Shop fresh items and payment through PayPal gateway**: Customers can browse and purchase fresh grocery items, with payments processed through the PayPal gateway.
- **Upload grocery items by admin**: Admins have the ability to upload and manage the grocery items available in the store.
- **User types supported**: 
  - **Admin**: Manages the store's inventory and oversees the operation.
  - **Customer**: Regular users who browse and purchase items.

### Cloud Technology
- **Heroku**: Deployed on Heroku for both frontend and backend services.
- **MongoDB Cloud Atlas**: Used as the database for storing user information, product details, and order history.

### Tech Stack
- **Frontend**: 
  - **React**: JavaScript library for building user interfaces.
  - **Material UI**: A popular React UI framework for building responsive and aesthetically pleasing user interfaces.
  - **Bootstrap**: CSS framework for creating responsive web designs.

- **Backend**:
  - **Node.js**: JavaScript runtime used for building the server-side application.
  - **Express.js**: Web application framework for Node.js, used to build the API and handle server requests.

- **Database**:
  - **MongoDB**: NoSQL database used to store user data, product details, and orders.

### How to Run

1. **Start MongoDB**:
   - Ensure MongoDB is running on your machine. If you have installed MongoDB through Homebrew, you can restart the service using:
     ```bash
     brew services restart mongodb-community
     ```

2. **Frontend Setup**:
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install the required dependencies:
     ```bash
     npm install
     ```
   - Start the frontend server:
     ```bash
     npm start
     ```

3. **Backend Setup**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install the required dependencies:
     ```bash
     npm install
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

### Deployment
- The application is deployed on **Heroku**, with both the frontend and backend hosted on the platform. MongoDB Cloud Atlas is used for managing the database, ensuring scalability and reliability.
