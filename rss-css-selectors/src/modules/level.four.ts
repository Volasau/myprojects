import { endTask, shakeBlock } from './functions';

export function setupTask4() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the bento boxes';
    }

    const bento = document.createElement('bento');

    const plate = document.createElement('plate');

    const apple1 = document.createElement('apple');
    apple1.classList.add('dance');
    const apple = document.createElement('apple');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(bento);
        tableTask.appendChild(plate);
        plate.appendChild(apple1);
        tableTask.appendChild(apple);
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
        level.textContent = ' 4';
    }

    const selectorName = document.querySelector('.selector__name');
    if (selectorName) {
        selectorName.textContent = 'Descendant Selector';
    }

    const selectorTitle = document.querySelector('.selector__title');
    if (selectorTitle) {
        selectorTitle.textContent = 'Select an element inside another element';
    }

    const syntax = document.querySelector('.syntax');
    if (syntax) {
        syntax.textContent = 'A  B';
    }
    const hint = document.querySelector('.hint');
    if (hint) {
        hint.textContent =
            'Selects all B inside of A. B is called a descendant because it is inside of another element.';
    }
    const exemples = document.querySelector('.exemples');
    if (exemples) {
        exemples.textContent = 'p  strong selects all strong elements that are inside of any p';
    }

    const exemple = document.querySelector('.exemple');
    if (exemple) {
        exemple.textContent = '#fancy  span selects any span elements that are inside of the element with id="fancy"';
    }

    const answerFour = 'plate apple';

    document.addEventListener('DOMContentLoaded', function () {
        const solutionInput = document.querySelector('.solution') as HTMLInputElement;
        const submitButton = document.querySelector('.solution__button');
        const placeGame = document.querySelector('.place__game') as HTMLDivElement;

        if (solutionInput && submitButton && placeGame) {
            submitButton.addEventListener('click', function (event) {
                event.preventDefault();

                const userInput = solutionInput.value;
                console.log(userInput);

                if (userInput === answerFour) {
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

                    if (userInput === answerFour) {
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
