"use strict";

/*
command.js
Author: Katie BN
Created on 1/26/2018
Implements class for bot commands
*/

/**
 * Represents a bot command
 * @constructor
 * @param commandCallback - Callback function for this command.
 * @param {string} commandName - Name of the command, should be in lowercase.
 * @param {number} [commandPermissions=0x8] - An integer whose bytes represent required permissions. See permissions.js for available permissions.
 * @param {string} [helpString=''] - String to be displayed when the help Command is invoked regarding this function.
 */
function Command(commandCallback, commandName, commandPermissions=0x8, helpString=''){
    this.commandCallback = commandCallback;
    this.commandName = commandName;
    this.commandPermissions = commandPermissions;
    this.helpString = helpString;
}

module.exports = Command;