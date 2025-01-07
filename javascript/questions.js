const questions = [
  {
    category: "programming",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Pre Processor",
          "HyperText Pro Language",
          "Hyper Text Multiple Language",
          "Hyper Text Markup Language",
        ],
        correctAnswer: 3,
      },
      {
        question:
          "Which is the correct way to declare a variable in JavaScript?",
        options: ["var x = 10", "varx=10", "var 10 = x", "variable x = 10"],
        correctAnswer: 0,
      },
      {
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Colorful Style Sheets",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Sun Microsystems", "Oracle"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the correct syntax to create a function in JavaScript?",
        options: [
          "function:myFunction()",
          "function = myFunction()",
          "function myFunction()",
          "myFunction():function",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is a JavaScript framework?",
        options: ["Django", "React", "Flask", "Laravel"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the correct way to write an IF statement in JavaScript?",
        options: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i = 5 then"],
        correctAnswer: 1,
      },
      {
        question: "What is the output of `typeof null` in JavaScript?",
        options: ["object", "null", "undefined", "number"],
        correctAnswer: 0,
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "#", "/*", "<!--"],
        correctAnswer: 0,
      },
      {
        question: "What does the `isNaN` function do in JavaScript?",
        options: [
          "Checks if a value is a number",
          "Checks if a value is not a number",
          "Checks if a value is null",
          "Checks if a value is undefined",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which method is used to add an element at the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the correct syntax to access the first element of an array?",
        options: ["array[1]", "array(0)", "array[0]", "array.first"],
        correctAnswer: 2,
      },
      {
        question: "Which keyword is used to create a class in JavaScript?",
        options: ["class", "function", "define", "new"],
        correctAnswer: 0,
      },
      {
        question:
          "Which function is used to parse a string to an integer in JavaScript?",
        options: ["parseInt", "parseFloat", "Number", "toInt"],
        correctAnswer: 0,
      },
      {
        question: "What is the result of `5 + '5'` in JavaScript?",
        options: ["10", "55", "NaN", "undefined"],
        correctAnswer: 1,
      },
      {
        question:
          "Which JavaScript method is used to round a number to the nearest integer?",
        options: ["Math.ceil", "Math.round", "Math.floor", "Math.trunc"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the purpose of the `return` statement in a function?",
        options: [
          "To exit the function",
          "To output the result of the function",
          "To stop the execution of the program",
          "To define the function's output",
        ],
        correctAnswer: 3,
      },
      {
        question:
          "Which operator is used to compare both value and type in JavaScript?",
        options: ["=", "==", "===", "!="],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is not a JavaScript data type?",
        options: ["String", "Boolean", "Undefined", "Float"],
        correctAnswer: 3,
      },
      {
        question: "What does JSON stand for?",
        options: [
          "JavaScript Object Notation",
          "Java Standard Output Name",
          "JavaScript Output Name",
          "Java Standard Object Notation",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onchange", "onmouseover", "onclick", "onmouseclick"],
        correctAnswer: 2,
      },
      {
        question:
          "What is the default behavior of the `alert()` function in JavaScript?",
        options: [
          "Log the message to the console",
          "Display a message in a dialog box",
          "Redirect to a new page",
          "Trigger an event",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which keyword is used to define a constant in JavaScript?",
        options: ["let", "const", "var", "final"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the purpose of the `setTimeout` function in JavaScript?",
        options: [
          "To execute a function immediately",
          "To execute a function after a delay",
          "To repeat a function periodically",
          "To stop the execution of a function",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which of the following is a valid way to declare an arrow function in JavaScript?",
        options: [
          "x => x * x",
          "function(x) => x * x",
          "=> x * x",
          "x => {x * x}",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    category: "mathematics",
    questions: [
      {
        question: "What is the value of 7 × 8?",
        options: ["54", "56", "58", "60"],
        correctAnswer: 1,
      },
      {
        question: "What is the cube root of 27?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
      },
      {
        question: "Simplify: 4x + 3x - 2x",
        options: ["3x", "5x", "7x", "9x"],
        correctAnswer: 1,
      },
      {
        question: "What is the least common multiple of 6 and 8?",
        options: ["12", "24", "36", "48"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of |−5|?",
        options: ["-5", "5", "0", "10"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the first five prime numbers?",
        options: ["18", "28", "38", "48"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of sin(90°)?",
        options: ["0", "1", "0.5", "√2"],
        correctAnswer: 1,
      },
      {
        question:
          "If a triangle has sides 3, 4, and 5, what type of triangle is it?",
        options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
        correctAnswer: 3,
      },
      {
        question: "What is the formula for the circumference of a circle?",
        options: ["πr^2", "2πr", "πd", "r^2"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 3^3?",
        options: ["6", "9", "27", "81"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of cos(0°)?",
        options: ["0", "1", "-1", "√2"],
        correctAnswer: 1,
      },
      {
        question: "What is 25% of 80?",
        options: ["15", "20", "25", "30"],
        correctAnswer: 1,
      },
      {
        question: "Solve for x: 3x = 12.",
        options: ["2", "3", "4", "6"],
        correctAnswer: 2,
      },
      {
        question: "What is the reciprocal of 5/3?",
        options: ["3/5", "5/3", "15", "1/5"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 0.5 × 0.2?",
        options: ["0.01", "0.02", "0.1", "0.2"],
        correctAnswer: 2,
      },
      {
        question: "Simplify: 2(x + 3)",
        options: ["2x + 6", "2x + 3", "x + 6", "2x"],
        correctAnswer: 0,
      },
      {
        question: "What is the solution to the equation x^2 = 16?",
        options: ["4", "-4", "±4", "0"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of log10(100)?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
      },
      {
        question: "What is the volume of a cube with side length 5?",
        options: ["125", "100", "25", "150"],
        correctAnswer: 0,
      },
      {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 2,
      },
      {
        question: "If y = 3x + 7, what is the y-intercept?",
        options: ["3", "7", "10", "0"],
        correctAnswer: 1,
      },
      {
        question: "What is the perimeter of a square with side length 9?",
        options: ["18", "27", "36", "45"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 1/2 ÷ 1/4?",
        options: ["1/8", "1/2", "2", "4"],
        correctAnswer: 2,
      },
      {
        question: "Simplify: 5x - 3 + 2x + 7",
        options: ["7x - 4", "7x + 4", "5x + 4", "5x + 10"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the interior angles of a hexagon?",
        options: ["360°", "540°", "720°", "900°"],
        correctAnswer: 2,
      },
    ],
  },

  {
    category: "geography",
    questions: [
      {
        question: "What is the largest continent by area?",
        options: ["Africa", "Asia", "Europe", "Antarctica"],
        correctAnswer: 1,
      },
      {
        question: "What is the capital of France?",
        options: ["Madrid", "Berlin", "Paris", "Rome"],
        correctAnswer: 2,
      },
      {
        question: "Which ocean is the largest in the world?",
        options: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Pacific Ocean",
          "Arctic Ocean",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the smallest country in the world by area?",
        options: ["Monaco", "Malta", "Vatican City", "San Marino"],
        correctAnswer: 2,
      },
      {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: 1,
      },
      {
        question: "Which desert is the largest in the world?",
        options: ["Sahara", "Gobi", "Arctic", "Antarctic"],
        correctAnswer: 3,
      },
      {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Mount Kilimanjaro", "Mount Denali"],
        correctAnswer: 1,
      },
      {
        question: "Which country has the most time zones?",
        options: ["USA", "China", "Russia", "Australia"],
        correctAnswer: 2,
      },
      {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: 2,
      },
      {
        question: "Which U.S. state is the largest by area?",
        options: ["Texas", "California", "Alaska", "Montana"],
        correctAnswer: 2,
      },
      {
        question: "Which African country is the most populous?",
        options: ["Nigeria", "Ethiopia", "Egypt", "South Africa"],
        correctAnswer: 0,
      },
      {
        question: "What is the official language of Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "India", "Japan", "South Korea"],
        correctAnswer: 2,
      },
      {
        question: "Which country has the highest number of islands?",
        options: ["Indonesia", "Sweden", "Philippines", "Canada"],
        correctAnswer: 1,
      },
      {
        question: "What is the largest lake in the world by surface area?",
        options: [
          "Lake Victoria",
          "Lake Superior",
          "Caspian Sea",
          "Lake Huron",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the capital city of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        correctAnswer: 3,
      },
      {
        question: "Which river flows through London?",
        options: ["Seine", "Thames", "Danube", "Rhine"],
        correctAnswer: 1,
      },
      {
        question: "Which country is the largest by area in South America?",
        options: ["Argentina", "Brazil", "Chile", "Peru"],
        correctAnswer: 1,
      },
      {
        question: "Which continent is home to the Amazon Rainforest?",
        options: ["Africa", "Asia", "South America", "Australia"],
        correctAnswer: 2,
      },
      {
        question: "What is the smallest U.S. state by area?",
        options: ["Delaware", "Rhode Island", "Connecticut", "Hawaii"],
        correctAnswer: 1,
      },
      {
        question: "What is the capital of Egypt?",
        options: ["Cairo", "Alexandria", "Giza", "Luxor"],
        correctAnswer: 0,
      },
      {
        question: "Which sea is the saltiest in the world?",
        options: ["Red Sea", "Mediterranean Sea", "Dead Sea", "Baltic Sea"],
        correctAnswer: 2,
      },
      {
        question: "Which European country is known for its fjords?",
        options: ["Sweden", "Norway", "Denmark", "Finland"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the name of the imaginary line dividing the Earth into Northern and Southern Hemispheres?",
        options: [
          "Prime Meridian",
          "Equator",
          "Tropic of Cancer",
          "Tropic of Capricorn",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which country shares the longest land border with the United States?",
        options: ["Canada", "Mexico", "Russia", "Cuba"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "environment",
    questions: [
      {
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: 1,
      },
      {
        question: "Which layer of the atmosphere contains the ozone layer?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        correctAnswer: 1,
      },
      {
        question: "What is the primary cause of global warming?",
        options: [
          "Deforestation",
          "Fossil fuels",
          "Ozone depletion",
          "Volcanic eruptions",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which renewable energy source uses the power of moving water?",
        options: ["Solar", "Geothermal", "Hydropower", "Wind"],
        correctAnswer: 2,
      },
      {
        question: "What is the process by which plants produce oxygen?",
        options: [
          "Respiration",
          "Photosynthesis",
          "Decomposition",
          "Evaporation",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which gas is a major contributor to the greenhouse effect?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 2,
      },
      {
        question: "What is the largest source of freshwater on Earth?",
        options: ["Rivers", "Lakes", "Groundwater", "Glaciers"],
        correctAnswer: 3,
      },
      {
        question: "What is biodiversity?",
        options: [
          "The variety of life on Earth",
          "The number of forests",
          "The number of ecosystems",
          "The number of species in oceans",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a non-renewable energy source?",
        options: ["Wind", "Coal", "Solar", "Hydropower"],
        correctAnswer: 1,
      },
      {
        question: "What is the main cause of deforestation?",
        options: ["Urbanization", "Agriculture", "Logging", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "Which organization monitors global climate change?",
        options: ["WHO", "UNESCO", "IPCC", "WWF"],
        correctAnswer: 2,
      },
      {
        question: "What is the term for the variety of ecosystems on Earth?",
        options: [
          "Genetic diversity",
          "Ecosystem diversity",
          "Species diversity",
          "Population diversity",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which human activity is the leading cause of ocean pollution?",
        options: ["Fishing", "Tourism", "Plastic waste", "Oil spills"],
        correctAnswer: 2,
      },
      {
        question: "What does the term 'carbon footprint' mean?",
        options: [
          "The total emissions of carbon dioxide",
          "The amount of carbon in the soil",
          "Carbon levels in forests",
          "Carbon levels in the atmosphere",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which ecosystem covers the largest part of Earth's surface?",
        options: ["Deserts", "Forests", "Oceans", "Grasslands"],
        correctAnswer: 2,
      },
      {
        question: "What is the main purpose of a wildlife sanctuary?",
        options: [
          "To protect animals",
          "To protect forests",
          "To promote tourism",
          "To research plants",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a greenhouse gas?",
        options: ["Oxygen", "Methane", "Nitrogen", "Argon"],
        correctAnswer: 1,
      },
      {
        question: "Which country produces the most solar energy?",
        options: ["USA", "India", "Germany", "China"],
        correctAnswer: 3,
      },
      {
        question: "What is desertification?",
        options: [
          "The expansion of deserts",
          "The loss of biodiversity",
          "The transformation of fertile land into desert",
          "The cutting down of rainforests",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is acid rain primarily caused by?",
        options: [
          "Greenhouse gases",
          "Sulfur dioxide and nitrogen oxides",
          "Ozone depletion",
          "Deforestation",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a major effect of climate change?",
        options: [
          "Rising sea levels",
          "Decreasing ocean salinity",
          "Expanding forests",
          "Increasing ozone layer",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which practice helps conserve water?",
        options: [
          "Drip irrigation",
          "Overwatering",
          "Deforestation",
          "Pesticide use",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a sustainable resource?",
        options: ["Oil", "Natural gas", "Timber", "Coal"],
        correctAnswer: 2,
      },
      {
        question: "Which type of pollution harms aquatic life the most?",
        options: [
          "Air pollution",
          "Soil pollution",
          "Water pollution",
          "Noise pollution",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which country has the largest area of tropical rainforest?",
        options: ["Indonesia", "Brazil", "Congo", "Australia"],
        correctAnswer: 1,
      },
    ],
  },
];
