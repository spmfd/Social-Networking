## NoSQL-Social-Network-API

# Description

This project was designed to help us further understand Mongo, databases, and how to interact with them. This particular program is a social media network where you are able to create user, thoughts or posts associated with the user, and even reactions to those thoughts/posts.

# Installation

In order to proceed please ensure you have MongoDB and Insomnia to interact with the database. You will also need to run npm i in the terminal to install the proper dependencies.

# Usage

Once you have installed the dependencies you will type in npm run dev to start the server. The server will be created on your localhost at port 3001.

Here is a video showing the functionality:

[Walkthrough Video](https://drive.google.com/file/d/1WiP5BKr_cqk_prcwcM84ATGSskw7mseu/view)

The routes you will use in Insomnia are as follows.

**User**

- Get all Users: `GET /api/users`
- Create User: `POST /api/users`
- Get user by ID: `GET /api/users/:id`
- Update User: `PUT /api/users/:id`
- Delete User: `DELETE /api/users/:id`

**Friends** 

- Add friend: `PUT /api/users/:userId/friends/:friendId`
- Delete friend: `DELETE /api/users/:userId/friends/:friendId`

**Thought**

- Get all Thoughts: `GET /api/thoughts`
- Create Thought: `POST /api/thoughts`
- Get Thought by ID: `GET /api/thoughts/:id`
- Update Thought: `PUT /api/thoughts/:id`
- Delete Thought: `DELETE /api/thoughts/:id`

**Reaction**

- Add Reaction: `PUT /api/thoughts/:id/reactions`
- Delete Reaction: `DELETE /api/thoughts/:id/reactions`

# Credits

Big shoutout to my teacher who went over some of the models, routes, and controller functionality to give us a strong basis to grow from.