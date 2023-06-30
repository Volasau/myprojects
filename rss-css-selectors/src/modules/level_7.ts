import { resultTask } from './functions';

export function setupTask7() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the small oranges';
    }

    const apple = document.createElement('apple');

    const appleSmall1 = document.createElement('apple');
    appleSmall1.classList.add('small');

    const bento = document.createElement('bento');

    const orangeSmall1 = document.createElement('orange');
    orangeSmall1.classList.add('small');
    orangeSmall1.classList.add('dance');

    const plate1 = document.createElement('plate');
    const orange = document.createElement('orange');
    const plate2 = document.createElement('plate');
    const orangeSmall2 = document.createElement('orange');
    orangeSmall2.classList.add('small');
    orangeSmall2.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(apple);
        tableTask.appendChild(appleSmall1);
        tableTask.appendChild(bento);
        bento.appendChild(orangeSmall1);
        tableTask.appendChild(plate1);
        plate1.appendChild(orange);
        tableTask.appendChild(plate2);
        plate2.appendChild(orangeSmall2);
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
    } else {
        console.log('Элемент не найден');
    }

    //////////////////////BLOCK RIGHT///////////////////////
    const level = document.querySelector('.number__level');
    if (level) {
        level.textContent = ' 7';
    }

    const selectorName = document.querySelector('.selector__name');
    if (selectorName) {
        selectorName.textContent = '';
    }

    const selectorTitle = document.querySelector('.selector__title');
    if (selectorTitle) {
        selectorTitle.textContent = 'Combine the Class Selector';
    }

    const syntax = document.querySelector('.syntax');
    if (syntax) {
        syntax.textContent = 'A.className';
    }
    const hint = document.querySelector('.hint');
    if (hint) {
        hint.textContent = 'You can combine the class selector with other selectors, like the type selector.';
    }
    const exemples = document.querySelector('.exemples');
    if (exemples) {
        exemples.textContent = 'ul.important selects all ul elements that have class="important"';
    }

    const exemple = document.querySelector('.exemple');
    if (exemple) {
        exemple.textContent = '#big.wide selects all elements with id="big" that also have class="wide"';
    }

    resultTask('orange.small', 7);
}
