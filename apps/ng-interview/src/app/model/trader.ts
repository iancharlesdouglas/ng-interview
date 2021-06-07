export class Trader {
  readonly id: string;

  readonly familyName: string;

  readonly givenNames: string;

  limit?: number;

  grade?: string;

  constructor(
    id: string,
    familyName: string,
    givenNames: string,
    limit?: number,
    grade?: string
  ) {
    this.id = id;
    this.familyName = familyName;
    this.givenNames = givenNames;
    this.limit = limit;
    this.grade = grade;
  }

  fullName(): string {
    return `${this.givenNames} ${this.familyName}`.trim();
  }
}
