# Kuri2
Second implementation of my Kurisu bot. The goal of this reimplementation was to make the bot more stable, keep code cleaner and smarter, and make the bot more easily extensible.


### Planned Features
* Smart server invites
* Schedulable Events
* UCS (User-Channel-Server) permissions
* Server Sharding
* Automatic Updates
* **Under consideration: Custom interpreters and commands, child bots**


### Permissions
Certain commands will require certain internal permissions. These can be configured according to the UCS Permissions Model seen below.


### UCS Permissions Model
User-Channel-Server Permissions is a simple model to decide which users can use bot commands. 

Server permissions decide what bot commands and features your members can use on a general scale. By default these permissions are set up so that users cannot use the bot to do something they would be unable to do otherwise, **IE** embed an image when the user does not have that permissions. Server permissions can be set up per-role only.

Channel permissions override server permissions for specific channels. By default channel permissions will reflect per-channel permissions of users, in the same way server permissions reflect global permissions of users. Channel permissions can be set up on a per-role basis only.

User permissions override all other permissions. By default, there are no special user permissions for any users. User permissions can be used to give certain users access to certain commands server-wide. For example, if you have a member you have dubbed the "News guy" you could give him access to commands associated with distributing server news.
