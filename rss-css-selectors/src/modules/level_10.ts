import { resultTask } from './functions';

export function setupTask10() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select all the things!';
    }

    const pickleSmall1 = document.createElement('pickle');
    pickleSmall1.classList.add('small');
    pickleSmall1.classList.add('dance');
    const apple = document.createElement('apple');
    apple.classList.add('dance');
    const plate1 = document.createElement('plate');
    plate1.classList.add('dance');
    const orangeSmall = document.createElement('orange');
    orangeSmall.classList.add('small');
    orangeSmall.classList.add('dance');
    const bento1 = document.createElement('bento');
    bento1.classList.add('dance');
    const bento2 = document.createElement('bento');
    bento2.classList.add('dance');
    const orange = document.createElement('orange');
    orange.classList.add('dance');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(bento2);
        bento2.appendChild(orange);
        tableTask.appendChild(pickleSmall1);
        tableTask.appendChild(apple);
        tableTask.appendChild(plate1);
        plate1.appendChild(orangeSmall);
        tableTask.appendChild(bento1);
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
        level.textContent = ' 9';
    }

    const selectorName = document.querySelector('.selector__name');
    if (selectorName) {
        selectorName.textContent = 'Comma Combinator';
    }

    const selectorTitle = document.querySelector('.selector__title');
    if (selectorTitle) {
        selectorTitle.textContent = 'Combine, selectors, with... commas!';
    }

    const syntax = document.querySelector('.syntax');
    if (syntax) {
        syntax.textContent = 'A, B';
    }
    const hint = document.querySelector('.hint');
    if (hint) {
        hint.textContent =
            'Thanks to Shatner technology, this selects all A and B elements. You can combine any selectors this way, and you can specify more than two.';
    }
    const exemples = document.querySelector('.exemples');
    if (exemples) {
        exemples.textContent = 'p, .fun selects all p elements as well as all elements with class="fun"';
    }

    const exemple = document.querySelector('.exemple');
    if (exemple) {
        exemple.textContent = 'a, p, div selects all a, p and div elements';
    }

    resultTask('*', 10);
}
