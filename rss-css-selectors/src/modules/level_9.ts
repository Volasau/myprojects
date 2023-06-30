import { resultTask } from './functions';

export function setupTask9() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = 'Select all the plates and bentos';
    }

    const pickleSmall1 = document.createElement('pickle');
    pickleSmall1.classList.add('small');
    const pickle1 = document.createElement('pickle');
    const plate1 = document.createElement('plate');
    plate1.classList.add('dance');
    const pickle2 = document.createElement('pickle');
    pickle2.classList.add('dance');
    const bento = document.createElement('bento');
    bento.classList.add('dance');
    const pickle3 = document.createElement('pickle');
    pickle3.classList.add('dance');
    const plate2 = document.createElement('plate');
    plate2.classList.add('dance');
    const pickle4 = document.createElement('pickle');
    pickle4.classList.add('dance');
    const pickle5 = document.createElement('pickle');
    const pickleSmall2 = document.createElement('pickle');
    pickleSmall2.classList.add('small');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(pickleSmall1);
        tableTask.appendChild(pickle1);
        tableTask.appendChild(plate1);
        plate1.appendChild(pickle2);
        tableTask.appendChild(bento);
        bento.appendChild(pickle3);
        tableTask.appendChild(plate2);
        plate2.appendChild(pickle4);
        tableTask.appendChild(pickle5);
        tableTask.appendChild(pickleSmall2);
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

    resultTask('plate, bento', 9);
}
