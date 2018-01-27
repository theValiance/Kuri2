"use strict";

/*
permission.js
Author: Katie BN
File created on 1/25/2018
Stores a constant for each permission bit, as well as some additional custom permission bits
*/

//Permissions required for commands
//Unused bits have been labeled and commented out, and are reserved for possible official permissions in the future
//Custom permissions are listed further down
//All 53 bits of the mantissa are used
const permission = {
//       BUILTIN PERMISSIONS       //
CREATE_INSTANT_INVITE: 0x00000001,
KICK_MEMBERS: 0x00000002,
BAN_MEMBERS: 0x00000004,
ADMINISTRATOR: 0x00000008,
MANAGE_CHANNELS: 0x00000010,
MANAGE_GUILD: 0x00000020,
ADD_REACTIONS: 0x00000040,
VIEW_AUDIT_LOG: 0x00000080,
//PERMISSION: 0x00000100, //unused bit
//PERMISSION 0x00000200, //unused bit
VIEW_CHANNEL: 0x00000400,
SEND_MESSAGES: 0x00000800,
SEND_TTS_MESSAGES: 0x00001000,
MANAGE_MESSAGES: 0x00002000,
EMBED_LINKS: 0x00004000,
ATTACH_FILES: 0x00008000,
READ_MESSAGE_HISTORY: 0x00010000,
MENTION_EVERYONE: 0x00020000,
USE_EXTERNAL_EMOJIS: 0x00040000,
//PERMISSION: 0x00080000, //unused bit
CONNECT: 0x00100000,
SPEAK: 0x00200000,
MUTE_MEMBERS: 0x00400000,
DEAFEN_MEMBERS: 0x00800000,
MOVE_MEMBERS: 0x01000000,
USE_VAD: 0x02000000,
CHANGE_NICKNAME: 0x04000000,
MANAGE_NICKNAMES: 0x08000000,
MANAGE_ROLES: 0x10000000,
MANAGE_WEBHOOKS: 0x20000000,
MANAGE_EMOJIS: 0x40000000,
//PERMISSION: 0x80000000, //unused bit
//PERMISSION: 0x100000000, //unused bit
//PERMISSION: 0x200000000, //unused bit
//PERMISSION: 0x400000000, //unused bit
//PERMISSION: 0x800000000, //unused bit
//PERMISSION: 0x1000000000, //unused bit
//PERMISSION: 0x2000000000, //unused bit
//PERMISSION: 0x4000000000, //unused bit
//PERMISSION: 0x8000000000, //unused bit
//         CUSTOM PERMISSIONS         //
CUSTOM_1: 0x10000000000,
CUSTOM_2: 0x20000000000,
CUSTOM_3: 0x40000000000,
CUSTOM_4: 0x80000000000,
CUSTOM_5: 0x100000000000,
CUSTOM_6: 0x200000000000,
CUSTOM_7: 0x400000000000,
CUSTOM_8: 0x800000000000,
CUSTOM_9: 0x1000000000000,
CUSTOM_10: 0x2000000000000,
NSFW: 0x4000000000000, //commands that may result in the posting of NSFW material
SERVER_OWNER: 0x8000000000000, //owner of the server the bot is in
BOT_OWNER: 0x10000000000000 //only the user running/hosting the bot can use commands with this requirement.
//ANY HIGHER WILL RESULT IN AN INTEGER OVERFLOW//
};

//make the variables directly accessible to the importer
module.exports = permission;