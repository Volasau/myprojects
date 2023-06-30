import { resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask5() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the pickle on the fancy plate';
    }

    const bento = document.createElement('bento');

    const orange = document.createElement('orange');

    const plateBlu = document.createElement('plate');
    plateBlu.id = 'fancy';

    const pickle1 = document.createElement('pickle');
    pickle1.classList.add('dance');

    const plate = document.createElement('plate');

    const pickle2 = document.createElement('pickle');
    pickle1.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(bento);
        bento.appendChild(orange);
        tableTask.appendChild(plateBlu);
        plateBlu.appendChild(pickle1);
        tableTask.appendChild(plate);
        plate.appendChild(pickle2);
    }
    showTag();
    writeTags();
    writeInBlockRight(blocks[4]);
    resultTask('#fancy pickle', 5);
}
