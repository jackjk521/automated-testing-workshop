import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("user");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("pass");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByPlaceholder("Write a message").click();
  await page.getByPlaceholder("Write a message").fill("test");
  await page.getByRole("button", { name: "Post" }).click();
});
