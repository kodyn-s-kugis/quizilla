// Collection of trivia questions

let questions = {
    theme: [
        {
            history: [
                {
                    question: 'What year was the first iPhone released?',
                    answers: [2005, 2006, 2007, 2009],
                    correct: 2007,
                    askedBefore: false,
                    level: 'easy',
                    points: 10,
                },
                {
                    question:
                        'Which Australian prime minister was preceded and succeeded by Kevin Rudd?',
                    answers: [
                        'Scott morrison',
                        'Tony Abbott',
                        'Julia Gillard',
                        'John Howard',
                    ],
                    correct: 'Julia Gillard',
                    askedBefore: false,
                    level: 'medium',
                    points: 20,
                },
                {
                    question: 'When did WWII end?',
                    answers: [
                        '2 September 1945',
                        '1 July 1945',
                        '23 December 1945',
                        '31 January 1945'
                    ],
                    correct: '2 September 1945',
                    askedBefore: false,
                    level: 'hard',
                    points: 30,
                },
            ],
        },
    ],
};

module.exports = questions;