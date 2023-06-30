import { resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask6() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the small apples';
    }

    const apple = document.createElement('apple');

    const appleSmall1 = document.createElement('apple');
    appleSmall1.classList.add('dance');
    appleSmall1.classList.add('small');

    const plate1 = document.createElement('plate');

    const appleSmall2 = document.createElement('apple');
    appleSmall2.classList.add('dance');
    appleSmall2.classList.add('small');

    const plate2 = document.createElement('plate');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(apple);
        tableTask.appendChild(appleSmall1);
        tableTask.appendChild(plate1);
        plate1.appendChild(appleSmall2);
        tableTask.appendChild(plate2);
    }
    showTag();
    writeTags();
    writeInBlockRight(blocks[5]);
    resultTask('.small', 6);
}
