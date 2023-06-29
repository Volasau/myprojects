import { endTask, shakeBlock /*clearTask*/ } from './functions';

export function setupTask5() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the pickle on the fancy plate';
    }

    const bento = document.createElement('bento');
    const orange = document.createElement('orange');
    const plateBlu = document.createElement('plate');
    plateBlu.id = 'fancy';

    const pickle1 = document.createElement('pickle');
    pickle1.classList.add('dance');
    const plate = document.createElement('plate');
    const pickle2 = document.createElement('pickle');
    pickle1.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(bento);
        bento.appendChild(orange);
        tableTask.appendChild(plateBlu);
        plateBlu.appendChild(pickle1);
        tableTask.appendChild(plate);
        plate.appendChild(pickle2);
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
        level.textContent = ' 5';
    }

    const selectorName = document.querySelector('.selector__name');
    if (selectorName) {
        selectorName.textContent = '';
    }

    const selectorTitle = document.querySelector('.selector__title');
    if (selectorTitle) {
        selectorTitle.textContent = 'Combine the Descendant & ID Selectors';
    }

    const syntax = document.querySelector('.syntax');
    if (syntax) {
        syntax.textContent = '#id  A';
    }
    const hint = document.querySelector('.hint');
    if (hint) {
        hint.textContent = 'You can combine any selector with the descendent selector.';
    }
    const exemples = document.querySelector('.exemples');
    if (exemples) {
        exemples.textContent = '#cool span selects all span elements that are inside of elements with id="cool"';
    }

    const exemple = document.querySelector('.exemple');
    if (exemple) {
        exemple.textContent = '';
    }

    const answerFive = '#fancy pickle';

    const solutionInput = document.querySelector('.solution') as HTMLInputElement;
    const submitButton = document.querySelector('.solution__button');
    const placeGame = document.querySelector('.place__game') as HTMLDivElement;

    if (solutionInput && submitButton && placeGame) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();

            const userInput = solutionInput.value;
            console.log(userInput);

            if (userInput === answerFive) {
                solutionInput.value = '';
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

                if (userInput === answerFive) {
                    endTask();
                } else {
                    shakeBlock(placeGame);
                }
            }
        });
    } else {
        console.log('Элемент solutionInput, submitButton или placeGame не найден.');
    }
}
