# Kuri2
Second implementation of my Kurisu bot. The goal of this reimplementation was to make the bot more stable, keep code cleaner, smarter, and better documented, and to make the bot more easily extensible.


### Planned Features
* Smart server invites
* Schedulable Events
* UCS (User-Channel-Server) permissions
* Automatic Updates
* Uservar system
* **Under consideration: Custom interpreters and commands, child bots**


### Smart Server Invites
Invites generated by the bot. When a user joins the server with a smart invite and the bot is online, it can automatically assign roles, welcome with a specific message, etc.


### Schedulable Events
Run simple scripts when an event occurs. Celebrate the 1000th message posted, wish someone a happy birthday, call in the new year, and more!


### UCS Permissions Model
User-Channel-Server Permissions is a simple model to decide which users can use bot commands. 

Server permissions decide what bot commands and features your members can use on a general scale. By default these permissions are set up so that users cannot use the bot to do something they would be unable to do otherwise, **I.E.** embed an image when the user does not have that permission. Server permissions are set up per-role.

Channel permissions override server permissions for specific channels. By default channel permissions will reflect per-channel permissions of users, in the same way server permissions reflect global permissions of users. Channel permissions can be set up on a per-role basis only.

User permissions override all other permissions. By default, there are no special user permissions for any users. User permissions can be used to give certain users access to certain commands server-wide. For example, if you have a member you have dubbed the "News guy" you could give him access to commands associated with distributing server news.


### Automatic Updates
Self explanatory. The bot will occasionally check the github page for changes to the main branch, use git to pull changes, and restart.