import { resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';
import { answers } from './infoLevel';

export function setupTask10() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select all the things!';
    }

    const squareSmall1 = document.createElement('square');
    squareSmall1.classList.add('small');
    squareSmall1.classList.add('dance');
    const green = document.createElement('green');
    green.classList.add('dance');
    const circle1 = document.createElement('circle');
    circle1.classList.add('dance');
    const yellowSmall = document.createElement('yellow');
    yellowSmall.classList.add('small');
    yellowSmall.classList.add('dance');
    const hexagon1 = document.createElement('hexagon');
    hexagon1.classList.add('dance');
    const hexagon2 = document.createElement('hexagon');
    hexagon2.classList.add('dance');
    const yellow = document.createElement('yellow');
    yellow.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(hexagon2);
        hexagon2.appendChild(yellow);
        tableTask.appendChild(squareSmall1);
        tableTask.appendChild(green);
        tableTask.appendChild(circle1);
        circle1.appendChild(yellowSmall);
        tableTask.appendChild(hexagon1);
    }

    showTag();
    writeTags();
    writeInBlockRight(blocks[9]);
    resultTask(answers[9], 10);
}
