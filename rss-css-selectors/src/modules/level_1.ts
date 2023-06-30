import { resultTask, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask1() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the plates';
    }

    const plate1 = document.createElement('plate');
    plate1.classList.add('dance');

    const plate2 = document.createElement('plate');
    plate2.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(plate1);
        tableTask.appendChild(plate2);
    }

    writeTags();
    writeInBlockRight(blocks[0]);
    resultTask('plate', 1);
}
