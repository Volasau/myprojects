import { addInputToContainer, resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask9() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select all the circles and hexagons';
    }

    const squareSmall1 = document.createElement('square');
    squareSmall1.classList.add('small');
    const square1 = document.createElement('square');
    const circle1 = document.createElement('circle');
    circle1.classList.add('dance');
    const square2 = document.createElement('square');
    square2.classList.add('dance');
    const hexagon = document.createElement('hexagon');
    hexagon.classList.add('dance');
    const square3 = document.createElement('square');
    square3.classList.add('dance');
    const circle2 = document.createElement('circle');
    circle2.classList.add('dance');
    const square4 = document.createElement('square');
    square4.classList.add('dance');
    const square5 = document.createElement('square');
    const squareSmall2 = document.createElement('square');
    squareSmall2.classList.add('small');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(squareSmall1);
        tableTask.appendChild(square1);
        tableTask.appendChild(circle1);
        circle1.appendChild(square2);
        tableTask.appendChild(hexagon);
        hexagon.appendChild(square3);
        tableTask.appendChild(circle2);
        circle2.appendChild(square4);
        tableTask.appendChild(square5);
        tableTask.appendChild(squareSmall2);
    }

    addInputToContainer();
    writeInBlockRight(blocks[8]);

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
        resultTask(argumentAnswer, 9);
    }
}
