import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  emailInputField = "#email";
  passwordInputField = "#password";
  loginButton = "[class='btn-submit uppercase flex items-center gap-2 justify-center font-oswald mt-4']";

 async login(username: string, password: string) {
    await this.fill(this.emailInputField, username);
    await this.fill(this.passwordInputField, password);
    await this.click(this.loginButton);
  }
}