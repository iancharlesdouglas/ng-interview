export class Trader {
  readonly id: string;

  readonly familyName: string;

  readonly givenNames: string;

  constructor(id: string, familyName: string, givenNames: string) {
    this.id = id;
    this.familyName = familyName;
    this.givenNames = givenNames;
  }

  fullName(): string {
    return `${this.givenNames} ${this.familyName}`.trim();
  }
}
