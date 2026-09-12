function greetUser(name: string, age: number = 19): string {
    return `Привіт, ${name}! Тобі ${age} років.`;
}

console.log(greetUser("Анастасія", 18));

console.log(greetUser("Катерина"));