import { resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';
import { answers } from './infoLevel';

export function setupTask3() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the hexagon boxes';
    }

    const circleBlu = document.createElement('circle');
    circleBlu.id = 'border';
    circleBlu.classList.add('dance');

    const circle2 = document.createElement('circle');

    const hexagon2 = document.createElement('hexagon');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(circleBlu);
        tableTask.appendChild(circle2);
        tableTask.appendChild(hexagon2);
    }
    showTag();
    writeTags();
    writeInBlockRight(blocks[2]);
    resultTask(answers[2], 3);
}
