Live coding
Create a /register (POST api)

 

Create a Users Schema having below fields

name (string)

email (string, unique)

password (string)

All data will be provided in request body.

 

Make sure, you hash the password before save to database.

 

Also create a route level middlewares that checks, 
if name is "admin" return error response. (unauthorize and 401 status code)
else call next() and save user in database.
