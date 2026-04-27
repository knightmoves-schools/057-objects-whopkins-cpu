const http = require("http");
const fs = require("fs");
const puppeteer = require("puppeteer");
const { assert } = require("console");

let server;
let browser;
let page;

beforeAll(async () => {
  server = http.createServer(function (req, res) {
    fs.readFile(__dirname + "/.." + req.url, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  });

  server.listen(process.env.PORT || 3000);
});

afterAll(() => {
  server.close();
});

beforeEach(async () => {
  browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  page = await browser.newPage();
  await page.goto("http://localhost:3000/index.html");
});
afterEach(async () => {
  await browser.close();
});

describe('the index.js file', () => {
  it('should create an object named `school` that has three properties: name, "average class size", and mascot', async function() {
      const school = await page.evaluate(() => school);
      expect(school).toBeDefined();
  });

  it('should assign the innerHTML of the HTML element with the id result to the  string "${name} has an average class size of ${average class size} and their mascot is a ${mascot}"', async function() {
      const school = await page.evaluate(() => school);
      const innerHtml = await page.$eval('#result', (result) => {
        return result.innerHTML;
      });

      expect(innerHtml).toBe(`${school.name} has an average class size of ${school['average class size']} and their mascot is a ${school.mascot}`)
  });
});

