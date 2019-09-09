class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    get FullName(){
      return `${this.firstName} ${this.lastName}`
    }
    get chineseFullName(){
      return `${this.lastName} ${this.firstName}`
    }
    
    set chineseFullName(value){
      let parts = value.split(' ');
      this.lastName = parts[0];
      this.firstName = parts[1];
    }
  }
  
  let hzr = new Person("Zirui","Huang");
  hzr.chineseFullName = "Huang He";
  console.log(hzr)