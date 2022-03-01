"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const fs = require('fs-extra');
const path = require('path');
const git = require('git-init');
class Utils {
    /**
     * @public
     * @param {String} projectName
     * @param {String} templateName
     */
    createProject(projectName, templateName) {
        // * Create the project with the gived string
        fs.mkdir(`./${projectName}`, (error) => {
            // ! Handle error(s)
            if (error) {
                console.log('%s Could not create project !', '\x1b[31mERROR');
                // ! Exit the programm
                process.exit(0);
            }
            else {
                // ? Set the directory source and destination
                const srcDir = `${path.resolve(__dirname)}/template/${templateName}`;
                const destDir = `./${projectName}`;
                // ? Copy the template to the directory
                fs.copySync(srcDir, destDir);
                this.sayDone();
                // ! Exit the programm
                process.exit(0);
            }
        });
    }
    /**
     * @private
     */
    sayDone() {
        console.log(`\x1b[42m\x1b[30mDONE\x1b[0m Project created`);
    }
}
exports.Utils = Utils;
