import { addInputToContainer, resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask5() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the square on the border circle';
    }

    const hexagon = document.createElement('hexagon');
    const yellow = document.createElement('yellow');
    const circleBlu = document.createElement('circle');
    circleBlu.id = 'border';

    const square1 = document.createElement('square');
    square1.classList.add('dance');
    const circle = document.createElement('circle');
    circle.id = 'border';
    const square2 = document.createElement('square');
    square1.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(hexagon);
        hexagon.appendChild(yellow);
        tableTask.appendChild(circleBlu);
        circleBlu.appendChild(square1);
        tableTask.appendChild(circle);
        tableTask.appendChild(square2);
    }

    addInputToContainer();
    writeInBlockRight(blocks[4]);

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
        resultTask(argumentAnswer, 5);
    }
}
