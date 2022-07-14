const { By, Key, Builder, Capabilities } = require("selenium-webdriver");
require("chromedriver");
const should = require("chai").should();
const AxeBuilder = require("@axe-core/webdriverjs");

describe("deque challenge tests", function () {
  it("main-nav loads successfully", async function () {
    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://dequeuniversity.com/demo/mars");

    const mainNavIsDisplayed = await driver
      .findElement(By.id("main-nav"))
      .isDisplayed();

    mainNavIsDisplayed.should.equal(true);

    driver.quit();
  });
  it("Axebuilder successfully analyzes page", async function () {
    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://dequeuniversity.com/demo/mars/").then(() => {
      new AxeBuilder(driver).analyze((err, results) => {
        if (("Error: ", err)) {
          console.log("Errors: ", err);
        }
        console.log("Results: ", results);
        driver.quit();
      });
    });
  });
});
