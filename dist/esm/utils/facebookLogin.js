import puppeteer from "puppeteer";
import { createDb, updateLoginDatas } from "../db/db";
import { facebookAuthUrl, facebookUrl } from "../const";
const delay = async (ms) => {
    return new Promise((res, _rej) => {
        setTimeout(() => {
            res(() => {
                console.log("delay ends");
            });
        }, ms);
    });
};
async function checkConsoleForToken(message) {
    if (message.includes("access_token")) {
        const accessToken = message
            .split("access_token=")[1]
            .split("&data_access_expiration_time")[0];
        await updateLoginDatas({ access_token: accessToken });
    }
}
async function facebookLogin(credentials) {
    await createDb();
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    console.log("login in please wait...");
    const login = async () => {
        await page.goto(facebookUrl, {
            waitUntil: "networkidle2",
        });
        page.on("console", async (message) => {
            await checkConsoleForToken(message.text());
        });
        // bypass cookie alert
        await page.keyboard.press("Enter");
        await delay(1000);
        // fill form
        await page.waitForSelector("#email");
        await page.type("#email", credentials.email);
        await page.type("#pass", credentials.password);
        await delay(500);
        // login
        await page.click("#loginbutton");
        await page.waitForNavigation();
    };
    const getToken = async () => {
        await page.goto(facebookAuthUrl, {
            waitUntil: "networkidle2",
        });
        // bypass already logged
        await page.click('[role="button"]');
        await page.waitForNavigation();
    };
    await login();
    await getToken();
    await browser.close();
}
export default facebookLogin;
