import coursesJson from "./courses.json";

export interface CourseSyllabus {
  subject: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  duration: string;
  eligibility: string;
  batchSize: string;
  category: string;
  highlights: string[];
  syllabus: CourseSyllabus[];
  features: string[];
  schedule: string;
}

export const courses: Course[] = coursesJson.courses as Course[];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getCoursesByCategory(category: string): Course[] {
  return courses.filter((c) => c.category === category);
}

export function getCategories(): string[] {
  return [...new Set(courses.map((c) => c.category))];
}
