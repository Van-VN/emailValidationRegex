class PhoneNumCheck {
  pattern = /^\([0-9]{2}\)-0[0-9]{9}$/;
  validate(number: string) {
    if (this.pattern.test(number)) {
      console.log(`${number} is valid`);
    } else {
      console.log(`${number} is not valid`);
    }
  }
}

let phoneCheck = new PhoneNumCheck();
let validNum = ["(84)-0999999999", "(12)-0123456789", "(23)-0987654321"];
let inValidNum = ["(a4)-1999999999", "(12)-123456789", "(333)0987654321"];

validNum.forEach((item) => phoneCheck.validate(item));
inValidNum.forEach((item) => phoneCheck.validate(item));
