## Setup

See inside 'thingful-client' and 'thingful-server' folders for front-end and back-end setup instructions.

## Assignment

For this assignment, you'll continue working on the product review app from the previous assignments.  

- You should create a POST /login endpoint that responds with a JWT.
- You should update your login form to call the login endpoint and store the JWT from the response in local storage. 
- Ensure that all the API requests use this token instead of the basic token.
- You'll need to change your middleware for protected endpoints to verify the JWT instead of verifying the base64 encoded basic auth header.
