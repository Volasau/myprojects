export const blocks = [
    {
        levelText: ' 1',
        selectorNameText: 'Type Selector',
        selectorTitleText: 'Select elements by their type',
        syntaxText: 'A',
        hintText:
            'Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.',
        exemplesText: 'ul.important selects all ul elements that have class="important"',
        exempleText: '#big.wide selects all elements with id="big" that also have class="wide"',
    },
    {
        levelText: ' 2',
        selectorNameText: 'Type Selector',
        selectorTitleText: 'Select elements by their type',
        syntaxText: 'A',
        hintText:
            'Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.',
        exemplesText: 'div selects all div elements.',
        exempleText: 'p selects all p elements.',
    },
    {
        levelText: ' 3',
        selectorNameText: 'ID Selector',
        selectorTitleText: 'Select elements with an ID',
        syntaxText: '#id',
        hintText:
            'Selects the element with a specific id. You can also combine the ID selector with the type selector.',
        exemplesText: '#cool selects any element with id="cool"',
        exempleText: 'ul#long selects ul id="long"',
    },
    {
        levelText: ' 4',
        selectorNameText: 'Descendant Selector',
        selectorTitleText: 'Select an element inside another element',
        syntaxText: 'A  B',
        hintText: 'Selects all B inside of A. B is called a descendant because it is inside of another element.',
        exemplesText: 'p  strong selects all strong elements that are inside of any p',
        exempleText: '#fancy  span selects any span elements that are inside of the element with id="fancy"',
    },
    {
        levelText: ' 5',
        selectorNameText: '',
        selectorTitleText: 'Combine the Descendant & ID Selectors',
        syntaxText: '#id  A',
        hintText: 'You can combine any selector with the descendent selector.',
        exemplesText: '#cool span selects all span elements that are inside of elements with id="cool"',
        exempleText: '',
    },
    {
        levelText: ' 6',
        selectorNameText: 'Class Selector',
        selectorTitleText: 'Select elements by their class',
        syntaxText: '.classname',
        hintText:
            'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
        exemplesText: '.neato selects all elements with',
        exempleText: 'class="neato"',
    },
    {
        levelText: ' 7',
        selectorNameText: '',
        selectorTitleText: 'Combine the Class Selector',
        syntaxText: 'A.className',
        hintText: 'You can combine the class selector with other selectors, like the type selector.',
        exemplesText: 'ul.important selects all ul elements that have class="important"',
        exempleText: '#big.wide selects all elements with id="big" that also have class="wide"',
    },

    {
        levelText: ' 8',
        selectorNameText: '',
        selectorTitleText: 'You can do it...',
        syntaxText: 'Put your back into it!',
        hintText: 'Combine what you learned in the last few levels to solve this one!',
        exemplesText: '',
        exempleText: '',
    },

    {
        levelText: ' 9',
        selectorNameText: 'Comma Combinator',
        selectorTitleText: 'Combine, selectors, with... commas!',
        syntaxText: 'A, B',
        hintText:
            'Thanks to Shatner technology, this selects all A and B elements. You can combine any selectors this way, and you can specify more than two.',
        exemplesText: 'p, .fun selects all p elements as well as all elements with class="fun"',
        exempleText: 'a, p, div selects all a, p and div elements',
    },

    {
        levelText: ' 10',
        selectorNameText: 'The Universal Selector',
        selectorTitleText: 'You can select everything!',
        syntaxText: '*',
        hintText: 'You can select all elements with the universal selector!',
        exemplesText: 'p * selects any element inside all p elements.',
        exempleText: '',
    },
];

export const answers = [
    'circle',
    'hexagon',
    '#border',
    'circle green',
    '#border square',
    '.small',
    'yellow.small',
    'hexagon yellow.small',
    'circle, hexagon',
    '*',
];
