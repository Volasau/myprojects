import { resultTask } from './functions';

export function setupTask6() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select the small apples';
    }

    const apple = document.createElement('apple');
    const appleSmall1 = document.createElement('apple');
    appleSmall1.classList.add('dance');
    appleSmall1.classList.add('small');
    const plate1 = document.createElement('plate');
    const appleSmall2 = document.createElement('apple');
    appleSmall2.classList.add('dance');
    appleSmall2.classList.add('small');

    const plate2 = document.createElement('plate');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(apple);
        tableTask.appendChild(appleSmall1);
        tableTask.appendChild(plate1);
        plate1.appendChild(appleSmall2);
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
    } else {
        console.log('Элемент не найден');
    }

    //////////////////////BLOCK RIGHT///////////////////////
    const level = document.querySelector('.number__level');
    if (level) {
        level.textContent = ' 6';
    }

    const selectorName = document.querySelector('.selector__name');
    if (selectorName) {
        selectorName.textContent = 'Class Selector';
    }

    const selectorTitle = document.querySelector('.selector__title');
    if (selectorTitle) {
        selectorTitle.textContent = 'Select elements by their class';
    }

    const syntax = document.querySelector('.syntax');
    if (syntax) {
        syntax.textContent = '.classname';
    }
    const hint = document.querySelector('.hint');
    if (hint) {
        hint.textContent =
            'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.';
    }
    const exemples = document.querySelector('.exemples');
    if (exemples) {
        exemples.textContent = '.neato selects all elements with';
    }

    const exemple = document.querySelector('.exemple');
    if (exemple) {
        exemple.textContent = 'class="neato"';
    }

    resultTask('.small', 6);
}
