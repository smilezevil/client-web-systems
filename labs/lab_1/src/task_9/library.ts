interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    borrow(): void;
}

class Book implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    pagesCount: number;

    constructor(title: string, author: string, pagesCount: number) {
        this.title = title;
        this.author = author;
        this.pagesCount = pagesCount;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`книгу "${this.title}" позичено.`);
    }
}

class Magazine implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    issueNumber: number;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`журнал "${this.title}" (випуск №${this.issueNumber}) позичено.`);
    }
}

class DVD implements LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean = false;
    durationMinutes: number;

    constructor(title: string, author: string, durationMinutes: number) {
        this.title = title;
        this.author = author;
        this.durationMinutes = durationMinutes;
    }

    borrow(): void {
        this.isBorrowed = true;
        console.log(`DVD "${this.title}" (${this.durationMinutes} хв) позичено.`);
    }
}

class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find((item) => item.title === name);
    }

    listAvailableItems(): void {
        const available = this.items.filter((item) => !item.isBorrowed);

        if (available.length === 0) {
            console.log("немає доступних елементів.");
            return;
        }

        console.log("доступні елементи бібліотеки:");
        for (const item of available) {
            console.log(`- ${item.title} (автор: ${item.author})`);
        }
    }
}

const library = new Library();

const book = new Book("Кобзар", "Тарас Шевченко", 320);
const magazine = new Magazine("National Geographic", "Різні автори", 145);
const dvd = new DVD("Тіні забутих предків", "Сергій Параджанов", 97);

library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);

console.log("до видачі:");
library.listAvailableItems();

book.borrow();

console.log("\nпісля видачі книги:");
library.listAvailableItems();

console.log("\nпошук елемента 'DVD':");
console.log(library.findItemByName("Тіні забутих предків"));