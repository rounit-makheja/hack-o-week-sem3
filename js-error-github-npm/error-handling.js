const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class InvalidAgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAgeError";
    }
}

function checkAge(age) {
    if (isNaN(age)) {
        throw new Error("Age must be a number");
    }

    if (age < 18) {
        throw new InvalidAgeError("Age must be 18 or above");
    }

    return "Access granted";
}

function validateUsername(username) {
    if (username.length < 5) {
        throw new Error("Username must contain at least 5 characters");
    }

    return "Username is valid";
}

rl.question("Enter your age: ", (ageInput) => {
    try {
        const age = Number(ageInput);
        console.log(checkAge(age));
    } catch (error) {
        console.log(error.name + ":", error.message);
    }

    rl.question("Enter your username: ", (username) => {
        try {
            console.log(validateUsername(username));
        } catch (error) {
            console.log("Caught Error:", error.message);
        }

        rl.close();
    });
});