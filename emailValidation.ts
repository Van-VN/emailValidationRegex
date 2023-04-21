class EmailRegex {
  emailValidate = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
  validate(email: string) {
    return this.emailValidate.test(email);
  }
}

let emailRegex = new EmailRegex();

let validEmail: string[] = ["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
let invalidEmail: string[] = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];

for (let email of validEmail) {
  let isvalid: boolean = emailRegex.validate(email);
  console.log("Email is " + email + " is valid: " + isvalid);
}

for (let email of invalidEmail) {
  let isvalid: boolean = emailRegex.validate(email);
  console.log("Email is " + email + " is valid: " + isvalid);
}
