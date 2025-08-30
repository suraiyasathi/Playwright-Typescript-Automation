import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { EnvReader } from "../utils/EnvReader";

type Pages = {
  loginPage: LoginPage;
  env: typeof EnvReader;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
  env: async ({}, use) => { await use(EnvReader); }
});

export { expect };
