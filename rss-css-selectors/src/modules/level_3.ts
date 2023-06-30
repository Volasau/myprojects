import { resultTask } from './functions';

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

    resultTask('#fancy', 3);
}
