function generateQuestions() {
    const topic = document.getElementById("topic").value.trim();
    const output = document.getElementById("output");

    if (!topic) {
        output.innerHTML = "Please enter a topic ⚠️";
        return;
    }

    // Pre-written 10 questions for Python and JavaScript
    const sampleQuestions = {
        Python: [
            "1. What is Python? Answer: Python is a high-level programming language.",
            "2. What are Python lists? Answer: Lists are ordered collections of items.",
            "3. What is a Python function? Answer: A block of reusable code.",
            "4. What is a loop in Python? Answer: A loop repeats code multiple times.",
            "5. What is Python used for? Answer: Web development, data science, AI, etc.",
            "6. What is a Python dictionary? Answer: A collection of key-value pairs.",
            "7. What is a Python tuple? Answer: An immutable ordered collection.",
            "8. How do you comment in Python? Answer: Use # for single line comments.",
            "9. What is Python's indentation rule? Answer: Indentation defines code blocks.",
            "10. How do you import a module? Answer: Using the import statement."
        ],
        JavaScript: [
            "1. What is JavaScript? Answer: JavaScript is a scripting language for web pages.",
            "2. What is a variable? Answer: A storage for data.",
            "3. What is a function? Answer: A block of code performing a task.",
            "4. What is an array? Answer: A list of items.",
            "5. What is DOM? Answer: Document Object Model of a webpage.",
            "6. What is an object? Answer: A collection of key-value pairs.",
            "7. What is a loop in JS? Answer: Repeats code multiple times.",
            "8. What is an event? Answer: Actions like clicks or key presses.",
            "9. How to write a comment? Answer: // for single-line, /* */ for multi-line.",
            "10. What is a JS function arrow syntax? Answer: ()=> used for short functions."
        ]
    };

    // Display questions if topic exists, otherwise show default message
    if (sampleQuestions[topic]) {
        output.innerHTML = sampleQuestions[topic].join("<br><br>");
    } else {
        output.innerHTML = "No questions available for this topic. Try 'Python' or 'JavaScript'.";
    }
}