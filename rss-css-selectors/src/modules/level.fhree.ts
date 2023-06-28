import { endTask, shakeBlock } from './functions';

export function setupTask3() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the bento boxes';
    }

    const plateBlu = document.createElement('plate');
    plateBlu.id = 'fancy';
    plateBlu.classList.add('dance');

    const plate2 = document.createElement('plate');

    const bento2 = document.createElement('bento');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(plateBlu);
        tableTask.appendChild(plate2);
        tableTask.appendChild(bento2);
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
        level.textContent = ' 3';
    }

    const selectorName = document.querySelector('.selector__name');
    if (selectorName) {
        selectorName.textContent = 'ID Selector';
    }

    const selectorTitle = document.querySelector('.selector__title');
    if (selectorTitle) {
        selectorTitle.textContent = 'Select elements with an ID';
    }

    const syntax = document.querySelector('.syntax');
    if (syntax) {
        syntax.textContent = '#id';
    }
    const hint = document.querySelector('.hint');
    if (hint) {
        hint.textContent =
            'Selects the element with a specific id. You can also combine the ID selector with the type selector.';
    }
    const exemples = document.querySelector('.exemples');
    if (exemples) {
        exemples.textContent = '#cool selects any element with id="cool"';
    }

    const exemple = document.querySelector('.exemple');
    if (exemple) {
        exemple.textContent = 'ul#long selects ul id="long"';
    }
}

const answerFhree = '#fancy';

document.addEventListener('DOMContentLoaded', function () {
    const solutionInput = document.querySelector('.solution') as HTMLInputElement;
    const submitButton = document.querySelector('.solution__button');
    const placeGame = document.querySelector('.place__game') as HTMLDivElement;

    if (solutionInput && submitButton && placeGame) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();

            const userInput = solutionInput.value;
            console.log(userInput);

            if (userInput === answerFhree) {
                endTask();
            } else {
                shakeBlock(placeGame);
            }
        });

        solutionInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();

                const userInput = solutionInput.value;
                console.log(userInput);

                if (userInput === answerFhree) {
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
