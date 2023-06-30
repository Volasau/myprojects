import { resultTask, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask7() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the small oranges';
    }

    const apple = document.createElement('apple');

    const appleSmall1 = document.createElement('apple');
    appleSmall1.classList.add('small');

    const bento = document.createElement('bento');

    const orangeSmall1 = document.createElement('orange');
    orangeSmall1.classList.add('small');
    orangeSmall1.classList.add('dance');

    const plate1 = document.createElement('plate');

    const orange = document.createElement('orange');

    const plate2 = document.createElement('plate');

    const orangeSmall2 = document.createElement('orange');
    orangeSmall2.classList.add('small');
    orangeSmall2.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(apple);
        tableTask.appendChild(appleSmall1);
        tableTask.appendChild(bento);
        bento.appendChild(orangeSmall1);
        tableTask.appendChild(plate1);
        plate1.appendChild(orange);
        tableTask.appendChild(plate2);
        plate2.appendChild(orangeSmall2);
    }

    writeTags();
    writeInBlockRight(blocks[6]);
    resultTask('orange.small', 7);
}
