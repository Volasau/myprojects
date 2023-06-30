////////////////////////////////////////////////// ВЫБОР УРОВНЯ ИГРЫ

import { setupTask1 } from './level_1';
import { setupTask2 } from './level_2';
import { setupTask3 } from './level_3';
import { setupTask4 } from './level_4';
import { setupTask5 } from './level_5';
import { setupTask6 } from './level_6';
import { setupTask7 } from './level_7';
import { setupTask8 } from './level_8';
import { setupTask9 } from './level_9';
import { setupTask10 } from './level_10';

export function selectLevel() {
    const levelBtns = document.querySelectorAll('.level__btn');

    levelBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            if (btn.classList.contains('level__1')) {
                if (!task1Completed) {
                    clearTask();
                    setupTask1();
                }
            } else if (btn.classList.contains('level__2')) {
                if (!task2Completed) {
                    clearTask();
                    setupTask2();
                }
            } else if (btn.classList.contains('level__3')) {
                if (!task3Completed) {
                    clearTask();
                    setupTask3();
                }
            } else if (btn.classList.contains('level__4')) {
                if (!task4Completed) {
                    clearTask();
                    setupTask4();
                }
            } else if (btn.classList.contains('level__5')) {
                if (!task5Completed) {
                    clearTask();
                    setupTask5();
                }
            } else if (btn.classList.contains('level__6')) {
                if (!task6Completed) {
                    clearTask();
                    setupTask6();
                }
            } else if (btn.classList.contains('level__7')) {
                if (!task7Completed) {
                    clearTask();
                    setupTask7();
                }
            } else if (btn.classList.contains('level__8')) {
                if (!task8Completed) {
                    clearTask();
                    setupTask8();
                }
            } else if (btn.classList.contains('level__9')) {
                if (!task9Completed) {
                    clearTask();
                    setupTask9();
                }
            } else if (btn.classList.contains('level__10')) {
                if (!task10Completed) {
                    clearTask();
                    setupTask10();
                }
            }
        });
    });
}

////////////////////////////////////////// ПРОВЕРКА РЕЗУЛЬТАТА УРОВНЯ
let task1Completed = false;
let task2Completed = false;
let task3Completed = false;
let task4Completed = false;
let task5Completed = false;
let task6Completed = false;
let task7Completed = false;
let task8Completed = false;
let task9Completed = false;
let task10Completed = false;

export function resultTask(answer: string, levelNumber: number) {
    const solutionInput = document.querySelector('.solution') as HTMLInputElement;
    const submitButton = document.querySelector('.solution__button');
    const placeGame = document.querySelector('.place__game') as HTMLDivElement;
    const winbtn = document.querySelector('.level__' + levelNumber) as HTMLDivElement;

    if (solutionInput && submitButton && placeGame) {
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();

            if (solutionInput.value === answer) {
                answer = 'rsschool';
                endTask();
                if (levelNumber === 1) {
                    task1Completed = true;
                } else if (levelNumber === 2) {
                    task2Completed = true;
                } else if (levelNumber === 3) {
                    task3Completed = true;
                } else if (levelNumber === 4) {
                    task4Completed = true;
                } else if (levelNumber === 5) {
                    task5Completed = true;
                } else if (levelNumber === 6) {
                    task6Completed = true;
                } else if (levelNumber === 7) {
                    task7Completed = true;
                } else if (levelNumber === 8) {
                    task8Completed = true;
                } else if (levelNumber === 9) {
                    task9Completed = true;
                } else if (levelNumber === 10) {
                    task10Completed = true;
                }
                winbtn.classList.add('level__win');
            } else {
                shakeBlock(placeGame);
            }
        });

        solutionInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (solutionInput.value === answer) {
                    answer = 'rsschool';
                    endTask();
                    if (levelNumber === 1) {
                        task1Completed = true;
                    } else if (levelNumber === 2) {
                        task2Completed = true;
                    } else if (levelNumber === 3) {
                        task3Completed = true;
                    } else if (levelNumber === 4) {
                        task4Completed = true;
                    } else if (levelNumber === 5) {
                        task5Completed = true;
                    } else if (levelNumber === 6) {
                        task6Completed = true;
                    } else if (levelNumber === 7) {
                        task7Completed = true;
                    } else if (levelNumber === 8) {
                        task8Completed = true;
                    } else if (levelNumber === 9) {
                        task9Completed = true;
                    } else if (levelNumber === 10) {
                        task10Completed = true;
                    }
                    winbtn.classList.add('level__win');
                } else {
                    shakeBlock(placeGame);
                }
            }
        });
    } else {
        console.log('Элемент solutionInput, submitButton или placeGame не найден.');
    }
}

/////////////////////////////////////////////////// ТРЯСКА ПРИ НЕ ПРАВЕЛЬНОМ ОТВЕТЕ
export function shakeBlock(element: HTMLElement) {
    element.classList.add('shake-animation');
    setTimeout(() => {
        element.classList.remove('shake-animation');
    }, 1000);
}

/////////////////////////////////////////////////// КОНЕЦ УРОВНЯ ПРИ ПРАВЕЛЬНОМ ОТВЕТЕ

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
            clearTask();
        }, 1000);
    }
}

/////////////////////////////////////////////////////// ОЧИСТКА ПОЛЕЙ
export function clearTask() {
    const solutionInput = document.querySelector('.solution') as HTMLInputElement;
    if (solutionInput) {
        solutionInput.value = '';
    }

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

//////////////////////////////////////// ПРАВЫЙ БЛОК

interface BlockContent {
    levelText: string;
    selectorNameText: string;
    selectorTitleText: string;
    syntaxText: string;
    hintText: string;
    exemplesText: string;
    exempleText: string;
}

export function writeInBlockRight(block: BlockContent) {
    const level = document.querySelector('.number__level');
    if (level) {
        level.textContent = block.levelText;
    }

    const selectorName = document.querySelector('.selector__name');
    if (selectorName) {
        selectorName.textContent = block.selectorNameText;
    }

    const selectorTitle = document.querySelector('.selector__title');
    if (selectorTitle) {
        selectorTitle.textContent = block.selectorTitleText;
    }

    const syntax = document.querySelector('.syntax');
    if (syntax) {
        syntax.textContent = block.syntaxText;
    }

    const hint = document.querySelector('.hint');
    if (hint) {
        hint.textContent = block.hintText;
    }

    const exemples = document.querySelector('.exemples');
    if (exemples) {
        exemples.textContent = block.exemplesText;
    }

    const exemple = document.querySelector('.exemple');
    if (exemple) {
        exemple.textContent = block.exempleText;
    }
}

//////////////////////////////////////////////// ОТРИСОВКА ТЕГОВ ТАСКА

export function writeTags() {
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
}

///////////////////////////////////////////////////////// ПОКАЗАТЬ ТЕГ ПРИ НАВОДКЕ МЫШИ

export function showTag() {
    const tableTask = document.querySelector('.table__task');

    if (tableTask) {
        const childTable = tableTask.querySelectorAll<HTMLElement>('*');
        const tag = document.querySelector<HTMLElement>('.tag__text');
        if (tag) {
            childTable.forEach((elem) => {
                elem.addEventListener('mouseover', (event) => {
                    const target = event.target as HTMLElement;
                    if (target == elem) {
                        tag.textContent = target.outerHTML;
                        tag.style.display = 'block';
                    }
                });
                elem.addEventListener('mouseout', () => {
                    tag.style.display = 'none';
                });
            });
        }
    }
}
