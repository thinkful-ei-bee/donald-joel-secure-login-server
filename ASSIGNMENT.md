## Setup

See inside 'thingful-client' and 'thingful-server' folders for front-end and back-end setup instructions.

## Assignment

- Implement a basic authentication middleware to use for protecting endpoints.
- The GET /api/things endpoint should remain public.
- The GET /api/things/:thing_id endpoint should be protected by basic auth.
- The GET /api/things/:thing_id/reviews endpoint should be protected by basic auth.
- The POST /api/reviews endpoint should be protected by basic auth and automatically assign a user_id.
- The thingful-client should store the base64 encoded credentials when the login form is submitted.
- The base64 encoded credentials should be sent in requests to protected endpoints.
- If a user attempts to view the login form when they're already logged in, they should be redirected to the thing list page.
- If a user tries to view reviews for a thing, they should be redirected to the login form page.
