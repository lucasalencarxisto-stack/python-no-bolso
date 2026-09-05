import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private readonly storageKey =
    'python-no-bolso-completed-lessons';


  private getCompletedLessons(): number[] {

    const saved =
      localStorage.getItem(
        this.storageKey
      );

    if (!saved) {
      return [];
    }

    try {

      const parsed =
        JSON.parse(saved);

      return Array.isArray(parsed)
        ? parsed
        : [];

    } catch {

      return [];

    }
  }


  private saveCompletedLessons(
    lessons: number[]
  ): void {

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(lessons)
    );
  }


  isCompleted(
    lessonId: number
  ): boolean {

    return this
      .getCompletedLessons()
      .includes(lessonId);
  }


  completeLesson(
    lessonId: number
  ): void {

    const completed =
      this.getCompletedLessons();

    if (
      completed.includes(lessonId)
    ) {
      return;
    }

    completed.push(
      lessonId
    );

    this.saveCompletedLessons(
      completed
    );
  }


  getCompletedCount(): number {

    return this
      .getCompletedLessons()
      .length;
  }

}