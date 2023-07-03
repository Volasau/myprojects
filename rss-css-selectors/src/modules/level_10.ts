import { addInputToContainer, resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask10() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select all the things!';
    }

    const squareSmall1 = document.createElement('square');
    squareSmall1.classList.add('small');
    squareSmall1.classList.add('dance');
    const green = document.createElement('green');
    green.classList.add('dance');
    const circle1 = document.createElement('circle');
    circle1.classList.add('dance');
    const yellowSmall = document.createElement('yellow');
    yellowSmall.classList.add('small');
    yellowSmall.classList.add('dance');
    const hexagon1 = document.createElement('hexagon');
    hexagon1.classList.add('dance');
    const hexagon2 = document.createElement('hexagon');
    hexagon2.classList.add('dance');
    const yellow = document.createElement('yellow');
    yellow.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(hexagon2);
        hexagon2.appendChild(yellow);
        tableTask.appendChild(squareSmall1);
        tableTask.appendChild(green);
        tableTask.appendChild(circle1);
        circle1.appendChild(yellowSmall);
        tableTask.appendChild(hexagon1);
    }

    addInputToContainer();
    writeInBlockRight(blocks[9]);

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
        resultTask(argumentAnswer, 10);
    }
}
