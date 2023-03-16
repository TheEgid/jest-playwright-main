import { chromium, Browser, Page } from "playwright";

let page: Page;
let browser: Browser;

beforeAll(async () => {
  browser = await chromium.launch();
});

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(async () => {
  await page.close();
});

it("Home page should have the correct title", async () => {
  await page.goto("https://www.carlrippon.com/");
  expect(await page.title()).toBe("All posts | Building SPAs");
});

describe("Google", () => {
  it('should display "Google" text on page', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("https://google.com");
    const title = await page.title();
    expect(title).toBe("Google");
    await browser.close();
  });
});

describe("Bing", () => {
  it('should display "Bing" text on page', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("https://bing.com");
    const title = await page.title();
    expect(title).toBe("Bing");
    await browser.close();
  });
});

describe("isValid", () => {
    it("returns true for a valid !", () => {
        const result = 2 + 2 === 4;
        expect(result).toBe(true);
    });
});


afterAll(async () => {
  await browser.close();
});
