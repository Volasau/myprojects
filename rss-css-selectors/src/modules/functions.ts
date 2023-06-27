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
    } else {
        // console.log('Error');
    }

    // console.log('OK');
}
