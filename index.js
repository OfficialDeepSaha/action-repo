/**
 * Sample JavaScript file for the action-repo
 * This file is used to demonstrate GitHub webhook events
 */

// Simple function to demonstrate code changes
function greet(name) {
    return `Hello, ${name}!`;
}

// Sample class for demo purposes
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return {
            name: this.name,
            email: this.email
        };
    }

    greet() {
        return greet(this.name);
    }
}

// Sample data
const users = [
    new User('John Doe', 'john@example.com'),
    new User('Jane Smith', 'jane@example.com')
];

// Main function to simulate activity
function main() {
    console.log('Starting application...');
    
    // Log all users
    users.forEach(user => {
        console.log(`User: ${user.name}, Email: ${user.email}`);
        console.log(`Greeting: ${user.greet()}`);
    });
    
    console.log('Application finished.');
}

// Execute main function
main();
