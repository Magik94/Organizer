export class Task {

  public title:String;
  public description:String;
  public startDate:Date = new Date();
  public endDate?:Date;
  public status:String;



  constructor() { }
}
