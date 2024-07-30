# KidVentures - Travel with your kids

## 1. Initialize Project
- [x] Initialize git repo
- [x] Add server (Softuni Practice Server)
- [x] Add base vite react project as client
- [x] CleanUp client
- [x] Add project components

## 2. React Router
- [x] Install react-router-dom
- [x] Setup react-router-dom
- [x] Add routes in App.jsx
- [x] Add links in navigation
  
## 3. Create Service Layer
- [x] Service layer architecture - feature based / function based
- [x] Abstract requester - single endpoint fetcher
- [x] Add trips api
- [x] Preseed practice server - after creating trips in postman, copy the objects and paste them in a new file in server/data

## 4. Page Implementations
- [x] Trip list
- [x] Details 
    - Details link
    - Details route
    - API function - getOne
- [] Home - Latest Trips

## 5. Comments (Advanced)
- [x] Create service for nested resource comments
- [x] Post comment to server
- [x] Read comments from server
- [x] Add comments in the component
- [x] Clear form

## 6. API Hooks
- [x] Form Hook
- [x] TripAPI Hooks
- [ ] Comment Hooks

## 7. Authentication
- [x] Auth API
    - [x] Login
    - [x] Register
    - [x] Logout
- [x] Auth API hook
- [x] Auth state & context - state of authenticated user
- [x] Token management
- [x] Login
- [x] Register
- [x] Logout

## 8. UI Implementation
- [x] Dynamic navigation
- [x] Create a trip
    - [x] API function
    - [x] Hook
- [ ] Latest trips

## 9. Refactoring
- [x] Extract auth state from App component
- [x] Persist auth state
- [x] Comments - refactored

## Notes
1. Latest Trips
    1. URL `http://localhost:3030/data/trips?sortBy=_createdOn%20desc&pageSize=3`
    2. Use URLSearchParams
2. seedData - line 1341 in server.js