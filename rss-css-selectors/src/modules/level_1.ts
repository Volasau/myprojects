import { addInputToContainer, resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask1() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the circles';
    }

    const circle1 = document.createElement('circle');
    circle1.classList.add('dance');

    const circle2 = document.createElement('circle');
    circle2.classList.add('dance');

    const circle3 = document.createElement('circle');
    circle3.classList.add('dance');

    const circle4 = document.createElement('circle');
    circle4.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(circle1);
        tableTask.appendChild(circle2);
        tableTask.appendChild(circle3);
        tableTask.appendChild(circle4);
    }

    addInputToContainer();
    writeInBlockRight(blocks[0]);

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
        resultTask(argumentAnswer, 1);
    }
}
