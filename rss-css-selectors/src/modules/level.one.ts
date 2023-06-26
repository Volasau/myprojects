// import hljs from 'highlight.js/lib/common';

export function setupTask1() {
    const plate1 = document.createElement('plate');
    plate1.classList.add('plate');

    const plate2 = document.createElement('plate');
    plate2.classList.add('plate');

    const tableTask = document.querySelector('.table__task');
    if (tableTask) {
        tableTask.appendChild(plate1);
        tableTask.appendChild(plate2);
    }

    const elem = document.querySelector('.table__task');
    if (elem) {
        const htmlCode = elem.outerHTML;
        const tagsTask = document.querySelector('.tags-task');
        if (tagsTask) {
            tagsTask.textContent = htmlCode;
        } else {
            console.log('Error tags-task');
        }
        // console.log(htmlCode);
    } else {
        console.log('Error htmlCode');
    }
}

const answerOne = 'plate';

document.addEventListener('DOMContentLoaded', function () {
    const solutionInput = document.querySelector('.solution') as HTMLInputElement;
    const submitButton = document.querySelector('.solution__button');
    const placeGame = document.querySelector('.place__game') as HTMLDivElement;

    if (solutionInput && submitButton && placeGame) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();

            const userInput = solutionInput.value;
            // console.log(userInput);

            if (userInput === answerOne) {
                newTask();
            } else {
                shakeBlock(placeGame);
            }
        });

        solutionInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();

                const userInput = solutionInput.value;
                // console.log(userInput);

                if (userInput === answerOne) {
                    newTask();
                } else {
                    shakeBlock(placeGame);
                }
            }
        });
    } else {
        console.log('Error');
    }
});

function newTask() {
    const plate1 = document.querySelector('.plate:nth-child(1)') as HTMLElement;
    const plate2 = document.querySelector('.plate:nth-child(2)') as HTMLElement;
    const tagsTask = document.querySelector('.tags-task');
    const solutionInput = document.getElementById('solution') as HTMLInputElement;

    if (plate1 && plate2 && tagsTask && solutionInput) {
        plate1.classList.add('fly-away');
        plate2.classList.add('fly-away');

        setTimeout(() => {
            plate1.remove();
            plate2.remove();
            if (tagsTask) {
                tagsTask.textContent = '';
            }
            solutionInput.value = '';
        }, 1000);
    }

    // console.log('ОК');
}

function shakeBlock(element: HTMLElement) {
    element.classList.add('shake-animation');
    setTimeout(() => {
        element.classList.remove('shake-animation');
    }, 1000);
}
