import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private readonly storageKey = 'python-no-bolso-completed-lessons';

  private getCompletedLessons(): number[] {
    const saved = localStorage.getItem(this.storageKey);

    if (!saved) {
      return [];
    }

    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  }

  isCompleted(id: number): boolean {
    return this.getCompletedLessons().includes(id);
  }

  completeLesson(id: number): void {
    const completed = this.getCompletedLessons();

    if (!completed.includes(id)) {
      completed.push(id);

      localStorage.setItem(
        this.storageKey,
        JSON.stringify(completed)
      );
    }
  }

  getCompletedCount(): number {
    return this.getCompletedLessons().length;
  }
}