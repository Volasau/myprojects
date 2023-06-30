import { resultTask, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask8() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the small oranges in the bentos';
    }

    const bento1 = document.createElement('bento');

    const orange = document.createElement('orange');

    const orangeSmall1 = document.createElement('orange');
    orangeSmall1.classList.add('small');

    const bento2 = document.createElement('bento');

    const orangeSmall2 = document.createElement('orange');
    orangeSmall2.classList.add('small');
    orangeSmall2.classList.add('dance');

    const bento3 = document.createElement('bento');

    const appleSmall1 = document.createElement('apple');
    appleSmall1.classList.add('small');

    const bento4 = document.createElement('bento');

    const orangeSmall3 = document.createElement('orange');
    orangeSmall3.classList.add('small');
    orangeSmall3.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(bento1);
        bento1.appendChild(orange);
        tableTask.appendChild(orangeSmall1);
        tableTask.appendChild(bento2);
        bento2.appendChild(orangeSmall2);
        tableTask.appendChild(bento3);
        bento3.appendChild(appleSmall1);
        tableTask.appendChild(bento4);
        bento4.appendChild(orangeSmall3);
    }

    writeTags();
    writeInBlockRight(blocks[7]);
    resultTask('bento orange.small', 8);
}
