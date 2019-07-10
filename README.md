# porfolio
##liri-node-app
Welcome to my LIRI Application if you like it please check out my Github Profile to see my repositories.

LIRI is a Language Interpretation and Recognition Interface. LIRI is designed to be a command line node app that takes in parameters and displays data to the console.

LIRI will search:

Spotify for songs

Bands in Town for concerts

OMDB for movies.

Using Axios to make the calls to Bands In Town API & OMDB API

Using the node-spotify-api npm package to make the spotify API calls

Utilizing Inquirer npm to take in user input for addional searches & Allow more then one command to be ran each execution of the application.

This application Allows the user to search 3 different API's determined by the inputted command line arguements.
The liri command line node application allows you to search three separate APIs quickly in one application to display Data, using keywords for the commands to determine which API to search then the app will display the results of that API's response to the console after api request is done.

LIRI will then prompt the user to see if they would like to search again:

If they select NO,
 the liri.js process will terminate.

If they select YES,
 liri will then display a list of the three possible commands to search from.
 Once a command is selected the user can type what they would like that command to search.
If any of the searches encounters an error the error data will display and prompt the user to select Yes or no to if they would like to ask another question,

default: No, closes the app. Answering Yes allows you to search again until you select no to the Search again prompt.

How the liri.js App works
node liri spotify-this-song < song name > Spotify API Track Search Endpoint

node liri movie-this < movie name > OMDB API

node liri concert-this < artist or band > Bands In Town API

node liri do-what-it-says (will read from the random.txt file.)

The LIRI application utilizes and requires these npm packages:

Moment

DotEnv

Axios

inquirer

node-spotify-api


