"use strict";
//making a nested object
let programmerSkills = {
    codingLanguages: ['javaScript', 'typeScript', 'python'],
    programmerTools: ['Git hub', 'linkedIn', 'cloud'],
    frameworks: ['Django', 'Angular ', 'Next.js']
};
//skills
let { codingLanguages, programmerTools, frameworks } = programmerSkills;
console.log(`Languages : ${codingLanguages[0]},tools : ${programmerTools[0]},framework : ${frameworks[0]}`);
