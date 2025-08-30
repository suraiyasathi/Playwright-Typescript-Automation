import { Page, expect } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  navigateTo = async (url: string) => {
  try {
    await this.page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  } catch (err) {
    console.warn("Navigation might have redirected or frame changed:", err.message);
  }
};

  async click(locator: string) {
    await this.page.locator(locator).click();
  }

  async fill(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }
}
