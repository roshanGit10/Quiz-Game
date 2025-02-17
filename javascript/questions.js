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
    category: "nursing",
    questions: [
      {
        question: "A visible tangle of fungal hyphae is generally known as:",
        options: ["Mycelium", "Sporangium", "Hypha", "Conidium"],
        correctAnswer: 0,
      },
      {
        question:
          "Which of the following is the type of bond between molecules of water in a beaker of water?",
        options: [
          "Ionic bond",
          "Covalent bond",
          "Hydrogen bond",
          "Peptide bond",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "If sodium transfers an electron to fluorine, what type of bond is made?",
        options: ["Covalent", "Ionic", "Hydrogen", "Peptide"],
        correctAnswer: 1,
      },
      {
        question:
          "All of the following are characteristics of the Platyhelminthes EXCEPT that they:",
        options: [
          "Have highly developed digestive and nervous systems",
          "Are bilaterally symmetrical",
          "Are dorsoventrally flattened",
          "Lack a body cavity",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which of the following statements best describes what happens when a bacterial cell is placed in a solution containing 10% NaCl?",
        options: [
          "Water will move into the cell",
          "Water will move out of the cell",
          "There will be no net movement of water",
          "The cell will swell and burst",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "A scientist wants to perform a test that will indicate whether a nucleic acid sample is composed of either RNA or DNA. Testing for the presence of which of the following is most appropriate in this situation?",
        options: ["Thymine", "Uracil", "Deoxyribose", "Phosphate"],
        correctAnswer: 1,
      },
      {
        question:
          "Which are the primary molecules making up plasma membranes in cells?",
        options: ["Carbohydrates", "Proteins", "Lipids", "Nucleic acids"],
        correctAnswer: 2,
      },
      {
        question:
          "A Gram-positive bacterium suddenly acquires resistance to the antibiotic methicillin. This trait most likely occurred due to the acquisition of new genetic information (plasmids) through:",
        options: ["Transformation", "Transduction", "Conjugation", "Sex pili"],
        correctAnswer: 3,
      },
      {
        question: "Which structure protects bacteria from being phagocytized?",
        options: ["Capsule", "Pili", "Flagella", "Cell wall"],
        correctAnswer: 0,
      },
      {
        question:
          "Which type of molecule contains monomers with -NH₂ (amino) groups?",
        options: ["Lipids", "Proteins", "Carbohydrates", "Nucleic acids"],
        correctAnswer: 1,
      },
      {
        question: "Algae and fungi are eukaryotes.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        question: "All algae have:",
        options: [
          "Chlorophyll",
          "Mitochondria",
          "Cell walls made of chitin",
          "Flagella",
        ],
        correctAnswer: 0,
      },
      {
        question: "Fungi typically have ____________ in their cell walls.",
        options: ["Peptidoglycan", "Chitin", "Cellulose", "Lipopolysaccharide"],
        correctAnswer: 1,
      },
      {
        question: "Archaea are typically found in extreme environments.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        question: "Bacteria are present on the body:",
        options: [
          "Only when infected",
          "Constantly",
          "Only in the gut",
          "Only on the skin",
        ],
        correctAnswer: 1,
      },
      {
        question: "Bioremediation refers to:",
        options: [
          "Using bacteria to clean up pollutants",
          "The use of antibiotics to treat infections",
          "The process of fermentation in food production",
          "The spread of bacteria in the environment",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "During which phase of the bacterial growth curve does exponential growth occur?",
        options: ["Stationary phase", "Death phase", "Log phase", "Lag phase"],
        correctAnswer: 2,
      },
      {
        question:
          "Electron microscopes differ from compound light microscopes in that: (select all that apply)",
        options: [
          "Electrons replace the light",
          "Electromagnets replace the glass lenses",
          "Resolution is higher than it is for compound light microscopes",
          "Magnification is higher than it is for compound light microscopes",
        ],
        correctAnswer: 3,
      },
      {
        question: "Endospores:",
        options: [
          "Allow certain bacteria to survive harsh conditions",
          "Are a form of reproduction",
          "Are obligate intracellular parasites",
          "Are sensitive to damaging environmental conditions",
        ],
        correctAnswer: 0,
      },
      {
        question: "Fungal diseases are generally referred to as:",
        options: [
          "Mycoses",
          "Toxoplasmosis",
          "Protozoan infections",
          "Helminthic diseases",
        ],
        correctAnswer: 0,
      },
      {
        question: "Fungi are important in: (select all that apply)",
        options: [
          "Food production",
          "Food spoilage",
          "Production of antibiotics",
          "Diseases of plants",
        ],
        correctAnswer: 3,
      },
      {
        question:
          "Gram-positive bacteria are less susceptible to penicillin than Gram-negatives.",
        options: ["True", "False"],
        correctAnswer: 1,
      },
      {
        question:
          "How many bacteria would be present after 1.25 hours for a population of E. coli capable of dividing every 15 minutes? The population started from 10 cells. No calculators.",
        options: ["160 cells", "320 cells", "640 cells", "1280 cells"],
        correctAnswer: 1,
      },
      {
        question: "Identify the causative agent of African sleeping sickness.",
        options: [
          "Plasmodium falciparum",
          "Trypanosoma brucei",
          "Leishmania donovani",
          "Toxoplasma gondii",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    category: "nursing 3",
    questions: [
      {
        question: "Which of the following is a unicellular fungal morphology?",
        options: ["Yeast", "Molds", "Mushrooms", "Lichens"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is an example of a helminth?",
        options: ["Tapeworms", "Roundworms", "Trypanosomes", "Protozoans"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is mismatched?",
        options: [
          "Trypanosomes - Dysentery",
          "Entamoeba histolytica - Dysentery",
          "Plasmodium - Malaria",
          "Giardia – Diarrhea",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which of the following staining method(s) is/are considered to be differential? (Select all that apply)",
        options: [
          "Capsule stain",
          "Flagella stain",
          "Acid-fast stain",
          "Gram stain",
        ],
        correctAnswer: [2, 3],
      },
      {
        question:
          "Which of the following statements regarding protozoa is FALSE?",
        options: [
          "All protozoans are photoautotrophs.",
          "Some protozoans are heterotrophs.",
          "Protozoans are unicellular organisms.",
          "Protozoans can cause diseases in humans.",
        ],
        correctAnswer: 0,
      },
      {
        question: "Why are algae medically relevant?",
        options: [
          "They produce toxins that may be consumed",
          "They can cause infections",
          "They are used in pharmaceutical products",
          "They help in water purification",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "You get growth on your MSA plate, and the agar turns from red to yellow. What do you know? (Select all that apply)",
        options: [
          "Your bacteria ferment lactose",
          "Your bacteria ferment mannitol",
          "You have Gram-positive cocci (Staphylococcus)",
          "You have Gram-negative rods",
        ],
        correctAnswer: [1, 2],
      },
      {
        question:
          "Which of the following are positively-charged subatomic particles?",
        options: ["Protons", "Neutrons", "Electrons", "Nucleons"],
        correctAnswer: 0,
      },
      {
        question:
          "You inoculate a tube of solidifying media with a certain species of bacteria. It grows throughout the tube, but is especially concentrated near the surface. This species includes:",
        options: [
          "Microaerophiles",
          "Facultative anaerobes",
          "Obligate aerobes",
          "Aerotolerant anaerobes",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "_______________ are in a group called Zygomycetes. They produce reproductive structures called sporangia.",
        options: ["Aspergillus", "Penicillium", "Rhizopus", "Mucor"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following statements about carbon-12 is FALSE?",
        options: [
          "It has 12 neutrons in its nucleus.",
          "It has 6 neutrons in its nucleus.",
          "It has 6 protons in its nucleus.",
          "It has an atomic mass of 12.",
        ],
        correctAnswer: 0,
      },
      {
        question: "Streptobacilli is a term to describe:",
        options: [
          "A chain of rods",
          "A pair of rods",
          "A cluster of rods",
          "A single rod",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "(Bonus) Identify each as a prokaryotic structure, a eukaryotic structure, or both:",
        options: [
          "Cilia",
          "70s Ribosome",
          "Flagellum",
          "Nucleus",
          "Endospores",
          "Mitochondrion",
        ],
        correctAnswer: [
          "Eukaryotic",
          "Prokaryotic",
          "Both",
          "Eukaryotic",
          "Prokaryotic",
          "Eukaryotic",
        ],
      },
      {
        question: "Which of the following is a sign of dehydration?",
        options: [
          "Dry mouth",
          "Increased urination",
          "Low blood pressure",
          "All of the above",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the normal range for adult blood pressure?",
        options: ["120/80 mmHg", "130/90 mmHg", "140/100 mmHg", "110/70 mmHg"],
        correctAnswer: 0,
      },
      {
        question: "What is the first step in CPR for an adult victim?",
        options: [
          "Start chest compressions",
          "Check for a pulse",
          "Call for help",
          "Give rescue breaths",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is NOT a symptom of a heart attack?",
        options: ["Chest pain", "Shortness of breath", "Nausea", "Headache"],
        correctAnswer: 3,
      },
      {
        question: "Which type of insulin is fast-acting?",
        options: [
          "Regular insulin",
          "Long-acting insulin",
          "Intermediate-acting insulin",
          "Rapid-acting insulin",
        ],
        correctAnswer: 3,
      },
      {
        question: "What is the term for a surgical opening in the abdomen?",
        options: ["Colostomy", "Gastrectomy", "Laparotomy", "Hysterectomy"],
        correctAnswer: 2,
      },
      {
        question: "What is the primary purpose of a urinary catheter?",
        options: [
          "Drain urine from the bladder",
          "Relieve urinary retention",
          "Monitor kidney function",
          "Treat urinary tract infections",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which of the following medications is most commonly prescribed for hypertension?",
        options: ["Amlodipine", "Levothyroxine", "Insulin", "Amoxicillin"],
        correctAnswer: 0,
      },
      {
        question:
          "What is the most common route of transmission for the flu virus?",
        options: [
          "Airborne droplets",
          "Contact with contaminated surfaces",
          "Ingestion of contaminated food",
          "Direct skin contact",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the role of a nurse in the preoperative phase?",
        options: [
          "Providing education about the procedure",
          "Administering anesthesia",
          "Assisting in surgery",
          "Monitoring vital signs during surgery",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    category: "nursing 2",
    questions: [
      {
        question:
          "The agent described in the previous question is transmitted by:",
        options: [
          "An arthropod—the tsetse fly",
          "A protozoan—Trypanosoma cruzi",
          "A helminth—the liver fluke",
          "An arthropod—chiggers",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Isolating a pure microbial culture from a mixed culture is best accomplished by the:",
        options: [
          "Broth culture method",
          "Membrane filtration method",
          "Streak plate method",
          "Multi-tube method",
        ],
        correctAnswer: 2,
      },
      {
        question: "Lichens are a symbiotic relationship between:",
        options: [
          "Algae and fungus",
          "Bacteria and fungus",
          "Virus and fungus",
          "Plant roots and fungus",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Most medically relevant bacteria have an optimum growth temperature at human body temperature and are termed:",
        options: ["Thermophiles", "Psychrophiles", "Mesophiles", "Halophiles"],
        correctAnswer: 2,
      },
      {
        question: "Mycorrhizae form a symbiotic relationship with:",
        options: ["Animals", "Bacteria", "Plants", "Algae"],
        correctAnswer: 2,
      },
      {
        question: "Nutrient agar is an example of which type of media?",
        options: ["Enriched", "Complex", "Selective", "Differential"],
        correctAnswer: 1,
      },
      {
        question:
          "Obligate aerobes will grow only near the surface of an agar-filled tube.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        question: "Outside of a cell, viruses are:",
        options: ["Inactive"],
        correctAnswer: 0,
      },
      {
        question: "Prions:",
        options: [
          "Are composed of only RNA",
          "Are composed of only DNA",
          "Are composed of only protein",
          "Tend to cause diseases in plants",
        ],
        correctAnswer: 2,
      },
      {
        question: "Red tides are caused by blooms of:",
        options: ["Dinoflagellates"],
        correctAnswer: 0,
      },
      {
        question: "Since protozoans are heterotrophs, they:",
        options: [
          "Make their own food",
          "Act as parasites",
          "Are always carried by arthropods",
          "Consume organic macromolecules",
        ],
        correctAnswer: 3,
      },
      {
        question: "The cell wall of Gram-positive bacteria:",
        options: ["Consists of many (up to 40) layers"],
        correctAnswer: 0,
      },
      {
        question: "The idea of spontaneous generation postulated that:",
        options: [
          "Organisms could evolve into the next generation of organisms",
          "Organisms could spontaneously combust",
          "Organisms could spontaneously arise from other living organisms",
          "Living organisms could spontaneously arise from non-living substances",
        ],
        correctAnswer: 3,
      },
      {
        question:
          "The life cycle of the blood fluke requires that humans and ___________ act as hosts.",
        options: ["Snails"],
        correctAnswer: 0,
      },
      {
        question:
          "The macromolecule found in the cell walls of ALL bacteria (with cell walls) is:",
        options: [
          "Lipopolysaccharide",
          "Teichoic acid",
          "Peptidoglycan",
          "Pseudomurein",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "The plasma membrane of both eukaryotes and prokaryotes functions to:",
        options: [
          "Regulate movement of molecules that enter and leave the cell",
        ],
        correctAnswer: 0,
      },
      {
        question: "The prokaryotic group includes bacteria and archaea.",
        options: ["True", "False"],
        correctAnswer: 0,
      },
      {
        question: "The scientific name of an organism includes its:",
        options: ["Genus and species"],
        correctAnswer: 0,
      },
      {
        question:
          "The two magnifying lenses found in a compound light microscope are the:",
        options: [
          "Basic and transverse",
          "Small and large",
          "Ocular and objective",
          "Simple and phase",
        ],
        correctAnswer: 2,
      },
      {
        question: "Unicellular algae possess holdfasts.",
        options: ["False"],
        correctAnswer: 0,
      },
      {
        question: "What sugar is in the MAC plate to make it differential?",
        options: ["Mannitol", "Glucose", "Lactose", "Bile salts"],
        correctAnswer: 2,
      },
      {
        question:
          "Which of the following is NOT a way that people become infected with helminths?",
        options: [
          "Inhalation",
          "Eating undercooked meat",
          "Contact with contaminated water",
          "Ingestion of eggs from soil",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which of the following cannot be seen with a Gram stain?",
        options: ["Bacteria", "Viruses", "Fungi", "Mycobacterium"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following does NOT have a cell wall?",
        options: ["Mycoplasma", "Fungi", "Bacteria", "Algae"],
        correctAnswer: 0,
      },
      {
        question:
          "Which of the following factors does NOT affect a bacterium's ability to grow?",
        options: [
          "Time of day",
          "Temperature",
          "pH levels",
          "Oxygen availability",
        ],
        correctAnswer: 0,
      },
    ],
  },
];
