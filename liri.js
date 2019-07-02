// require .env file
require("dotenv").config();
// require request
var request = require("request");
// require moment 
var moment = require("moment");
// require file request
var fs = require("fs");
// link key page
var keys = require("./keys.js");
// initialize spotify
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify);
// omdb and band in town api's
var omdb = (keys.omdb);
var bandsInTown = (keys.bandsInTown);
// take user command and innput
var userInput = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

// app logic
function userCommand(userInput, userQuery) {
    // make a decision based on the command
    switch (userInput) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this":
            spotifyThisSong();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-this":
            doThis(userQuery);
            break;
        default:
            console.log("i dont undrestand");
            break;

    }

};
function concertThis() {
    console.log("\n - - - -SEARCHING FOR...." + userQuery + "s next show...");

    // user request as our url using our variable as the parameters
    request("https://rest.bandsintown.com/artists/" + userQuery + "event?app_id" + bandsInTown + response, body)
    {
        // if there is no error give us a 200 status code everything ok!
        if (error && response.statusCode === 200) {
            // capture data and use JSON to format
            var userBand = JSON.parse(body);
            // parse data and use for loop to access paths to data

            // for (var i = 0; i < userBand.length; i++) 

            if (userBand.length > 0) {
                for (i = 0; i < 1; i++) {
                    // console desired data using E6 syntax
                    console.log("\nBA DA BOP! thats for you ...\n\Artist: " + userBand[i].lineUP[0] + "\nVenue: " + userBand[i]
                        .venue.name + "\venue location: " + userBand[i].venue.latitude.serBand[i].venue.longitude + "\nVenue City:" +
                        userBand[i].venue.city.userBand[i].venue.country)

                    // moment.js to format the data mm/dd/yyyy
                    var concertDate = moment(userBand[i].dateTime).format("mm/dd/yyy  hh:00 A");
                    console.log("date and time: ${concertDate}\n\n- - - -");
                };

            } else {
                console.log('band or consert not found!');
            };
        };
    };


    function spotifyThisSong() {
        console.log("\n - - - - -\n\nSEARCHING FOR..." + userQuery);
        // if user query query not found pass value of ace of basse
        if (!userQuery) { userQuery + "the sign ace of base" };
        // spotify search query format
        spotify.search({ type: "track", query: userQuery, limit: 1 }, function (error, data) {
            if (error) {
                return console.log('error occured:' + error);
            }
            // collect selected data in an array
            var spotifyArr = data.tracks.items;
            for (var i = 0; i < spotifyArr.length; i++) {
                console.log("\nBA DA BOP! that's for you...\nArtist:" + data.tracks.items[i].album.artist[0].name + "\nSong:" +
                    data.tracks.items[i].name + "\nSpotify link:" + data.tracks.items[i].external_urls.spotify + "\nAlbum:" +
                    data.tracks.items[i].album.name + "\n\n - - - ")
            };
        });

    };
    function movieThis() {
        console.log("\n - - - - \n\nSEARCHING FOR..." + userQuery);
        if (userQuery) { userQuery + "mr nobody"; };
        // request omdb api
        request("http://www.omdbapi.com/?t=" + userQuery + "&apikey=trilogy" + function (error, response) {
            var userMovie = JSON.parse(body);
            // creating a path
            var ratingsArray = userMovie.ratings;
            if (ratingsArray.length > 2) {

            }
            if (!error && response.statusCode === 200) {
                console.log("\nBA DA BOP! that's for you...\nTitle:" + userMovie.Title + "\nCast:" + userMovie.Actors +
                    "\nRealesed:" + userMovie.year + "\nimdb rating:" + userMovie.imdbRating + "\nRotten Tomatoes Rating :" + userMovie.Ratings[1].Value
                    + "\nCountry:" + userMovie.country + "language" + userMovie.language + "\nPlot" + userMovie.Plot + "\n\n - - -")

            }
            else {
                console.log("movie able  to be found, error:" + error)
            };
        })
    };
    function doThis() {
        // utilize the built in readfile to access random.txt
        // for read file
        fs.readFile("random.txt", "utf8", function (error, data) {
            // If the code experiences any errors it will log the error to the console.
            if (error) {
                return console.log(error);
            }

            // We will then print the contents of data
            console.log(data);

            // Then split it by commas (to make it more readable)
            var dataArr = data.split(",");
            // take object from randdom.txt to pass as parameters
            userInput = dataArr[0];
            userQuery = dataArr[1];
            // call our function with our new parameters
            userCommand(userInput, userQuery);
        });
    };

};