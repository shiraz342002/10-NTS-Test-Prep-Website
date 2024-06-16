let questions = [
    // Sentence Completion (5 questions)
    {
    q_num: 1,
    question: "She was so tired that she could hardly ______.",
    answer: "walk",
    options: ["walk", "walking", "walks", "walked"]
    },
    {
    q_num: 2,
    question: "If I ______ a bird, I would fly high in the sky.",
    answer: "were",
    options: ["am", "was", "were", "being"]
    },
    {
    q_num: 3,
    question: "He decided to take a shortcut to avoid ______ late.",
    answer: "being",
    options: ["being", "to be", "been", "be"]
    },
    {
    q_num: 4,
    question: "She bought a new dress ______ it was on sale.",
    answer: "because",
    options: ["but", "because", "although", "despite"]
    },
    {
    q_num: 5,
    question: "He speaks English as if he ______ a native speaker.",
    answer: "were",
    options: ["is", "was", "were", "being"]
    },
    
 
    // Analogy (3 questions)
    {
        q_num: 6,
        question: "Cat is to feline as dog is to ______.",
        answer: "canine",
        options: ["canine", "puppy", "kitten", "bark"]
    },
    {
        q_num: 7,
        question: "Bird is to fly as fish is to ______.",
        answer: "swim",
        options: ["swim", "run", "jump", "dive"]
    },
    {
        q_num: 8,
        question: "Finger is to hand as toe is to ______.",
        answer: "foot",
        options: ["foot", "leg", "arm", "knee"]
    },
    
    // Antonym (4 questions)
    {
        q_num: 9,
        question: "Antonym of 'Abundant':",
        answer: "Scarce",
        options: ["Scarce", "Plentiful", "Limited", "Meager"]
    },
    {
        q_num: 10,
        question: "Antonym of 'Benevolent':",
        answer: "Malevolent",
        options: ["Malevolent", "Kind", "Generous", "Caring"]
    },
    {
        q_num: 11,
        question: "Antonym of 'Ascend':",
        answer: "Descend",
        options: ["Descend", "Rise", "Climb", "Lift"]
    },
    {
        q_num: 12,
        question: "Antonym of 'Conceal':",
        answer: "Reveal",
        options: ["Reveal", "Hide", "Cover", "Disguise"]
    },
    
    // Active Voice - Passive Voice (3 questions)
    {
        q_num: 13,
        question: "Change to passive voice: 'The chef is preparing the meal.'",
        answer: "The meal is being prepared by the chef.",
        options: [
            "The meal is prepared by the chef.",
            "The meal is being prepared by the chef.",
            "The meal was prepared by the chef.",
            "The meal has been prepared by the chef."
        ]
    },
    {
        q_num: 14,
        question: "Change to passive voice: 'The committee will review the applications.'",
        answer: "The applications will be reviewed by the committee.",
        options: [
            "The applications are reviewed by the committee.",
            "The applications were reviewed by the committee.",
            "The applications have been reviewed by the committee.",
            "The applications will be reviewed by the committee."
        ]
    },
    {
        q_num: 15,
        question: "Change to active voice: 'A song was sung by her.'",
        answer: "She sang a song.",
        options: [
            "She sings a song.",
            "She will sing a song.",
            "She sang a song.",
            "She is singing a song."
        ]
    },
    
    // Direct - Indirect Speech (2 questions)
    {
        q_num: 16,
        question: "Change to indirect speech: 'He said, \"I am going to the market.\"'",
        answer: "He said that he was going to the market.",
        options: [
            "He said that he is going to the market.",
            "He said that he was going to the market.",
            "He said that I am going to the market.",
            "He said that I was going to the market."
        ]
    },
    {
        q_num: 17,
        question: "Change to direct speech: He told me that he would visit us the next day.",
        answer: "\"I will visit you tomorrow,\" he said to me.",
        options: [
            "\"I will visit you tomorrow,\" he said to me.",
            "\"I would visit you tomorrow,\" he said to me.",
            "\"I will visit you the next day,\" he said to me.",
            "\"I would visit you the next day,\" he said to me."
        ]
    },
    
    // Synonym (3 questions)
    {
        q_num: 18,
        question: "Synonym of 'Abundant':",
        answer: "Plentiful",
        options: ["Scarce", "Plentiful", "Limited", "Meager"]
    },
    {
        q_num: 19,
        question: "Synonym of 'Benevolent':",
        answer: "Kind",
        options: ["Malevolent", "Kind", "Generous", "Caring"]
    },
    {
        q_num: 20,
        question: "Synonym of 'Ascend':",
        answer: "Climb",
        options: ["Descend", "Rise", "Climb", "Lift"]
    },
    {
        q_num: 21,
        question: "A car travels 60 miles per hour. How long will it take to travel 180 miles?",
        answer: "3 hours",
        options: ["2 hours", "3 hours", "4 hours", "5 hours"]
    },
    {
        q_num: 22,
        question: "If John has 3 apples and gives 1 to his friend, how many apples does he have left?",
        answer: "2 apples",
        options: ["1 apple", "2 apples", "3 apples", "4 apples"]
    },
    {
        q_num: 23,
        question: "Sarah is planning a trip. Her flight departs at 6 PM and it's a 3-hour flight. What time will she arrive at her destination?",
        answer: "9 PM",
        options: ["7 PM", "8 PM", "9 PM", "10 PM"]
    },
    {
        q_num: 24,
        question: "A recipe requires 2 cups of sugar. If you want to make half of the recipe, how much sugar will you need?",
        answer: "1 cup",
        options: ["1 cup", "2 cups", "3 cups", "4 cups"]
    },
    {
        q_num: 25,
        question: "A train travels at a speed of 80 km/h. How far will it travel in 5 hours?",
        answer: "400 km",
        options: ["200 km", "300 km", "400 km", "500 km"]
    },
    {
        q_num: 26,
        question: "If a worker earns $15 per hour and works for 8 hours a day, what will be his total earnings for 5 days?",
        answer: "$600",
        options: ["$400", "$500", "$600", "$700"]
    },
    {
        q_num: 27,
        question: "In a class of 30 students, if 60% are girls, how many girls are there?",
        answer: "18",
        options: ["12", "15", "18", "20"]
    },
    {
        q_num: 28,
        question: "A book originally priced at $20 is on sale for 25% off. What is the sale price?",
        answer: "$15",
        options: ["$10", "$15", "$17", "$20"]
    },
    {
        q_num: 29,
        question: "If a car's fuel efficiency is 25 miles per gallon, how many gallons of fuel will it need to travel 100 miles?",
        answer: "4 gallons",
        options: ["2 gallons", "3 gallons", "4 gallons", "5 gallons"]
    },
    {
        q_num: 30,
        question: "If a box contains 24 chocolates and you distribute them equally among 8 friends, how many chocolates will each friend get?",
        answer: "3 chocolates",
        options: ["2 chocolates", "3 chocolates", "4 chocolates", "5 chocolates"]
    },
    {
        q_num: 31,
        question: "A garden has 20 rows of plants with 15 plants in each row. How many plants are there in total?",
        answer: "300 plants",
        options: ["200 plants", "300 plants", "400 plants", "500 plants"]
    },
    {
        q_num: 32,
        question: "A man buys a laptop for $1200 and sells it at a loss of 10%. What is the selling price?",
        answer: "$1080",
        options: ["$1000", "$1080", "$1100", "$1150"]
    },


// Statement-Based MCQs

    {
        q_num: 33,
        question: "Synonym of 'Ascend':",
        answer: "Climb",
        options: ["Descend", "Rise", "Climb", "Lift"]
    },
    {
        q_num: 34,
        question: "Antonym of 'Brave':",
        answer: "Cowardly",
        options: ["Bold", "Courageous", "Cowardly", "Fearless"]
    },
    {
        q_num: 35,
        question: "Choose the correct spelling:",
        answer: "Embarrass",
        options: ["Embarass", "Embarras", "Embaras", "Embarrass"]
    },
    {
        q_num: 36,
        question: "Find the correct sentence:",
        answer: "She goes to school.",
        options: ["She go to school.", "She goes to school.", "She going to school.", "She gone to school."]
    },
    {
        q_num: 37,
        question: "Choose the correct option: He _____ a doctor.",
        answer: "is",
        options: ["are", "is", "am", "were"]
    },
    {
        q_num: 38,
        question: "Complete the sentence: The cat is _____ the table.",
        answer: "under",
        options: ["on", "in", "under", "above"]
    },
    {
        q_num: 39,
        question: "Find the plural form of 'Child':",
        answer: "Children",
        options: ["Childs", "Childes", "Children", "Childrens"]
    },
    {
        q_num: 40,
        question: "Identify the verb in the sentence: She runs fast.",
        answer: "runs",
        options: ["She", "runs", "fast", "None of these"]
    },
    {
        q_num: 41,
        question: "If a person saves $200 each month, how much will they save in a year?",
        answer: "$2400",
        options: ["$1200", "$2400", "$3600", "$4800"]
    },
    {
        q_num: 42,
        question: "What is 15% of 200?",
        answer: "30",
        options: ["20", "25", "30", "35"]
    },
    {
        q_num: 43,
        question: "If you divide 45 by 5, what will be the result?",
        answer: "9",
        options: ["8", "9", "10", "11"]
    },
    {
        q_num: 44,
        question: "A product originally priced at $50 is on sale for 20% off. What is the sale price?",
        answer: "$40",
        options: ["$35", "$40", "$45", "$50"]
    },
    {
        q_num: 45,
        question: "If a train travels 300 miles in 5 hours, what is its speed in miles per hour?",
        answer: "60 mph",
        options: ["50 mph", "55 mph", "60 mph", "65 mph"]
    },
    {
        q_num: 46,
        question: "What is the sum of the first 10 natural numbers?",
        answer: "55",
        options: ["45", "50", "55", "60"]
    },
    {
        q_num: 47,
        question: "If 3x = 18, what is the value of x?",
        answer: "6",
        options: ["4", "5", "6", "7"]
    },
    {
        q_num: 48,
        question: "What is 20% of 150?",
        answer: "30",
        options: ["25", "30", "35", "40"]
    },
    {
        q_num: 49,
        question: "If you have 3/4 of a pizza and eat 1/2 of it, how much pizza is left?",
        answer: "1/4",
        options: ["1/2", "1/4", "1/8", "3/8"]
    },
    {
        q_num: 50,
        question: "What is the least common multiple of 4 and 6?",
        answer: "12",
        options: ["8", "10", "12", "14"]
    },
    {
        q_num: 51,
        question: "What is 7 multiplied by 8?",
        answer: "56",
        options: ["48", "54", "56", "64"]
    },
    {
        q_num: 52,
        question: "If a rectangle has a length of 10 cm and a width of 5 cm, what is its area?",
        answer: "50 sq cm",
        options: ["40 sq cm", "50 sq cm", "60 sq cm", "70 sq cm"]
    },
    {
        q_num: 53,
        question: "If 5x = 45, what is the value of x?",
        answer: "9",
        options: ["7", "8", "9", "10"]
    },


// Algebra MCQs

    {
        q_num: 54,
        question: "Solve for x: 2x + 3 = 11",
        answer: "4",
        options: ["2", "3", "4", "5"]
    },
    {
        q_num: 55,
        question: "What is the value of y in the equation 3y - 15 = 0?",
        answer: "5",
        options: ["3", "4", "5", "6"]
    },
    {
        q_num: 56,
        question: "If x^2 = 49, what is the value of x?",
        answer: "7",
        options: ["6", "7", "8", "9"]
    },
    {
        q_num: 57,
        question: "Solve for x: 4x - 16 = 0",
        answer: "4",
        options: ["2", "3", "4", "5"]
    },


// Geometry MCQs

    {
        q_num: 58,
        question: "What is the area of a triangle with a base of 10 cm and a height of 5 cm?",
        answer: "25 sq cm",
        options: ["20 sq cm", "25 sq cm", "30 sq cm", "35 sq cm"]
    },
    {
        q_num: 59,
        question: "What is the circumference of a circle with a radius of 7 cm? (Use π = 22/7)",
        answer: "44 cm",
        options: ["42 cm", "43 cm", "44 cm", "45 cm"]
    },
    {
        q_num: 60,
        question: "What is the volume of a cube with a side length of 3 cm?",
        answer: "27 cubic cm",
        options: ["18 cubic cm", "24 cubic cm", "27 cubic cm", "30 cubic cm"]
    },
    {
        q_num: 61,
        question: "What is the unit of force?",
        answer: "Newton",
        options: ["Pascal", "Joule", "Newton", "Watt"]
    },
    {
        q_num: 62,
        question: "What is the speed of light in vacuum?",
        answer: "3 x 10^8 m/s",
        options: ["3 x 10^6 m/s", "3 x 10^7 m/s", "3 x 10^8 m/s", "3 x 10^9 m/s"]
    },
    {
        q_num: 63,
        question: "Which law states that for every action, there is an equal and opposite reaction?",
        answer: "Newton's Third Law",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Newton's Law of Gravitation"]
    },
    {
        q_num: 64,
        question: "What is the formula for calculating work done?",
        answer: "Work = Force x Distance",
        options: ["Work = Mass x Velocity", "Work = Force x Distance", "Work = Power x Time", "Work = Energy x Time"]
    },
    {
        q_num: 65,
        question: "What is the acceleration due to gravity on Earth?",
        answer: "9.8 m/s²",
        options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"]
    },
    {
        q_num: 66,
        question: "What is the potential difference measured in?",
        answer: "Volts",
        options: ["Amps", "Ohms", "Volts", "Watts"]
    },
    {
        q_num: 67,
        question: "What is the first law of thermodynamics?",
        answer: "Energy cannot be created or destroyed",
        options: ["Energy cannot be transferred", "Energy cannot be created or destroyed", "Energy is always conserved", "Energy is always constant"]
    },
    {
        q_num: 68,
        question: "What is the formula for calculating kinetic energy?",
        answer: "KE = 1/2 mv²",
        options: ["KE = mv", "KE = 1/2 mv²", "KE = mv²", "KE = 1/2 mv"]
    },
    {
        q_num: 69,
        question: "What is the SI unit of power?",
        answer: "Watt",
        options: ["Joule", "Newton", "Watt", "Pascal"]
    },
    {
        q_num: 70,
        question: "What is the principle of conservation of momentum?",
        answer: "Total momentum before and after collision is the same",
        options: ["Momentum cannot be transferred", "Total momentum before and after collision is the same", "Momentum is always conserved", "Momentum is always constant"]
    },
    {
        q_num: 71,
        question: "What is the chemical formula of water?",
        answer: "H2O",
        options: ["H2O", "CO2", "O2", "H2SO4"]
    },
    {
        q_num: 72,
        question: "What is the atomic number of Carbon?",
        answer: "6",
        options: ["4", "6", "8", "12"]
    },
    {
        q_num: 73,
        question: "Which element is known as the 'King of Chemicals'?",
        answer: "Sulfuric Acid",
        options: ["Hydrochloric Acid", "Sulfuric Acid", "Nitric Acid", "Acetic Acid"]
    },
    {
        q_num: 74,
        question: "What is the periodic table symbol for Sodium?",
        answer: "Na",
        options: ["S", "Na", "So", "Sn"]
    },
    {
        q_num: 75,
        question: "Which gas is commonly known as laughing gas?",
        answer: "Nitrous Oxide",
        options: ["Nitrogen", "Oxygen", "Nitrous Oxide", "Carbon Dioxide"]
    },
    {
        q_num: 76,
        question: "What is the pH of a neutral solution?",
        answer: "7",
        options: ["5", "6", "7", "8"]
    },
    {
        q_num: 77,
        question: "Which of the following is a noble gas?",
        answer: "Helium",
        options: ["Hydrogen", "Oxygen", "Nitrogen", "Helium"]
    },
    {
        q_num: 78,
        question: "What is the chemical formula for table salt?",
        answer: "NaCl",
        options: ["NaCl", "KCl", "NaF", "KBr"]
    },
    {
        q_num: 79,
        question: "Which element is the most abundant in the Earth's crust?",
        answer: "Oxygen",
        options: ["Carbon", "Hydrogen", "Oxygen", "Nitrogen"]
    },
    {
        q_num: 80,
        question: "What is the molar mass of Carbon Dioxide (CO2)?",
        answer: "44 g/mol",
        options: ["22 g/mol", "32 g/mol", "44 g/mol", "56 g/mol"]
    },
    {
        q_num: 81,
        question: "What is the derivative of x^2?",
        answer: "2x",
        options: ["x", "2x", "x^2", "2"]
    },
    {
        q_num: 82,
        question: "What is the integral of 2x?",
        answer: "x^2 + C",
        options: ["x", "2x", "x^2", "x^2 + C"]
    },
    {
        q_num: 83,
        question: "What is the value of π?",
        answer: "3.14159",
        options: ["2.71828", "1.61803", "3.14159", "1.41421"]
    },
    {
        q_num: 84,
        question: "What is the solution to the equation 2x - 4 = 0?",
        answer: "2",
        options: ["0", "1", "2", "3"]
    },
    {
        q_num: 85,
        question: "What is the quadratic formula?",
        answer: "x = [-b ± √(b² - 4ac)] / 2a",
        options: ["x = [-b ± √(b² - 4ac)] / 2a", "x = [-b ± √(4ac - b²)] / 2a", "x = [b ± √(b² - 4ac)] / 2a", "x = [-b ± √(b² - 4ac)] / a"]
    },
    {
        q_num: 86,
        question: "What is the sum of the angles in a triangle?",
        answer: "180°",
        options: ["90°", "180°", "270°", "360°"]
    },
    {
        q_num: 87,
        question: "What is the area of a circle with radius 5?",
        answer: "25π",
        options: ["10π", "15π", "25π", "30π"]
    },
    {
        q_num: 88,
        question: "What is the slope of a line parallel to y = 3x + 2?",
        answer: "3",
        options: ["0", "1", "2", "3"]
    },
    {
        q_num: 89,
        question: "What is the distance between the points (1, 2) and (4, 6)?",
        answer: "5",
        options: ["3", "4", "5", "6"]
    },
    {
        q_num: 90,
        question: "What is the solution to the system of equations x + y = 3 and x - y = 1?",
        answer: "(2, 1)",
        options: ["(1, 2)", "(2, 1)", "(3, 0)", "(0, 3)"]
    },
    {
        q_num: 91,
        question: "What does CPU stand for?",
        answer: "Central Processing Unit",
        options: ["Central Processing Unit", "Central Process Unit", "Computer Personal Unit", "Central Processor Unit"]
    },
    {
        q_num: 92,
        question: "Which programming language is known as the language of the web?",
        answer: "JavaScript",
        options: ["Java", "Python", "C++", "JavaScript"]
    },
    {
        q_num: 93,
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language",
        options: ["HyperText Makeup Language", "HyperText Markup Language", "HyperText Markdown Language", "HyperText Marking Language"]
    },
    {
        q_num: 94,
        question: "What is the main function of an operating system?",
        answer: "Manage computer resources",
        options: ["Manage computer resources", "Compile programs", "Translate code", "Connect to the internet"]
    },
    {
        q_num: 95,
        question: "Which data structure uses LIFO (Last In, First Out) principle?",
        answer: "Stack",
        options: ["Queue", "Stack", "Array", "Linked List"]
    },
    {
        q_num: 96,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Standard Query Language"]
    },
    {
        q_num: 97,
        question: "Which sorting algorithm is known for its efficiency with large data sets?",
        answer: "Quick Sort",
        options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Insertion Sort"]
    },
    {
        q_num: 98,
        question: "Which of the following is a NoSQL database?",
        answer: "MongoDB",
        options: ["MySQL", "Oracle", "PostgreSQL", "MongoDB"]
    },
    {
        q_num: 99,
        question: "What is an IP address?",
        answer: "A unique address that identifies a device on the internet",
        options: ["A type of data storage", "A unique address that identifies a device on the internet", "A programming language", "A software application"]
    },
    {
        q_num: 100,
        question: "What is the primary purpose of a firewall?",
        answer: "To protect a network from unauthorized access",
        options: ["To store data", "To compile programs", "To protect a network from unauthorized access", "To translate code"]
    }
    
]