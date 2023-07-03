import { addInputToContainer, resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask8() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the small yellowes in the hexagons';
    }

    const hexagon1 = document.createElement('hexagon');
    const yellow = document.createElement('yellow');
    const yellowSmall1 = document.createElement('yellow');
    yellowSmall1.classList.add('small');
    const hexagon2 = document.createElement('hexagon');
    const yellowSmall2 = document.createElement('yellow');
    yellowSmall2.classList.add('small');
    yellowSmall2.classList.add('dance');
    const circle = document.createElement('circle');
    const yellowSmall4 = document.createElement('yellow');
    yellowSmall4.classList.add('small');
    const hexagon4 = document.createElement('hexagon');
    const yellowSmall3 = document.createElement('yellow');
    yellowSmall3.classList.add('small');
    yellowSmall3.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(yellowSmall1);
        tableTask.appendChild(hexagon2);
        hexagon2.appendChild(yellowSmall2);
        tableTask.appendChild(circle);
        circle.appendChild(yellowSmall4);
        tableTask.appendChild(hexagon4);
        hexagon4.appendChild(yellowSmall3);
        tableTask.appendChild(hexagon1);
        hexagon1.appendChild(yellow);
    }

    addInputToContainer();
    writeInBlockRight(blocks[7]);

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
        resultTask(argumentAnswer, 8);
    }
}
