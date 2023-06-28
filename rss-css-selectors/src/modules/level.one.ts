import { endTask, shakeBlock } from './functions';

export function setupTask1() {
    const answerOne = 'plate';
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the plates';
    }

    const plate1 = document.createElement('plate');
    plate1.classList.add('dance');

    const plate2 = document.createElement('plate');
    plate2.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(plate1);
        tableTask.appendChild(plate2);
    }

    const elem = document.querySelector('.table__task');
    if (elem) {
        const htmlCode = elem.outerHTML;
        const tagsTask = document.querySelector('.tags-task');
        if (tagsTask) {
            tagsTask.textContent = htmlCode;
        } else {
            console.log('Элемент tags-task не найден');
        }
        // console.log(htmlCode);
    } else {
        console.log('Элемент не найден');
    }

    //////////////////////BLOCK RIGHT///////////////////////
    const level = document.querySelector('.number__level');
    if (level) {
        level.textContent = ' 1';
    }

    const selectorName = document.querySelector('.selector__name');
    if (selectorName) {
        selectorName.textContent = 'Type Selector';
    }

    const selectorTitle = document.querySelector('.selector__title');
    if (selectorTitle) {
        selectorTitle.textContent = 'Select elements by their type';
    }

    const syntax = document.querySelector('.syntax');
    if (syntax) {
        syntax.textContent = 'A';
    }
    const hint = document.querySelector('.hint');
    if (hint) {
        hint.textContent =
            'Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.';
    }

    const exemples = document.querySelector('.exemples');
    if (exemples) {
        exemples.textContent = 'div selects all div elements.';
    }

    const exemple = document.querySelector('.exemple');
    if (exemple) {
        exemple.textContent = 'p selects all p elements.';
    }

    document.addEventListener('DOMContentLoaded', function () {
        const solutionInput = document.querySelector('.solution') as HTMLInputElement;
        const submitButton = document.querySelector('.solution__button');
        const placeGame = document.querySelector('.place__game') as HTMLDivElement;

        if (solutionInput && submitButton && placeGame) {
            submitButton.addEventListener('click', function (event) {
                event.preventDefault();

                let userInput = solutionInput.value;
                console.log(userInput);

                if (userInput === answerOne) {
                    endTask();
                    userInput = '';
                } else {
                    shakeBlock(placeGame);
                }
            });

            solutionInput.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    event.preventDefault();

                    const userInput = solutionInput.value;
                    console.log(userInput);

                    if (userInput === answerOne) {
                        endTask();
                    } else {
                        shakeBlock(placeGame);
                    }
                }
            });
        } else {
            console.log('Элемент solutionInput, submitButton или placeGame не найден.');
        }
    });
}
