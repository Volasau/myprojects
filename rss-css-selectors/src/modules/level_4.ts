import { addInputToContainer, resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask4() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the hexagon boxes';
    }

    const circle1 = document.createElement('circle');
    const green2 = document.createElement('green');
    green2.classList.add('dance');

    const hexagon = document.createElement('hexagon');

    const circle = document.createElement('circle');

    const green1 = document.createElement('green');
    green1.classList.add('dance');
    const green = document.createElement('green');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(circle1);
        circle1.appendChild(green2);
        tableTask.appendChild(hexagon);
        tableTask.appendChild(circle);
        circle.appendChild(green1);
        tableTask.appendChild(green);
    }

    addInputToContainer();
    writeInBlockRight(blocks[3]);

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
        resultTask(argumentAnswer, 4);
    }
}
