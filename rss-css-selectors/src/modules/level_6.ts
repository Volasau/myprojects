import { resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';
import { answers } from './infoLevel';

export function setupTask6() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the small apples';
    }

    const green = document.createElement('green');
    const greenSmall1 = document.createElement('green');
    greenSmall1.classList.add('dance');
    greenSmall1.classList.add('small');
    const circle1 = document.createElement('circle');
    const greenSmall2 = document.createElement('green');
    greenSmall2.classList.add('dance');
    greenSmall2.classList.add('small');

    const circle2 = document.createElement('circle');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(green);
        tableTask.appendChild(greenSmall1);
        tableTask.appendChild(circle1);
        circle1.appendChild(greenSmall2);
        tableTask.appendChild(circle2);
    }
    showTag();
    writeTags();
    writeInBlockRight(blocks[5]);
    resultTask(answers[5], 6);
}
