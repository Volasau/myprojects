import { resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';
import { answers } from './infoLevel';

export function setupTask1() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the circles';
    }

    const circle1 = document.createElement('circle');
    circle1.classList.add('dance');

    const circle2 = document.createElement('circle');
    circle2.classList.add('dance');

    const circle3 = document.createElement('circle');
    circle3.classList.add('dance');

    const circle4 = document.createElement('circle');
    circle4.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(circle1);
        tableTask.appendChild(circle2);
        tableTask.appendChild(circle3);
        tableTask.appendChild(circle4);
    }

    showTag();
    writeTags();
    writeInBlockRight(blocks[0]);
    resultTask(answers[0], 1);
}
