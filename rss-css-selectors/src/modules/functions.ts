export function shakeBlock(element: HTMLElement) {
    element.classList.add('shake-animation');
    setTimeout(() => {
        element.classList.remove('shake-animation');
    }, 1000);
}

/////////////////////////////

export function endTask() {
    const parentElement = document.querySelector('.table__task');
    const childElements = parentElement ? Array.from(parentElement.children) : [];

    const tagsTask = document.querySelector('.tags-task');
    const solutionInput = document.getElementById('solution') as HTMLInputElement;

    if (childElements.length > 0 && tagsTask && solutionInput) {
        childElements.forEach((element) => {
            element.classList.add('fly-away');
            setTimeout(() => {
                element.classList.remove('fly-away');
                element.remove();
            }, 1000);
        });

        if (tagsTask) {
            setTimeout(() => {
                tagsTask.textContent = '';
            }, 1000);
        }
        setTimeout(() => {
            solutionInput.value = '';
        }, 1000);
        setTimeout(() => {
            clearTask();
        }, 1000);
    } else {
        // console.log('Error');
    }

    // console.log('OK');
}

export function clearTask() {
    const Task1 = document.querySelector('.name__tasks');
    if (Task1) {
        Task1.textContent = '';
    }

    const selectorName = document.querySelector('.selector__name');
    if (selectorName) {
        selectorName.textContent = '';
    }

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.innerHTML = '';
    }

    const tagsTask = document.querySelector('.tags-task');
    if (tagsTask) {
        tagsTask.textContent = '';
    }

    const level = document.querySelector('.number__level');
    if (level) {
        level.textContent = '';
    }

    const selectorTitle = document.querySelector('.selector__title');
    if (selectorTitle) {
        selectorTitle.textContent = '';
    }

    const syntax = document.querySelector('.syntax');
    if (syntax) {
        syntax.textContent = '';
    }

    const hint = document.querySelector('.hint');
    if (hint) {
        hint.textContent = '';
    }

    const exemples = document.querySelector('.exemples');
    if (exemples) {
        exemples.textContent = '';
    }
    const exemple = document.querySelector('.exemple');
    if (exemple) {
        exemple.textContent = '';
    }
}
