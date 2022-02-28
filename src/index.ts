#!/usr/bin/env node

import inquirer = require('inquirer');
import { Utils } from './utils'
const utils = new Utils();

function main(): any {
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
         utils.createProject('DiscordDockerize', 'Discord')
      } else if (dockerfile == 'Redis Increment on visit') {
         utils.createProject('RedisIncrement', 'redis-increment')
      }
   });
}

// ? Call the main function
main();

