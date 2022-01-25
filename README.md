# NoSQL: Social Network API

***

## Table of Contents
- [Description](#description)  
- [Installation](#installation)
- [Usage](#usage)
- [Links](#links)  
- [Visuals](#visuals)
- [License](#license)
- [Questions](#questions)

***

## Description
This is an API for a social network web application where users can share their thoughts, react to friend's thoughts, and create a friend list. 

**This uses [Express.js](https://www.npmjs.com/package/express) for routing, a MongoDB database, and the [Mongoose](https://www.npmjs.com/package/mongoose) ODM.** 

When the user enters the command to invoke the application then the server is started and the Mongoose models are synced to the MongoDB database. When the user opens API GET routes in Insomnia for users and thoughts then the data for each of these routes is displayed in a formatted JSON. When the user tests API POST, PUT, and DELETE routes in Insomnia then they are able to successfully create, update, and delete users and thoughts in the database. When the user tests API POST and DELETE routes in Insomnia then they are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

***

## Installation
To install, run this command: `npm i`.

***

## Usage
Start server by running the `nodemon` command.


***

## Links
[Link to GitHub](https://github.com/mattholtmoore/nosql-social-network-api-project)  

[Link to Walkthrough Capture](https://watch.screencastify.com/v/KjH9gkaYyqwcCVIkFFBs)

***

## Visuals
![nosql-social-network-api-project](assets/social-network-api.gif "nosql-social-network-api-project")

***

## License
![image](https://img.shields.io/badge/license-MIT-turquoise)

***

## Questions
If you have any questions at all, please email me at: mattholtmoore@gmail.com

You can also find me on GitHub at: https://www.github.com/mattholtmoore
