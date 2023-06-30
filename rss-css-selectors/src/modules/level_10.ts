import { resultTask, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask10() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select all the things!';
    }

    const pickleSmall1 = document.createElement('pickle');
    pickleSmall1.classList.add('small');
    pickleSmall1.classList.add('dance');

    const apple = document.createElement('apple');
    apple.classList.add('dance');

    const plate1 = document.createElement('plate');
    plate1.classList.add('dance');

    const orangeSmall = document.createElement('orange');
    orangeSmall.classList.add('small');
    orangeSmall.classList.add('dance');

    const bento1 = document.createElement('bento');
    bento1.classList.add('dance');

    const bento2 = document.createElement('bento');
    bento2.classList.add('dance');

    const orange = document.createElement('orange');
    orange.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(bento2);
        bento2.appendChild(orange);
        tableTask.appendChild(pickleSmall1);
        tableTask.appendChild(apple);
        tableTask.appendChild(plate1);
        plate1.appendChild(orangeSmall);
        tableTask.appendChild(bento1);
    }

    writeTags();
    writeInBlockRight(blocks[9]);
    resultTask('*', 10);
}
