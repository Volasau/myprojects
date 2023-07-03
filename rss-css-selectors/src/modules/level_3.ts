import { addInputToContainer, resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask3() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the hexagon boxes';
    }

    const circle = document.createElement('circle');

    const circleBlu = document.createElement('circle');
    circleBlu.id = 'border';
    circleBlu.classList.add('dance');

    const circle2 = document.createElement('circle');
    const square = document.createElement('square');

    const hexagon2 = document.createElement('hexagon');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(circle);
        tableTask.appendChild(circleBlu);
        tableTask.appendChild(circle2);
        circle2.appendChild(square);
        tableTask.appendChild(hexagon2);
    }

    addInputToContainer();
    writeInBlockRight(blocks[2]);

    const helpButton = document.querySelector('.help');
    const solutionInput = document.querySelector('#solution') as HTMLInputElement;
    const answer = document.querySelector('.answer') as HTMLElement;
    const argumentAnswer = answer.textContent;
    if (helpButton && solutionInput && answer) {
        helpButton.addEventListener('click', () => {
            if (solutionInput) {
                solutionInput.value = '';
            }
            const text = answer.textContent;
            let index = 0;
            const timer = setInterval(() => {
                if (text) {
                    solutionInput.value += text[index];
                    index++;
                    if (index >= text.length) {
                        clearInterval(timer);
                    }
                }
            }, 100);
        });
    }

    showTag();
    writeTags();
    if (argumentAnswer !== null) {
        resultTask(argumentAnswer, 3);
    }
}
