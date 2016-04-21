# Seed Application

A seed application is a small fully functional application that you can grow and tweak easily.

## Why?

Have you ever had an idea for an application or arrived at a Hackathon energized to get going? Then reality hits, all the work you need to do just to start working on your latest and greatest application idea. Energy levels are going down fast... 4 hours later you are still trawling your github account for all the things you need from applications you did in the past.

There is a solution to this problem! Create a seed application... 

A seed application is a small fully functional application you can easily grow and tweak. An application that does all the basic things you need, without any of the clutter of the business logic of your previous killer application.

It's a small spark that set your application development alight. It's important that you understand it well. You should own it. It should reflect your style and choices.. and you should maintain it. As you learn new things you should remember to update your seed application.

## Create one

Create an Express Seed application.

That supports:
* Forms
* Handlebar templates
* Http sessions
* Basic CRUD using Mysql
  * include a basic mysql database script
  * 2-3 database tables linked with foreign keys
  * example of how to create database and username/password
* Configured to use Boostrap CSS framework
* Basic navigation
* Responsive layout support
* Error handling
* The port number it run on should be configurable using an environment variable.

For later:
* Authentication using middleware
* Password encryption using bcrypt
* A basic user registration example

## Clear instructions

Create clear instructions and an application that is in a good state.

All application dependencies in the `package.json` file should be up to date.

Include a `.gitignore` file and ensure that the `node_modules` folder is not committed to github.

To get the application running one should follow instructions like this:

* Clone from github
* Setup the database - reference which scripts / commands a user need to run
* install dependencies : `npm install`
* run the application: `nodemon index.js`

Be sure to have instructions specific to your project in your `Readme.md` file

## Maintain it

It's is important that you keep your seed application up to date with the latest things you have learned. And also to create new Seed Applications as you learn new languages and technologies.

Have Fun!
