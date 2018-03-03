export class Task {

  public id: String;
  public title:String;
  public description:String;
  public startDate:Date;
  public endDate?:Date;
  public status:String = "Backlog";
  public workedTime:Number =0;
  public planningTime:Number = 0;
  public username:String;



  constructor() { }
}
