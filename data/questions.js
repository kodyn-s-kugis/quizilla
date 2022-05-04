// Collection of trivia questions


let questions = {
        theme: [
            {
                geography: {
                    easy: {
                        questions: [
                            {
                                question: 'What is the capital of Germany?',
                                answers: [
                                    'Bonn',
                                    'Frankfurt',
                                    'Berlin',
                                    'Munich',
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
                                    'Toronto',
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
                                    'Vatican City',
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
                                    'The Indian Ocean',
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
                                    'Chicago',
                                ],
                                correct: 'New York City',
                                askedBefore: false,
                            },
                            {
                                question: 'Which River flows through Melbourne, Australia?',
                                answers: [
                                    'Murray River',
                                    'Darling River',
                                    'Yarra River',
                                    'Douglas River',
                                ],
                                correct: 'Yarra River',
                                askedBefore: false,
                            },
                            {
                                question: 'Where do you find the Acropolis?',
                                answers: [
                                    'Thessaloniki',
                                    'Athens',
                                    'Heraklion',
                                    'Kalamata',
                                ],
                                correct: 'Athens',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the capital of France?',
                                answers: [
                                    'Nice',
                                    'Nantes',
                                    'Marseille',
                                    'Paris',
                                ],
                                correct: 'Paris',
                                askedBefore: false,
                            },
                            {
                                question: 'California is geographically located where in the USA?',
                                answers: [
                                    'North-West',
                                    'South-West',
                                    'North-East',
                                    'South-East',
                                ],
                                correct: 'South-West',
                                askedBefore: false,
                            },
                            {
                                question: 'Which ocean is New Zealand located in?',
                                answers: [
                                    'Pacific',
                                    'Southern',
                                    'Indian',
                                    'Atlantic',
                                ],
                                correct: 'Pacific',
                                askedBefore: false,
                            },
                            {
                                question: 'Which continent is Ethiopia located in?',
                                answers: [
                                    'Asia',
                                    'South America',
                                    'North America',
                                    'Africa',
                                ],
                                correct: 'Africa',
                                askedBefore: false,
                            },
                            {
                                question: 'Which country has the largest area?',
                                answers: [
                                    'Canada',
                                    'Russia',
                                    'China',
                                    'India',
                                ],
                                correct: 'Russia',
                                askedBefore: false,
                            },
                            {
                                question: 'Which of the following is NOT in the Pacific Ocean?',
                                answers: [
                                    'Fiji',
                                    'Sri Lanka',
                                    'Vanuatu',
                                    'Solomon Islands',
                                ],
                                correct: 'Sri Lanka',
                                askedBefore: false,
                            },
                            {
                                question: 'Which country is said to be shaped like a boot?',
                                answers: [
                                    'Morrocco',
                                    'Greece',
                                    'Italy',
                                    'France',
                                ],
                                correct: 'Italy',
                                askedBefore: false,
                            },
                            {
                                question: 'Bolivia is located in which continent?',
                                answers: [
                                    'South America',
                                    'Europe',
                                    'Africa',
                                    'Asia',
                                ],
                                correct: 'South America',
                                askedBefore: false,
                            },
                        ],
                        points: 10,
                    }, // full no points in questions
                    medium: {
                        questions: [
                            {
                                question: 'Which countries is Mount Everest located in?',
                                answers: [
                                    'India/Pakistan',
                                    'China/Nepal',
                                    'Nepal/Tibet',
                                    'China/North Korea',
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
                                    'Sudan',
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
                                    'Madrid',
                                ],
                                correct: 'Paris',
                                askedBefore: false,
                            },
                            {
                                question: 'Saskatchewan is a state/province of which country?',
                                answers: [
                                    'Canada',
                                    'Russia',
                                    'France',
                                    'Pakistan',
                                ],
                                correct: 'Canada',
                                askedBefore: false,
                            },
                            {
                                question: 'Costa Rica and Colombia are bridged by which country?',
                                answers: [
                                    'Venezuela',
                                    'Ecuador',
                                    'Panama',
                                    'Guatemala',
                                ],
                                correct: 'Panama',
                                askedBefore: false,
                            },
                            {
                                question: 'T Burj Khalifa is located in which city?',
                                answers: [
                                    'Dubai',
                                    'Abu Dhabi',
                                    'Muscat',
                                    'Doha',
                                ],
                                correct: 'Dubai',
                                askedBefore: false,
                            },
                            {
                                question: 'What two countries border directly north of Hungary?',
                                answers: [
                                    'Slovakia and Ukraine',
                                    'Romania and Serbia',
                                    'Ukraine and Romania',
                                    'Slovakia and Austria',
                                ],
                                correct: 'Slovakia and Ukraine',
                                askedBefore: false,
                            },
                            {
                                question: 'In what ocean is the Bermuda Triangle located?',
                                answers: [
                                    'Pacific',
                                    'Southern',
                                    'Indian',
                                    'Atlantic',
                                ],
                                correct: 'Atlantic',
                                askedBefore: false,
                            },
                            {
                                question: 'What is known as the deepest point in Earth’s oceans?',
                                answers: [
                                    'Mariana Trench',
                                    'Tonga Trench',
                                    'Kuril–Kamchatka Trench',
                                    'Farallon Trench',
                                ],
                                correct: 'Mariana Trench',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the name of the world’s largest island?',
                                answers: [
                                    'Barbados',
                                    'Socotra',
                                    'Greenland',
                                    'Madagascar',
                                ],
                                correct: 'Greenland',
                                askedBefore: false,
                            },
                            {
                                question: 'Niagara falls is between which US state and Canadian province?',
                                answers: [
                                    'Pennsylvania and Quebec',
                                    'Pennsylvania and Ontario',
                                    'New York and Quebec',
                                    'New York and Ontario',
                                ],
                                correct: 'New York and Ontario',
                                askedBefore: false,
                            },
                            {
                                question: 'The Lord of The Rings trilogy was filmed in what country?',
                                answers: [
                                    'Australia',
                                    'New Zealand',
                                    'England',
                                    'Ireland',
                                ],
                                correct: 'New Zealand',
                                askedBefore: false,
                            },
                            {
                                question: 'Which waterfall is the world\'s highest?',
                                answers: [
                                    'Yumbilla Falls',
                                    'Tres Hermanas Falls',
                                    'Victoria Falls',
                                    'Angel Falls',
                                ],
                                correct: 'Angel Falls',
                                askedBefore: false,
                            },
                            {
                                question: 'Which mountain peak is the second-highest above sea level in the world?',
                                answers: [
                                    'Mt. Everest',
                                    'K2',
                                    'Lhotse',
                                    'Kangchenjunga',
                                ],
                                correct: 'K2',
                                askedBefore: false,
                            },
                            {
                                question: 'What country formerly ruled Iceland?',
                                answers: [
                                    'Denmark',
                                    'Belgium',
                                    'Russia',
                                    'The Netherlands',
                                ],
                                correct: 'Denmark',
                                askedBefore: false,
                            },
                        ],
                        points: 20,
                    }, // full no points in questions
                    hard: {
                        questions: [
                            {
                                question: 'Where do you find the Elbrus Mountain?',
                                answers: [
                                    'Ukraine',
                                    'Norway',
                                    'Finland',
                                    'Russia',
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
                                    '564m',
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
                                    'Mozambique',
                                ],
                                correct: 'Ethiopia',
                                askedBefore: false,
                            },
                            {
                                question: 'Which is the largest continent by area?',
                                answers: [
                                    'Asia',
                                    'Antarctica',
                                    'North America',
                                    'Africa',
                                ],
                                correct: 'Asia',
                                askedBefore: false,
                            },
                            {
                                question: 'How many countries sit along the equator?',
                                answers: [
                                    '9',
                                    '11',
                                    '13',
                                    '15',
                                ],
                                correct: '13',
                                askedBefore: false,
                            },
                            {
                                question: 'Brazil shares a border with every South American country but two. Can you name these two?',
                                answers:
                                    [
                                        'Ecuador and Peru',
                                        'Guyana and Venezuela',
                                        'Uruguay and Argentina',
                                        'Chile and Ecuador',
                                    ],
                                correct: 'Chile and Ecuador',
                                askedBefore: false,
                            },
                            {
                                question: 'Which country has the most islands?',
                                answers: [
                                    'Sweden',
                                    'Phillippines',
                                    'Norway',
                                    'Indonesia',
                                ],
                                correct: 'Sweden',
                                askedBefore: false,
                            },
                            {
                                question: 'In what city are the Spanish Steps located?',
                                answers: [
                                    'Madrid',
                                    'Porto',
                                    'Rome',
                                    'Naples',
                                ],
                                correct: 'Rome',
                                askedBefore: false,
                            },
                            {
                                question: 'Which Australian city has the largest area?',
                                answers: [
                                    'Sydney',
                                    'Brisbane',
                                    'Melbourne',
                                    'Perth',
                                ],
                                correct: 'Brisbane',
                                askedBefore: false,
                            },
                            {
                                question: 'What place is known as the largest micro-continent?',
                                answers: [
                                    'Barbados',
                                    'Kerguelen Plateau',
                                    'Greenland',
                                    'Madagascar',
                                ],
                                correct: 'Madagascar',
                                askedBefore: false,
                            },
                            {
                                question: 'How many countries are there in Africa?',
                                answers: [
                                    '54',
                                    '55',
                                    '56',
                                    '57',
                                ],
                                correct: '54',
                                askedBefore: false,
                            },
                            {
                                question: 'Which country is home to the most active volcanos?',
                                answers: [
                                    'USA',
                                    'Japan',
                                    'Indonesia',
                                    'Chile',
                                ],
                                correct: 'Indonesia',
                                askedBefore: false,
                            },
                            {
                                question: 'Which country is nicknamed "The cockpit of Europe?',
                                answers: [
                                    'Netherlands',
                                    'Belgium',
                                    'Denmark',
                                    'Germany',
                                ],
                                correct: 'Belgium',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the only sea without any coasts?',
                                answers: [
                                    'Tasman Sea',
                                    'Sargasso Sea',
                                    'Celebes Sea',
                                    'Mediterranean Sea',
                                ],
                                correct: 'Sargasso Sea',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the driest place on Earth?',
                                answers: [
                                    'Atacama Desert',
                                    'Kufra, Libya',
                                    'McMurdo, Antactica',
                                    'Sahara Desert',
                                ],
                                correct: 'McMurdo, Antactica',
                                askedBefore: false,
                            },

                        ],
                        points: 30,
                    }, // full no points in questions
                }, // full no points in questions
                history: {
                    easy: {
                        questions: [
                            {
                                question: 'What year was the first iPhone released?',
                                answers: [
                                    '2005',
                                    '2006',
                                    '2007',
                                    '2009',
                                ],
                                correct: '2007',
                                askedBefore: false,
                            },
                            {
                                question: 'Which year was the first moon landing?',
                                answers: [
                                    '1958',
                                    '1971',
                                    '1969',
                                    '1959',
                                ],
                                correct: '1969',
                                askedBefore: false,
                            },
                            {
                                question: 'What year did World War I start?',
                                answers: [
                                    '1913',
                                    '1914',
                                    '1915',
                                    '1916',
                                ],
                                correct: '1914',
                                askedBefore: false,
                            },
                            {
                                question: 'Who was the leader of the Nazi Party?',
                                answers: [
                                    'Adolf Eichmann',
                                    'Jean Racine',
                                    'Reinhard Heydrich',
                                    'Adolf Hitler',
                                ],
                                correct: 'Adolf Hitler',
                                askedBefore: false,
                            },
                            {
                                question: 'In which year was Australia discovered?',
                                answers: [
                                    '1606',
                                    '1492',
                                    '1886',
                                    '1642',
                                ],
                                correct: '1606',
                                askedBefore: false,
                            },
                            {
                                question: 'What year did George W. Bush invade Iraq?',
                                answers: [
                                    '2002',
                                    '2003',
                                    '2004',
                                    '2005',
                                ],
                                correct: '2003',
                                askedBefore: false,
                            },
                            {
                                question: 'Who is considered the "Enlightener of Ireland?',
                                answers: [
                                    'St. Patrick',
                                    'St. Andrew',
                                    'St. Geroge',
                                    'St. Peter',
                                ],
                                correct: 'St. Patrick',
                                askedBefore: false,
                            },
                            {
                                question: 'Which famous ship was considered "unsinkable"?',
                                answers: [
                                    'USS Arizona',
                                    'The Endeavour',
                                    'Santa Maria',
                                    'Titanic',
                                ],
                                correct: 'Titanic',
                                askedBefore: false,
                            },
                            {
                                question: 'What year did the Titanic sink?',
                                answers: [
                                    '1910',
                                    '1912',
                                    '1914',
                                    '1916',
                                ],
                                correct: '1912',
                                askedBefore: false,
                            },
                            {
                                question: 'Which ship did Captain Cook sail in during his first world Voyage?',
                                answers: [
                                    'HMS Discovery',
                                    'HMS Resolution',
                                    'HMS Endeavour',
                                    'HMS Eagle',
                                ],
                                correct: 'HMS Endeavour',
                                askedBefore: false,
                            },
                            {
                                question: 'The Falklands War was between Argentina and who?',
                                answers: [
                                    'Ireland',
                                    'United Kingdom',
                                    'Russia',
                                    'USA',
                                ],
                                correct: 'United Kingdom',
                                askedBefore: false,
                            },
                            {
                                question: 'In the US Civil War, what colour did the North wear?',
                                answers: [
                                    'Navy Blue',
                                    'Grey',
                                    'Dark Green',
                                    'Burgundy',
                                ],
                                correct: 'Navy Blue',
                                askedBefore: false,
                            },
                            {
                                question: 'Muhammad founded which world religion?',
                                answers: [
                                    'Hindu',
                                    'Islam',
                                    'Buddhism',
                                    'Taoism',
                                ],
                                correct: 'Islam',
                                askedBefore: false,
                            },
                            {
                                question: 'Who is credited for having invented the telephone?',
                                answers: [
                                    'Louis Braille',
                                    'Samuel Morse',
                                    'Alexander Graham Bell',
                                    'Thomas Edison',
                                ],
                                correct: 'Alexander Graham Bell',
                                askedBefore: false,
                            },
                            {
                                question: 'Which of the following is NOT a theory for the extinction of the disnosaurs?',
                                answers: [
                                    'Asteroid Impact',
                                    'Food Shortage',
                                    'Hunted by other animals',
                                    'Climate Change',
                                ],
                                correct: 'Hunted by other animals',
                                askedBefore: false,
                            },
                        ],
                        points: 10,
                    }, // full no points in questions
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
                                    'Marie Curie',
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
                                    '1982',
                                ],
                                correct: '1989',
                                askedBefore: false,
                            },
                            {
                                question: 'Who was the first European to land in Australia?',
                                answers: [
                                    'James Cook',
                                    'Willem Janszoon',
                                    'Christopher Columbus',
                                    'Abel Tasman',
                                ],
                                correct: 'Willem Janszoon',
                                askedBefore: false,
                            },
                            {
                                question: 'Which country gifted the USA the Statue of Liberty?',
                                answers: [
                                    'England',
                                    'France',
                                    'Hungary',
                                    'Denmark',
                                ],
                                correct: 'France',
                                askedBefore: false,
                            },
                            {
                                question: 'Nelson Mandela was released from prison in what year?',
                                answers: [
                                    '1988',
                                    '1989',
                                    '1990',
                                    '1991',
                                ],
                                correct: '1990',
                                askedBefore: false,
                            },
                            {
                                question: 'In which town was Jesus born?',
                                answers: [
                                    'Jericho',
                                    'Bethlehem',
                                    'Damascus',
                                    'Nineveh',
                                ],
                                correct: 'Bethlehem',
                                askedBefore: false,
                            },
                            {
                                question: 'How many years did the 100 years war last?',
                                answers: [
                                    '100 years',
                                    '115 years',
                                    '116 years',
                                    '124 years',
                                ],
                                correct: '116 years ',
                                askedBefore: false,
                            },
                            {
                                question: 'What was the name of the research ship Charles Darwin travelled with?',
                                answers: [
                                    'The Beagle',
                                    'Santa Maria',
                                    'Discovery',
                                    'The Eagle',
                                ],
                                correct: 'The Beagle',
                                askedBefore: false,
                            },
                            {
                                question: 'Greenland was a colony of which country until 1981?',
                                answers: [
                                    'Norway',
                                    'Denmark',
                                    'Sweden',
                                    'Iceland',
                                ],
                                correct: 'Denmark',
                                askedBefore: false,
                            },
                            {
                                question: 'How many days in a week were there in ancient Roman times?',
                                answers: [
                                    '5',
                                    '6',
                                    '7',
                                    '8',
                                ],
                                correct: '8',
                                askedBefore: false,
                            },
                            {
                                question: 'How many U.S. Presidents have been assassinated?',
                                answers: [
                                    '2',
                                    '3',
                                    '4',
                                    '5',
                                ],
                                correct: '4',
                                askedBefore: false,
                            },
                            {
                                question: 'Which world leader is famous for his \"Little Red Book\"?',
                                answers: [
                                    'Josef Stalin',
                                    'Mao Tse-tung',
                                    'Che Guevara',
                                    'Franklin Roosevelt',
                                ],
                                correct: 'Mao Tse-tung',
                                askedBefore: false,
                            },
                            {
                                question: 'Which year did the first Space Shuttle go into space?',
                                answers: [
                                    '1981',
                                    '1983',
                                    '1985',
                                    '1989',
                                ],
                                correct: '1981',
                                askedBefore: false,
                            },
                            {
                                question: 'Which Russian astronaut was the first man to conduct a spacewalk?',
                                answers: [
                                    'Yuri Gagarin',
                                    'Alexey Leonov',
                                    'Pavel Popovich',
                                    'Anton Shkaplerov',
                                ],
                                correct: 'Alexey Leonov',
                                askedBefore: false,
                            },
                        ],
                        points: 20,
                    }, // full no points in questions
                    hard: {
                        questions: [
                            {
                                question: 'When did WWII end?',
                                answers: [
                                    '2 September 1945',
                                    '1 July 1945',
                                    '23 December 1945',
                                    '31 January 1945',
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
                                    'John Curtin',
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
                                    'Assassination of John F. Kennedy',
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
                                    'Hypatia',
                                ],
                                correct: 'Pandora',
                                askedBefore: false,
                            },
                            {
                                question: 'What was the first city to reach a population of one million?',
                                answers: [
                                    'London',
                                    'Athens',
                                    'Beijing',
                                    'Rome',
                                ],
                                correct: 'Rome',
                                askedBefore: false,
                            },
                            {
                                question: 'The world\'s first postage stamp was introduced in what year?',
                                answers: [
                                    '1840',
                                    '1880',
                                    '1900',
                                    '1910',
                                ],
                                correct: '1840',
                                askedBefore: false,
                            },
                            {
                                question: 'In which year were X-rays discovered?',
                                answers: [
                                    '1884',
                                    '1914',
                                    '1895',
                                    '1875',
                                ],
                                correct: '1895',
                                askedBefore: false,
                            },
                            {
                                question: 'When did Mao Tse-tung come to power?',
                                answers: [
                                    '1948',
                                    '1950',
                                    '1942',
                                    '1949',
                                ],
                                correct: '1949',
                                askedBefore: false,
                            },
                            {
                                question: 'Which Greek historian is known as the “Father of History”?',
                                answers: [
                                    'Herodotus',
                                    'Socrates',
                                    'Plato',
                                    'Aristotle',
                                ],
                                correct: 'Herodotus',
                                askedBefore: false,
                            },
                            {
                                question: 'In what year did humans put the first satellite into orbit?',
                                answers: [
                                    '1961',
                                    '1956',
                                    '1957',
                                    '1960',
                                ],
                                correct: '1957',
                                askedBefore: false,
                            },
                            {
                                question: 'Rome was founded in which year?',
                                answers: [
                                    '790 BC',
                                    '753 BC',
                                    '654 BC',
                                    '689 BC',
                                ],
                                correct: '753 BC',
                                askedBefore: false,
                            },
                            {
                                question: 'Which country was the first to allow women to vote?',
                                answers: [
                                    'New Zealand',
                                    'Austria',
                                    'The Netherlands',
                                    'Australia',
                                ],
                                correct: 'New Zealand',
                                askedBefore: false,
                            },
                            {
                                question: 'The Incan Empire is located in which modern-day country?',
                                answers: [
                                    'Chile',
                                    'Peru',
                                    'Columbia',
                                    'Bolivia',
                                ],
                                correct: 'Peru',
                                askedBefore: false,
                            },
                            {
                                question: 'What year was the United States Declaration of Independence signed?',
                                answers: [
                                    '1778',
                                    '1776',
                                    '1781',
                                    '1769',
                                ],
                                correct: '1776',
                                askedBefore: false,
                            },
                            {
                                question: 'Which country was Josef Stalin born in?',
                                answers: [
                                    'Russia',
                                    'Georgia',
                                    'Ukraine',
                                    'Belarus',
                                ],
                                correct: 'Georgia',
                                askedBefore: false,
                            },

                        ],
                        points: 30,
                    }, // full no points in questions
                }, // full no points in questions
                maf: {
                    easy: {
                        questions: [
                            {
                                question: 'What is the name of Batman’s butler?',
                                answers: [
                                    'Vincent',
                                    'Charles',
                                    'Alfred',
                                    'Winston',
                                ],
                                correct: 'Alfred',
                                askedBefore: false,
                            },
                            {
                                question: 'Who painted the Mona Lisa?',
                                answers: [
                                    'Vincent van Gogh',
                                    'Leonardo Da Vinci',
                                    'Michelangelo',
                                    'Giovanni Bellini',
                                ],
                                correct: 'Leonardo Da Vinci',
                                askedBefore: false,
                            },
                            {
                                question: 'Who wrote the play Hamlet, A Midsummer Night\'s Dream and MacBeth?',
                                answers: [
                                    'William Shakespeare',
                                    'Jean Racine',
                                    'Aphra Behn',
                                    'Christopher Marlowe',
                                ],
                                correct: 'William Shakespeare',
                                askedBefore: false,
                            },
                            {
                                question: 'Who sang “We will rock you!”?',
                                answers: [
                                    'Metallica',
                                    'AC/DC',
                                    'Queen',
                                    'Meat Loaf',
                                ],
                                correct: 'Queen',
                                askedBefore: false,
                            },
                            {
                                question: 'Nirvana\'s "Nevermind" album was released in what year?',
                                answers: [
                                    '1990',
                                    '1991',
                                    '1992',
                                    '1993',
                                ],
                                correct: '1991',
                                askedBefore: false,
                            },
                            {
                                question: 'Michael Jackson\'s "Thriller" album was released in what year? ',
                                answers: [
                                    '1980',
                                    '1981',
                                    '1982',
                                    '1983',
                                ],
                                correct: '1982',
                                askedBefore: false,
                            },
                            {
                                question: 'Jim Morrison performed in which band?',
                                answers: [
                                    'The Beatles',
                                    'MC5',
                                    'The Doors',
                                    'The Kinks'
                                ],
                                correct: 'The Doors',
                                askedBefore: false,
                            },
                            {
                                question: 'Which British girl group had a member by the name of Mel B?',
                                answers: [
                                    'All Saints',
                                    'Atomic Kitten',
                                    'Sugababes',
                                    'Spice Girls'
                                ],
                                correct: 'Spice Girls',
                                askedBefore: false,
                            },
                            {
                                question: 'Spiderman is the superhero identity of who?',
                                answers: [
                                    'Barry Allen',
                                    'Clark Kent',
                                    'Tony Stark',
                                    'Peter Parker',
                                ],
                                correct: 'Peter Parker',
                                askedBefore: false,
                            },
                            {
                                question: 'MC Hammer is known for "U Can\'t _____"? (fill the blank)',
                                answers: [
                                    'Play Me',
                                    'Stop Me',
                                    'Touch This',
                                    'Break This',
                                ],
                                correct: 'Touch This',
                                askedBefore: false,
                            },
                            {
                                question: 'Famous for painting a soup can is which pop artist?',
                                answers: [
                                    'Keith Haring',
                                    'Tom Wesselmann',
                                    'Roy Lichtenstein',
                                    'Andy Warhol',
                                ],
                                correct: 'Andy Warhol',
                                askedBefore: false,
                            },
                            {
                                question: 'Who painted "The Starry Night"?',
                                answers: [
                                    'Pablo Picasso',
                                    'Vincent van Gogh',
                                    'Claude Monet',
                                    'Andy Warhol',
                                ],
                                correct: 'Vincent van Gogh',
                                askedBefore: false,
                            },
                            {
                                question: 'Finish this song line by Britney Spears: "Hit me baby _______" (fill in the blank)',
                                answers: [
                                    'One more time',
                                    'Just like that',
                                    'Like yo momma',
                                    'Like no other',
                                ],
                                correct: 'One more time',
                                askedBefore: false,
                            },
                            {
                                question: '"Peaches", "Lump", and "Mach 5" are performed by which band?',
                                answers: [
                                    'The Cranberries',
                                    'Presidents of the United States of America',
                                    'Butthole Surfers',
                                    'Weezer',
                                ],
                                correct: 'Presidents of the United States of America',
                                askedBefore: false,
                            },
                            {
                                question: 'Slash played guitar for which of the following?',
                                answers: [
                                    'Metallica',
                                    'Anthrax',
                                    'Iron maiden',
                                    'Guns N Roses',
                                ],
                                correct: 'Guns N Roses',
                                askedBefore: false,
                            },
                        ],
                        points: 10,
                    }, // full no points in questions
                    medium: {
                        questions: [
                            {
                                question: 'Which year did Elvis Presley die?',
                                answers: [
                                    '1973',
                                    '1975',
                                    '1977',
                                    '1979',
                                ],
                                correct: '1977',
                                askedBefore: false,
                            },
                            {
                                question: 'Which author wrote the ‘Winnie-the-Pooh’ books?',
                                answers: [
                                    'A.A. Milne',
                                    'R.O. Malley',
                                    'J.K. Rowling',
                                    'Michael Morpurgo',
                                ],
                                correct: 'A.A. Milne',
                                askedBefore: false,
                            },
                            {
                                question: 'A Song of Ice and Fire is a Fantasy Series written by the author?',
                                answers: [
                                    'J.K Rowling',
                                    'G.R.R Martin',
                                    'C.S Lewis',
                                    'J.R.R Tolkien',
                                ],
                                correct: 'G.R.R Martin',
                                askedBefore: false,
                            },
                            {
                                question: 'What book starts with the line “Call me Ishmael.”?',
                                answers: [
                                    'Moby Dick',
                                    'The Catcher in the Rye',
                                    'The Great Gatsby',
                                    'Ulysses',
                                ],
                                correct: 'Moby Dick',
                                askedBefore: false,
                            },
                            {
                                question: 'Which year did George Michael release his debut album “Faith”?',
                                answers: [
                                    '1992',
                                    '1981',
                                    '1987',
                                    '1989',
                                ],
                                correct: '1987',
                                askedBefore: false,
                            },
                            {
                                question: '“Memories” by Maroon 5 is based on the tune of which classical piece?',
                                answers: [
                                    'Midnight Sonata by Ludwig Beethoven',
                                    'Caprice No. 24 by Nicolo Paganini',
                                    'Johann Pachelbel’s Canon in D',
                                    'Eine Kleine Nachtmusik, K. 525 by Wolfgang Amadeus Mozart',
                                ],
                                correct: 'Johann Pachelbel’s Canon in D',
                                askedBefore: false,
                            },
                            {
                                question: 'After the Sex Pistols, Johnny Rotton formed which band?',
                                answers: [
                                    'Joy Division',
                                    'XTC',
                                    'Public Image Ltd.',
                                    'The Buzzcocks',
                                ],
                                correct: 'Public Image Ltd.',
                                askedBefore: false,
                            },
                            {
                                question: 'Which band was NOT based in Seattle?',
                                answers: [
                                    'Alice in Chains',
                                    'Soundgarden',
                                    'Stone Temple Pilots',
                                    'TAD',
                                ],
                                correct: 'Stone Temple Pilots',
                                askedBefore: false,
                            },
                            {
                                question: 'How many films did Sean Connery play James Bond in?',
                                answers: [
                                    '3',
                                    '5',
                                    '7',
                                    '9',
                                ],
                                correct: '7',
                                askedBefore: false,
                            },
                            {
                                question: 'How many times has the Mona Lisa been stolen?',
                                answers: [
                                    '1',
                                    '2',
                                    '3',
                                    '4',
                                ],
                                correct: '1',
                                askedBefore: false,
                            },
                            {
                                question: 'Michael Stipe is the singer of which rock group?',
                                answers: [
                                    'Yo La Tengo',
                                    'Radiohead',
                                    'The Replacements',
                                    'The Cure',
                                ],
                                correct: 'REM',
                                askedBefore: false,
                            },
                            {
                                question: 'Which 1952 musical comedy tells the story of three performers making the transition from silent movies to “talkies”?',
                                answers: [
                                    'Singin’ in the Rain',
                                    'The King and I',
                                    'Funny Face',
                                    'A Star is Born',
                                ],
                                correct: 'Singin’ in the Rain',
                                askedBefore: false,
                            },
                            {
                                question: 'Which film did Steven Spielberg NOT direct?',
                                answers: [
                                    'Schindler\'s List',
                                    'Catch Me If You Can',
                                    'Empire of the Sun',
                                    'American Graffiti',
                                ],
                                correct: 'American Graffiti',
                                askedBefore: false,
                            },
                            {
                                question: 'Which of the following bands featured Henry Rollins?',
                                answers: [
                                    'Crass',
                                    'Minor Threat',
                                    'Bad Brains',
                                    'Black Flag',
                                ],
                                correct: 'Black Flag',
                                askedBefore: false,
                            },
                            {
                                question: 'Which planet did the 80\'s hit series ALF main character originate from?',
                                answers: [
                                    'Proxima Centauri',
                                    'Mars',
                                    'Melmac',
                                    'Coconuts 2b',
                                ],
                                correct: 'Melmac',
                                askedBefore: false,
                            },


                        ],
                        points: 20,
                    }, // full no points in questions
                    hard: {
                        questions: [
                            {
                                question: 'In what year did the first South Park episode air?',
                                answers: [
                                    '1994',
                                    '1997',
                                    '2000',
                                    '2003',
                                ],
                                correct: '1997',
                                askedBefore: false,
                            },
                            {
                                question: 'In which year did AC/DC form?',
                                answers: [
                                    '1973',
                                    '1979',
                                    '1984',
                                    '1967',
                                ],
                                correct: '1973',
                                askedBefore: false,
                            },
                            {
                                question: 'Which singer\'s real name is Stefani Joanne Angelina Germanotta?',
                                answers: [
                                    'Lady Gaga',
                                    'Beyonce',
                                    'Rhianna',
                                    'Jewel',
                                ],
                                correct: 'Lady Gaga',
                                askedBefore: false,
                            },
                            {
                                question: 'Which of these poems are not the work of Edgar Allan Poe?',
                                answers: [
                                    'The Raven',
                                    'To Helen',
                                    'The Tell-Tale Heart ',
                                    'I Drift In and Out of People’s Lives',
                                ],
                                correct: 'I Drift In and Out of People’s Lives',
                                askedBefore: false,
                            },
                            {
                                question: 'Kingston, Zuma, and Apollo are the sons of which female pop star?',
                                answers: [
                                    'Gwen Stefani',
                                    'Lady Gaga',
                                    'Baby Spice',
                                    'Taylor Swift',
                                ],
                                correct: 'Gwen Stefani',
                                askedBefore: false,
                            },
                            {
                                question: 'Which Dutch artist painted “Girl with a Pearl Earring”?',
                                answers: [
                                    'Rembrandt',
                                    'Piet Mondrian',
                                    'Johannes Vermeer',
                                    'Vincent van Gogh',
                                ],
                                correct: 'Johannes Vermeer',
                                askedBefore: false,
                            },
                            {
                                question: 'Before the Beatles were formed, which band were John Lennon, Paul McCartney, and George Harrison all members of?',
                                answers: [
                                    'The Quarrymen',
                                    'The Les Stewart Quartet',
                                    'The Vipers Skiffle Group',
                                    'The Yardbirds',
                                ],
                                correct: 'The Quarrymen',
                                askedBefore: false,
                            },
                            {
                                question: 'Who is the youngest person to appear on a Billboard Chart?',
                                answers: [
                                    'Aaron Carter',
                                    'Blue Ivy Carter',
                                    'Annabella Lwin',
                                    'Bow Wow',
                                ],
                                correct: 'Blue Ivy Carter',
                                askedBefore: false,
                            },
                            {
                                question: 'Who was the first country artist to sell over 10 million copies of an album?',
                                answers: [
                                    'Dolly Parton',
                                    'Waylon Jennings',
                                    'Willie Nelson',
                                    'Garth Brooks',
                                ],
                                correct: 'Garth Brooks',
                                askedBefore: false,
                            },
                            {
                                question: '2001 film A Beautiful Mind was directed by who?',
                                answers: [
                                    'Ron Howard',
                                    'Steven Spielberg',
                                    'Peter Jackson',
                                    'James Cameron',
                                ],
                                correct: 'Ron Howard',
                                askedBefore: false,
                            },
                            {
                                question: 'What Was the First Animated Feature To Be Nominated For Best Picture',
                                answers: [
                                    'Aladdin',
                                    'Beauty and the Beast',
                                    'The Lion King',
                                    'Shrek',
                                ],
                                correct: 'Beauty and the Beast',
                                askedBefore: false,
                            },
                            {
                                question: 'In What Movie Did John Wayne First Call Someone "Pilgrim"?',
                                answers: [
                                    'True Grit',
                                    'El Dorado',
                                    'The Man Who Shot Liberty Valance',
                                    'Rio Bravo',
                                ],
                                correct: 'The Man Who Shot Liberty Valance',
                                askedBefore: false,
                            },
                            {
                                question: 'What Was George Lucas\' Original Last Name for Indiana Jones?',
                                answers: [
                                    'Indiana Smith',
                                    'Indiana Brown',
                                    'Indiana Garcia',
                                    'Indiana Johnson'
                                ],
                                correct: 'Indiana Smith',
                                askedBefore: false,
                            },
                            {
                                question: 'What is The Highest Grossing Film Of All Time ?',
                                answers: [
                                    'Titanic',
                                    'Avatar ',
                                    'Star Wars: Return of the Jedi',
                                    'Jurassic Park',
                                ],
                                correct: 'Avatar',
                                askedBefore: false,
                            },
                            {
                                question: 'Who painted The Persistence of Memory, known for its depiction of melting clocks?',
                                answers: [
                                    'Joan Miro',
                                    'Pablo Picasso',
                                    'Frida Kahlo',
                                    'Salvador Dalí',
                                ],
                                correct: 'Salvador Dalí',
                                askedBefore: false,
                            },
                        ],
                        points: 30,
                    }, // full no points in questions
                }, // full no points in questions
                sport: {
                    easy: {
                        questions: [
                            {
                                question: 'Rafael Nadal is a renowned Tennis player that hails from which country?',
                                answers: [
                                    'Spain',
                                    'France',
                                    'Italy',
                                    'USA',
                                ],
                                correct: 'Spain',
                                askedBefore: false,
                            },
                            {
                                question: 'What sport is dubbed “king of sports”? ',
                                answers: [
                                    'Rugby',
                                    'Swimming',
                                    'Soccer',
                                    'Tennis',
                                ],
                                correct: 'Soccer',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the name of the professional ice hockey team based in Toronto, Canada? ',
                                answers: [
                                    'Toronro Canucks',
                                    'Toronto Oilers',
                                    'Toronto Maple Leafs',
                                    'Toronto Flames',
                                ],
                                correct: 'Toronto Maple Leafs',
                                askedBefore: false,
                            },
                            {
                                question: 'In Netball, the court is divided into how many parts?',
                                answers: [
                                    '2',
                                    '3',
                                    '4',
                                    'not divided',
                                ],
                                correct: '3',
                                askedBefore: false,
                            },
                            {
                                question: 'In which sport will you use a "one wood"?',
                                answers: [
                                    'Golf',
                                    'Baseball',
                                    'Softball',
                                    'Croquet',
                                ],
                                correct: 'Golf',
                                askedBefore: false,
                            },
                            {
                                question: 'How many batsmen are on the field at a time in cricket?',
                                answers: [
                                    '1',
                                    '2',
                                    '3',
                                    '4',
                                ],
                                correct: '2',
                                askedBefore: false,
                            },
                            {
                                question: 'Which of the following is NOT a famous baseball player?',
                                answers: [
                                    'Barry Bonds',
                                    'Ty Cobb',
                                    'Reggie White',
                                    'Babe Ruth',
                                ],
                                correct: 'Reggie White',
                                askedBefore: false,
                            },
                            {
                                question: 'In basketball, how many points is a free throw worth?',
                                answers: [
                                    '1',
                                    '2',
                                    '3',
                                    '4',
                                ],
                                correct: '1',
                                askedBefore: false,
                            },
                            {
                                question: 'The 2004 summer Olympics were held where?',
                                answers: [
                                    'Beijing',
                                    'London',
                                    'Athens',
                                    'Sydney',
                                ],
                                correct: 'Athens',
                                askedBefore: false,
                            },
                            {
                                question: 'In which of the following games is “love” a score?',
                                answers: [
                                    'Softball',
                                    'Tennis',
                                    'Golf',
                                    'Cricket',
                                ],
                                correct: 'Tennis',
                                askedBefore: false,
                            },
                            {
                                question: 'Which sport uses a net, a racket, and a shuttlecock?',
                                answers: [
                                    'Racquetball',
                                    'Squash',
                                    'Tennis',
                                    'Badminton',
                                ],
                                correct: 'Badminton',
                                askedBefore: false,
                            },
                            {
                                question: 'What type of race is the Tour de France?',
                                answers: [
                                    'Rowing',
                                    'Car',
                                    'Bicycle',
                                    'Running',
                                ],
                                correct: 'Bicycle',
                                askedBefore: false,
                            },
                            {
                                question: 'Where did the first ancient Olympic games take place?',
                                answers: [
                                    'Greece',
                                    'France',
                                    'USA',
                                    'China',
                                ],
                                correct: 'Greece',
                                askedBefore: false,
                            },
                            {
                                question: 'Which of the following is not a colour of the Olympic rings?',
                                answers: [
                                    'Blue',
                                    'Black',
                                    'Green',
                                    'White',
                                ],
                                correct: 'White',
                                askedBefore: false,
                            },
                            {
                                question: 'How many holes are played in an average round of golf?',
                                answers: [
                                    '9',
                                    '12',
                                    '18',
                                    '21',
                                ],
                                correct: '18',
                                askedBefore: false,
                            },
                        ],
                        points: 10,
                    }, // full no points in questions
                    medium: {
                        questions: [
                            {
                                question: 'How many World Drivers Championships has Sebastian Vettel won?',
                                answers: [
                                    '3',
                                    '4',
                                    '5',
                                    '6',
                                ],
                                correct: '4',
                                askedBefore: false,
                            },
                            {
                                question: 'Which two countries have not missed one of the modern-day Olympics?',
                                answers: [
                                    'Greece and Australia',
                                    'Greece and United Kingdom',
                                    'Germany and United Kingdo',
                                    'Greece and Germany',
                                ],
                                correct: 'Greece and Australia',
                                askedBefore: false,
                            },
                            {
                                question: 'Tennis star Serena Williams won which major tournament while pregnant with her first child?',
                                answers: [
                                    'Eastbourne International',
                                    'The Australian Open',
                                    'Wimbledon',
                                    'US Open',
                                ],
                                correct: 'The Australian Open',
                                askedBefore: false,
                                level: 'medium',
                                points: 10,
                            },
                            {
                                question: 'What country won the very first FIFA World Cup in 1930?',
                                answers: [
                                    'Brazil',
                                    'England',
                                    'Argentina',
                                    'Uruguay',
                                ],
                                correct: 'Uruguay',
                                askedBefore: false,
                            },
                            {
                                question: 'Who was said to “float like a butterfly and sting like a bee”?',
                                answers: [
                                    'Mike Tyson',
                                    'Muhammed Ali',
                                    'Lionel Rose',
                                    'Sugar Ray Robinson',
                                ],
                                correct: 'Muhammed Ali',
                                askedBefore: false,
                            },
                            {
                                question: 'How many medals did China win at the Beijing Olympics?',
                                answers: [
                                    '90',
                                    '96',
                                    '100',
                                    '102',
                                ],
                                correct: '100',
                                askedBefore: false,
                            },
                            {
                                question: 'How long is a marathon in miles?',
                                answers: [
                                    '15.4',
                                    '30',
                                    '25.4',
                                    '26.2',
                                ],
                                correct: '26.2',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the only sport to be played on the moon?',
                                answers: [
                                    'Baseball',
                                    'Golf',
                                    'Soccer',
                                    'American Football',
                                ],
                                correct: 'Golf',
                                askedBefore: false,
                            },
                            {
                                question: 'How old was Tiger Woods when he won the Masters?',
                                answers: [
                                    '21',
                                    '25',
                                    '28',
                                    '32',
                                ],
                                correct: '21',
                                askedBefore: false,
                            },
                            {
                                question: 'Which NFL team has the record of scoring the most points in a single Super Bowl?',
                                answers: [
                                    'The San Francisco 49ers',
                                    'New England Patriots',
                                    'Seattle Seahawks',
                                    'Green Bay Packers',
                                ],
                                correct: 'The San Francisco 49ers',
                                askedBefore: false,
                            },
                            {
                                question: 'In soccer, which country won the first women’s World Cup?',
                                answers: [
                                    'Cameroon',
                                    'The United States',
                                    'England',
                                    'Brazil',
                                ],
                                correct: 'The United States',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the only country to have played in every single soccer World Cup?',
                                answers: [
                                    'Brazil',
                                    'England',
                                    'Germany',
                                    'France',
                                ],
                                correct: 'Brazil',
                                askedBefore: false,
                            },
                            {
                                question: 'In baseball, what is the most stolen base?',
                                answers: [
                                    'First',
                                    'Second',
                                    'Third',
                                    'None',
                                ],
                                correct: 'Second',
                                askedBefore: false,
                            },
                            {
                                question: 'Which NBA team owns the longest winning streak in NBA history?',
                                answers: [
                                    'Boston Celtics',
                                    'Charlotte Hornets',
                                    'Los Angeles Lakers',
                                    'Chicago Bulls',
                                ],
                                correct: 'Los Angeles Lakers',
                                askedBefore: false,
                            },
                            {
                                question: 'How long is the free skate in figure skating for women?',
                                answers: [
                                    '4 minutes',
                                    '4.5 minutes',
                                    '3 minutes',
                                    '5 minutes',
                                ],
                                correct: '4 minutes',
                                askedBefore: false,
                            },

                        ],
                        points: 20,
                    }, // full no points in questions
                    hard: {
                        questions: [
                            {
                                question: 'In what year were the first Air Jordan sneakers released?',
                                answers: [
                                    '1987',
                                    '1993',
                                    '1991',
                                    '1984',
                                ],
                                correct: '1984',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the minimum weight of a coxswain according to World Rowing?',
                                answers: [
                                    '45 kg',
                                    '65 kg',
                                    '55 kg',
                                    '75 kg',
                                ],
                                correct: '55 kg',
                                askedBefore: false,
                            },
                            {
                                question: 'Which sport is featured in the Animated Series: Free!?',
                                answers: [
                                    'Football (Soccer)',
                                    'Tennis',
                                    'Swimming',
                                    'Badminton',
                                ],
                                correct: 'Swimming',
                                askedBefore: false,
                            },
                            {
                                question: 'How many points did Michael Jordan score on his first NBA game?',
                                answers: [
                                    '20 points',
                                    '10 points',
                                    '18 points',
                                    '16 points',
                                ],
                                correct: '16 points',
                                askedBefore: false,
                            },
                            {
                                question: 'In what year was the first-ever Wimbledon Championship held?',
                                answers: [
                                    '1894',
                                    '1901',
                                    '1877',
                                    '1882',
                                ],
                                correct: '1877',
                                askedBefore: false,
                            },
                            {
                                question: 'What country has competed the most times in the Summer Olympics yet hasn’t won a gold medal?',
                                answers: [
                                    'The Philippines',
                                    'Cambodia',
                                    'Pakistan',
                                    'Nigeria',
                                ],
                                correct: 'The Philippines',
                                askedBefore: false,
                            },
                            {
                                question: 'Who was the first US president to throw the ceremonial first pitch at a Major League Baseball game?',
                                answers: [
                                    'John F. Kennedy',
                                    'Ronald Reagan',
                                    'Richard Nixon',
                                    'William Howard Taft',
                                ],
                                correct: 'William Howard Taft',
                                askedBefore: false,
                            },
                            {
                                question: 'Which boxer fought against Muhammad Ali and won?',
                                answers: [
                                    'Floyd Patterson',
                                    'Joe Frazier',
                                    'Sonny Liston',
                                    'Cassius Clay',
                                ],
                                correct: 'Joe Frazier',
                                askedBefore: false,
                            },
                            {
                                question: 'What was the fastest goal in World Cup history?',
                                answers: [
                                    '30.1 Seconds',
                                    '1 minute',
                                    '10.8 Seconds',
                                    '18.8 Seconds',
                                ],
                                correct: '10.8 Seconds',
                                askedBefore: false,
                            },
                            {
                                question: 'In baseball, what female pitcher once struck out Babe Ruth and Lou Gehrig?',
                                answers: [
                                    'Toni Stone',
                                    'Lizzie Murphey',
                                    'Maud Nelson',
                                    'Jackie Mitchell',
                                ],
                                correct: 'Jackie Mitchell',
                                askedBefore: false,
                            },
                            {
                                question: 'What material was first used to cover baseballs?',
                                answers: [
                                    'Cowhide',
                                    'Pig Skin',
                                    'Rubber',
                                    'Dog Skin',
                                ],
                                correct: 'Cowhide',
                                askedBefore: false,
                            },
                            {
                                question: 'In which winter sport are the terms “stale fish” and “mule kick” used?',
                                answers: [
                                    'Skiing',
                                    'Snowboarding',
                                    'Ice Hockey',
                                    'Curling',
                                ],
                                correct: 'Snowboarding',
                                askedBefore: false,
                            },
                            {
                                question: 'How many minutes was the longest recorded point in the history of tennis?',
                                answers: [
                                    '25',
                                    '10',
                                    '29',
                                    '19',
                                ],
                                correct: '29',
                                askedBefore: false,
                            },
                            {
                                question: 'What sport is Bela Karolyi known for coaching?',
                                answers: [
                                    'Gymnastics',
                                    'Figure Skating',
                                    'Diving',
                                    'Running',
                                ],
                                correct: 'Gymnastics',
                                askedBefore: false,
                            },
                            {
                                question: 'At the 1976 Olympic Games in Montreal, gymnast Nadia Comaneci became the first gymnast to score a perfect 10. Which country was she representing?',
                                answers: [
                                    'Norway',
                                    'France',
                                    'Latvia',
                                    'Romania',
                                ],
                                correct: 'Romania',
                                askedBefore: false,
                            }
                        ],
                        points: 30,
                    }, // full no points in questions
                }, // full no points in questions
                science: {
                    easy: {
                        questions: [
                            {
                                question: 'Dry ice is a solid form of which substance?',
                                answers: [
                                    'Carbon-dioxide',
                                    'Carbon-monoxide',
                                    'Water',
                                    'Hydrogen',
                                ],
                                correct: 'Carbon-dioxide',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the only metal that is liquid at normal atmospheric pressure and temperature?',
                                answers: [
                                    'Mercury',
                                    'Iron',
                                    'Francium',
                                    'Caesium',
                                ],
                                correct: 'Mercury',
                                askedBefore: false,
                            },
                            {
                                question: 'What does WWW stand for?',
                                answers: [
                                    'Weird Wonderful World',
                                    'World Wide Web',
                                    'Whole World Webserver',
                                    'Western Web Webbing',
                                ],
                                correct: 'World Wide Web',
                                askedBefore: false,
                            },
                            {
                                question: 'H2O is the chemical formula for what?',
                                answers: [
                                    'Propane',
                                    'Ethane',
                                    'Methane',
                                    'Water',
                                ],
                                correct: 'Water',
                                askedBefore: false,
                            },
                            {
                                question: '100 degrees Celsius is what is Fahrenheit?',
                                answers: [
                                    '200',
                                    '210',
                                    '212',
                                    '220',
                                ],
                                correct: '212',
                                askedBefore: false,
                            },
                            {
                                question: 'Which of these units of memory is the largest?',
                                answers: [
                                    'Megabyte',
                                    'Terabyte',
                                    'Kilobyte',
                                    'Gigabyte',
                                ],
                                correct: 'Terabyte',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the smallest planet in the Solar System?',
                                answers: [
                                    'Mars',
                                    'Ceres',
                                    'Pluto',
                                    'Mercury',
                                ],
                                correct: 'Mercury',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the hardest known natural material?',
                                answers: [
                                    'Steel',
                                    'Diamond',
                                    'Iron',
                                    'Titanium',
                                ],
                                correct: 'Diamond',
                                askedBefore: false,
                            },
                            {
                                question: 'What tree do acorns come from?',
                                answers: [
                                    'Oak',
                                    'Pine',
                                    'Redwood',
                                    'Banksia',
                                ],
                                correct: 'Oak',
                                askedBefore: false,
                            },
                            {
                                question: 'Which of the following helps the body fight infection and disease?',
                                answers: [
                                    'Plasma',
                                    'Red Blood Cell',
                                    'Platelets',
                                    'White Blood Cell',
                                ],
                                correct: 'White Blood Cell',
                                askedBefore: false,
                            },
                            {
                                question: 'An inch is how many centimetres?',
                                answers: [
                                    '2',
                                    '2.45',
                                    '2.54',
                                    '2.5',
                                ],
                                correct: '2.54',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the boiling point of water?',
                                answers: [
                                    '100 degrees Celsius',
                                    '110 degrees Celsius',
                                    '95 degrees Celsius',
                                    '150 degrees Celsius',
                                ],
                                correct: '100 degrees Celsius',
                                askedBefore: false,
                            },
                            {
                                question: 'Another way to write "13 cubed" would be what?',
                                answers: [
                                    '13 x 13',
                                    '13 + 13 + 13',
                                    '13 x 13 x 13',
                                    '13 squared squared',
                                ],
                                correct: '13 x 13 x 13',
                                askedBefore: false,
                            },
                            {
                                question: 'Which company produced the Galaxy phones and tablets?',
                                answers: [
                                    'Apple',
                                    'Samsung',
                                    'Motorolla',
                                    'Nokia',
                                ],
                                correct: 'Samsung',
                                askedBefore: false,
                            },
                            {
                                question: 'The symbol for iron in the periodic table of elements is what?',
                                answers: [
                                    'I',
                                    'Ir',
                                    'K',
                                    'Fe',
                                ],
                                correct: 'Fe',
                                askedBefore: false,
                            },
                        ],
                        points: 10,
                    }, // full no points in questions
                    medium: {
                        questions: [
                            {
                                question: 'Which letter does NOT appear in the periodic table of elements?',
                                answers: [
                                    'Y',
                                    'J',
                                    'H',
                                    'P',
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
                                    'Mars',
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
                                    'Triton',
                                ],
                                correct: 'Ganymede',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the tallest breed of dog in the world?',
                                answers: [
                                    'Bernese Mountain Dog',
                                    'Black Russian Terrier',
                                    'The Great Dane',
                                    'German Shepherd',
                                ],
                                correct: 'The Great Dane',
                                askedBefore: false,
                            },
                            {
                                question: 'How many eyes does a bee have?',
                                answers: [
                                    'three',
                                    'four',
                                    'five',
                                    'six',
                                ],
                                correct: 'five',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the smallest unit of memory?',
                                answers: [
                                    'Kilobyte',
                                    'Megabyte',
                                    'Microbyte',
                                    'Gigabyte',
                                ],
                                correct: 'Microbyte',
                                askedBefore: false,
                            },
                            {
                                question: 'How many elements are there in the periodic table?',
                                answers: [
                                    '92',
                                    '104',
                                    '118',
                                    '126',
                                ],
                                correct: '118',
                                askedBefore: false,
                            },
                            {
                                question: 'At which temperature does water have its highest density at normal pressure?',
                                answers: [
                                    '0 degrees',
                                    '4 degrees',
                                    '20 degrees',
                                    '100 degrees',
                                ],
                                correct: '4 degrees',
                                askedBefore: false,
                            },
                            {
                                question: 'Which PH describes an acidic solution?',
                                answers: [
                                    '4.5',
                                    '7.0',
                                    '7.5',
                                    '8.0',
                                ],
                                correct: '4.5',
                                askedBefore: false,
                            },
                            {
                                question: 'How many ribs are in a human body?',
                                answers: [
                                    '24',
                                    '26',
                                    '28',
                                    '30',
                                ],
                                correct: '24',
                                askedBefore: false,
                            },
                            {
                                question: 'Which bone are babies born without?',
                                answers: [
                                    'Sternum',
                                    'Knee Cap',
                                    'Ethmoid Bone',
                                    'Parietal Bone',
                                ],
                                correct: 'Knee Cap',
                                askedBefore: false,
                            },
                            {
                                question: 'How many hearts does an octopus have?',
                                answers: [
                                    '1',
                                    '2',
                                    '3',
                                    '5',
                                ],
                                correct: '3',
                                askedBefore: false,
                            },
                            {
                                question: 'What planets literally rain diamonds?',
                                answers: [
                                    'Neptune and Uranus',
                                    'Venus and Saturn',
                                    'Saturn and Jupiter',
                                    'Jupiter and Venus',
                                ],
                                correct: 'Saturn and Jupiter',
                                askedBefore: false,
                            },
                            {
                                question: 'What’s the brightest star in the night sky?',
                                answers: [
                                    'Rigel',
                                    'Sirius',
                                    'Canopus',
                                    'Arcturus',
                                ],
                                correct: 'Sirius',
                                askedBefore: false,
                            },
                            {
                                question: 'Carrots are a good source of which vitamin?',
                                answers: [
                                    'Vitamin A',
                                    'Vitamin B12',
                                    'Vitamin E',
                                    'Vitamin C',
                                ],
                                correct: 'Vitamin A',
                                askedBefore: false,
                            },
                        ],
                        points: 20,
                    }, // full no points in questions
                    hard: {
                        questions: [
                            {
                                question: 'Lightning strikes produce which substance?',
                                answers: [
                                    'Oxygen',
                                    'Ozone',
                                    'Water',
                                    'Carbon-dioxide',
                                ],
                                correct: 'Ozone',
                                askedBefore: false,
                            },
                            {
                                question: 'Which planet in the solar system has is the hottest?',
                                answers: [
                                    'Mercury',
                                    'Venus',
                                    'Earth',
                                    'Mars',
                                ],
                                correct: 'Venus',
                                askedBefore: false,
                            },
                            {
                                question: 'Makemake is what kind of celestial object?',
                                answers: [
                                    'Dwarf Planet',
                                    'Asteroid',
                                    'Comet',
                                    'Planet',
                                ],
                                correct: 'Dwarf Planet',
                                askedBefore: false,
                            },
                            {
                                question: 'The only known monotremes in the animal kingdom are the echidna and which other creature?',
                                answers: [
                                    'Aadrvark',
                                    'Quokka',
                                    'Platypus',
                                    'Jellyfish',
                                ],
                                correct: 'Platypus',
                                askedBefore: false,
                            },
                            {
                                question: 'Who is the founder of eBay?',
                                answers: [
                                    'Steve Jobs',
                                    'Pierre Omidyar',
                                    'Brian Chesky',
                                    'Reed Hastings',
                                ],
                                correct: 'Pierre Omidyar',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the rarest blood type?',
                                answers: [
                                    'AB Positive',
                                    'A Postitive',
                                    'AB Negative',
                                    'O Negative',
                                ],
                                correct: 'AB Negative',
                                askedBefore: false,
                            },
                            {
                                question: 'How long does a human red blood cell survive?',
                                answers: [
                                    '60 Days',
                                    '80 Days',
                                    '100 Days',
                                    '120 Days',
                                ],
                                correct: '120 Days',
                                askedBefore: false,
                            },
                            {
                                question: 'What is a quark?',
                                answers: [
                                    'Subatomic Particle',
                                    'A Neutron',
                                    'A Proton',
                                    'An Electron',
                                ],
                                correct: 'Subatomic Particle',
                                askedBefore: false,
                            },
                            {
                                question: 'What is a the charge of a neutron?',
                                answers: [
                                    'positive',
                                    'negative',
                                    'no charge',
                                    'both positive and negative',
                                ],
                                correct: 'no charge',
                                askedBefore: false,
                            },
                            {
                                question: 'What is the symbol for the Full Planck Constant?',
                                answers: [
                                    'p',
                                    'h',
                                    'x',
                                    'v',
                                ],
                                correct: 'h',
                                askedBefore: false,
                            },
                            {
                                question: 'Lateral Epicondylitis is a condition commonly known by what name?',
                                answers: [
                                    'Runner\'s Knee',
                                    'Jumper\'s Knee',
                                    'Golfer\'s Elbow',
                                    'Tennis Elbow',
                                ],
                                correct: 'Tennis Elbow',
                                askedBefore: false,
                            },
                            {
                                question: 'Besides chimpanzees and gorillas, what other non-human animal has human-like fingerprints?',
                                answers: [
                                    'Koalas',
                                    'Echidnas',
                                    'Aadvarks',
                                    'Racoons',
                                ],
                                correct: 'Koalas',
                                askedBefore: false,
                            },
                            {
                                question: 'What does a Scoville unit measure?',
                                answers: [
                                    'Strength',
                                    'Saltiness',
                                    'Pain',
                                    'Spiciness',
                                ],
                                correct: 'Spiciness',
                                askedBefore: false,
                            },
                            {
                                question: 'What are the bones in the fingers called?',
                                answers: [
                                    'Sacrum',
                                    'Platine',
                                    'Maxilla',
                                    'Phalanges',
                                ],
                                correct: 'Phalanges',
                                askedBefore: false,
                            },
                            {
                                question: 'What element does not freeze by being cooled to absolute zero?',
                                answers: [
                                    'Helium',
                                    'Hydrogen',
                                    'Oxygen',
                                    'Nitrogen',
                                ],
                                correct: 'Helium',
                                askedBefore: false,
                            },

                        ],
                        points: 30,
                    }, // full no points in questions
                }, // full no points in questions
            },
        ]
    }
;

module.exports.array = questions;
module.exports.modifyAskedBefore =
    function (setValue, theme, difficulty, randomIndex) {
        questions.theme[0][theme][difficulty].questions[randomIndex].askedBefore = setValue;
    }
