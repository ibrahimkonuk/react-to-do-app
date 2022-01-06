// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('delete-todo', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('delete-todo', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1228, height: 775 })
    await driver.findElement(By.css(".todo-item__remove")).click()
  })
})
