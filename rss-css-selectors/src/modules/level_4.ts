import { resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';
import { answers } from './infoLevel';

export function setupTask4() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the hexagon boxes';
    }

    const hexagon = document.createElement('hexagon');

    const circle = document.createElement('circle');

    const green1 = document.createElement('green');
    green1.classList.add('dance');
    const green = document.createElement('green');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(hexagon);
        tableTask.appendChild(circle);
        circle.appendChild(green1);
        tableTask.appendChild(green);
    }
    showTag();
    writeTags();
    writeInBlockRight(blocks[3]);
    resultTask(answers[3], 4);
}
