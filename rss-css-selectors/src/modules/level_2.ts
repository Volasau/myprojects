import { resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask2() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the bento boxes';
    }

    const bento1 = document.createElement('bento');
    bento1.classList.add('dance');

    const plate2 = document.createElement('plate');

    const bento2 = document.createElement('bento');
    bento2.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(bento1);
        tableTask.appendChild(plate2);
        tableTask.appendChild(bento2);
    }
    showTag();
    writeTags();
    writeInBlockRight(blocks[1]);
    resultTask('bento', 2);
}
