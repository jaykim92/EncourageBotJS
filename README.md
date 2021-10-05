# Encourage Bot
The encouraging Discord bot

## Table of Contents
* [Description](#description)
* [Usage](#usage)
* [Deployed Application](#deployed-application)
* [Technologies Used](#technologies-used)

## Description
This bot can be invited to your Discord server to send encouraging quotes and messages to its users. Encourage Bot has create, read, and delete capabilities, allowing all users to add, delete, and view a list of user-created quotes.

## Usage
**Setup**
* Paste the following link into your web browser and select a server to invite the bot: https://discord.com/api/oauth2/authorize?client_id=891924875080503306&permissions=519232&scope=bot
* Note: You can only add bots if you are the server owner or have "Manage Server" privileges.

**Bot Commands**
- Get a random inspiring message from the ZenQuotes.io API
  ``` sh
  $inspire
  ```
- Add a new encouraging message
  ``` sh
  $new [message]
  ```
- Remove a user-created encouraging message
  ``` sh
  $del [number]
  ```
- Get a list of user-created inspiring messages currently in the database
  ``` sh
  $list
  ```

## Technologies Used
* Replit 
* UptimeRobot
* Discord
* ZenQuotes API
* Node
* Express

