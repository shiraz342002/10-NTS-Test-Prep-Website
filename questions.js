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
    }
]