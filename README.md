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

#Components
The Navbar and Title were made as components because they are used throughout the pages and doesn't need a route. 
Signup, Login, Logout is in the Navbar - using onClick as the function to remove the jwt token, Logout appears and goes away based on user's status. 

#Pages
Login Page, Signup Page were made and routed to their proper links. Movie componenet starts with a search bar that is bringing in props from the movieSearch page. This page contains the code that will filter the third party API we used with matching titles. The results were displayed using Bootstrap and the props from MovieResults (returned API list were mapped out) and MovieDetails(provided the poster path and the if statement). 

React-Bootstrap was used to style the pages and App.css.