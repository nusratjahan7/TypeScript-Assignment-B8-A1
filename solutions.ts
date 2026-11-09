//* Problem 1

function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}

//* Problem 2

function processInput(value: string | number | boolean): number | string {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return value ? "Active" : "Inactive";
  }
  return value;
}

//* Problem 3

function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

//* Problem 4

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

//* Problem 5

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(course: Course[], minStudents: number): Course[] {
  return course.filter(
    (course) => course.isPublished == true && course.students >= minStudents,
  );
}

//* Problem 6

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((items) => items[key]);
}

//* Problem 7

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

//* Problem 8

export async function validateAgeAsync(age: number): Promise<string> {
  return new Promise((reslove, rejected) => {
    if (age < 18) {
      rejected(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        reslove("Access Granted");
      }, 1000);
    }
  });
}
