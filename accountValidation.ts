class AccountValidate {
  pattern = /^[_a-z0-9]{6,}$/;
  validate(account: string) {
    return this.pattern.test(account);
  }
}

let validAccount = ["123abc_", "_abc123", "______", "123456", "abcdefg"];
let inValidAccount = [".@", "12345", "1234_", "abcde ", "ABCD_1"];

let accountRegex = new AccountValidate();

for (let account of validAccount) {
  let isvalid: boolean = accountRegex.validate(account);
  console.log("Account is " + account + " is valid: " + isvalid);
}
for (let account of inValidAccount) {
  let isvalid: boolean = accountRegex.validate(account);
  console.log("Account is " + account + " is valid: " + isvalid);
}
