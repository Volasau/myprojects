import { resultTask } from './functions';

export function setupTask2() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the bento boxes';
    }

    const bento1 = document.createElement('bento');
    bento1.classList.add('dance');

    const plate2 = document.createElement('plate');

    const bento2 = document.createElement('bento');
    bento2.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(bento1);
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
        level.textContent = ' 2';
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

    resultTask('bento', 2);
}
