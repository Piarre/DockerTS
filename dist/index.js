#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
const utils_1 = require("./utils");
const utils = new utils_1.Utils();
function main() {
    console.log('Welcome to the DockerTS CLI by %s', '\x1b[33mPiarre');
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which Dockerfile do you want :',
            name: 'dockerfile',
            choices: ['Discord JS v12 dockerize', 'Redis Increment on visit'],
        }
    ])
        .then(({ dockerfile }) => {
        if (dockerfile == 'Discord JS v12 dockerize') {
            utils.createProject('DiscordDockerize', 'Discord');
        }
        else if (dockerfile == 'Redis Increment on visit') {
            utils.createProject('RedisIncrement', 'redis-increment');
        }
    });
}
// ? Call the main function
main();
