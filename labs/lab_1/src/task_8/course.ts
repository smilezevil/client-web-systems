interface Course {
    name: string;
    durationHours: number;
    students: string[];
}

class OnlineCourse implements Course {
    name: string;
    durationHours: number;
    students: string[] = [];

    constructor(name: string, durationHours: number) {
        this.name = name;
        this.durationHours = durationHours;
    }

    registerStudent(student: string): void {
        if (this.isStudentRegistered(student)) {
            console.log(`${student} вже зареєстрований на курс "${this.name}"`);
            return;
        }
        this.students.push(student);
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    removeCourse(courseName: string): void {
        this.courses = this.courses.filter((c) => c.name !== courseName);
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find((c) => c.name === courseName);
    }

    listCourses(): void {
        for (const course of this.courses) {
            console.log(
                `Курс: ${course.name} (${course.durationHours} год.) — студенти: ${course.students.length > 0 ? course.students.join(", ") : "немає"}`
            );
        }
    }
}

const manager = new CourseManager();

const tsCourse = new OnlineCourse("TypeScript Basics", 20);
const jsCourse = new OnlineCourse("JavaScript Advanced", 30);

manager.addCourse(tsCourse);
manager.addCourse(jsCourse);

tsCourse.registerStudent("Анастасія");
tsCourse.registerStudent("Катерина");
jsCourse.registerStudent("Михайло");

tsCourse.registerStudent("Анастасія");

console.log("\nсписок курсів:");
manager.listCourses();

console.log("\nпошук курсу 'JavaScript Advanced':");
console.log(manager.findCourse("JavaScript Advanced"));