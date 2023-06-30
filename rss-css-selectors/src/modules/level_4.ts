import { resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask4() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the bento boxes';
    }

    const bento = document.createElement('bento');

    const plate = document.createElement('plate');

    const apple1 = document.createElement('apple');
    apple1.classList.add('dance');

    const apple = document.createElement('apple');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(bento);
        tableTask.appendChild(plate);
        plate.appendChild(apple1);
        tableTask.appendChild(apple);
    }
    showTag();
    writeTags();
    writeInBlockRight(blocks[3]);
    resultTask('plate apple', 4);
}
