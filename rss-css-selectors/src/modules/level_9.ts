import { resultTask, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask9() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select all the plates and bentos';
    }

    const pickleSmall1 = document.createElement('pickle');
    pickleSmall1.classList.add('small');

    const pickle1 = document.createElement('pickle');

    const plate1 = document.createElement('plate');
    plate1.classList.add('dance');

    const pickle2 = document.createElement('pickle');
    pickle2.classList.add('dance');

    const bento = document.createElement('bento');
    bento.classList.add('dance');

    const pickle3 = document.createElement('pickle');
    pickle3.classList.add('dance');

    const plate2 = document.createElement('plate');
    plate2.classList.add('dance');

    const pickle4 = document.createElement('pickle');
    pickle4.classList.add('dance');

    const pickle5 = document.createElement('pickle');

    const pickleSmall2 = document.createElement('pickle');
    pickleSmall2.classList.add('small');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(pickleSmall1);
        tableTask.appendChild(pickle1);
        tableTask.appendChild(plate1);
        plate1.appendChild(pickle2);
        tableTask.appendChild(bento);
        bento.appendChild(pickle3);
        tableTask.appendChild(plate2);
        plate2.appendChild(pickle4);
        tableTask.appendChild(pickle5);
        tableTask.appendChild(pickleSmall2);
    }

    writeTags();
    writeInBlockRight(blocks[8]);
    resultTask('plate, bento', 9);
}
