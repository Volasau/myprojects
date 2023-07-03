import { addInputToContainer, resultTask, showTag, writeInBlockRight, writeTags } from './functions';
import { blocks } from './infoLevel';

export function setupTask7() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the small yellowes';
    }

    const green = document.createElement('green');

    const greenSmall1 = document.createElement('green');
    greenSmall1.classList.add('small');

    const hexagon = document.createElement('hexagon');

    const yellowSmall1 = document.createElement('yellow');
    yellowSmall1.classList.add('small');
    yellowSmall1.classList.add('dance');

    const circle1 = document.createElement('circle');
    const yellow = document.createElement('yellow');
    const circle2 = document.createElement('circle');
    const yellowSmall2 = document.createElement('yellow');
    yellowSmall2.classList.add('small');
    yellowSmall2.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(green);
        tableTask.appendChild(greenSmall1);
        tableTask.appendChild(hexagon);
        hexagon.appendChild(yellowSmall1);
        tableTask.appendChild(circle1);
        circle1.appendChild(yellow);
        tableTask.appendChild(circle2);
        circle2.appendChild(yellowSmall2);
    }

    addInputToContainer();
    writeInBlockRight(blocks[6]);

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
        resultTask(argumentAnswer, 7);
    }
}
