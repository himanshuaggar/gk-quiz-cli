#!/usr/bin/env node
// the above syntax is called shebang always include this to tell user comp to use node js version to run the CLI

// importing dependencies
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from 'chalk-animation';
import figlet from "figlet";
import { createSpinner } from "nanospinner";

console.log(chalk.bgCyan("hello world"));

let playerName;

const sleep = (ms = 4000) => new Promise((r) => setTimeout(r,ms));

async function welcome(){
    const rainbowTitle = chalkAnimation.karaoke('WHO WANTS TO PLAY A GAME? \n ');

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.blue.bgMagentaBright('HOW TO PLAY')}
    I am a process on your computer
    If you get any Question Wromg I will be ${chalk.bgRedBright('killed')}
    So get all the questions ${chalk.bgGreenBright('RIGHT...')}
    
    `);
}


async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
  
    if (isCorrect) {
      spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
    } else {
      spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
      process.exit(1);
    }
}

function winner() {
    console.clear();
    figlet(`Congrats , ${playerName} !\n YOU HAVE \n WON`, (err, data) => {
      console.log(gradient.pastel.multiline(data) + '\n');
  
      process.exit(0);
    });
};


async function askName(){
    const anwers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default(){
            return 'player';
        },
    });
    playerName = anwers.player_name;
}

async function question1() {
    const answers = await inquirer.prompt({
      name: 'question_1',
      type: 'list',
      message: 'Grand Central Terminal, Park Avenue, New York is the worlds\n',
      choices: [
        'largest railway station',
        'highest railway station',
        'longest railway station',
        'None of the above',
      ],
    });
  
    return handleAnswer(answers.question_1 === 'largest railway station');
};

async function question2() {
    const answers = await inquirer.prompt({
      name: 'question_2',
      type: 'list',
      message: 'Entomology is the science that studies\n',
      choices: [
        'Behavior of human beings',
        'Insects',
        'The origin and history of technical and scientific terms',
        'The formation of rocks',
      ],
    });
  
    return handleAnswer(answers.question_2=== 'Insects');
};

async function question3() {
    const answers = await inquirer.prompt({
      name: 'question_3',
      type: 'list',
      message: 'For which of the following disciplines is Nobel Prize awarded?\n',
      choices: [
        'Physics and Chemistry',
        'Physiology or Medicine',
        'Literature, Peace and Economics',
        'All of the above',
      ],
    });
  
    return handleAnswer(answers.question_3 === 'All of the above');
};

async function question4() {
    const answers = await inquirer.prompt({
      name: 'question_4',
      type: 'list',
      message: 'Galileo was an Italian astronomer who\n',
      choices: [
        'developed the telescope',
        'discovered four satellites of Jupiter',
        'discovered that the movement of pendulum produces a regular time measurement',
        'All of the above',
      ],
    });
  
    return handleAnswer(answers.question_4 === 'All of the above');
};

async function question5() {
    const answers = await inquirer.prompt({
      name: 'question_5',
      type: 'list',
      message: 'Exposure to sunlight helps a person improve his health because\n',
      choices: [
        'the infrared light kills bacteria in the body',
        'resistance power increases',
        'the pigment cells in the skin get stimulated and produce a healthy tan',
        'the ultraviolet rays convert skin oil into Vitamin D',
      ],
    });
  
    return handleAnswer(answers.question_5 === 'the ultraviolet rays convert skin oil into Vitamin D');
};

async function question6() {
    const answers = await inquirer.prompt({
      name: 'question_6',
      type: 'list',
      message: 'Guarantee to an exporter that the importer of his goods will pay immediately for the goods ordered by him, is known as\n',
      choices: [
        'Letter of Credit (L/C)',
        'laissezfaire',
        'inflation',
        'None of the above',
      ],
    });
  
    return handleAnswer(answers.question_6 === 'Letter of Credit (L/C)');
};

async function question7() {
    const answers = await inquirer.prompt({
      name: 'question_7',
      type: 'list',
      message: 'Dumping is\n',
      choices: [
        'selling of goods abroad at a price well below the production cost at the home market price',
        'the process by which the supply of a manufactures product remains low in the domestic market, which batches him better price',
        'prohibited by regulations of GATT',
        'All of the above',
      ],
    });
  
    return handleAnswer(answers.question_7 === 'All of the above');
};

async function question8() {
    const answers = await inquirer.prompt({
      name: 'question_8',
      type: 'list',
      message: 'Friction can be reduced by changing from\n',
      choices: [
        'sliding to rolling',
        'rolling to sliding',
        'potential energy to kinetic energy',
        'dynamic to static',
      ],
    });
  
    return handleAnswer(answers.question_8 === 'sliding to rolling');
};

async function question9() {
    const answers = await inquirer.prompt({
      name: 'question_9',
      type: 'list',
      message: 'The ozone layer restricts\n',
      choices: [
        'Visible light',
        'Infrared radiation',
        'X-rays and gamma rays',
        'Ultraviolet radiation',
      ],
    });
  
    return handleAnswer(answers.question_9=== 'Ultraviolet radiation');
};

async function question10() {
    const answers = await inquirer.prompt({
      name: 'question_10',
      type: 'list',
      message: 'Ecology deals with\n',
      choices: [
        'Birds',
        'Cell formation',
        'Relation between organisms and their environment',
        'Tissues',
      ],
    });
  
    return handleAnswer(answers.question_10 === 'Relation between organisms and their environment');
};

// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
winner();

// ANSWERS
/*
1 A
2 B
3 D
4 D
5 D
6 A
7 D
8 A
9 D
10 C
*/