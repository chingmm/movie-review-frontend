#General Info
Let's users search for movies to watch, and also review movies that they have watched

#Technologies Used
- Nodejs
- React
- Bootstrap
- Mongoose
- Express
- CSS
- Axios

#Description
The team used full CRUD app using the MERN stack to create an app that allows users to search for films and create, edit or delete film reviews.
The project utilizes a pull from a third party API + Authorization with signup, login and logout functionality.

#External API
The external API pulls from themoviedb.org, and is used to build out a search functionality for the end use to look up movies containing their search words (ex: Frozen). Details such as the movie title, release date, movie description, and popularity are pulled to give the user some insights about the movie and help them decide what movie to watch next.

#Authorization
For authorization, auth folder was created with index.js file which contains JWT authentication which allows the server to generate a token to certify the user identity and send it to the client. Then the client sends the token back to the server for every subsequent request, so the server knows the request comes from a specific identity.
For controllers folder, we created 2 files:
1)   Movies. Js: with index, create, update, delete routes.
2)   User.js: with 2 routers for signup and login using username and password.
Db folder has 1 file: db.js which connects to mongoose to signal successful connection to mongoose.
For models, we have 2 of them:
1)   Movies.js which contains movie schema
2)   User.js which contains user schema
Server.js folder: contains the middle, router and listeners.