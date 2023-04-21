class ClassNameCheck {
  pattern = /^[CAP][0-9]{4}[GHIKLM]$/;
  validate(name: string) {
    if (this.pattern.test(name)) {
      console.log(`${name} is valid!`);
    } else {
      console.log(`${name} is not valid!!`);
    }
  }
}

let classNameCheck = new ClassNameCheck();
let validName = ["C0318G", "C0223G", "C1022L"];
let inValidName = ["D0318G", "C00221Z", "C1022A"];

validName.forEach((item) => classNameCheck.validate(item));
inValidName.forEach((item) => classNameCheck.validate(item));
