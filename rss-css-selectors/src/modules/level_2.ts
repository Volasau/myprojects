import { resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';
import { answers } from './infoLevel';

export function setupTask2() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the hexagon boxes';
    }

    const circle1 = document.createElement('circle');
    const hexagon1 = document.createElement('hexagon');
    hexagon1.classList.add('dance');

    const circle2 = document.createElement('circle');

    const hexagon2 = document.createElement('hexagon');
    hexagon2.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(circle1);
        tableTask.appendChild(hexagon1);
        tableTask.appendChild(circle2);
        tableTask.appendChild(hexagon2);
    }
    showTag();
    writeTags();
    writeInBlockRight(blocks[1]);
    resultTask(answers[1], 2);
}
