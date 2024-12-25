learningContent["מספרים עשרוניים"] = {
    explanation: [
        "**מהם מספרים עשרוניים?**",
        "מספרים עשרוניים מייצגים חלקים של שלם באמצעות נקודה עשרונית",
        "",
        "**מבנה המספר העשרוני:**",
        "* ספרות שמאל לנקודה = יחידות שלמות",
        "* ספרה ראשונה אחרי הנקודה = עשיריות",
        "* ספרה שנייה = מאיות",
        "* ספרה שלישית = אלפיות",
        "",
        "**המרות:**",
        "* משבר פשוט לעשרוני: לחלק מונה במכנה",
        "* מעשרוני לשבר: לכתוב כמונה עם מכנה של חזקת 10",
        "",
        "**צפיפות המספרים העשרוניים:**",
        "* בין כל שני מספרים עשרוניים יש אינסוף מספרים",
        "* אפשר תמיד להוסיף ספרות נוספות אחרי הנקודה"
    ],
    examples: [
        {
            question: "כמה מספרים עשרוניים יש בין 0.22 ל-0.223?",
            solution: "יש אינסוף מספרים, למשל:\n0.221, 0.222, 0.2221, 0.2222, ...",
            drawing: {
                type: "numberLine",
                min: 0.22,
                max: 0.223,
                points: [0.221, 0.222],
                caption: "הדגמה של מספרים בין 0.22 ל-0.223"
            }
        },
        {
            question: "איך נכתוב את $\\frac{3}{8}$ כמספר עשרוני?",
            solution: "נחלק 3 ב-8:\n$3 ÷ 8 = 0.375$",
            drawing: {
                type: "fractionToDecimal",
                fraction: "3/8",
                decimal: "0.375",
                caption: "המרת שבר למספר עשרוני"
            }
        }
    ],
    quiz: [
        {
            question: "איזה מספר נמצא בין 0.4 ל-0.5?",
            options: ["0.45", "0.54", "0.35", "0.25"],
            correctAnswer: "a"
        },
        {
            question: "מה השבר הפשוט המייצג את 0.75?",
            options: ["$\\frac{3}{4}$", "$\\frac{7}{5}$", "$\\frac{75}{100}$", "$\\frac{7}{10}$"],
            correctAnswer: "a"
        },
        {
            question: "כמה אלפיות יש במספר 0.234?",
            options: ["234", "34", "4", "2.34"],
            correctAnswer: "a"
        },
        {
            question: "איזה מספר גדול יותר?",
            options: ["0.8", "0.75", "0.699", "0.7"],
            correctAnswer: "a"
        },
        {
            question: "מהו הערך של הספרה 5 במספר 3.157?",
            options: ["עשיריות", "מאיות", "אלפיות", "יחידות"],
            correctAnswer: "b"
        },
        {
            question: "איך כותבים 0.25 כשבר פשוט מצומצם?",
            options: ["$\\frac{1}{4}$", "$\\frac{25}{100}$", "$\\frac{5}{20}$", "$\\frac{2}{5}$"],
            correctAnswer: "a"
        },
        {
            question: "מהו המספר העשרוני המתאים לשבר $\\frac{1}{5}$?",
            options: ["0.2", "0.5", "0.25", "0.15"],
            correctAnswer: "a"
        },
        {
            question: "איזה מספר קרוב יותר ל-1?",
            options: ["0.901", "0.89", "0.899", "0.8999"],
            correctAnswer: "d"
        },
        {
            question: "כמה עשיריות יש במספר 2.456?",
            options: ["4", "5", "6", "2"],
            correctAnswer: "a"
        },
        {
            question: "איזה מהמספרים הבאים שווה ל-$\\frac{3}{2}$?",
            options: ["1.5", "1.25", "1.75", "1.35"],
            correctAnswer: "a"
        }
    ]
};