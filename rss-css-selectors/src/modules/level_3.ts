import { resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask3() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the bento boxes';
    }

    const plateBlu = document.createElement('plate');
    plateBlu.id = 'fancy';
    plateBlu.classList.add('dance');

    const plate2 = document.createElement('plate');

    const bento2 = document.createElement('bento');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(plateBlu);
        tableTask.appendChild(plate2);
        tableTask.appendChild(bento2);
    }
    showTag();
    writeTags();
    writeInBlockRight(blocks[2]);
    resultTask('#fancy', 3);
}
