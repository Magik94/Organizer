export class Task {

  public id: String;
  public title:String;
  public description:String;
  public startDate:Date;
  public endDate?:Date;
  public status:String;
  public workedTime:Number;
  public planningTime:Number;



  constructor() { }
}
