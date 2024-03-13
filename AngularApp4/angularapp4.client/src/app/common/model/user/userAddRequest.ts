export class UserAddRequest{
  Id:number = 0;
  AuthAccount = undefined;
  AuthType =  "Default";
  Contact = new Contact();
  Groups:Array<Groups> = [];
  Name:string = "";
  Person = new Person();
  Reference = "";
  Role:string = "";
  State = "Active";
  DomainId:any = 0;
  PartyUId: string = "";
}

export class Contact{
  Email:string ='';
  Phone = new Phone();
}

export class Groups{
  GroupUId:string ='';
  Name:string ='';
  Status:boolean = true;
}

export class Person{
  FirstName:string = '';
}

export class Phone{
  Number:any = "";
}