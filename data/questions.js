// Collection of trivia questions

let questions = {
    theme: [
        {
            history: {
                easy: {
                    questions: [
                        {
                            question: 'What year was the first iPhone released?',
                            answers: [2005, 2006, 2007, 2009],
                            correct: 2007,
                            askedBefore: false,
                        },
                    ],
                    points: 10,
                },
                medium: {
                    questions: [
                        {
                            question:
                                'Which Australian prime minister was preceded and succeeded by Kevin Rudd?',
                            answers: [
                                'Scott Morrison',
                                'Tony Abbott',
                                'Julia Gillard',
                                'John Howard',
                            ],
                            correct: 'Julia Gillard',
                            askedBefore: false,
                        },
                        {
                            question: 'Who was the first woman to win a Nobel Prize?',
                            answers: [
                                'Ada Yonath',
                                'Rosalyn Yalow',
                                'Sigrid Undset',
                                'Marie Curie'
                            ],
                            correct: 'Marie Curie',
                            askedBefore: false,
                        },
                        {
                            question: 'When did the Cold War end?',
                            answers: [
                                '1979',
                                '1989',
                                '1990',
                                '1982'
                            ],
                            correct: '1989',
                            askedBefore: false,
                        },
                    ],
                    points: 20,
                },
                hard: {
                    questions: [
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
                        },
                        {
                            question: 'Who was Australia’s first prime Minister?',
                            answers: [
                                'Edmund Barton',
                                'Alfred Deakin',
                                'Robert Menzies',
                                'John Curtin'
                            ],
                            correct: 'Edmund Barton',
                            askedBefore: false,
                        },
                        {
                            question: 'What happened on 9th November 1989?',
                            answers: [
                                'End of Vietnam war',
                                'Fall of the Berlin Wall',
                                'Eruption of Mount Vesuvio',
                                'Assassination of John F. Kennedy'
                            ],
                            correct: 'Fall of the Berlin Wall',
                            askedBefore: false,
                        },
                        {
                            question: 'According to Greek mythology, who was the first woman on earth?',
                            answers: [
                                'Chthonia',
                                'Xerces',
                                'Pandora',
                                'Hypatia '
                            ],
                            correct: 'Pandora',
                            askedBefore: false,
                        },
                    ],
                    points: 30,
                },
            },
            geography: {
                easy: {
                    questions: [
                        {
                            question: 'What is the capital of Germany?',
                            answers: [
                                'Bonn',
                                'Frankfurt',
                                'Berlin',
                                'Munich'
                            ],
                            correct: 'Berlin',
                            askedBefore: false,
                        },
                        {
                            question: 'What is the capital of Canada?',
                            answers: [
                                'Ottawa',
                                'Quebec City',
                                'Vancouver',
                                'Toronto'
                            ],
                            correct: 'Ottawa',
                            askedBefore: false,
                        },
                        {
                            question: 'What is the smallest country in the world?',
                            answers: [
                                'Maldives',
                                'Monaco',
                                'Tuvalu',
                                'Vatican City'
                            ],
                            correct: 'Vatican City',
                            askedBefore: false,
                        },
                        {
                            question: 'What is the name of the Earth’s largest ocean?',
                            answers: [
                                'The Southern Ocean',
                                'The Atlantic Occan',
                                'The Pacific Ocean',
                                'The Indian Ocean'
                            ],
                            correct: 'The Pacific Ocean',
                            askedBefore: false,
                        },
                        {
                            question: 'What’s the most populous city in the United States?',
                            answers: [
                                'Los Angeles',
                                'New York City',
                                'San Francisco',
                                'Chicago'
                            ],
                            correct: 'New York City',
                            askedBefore: false,
                        },
                    ],
                    points: 10,
                },
                medium: {
                    questions: [
                        {
                            question: 'Which countries is Mount Everest located in?',
                            answers: [
                                'India/Pakistan',
                                'China/Nepal',
                                'Nepal/Tibet',
                                'China/North Korea'
                            ],
                            correct: 'China/Nepal',
                            askedBefore: false,
                        },
                        {
                            question: 'What country has the most pyramids?',
                            answers: [
                                'Egypt',
                                'Syria',
                                'Iran',
                                'Sudan'
                            ],
                            correct: 'Sudan',
                            askedBefore: false,
                        },
                        {
                            question: 'In which European city would you find Orly airport?',
                            answers: [
                                'Berlin',
                                'Paris',
                                'Milan',
                                'Madrid'
                            ],
                            correct: 'Paris',
                            askedBefore: false,
                        },
                    ],
                    points: 20,
                },
                hard: {
                    questions: [
                        {
                            question: 'Where do you find the Elbrus Mountain?',
                            answers: [
                                'Ukraine',
                                'Norway',
                                'Finland',
                                'Russia'
                            ],
                            correct: 'Russia',
                            askedBefore: false,
                        },
                        {
                            question: 'How high is Uluru?',
                            answers: [
                                '298m',
                                '421m',
                                '348m',
                                '564m'
                            ],
                            correct: '348m',
                            askedBefore: false,
                        },
                        {
                            question: 'Which African country was formerly known as Abyssinia?',
                            answers: [
                                'Ethiopia',
                                'Cameroon',
                                'Somalia',
                                'Mozambique'
                            ],
                            correct: 'Ethiopia',
                            askedBefore: false,
                        },
                    ],
                    points: 30,
                },
            },
            science: {
                easy: {
                    questions: [
                        {
                            question: 'Lightning strikes produce which substance?',
                            answers: [
                                'Oxygen',
                                'Ozone',
                                'Water',
                                'Carbon-dioxide'
                            ],
                            correct: 'Ozone',
                            askedBefore: false,
                        },
                        {
                            question: 'Dry ice is a solid form of which substance?',
                            answers: [
                                'Carbon-dioxide',
                                'Carbon-monoxide',
                                'Water',
                                'Hydrogen'
                            ],
                            correct: 'Carbon-dioxide',
                            askedBefore: false,
                        },
                    ],
                    points: 10,
                },
                medium: {
                    questions: [
                        {
                            question: 'Which letter does NOT appear in the periodic table of elements?',
                            answers: [
                                'Y',
                                'J',
                                'H',
                                'P'
                            ],
                            correct: 'J',
                            askedBefore: false,
                        },
                        {
                            question: 'Which planet in the solar system has the highest mountain?',
                            answers: [
                                'Earth',
                                'Venus',
                                'Mercury',
                                'Mars'
                            ],
                            correct: 'Mars',
                            askedBefore: false,
                        },
                        {
                            question: 'Which moon is the largest in the solar system?',
                            answers: [
                                'Earth’s moon',
                                'Callisto',
                                'Ganymede',
                                'Triton'
                            ],
                            correct: 'Ganymede',
                            askedBefore: false,
                        },
                    ],
                    points: 20,
                },
                hard: {
                    questions: [
                        {
                            question: 'Which planet in the solar system has is the hottest?',
                            answers: [
                                'Mercury',
                                'Venus',
                                'Earth',
                                'Mars'
                            ],
                            correct: 'Venus',
                            askedBefore: false,
                        },
                    ],
                    points: 30,
                },
            },
        },
    ],
};

module.exports = questions;