import { resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';
import { answers } from './infoLevel';

export function setupTask5() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the square on the border circle';
    }

    const hexagon = document.createElement('hexagon');
    const yellow = document.createElement('yellow');
    const circleBlu = document.createElement('circle');
    circleBlu.id = 'border';

    const square1 = document.createElement('square');
    square1.classList.add('dance');
    const circle = document.createElement('circle');
    const square2 = document.createElement('square');
    square1.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(hexagon);
        hexagon.appendChild(yellow);
        tableTask.appendChild(circleBlu);
        circleBlu.appendChild(square1);
        tableTask.appendChild(circle);
        circle.appendChild(square2);
    }

    showTag();
    writeTags();
    writeInBlockRight(blocks[4]);
    resultTask(answers[4], 5);
}
