export class Trader {
  readonly id: string;

  readonly familyName: string;

  readonly givenNames: string;

  limit?: number;

  constructor(
    id: string,
    familyName: string,
    givenNames: string,
    limit?: number
  ) {
    this.id = id;
    this.familyName = familyName;
    this.givenNames = givenNames;
    this.limit = limit;
  }

  fullName(): string {
    return `${this.givenNames} ${this.familyName}`.trim();
  }
}
