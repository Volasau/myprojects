import { resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';
import { answers } from './infoLevel';

export function setupTask8() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the small yellowes in the hexagons';
    }

    const hexagon1 = document.createElement('hexagon');
    const yellow = document.createElement('yellow');
    const yellowSmall1 = document.createElement('yellow');
    yellowSmall1.classList.add('small');
    const hexagon2 = document.createElement('hexagon');
    const yellowSmall2 = document.createElement('yellow');
    yellowSmall2.classList.add('small');
    yellowSmall2.classList.add('dance');
    const hexagon3 = document.createElement('hexagon');
    const greenSmall1 = document.createElement('green');
    greenSmall1.classList.add('small');
    const hexagon4 = document.createElement('hexagon');
    const yellowSmall3 = document.createElement('yellow');
    yellowSmall3.classList.add('small');
    yellowSmall3.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(hexagon1);
        hexagon1.appendChild(yellow);
        tableTask.appendChild(yellowSmall1);
        tableTask.appendChild(hexagon2);
        hexagon2.appendChild(yellowSmall2);
        tableTask.appendChild(hexagon3);
        hexagon3.appendChild(greenSmall1);
        tableTask.appendChild(hexagon4);
        hexagon4.appendChild(yellowSmall3);
    }
    showTag();
    writeTags();
    writeInBlockRight(blocks[7]);
    resultTask(answers[7], 8);
}
