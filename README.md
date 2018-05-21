# Monarch

## About the App

#### "Monarch" is a social platform drawing inspiration from Reddit and other similar message boards.  It utilizes numerous associated tables within an SQL database to achieve parent-child data relationships.  Users can submit posts to the forum, view current posts by category or author, as well as vote and comment on other users' posts.  Posts can be "liked" or "disliked" by other users, forming the basis of the monarch ranking system.

## Becoming a Monarch

#### Based off of total post submissions and ranking, a user can become the "monarch" of a specific board.  The monarch system is intended to incentivize users to post quality content and self-moderate the various boards.  Monarchs are awarded certain perks and mod privileges but can be overthrown when the popular vote does not favor the current monarchy.

## App Design

#### Monarch is built upon the Materialize CSS/JS framework and makes use of the following:

* MySQL for constructing the database
* Sequelize.js for building the tables and required associations, as well as passing queries to the database
* Handlebars.js for handling the web structure of user posts and comments
* JQuery for dynamically manipulating elements of the interface
* API routes for accepting user CRUD requests
* Object-Relational Mapping (ORM) to establish queries and other functions used throughout the app
* Express.js and Body-Parser for running the server
* A Model-View-Controller (MVC) for passing and receiving user requests, and for presenting the responses back to the user

## Running the App

#### The current version of Monarch is deployed to Heroku and can be accessed [here](https://monarchfreddit.herokuapp.com/).