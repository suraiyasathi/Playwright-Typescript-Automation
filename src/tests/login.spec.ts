import { test, expect } from "../fixtures/testFixtures";
import { PathConstants } from "../utils/PathConstants";

test("Login with valid credentials", async ({ loginPage, env }) => {
  await loginPage.navigateTo(env.baseUrl + PathConstants.login);
  await loginPage.login(env.email, env.password);
  console.log("Login completed!");
});

