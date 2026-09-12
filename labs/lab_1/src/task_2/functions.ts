// Функція з параметром за замовчуванням
function greetUser(name: string, age: number = 19): string {
    return `Привіт, ${name}! Тобі ${age} років.`;
}

// Виклик з двома аргументами
console.log(greetUser("Анастасія", 18));

// Виклик без другого аргументу — використає значення за замовчуванням (18)
console.log(greetUser("Катерина"));