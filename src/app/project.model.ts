export class Project {
  public funded: number;
  constructor(
              public title: string,
              public starters: string,
              public amount: number,
              public reason: string,
              public target_date: string,
              public type: string,
              public id: number
  ){}
}
