export class Member {
  public fullName: string;

  constructor(
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public level: string,
    public id: string = '0'
  ) {
    this.fullName = firstName + ' ' + lastName;
  }
}
