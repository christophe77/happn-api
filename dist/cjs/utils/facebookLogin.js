"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const db_1 = require("../db/db");
const const_1 = require("../const");
const delay = async (ms) => {
    return new Promise((res, _rej) => {
        setTimeout(() => {
            res(() => {
                console.log("delay ends");
            });
        }, ms);
    });
};
async function checkConsoleForToken(email, message) {
    if (message.includes("access_token")) {
        const accessToken = message
            .split("access_token=")[1]
            .split("&data_access_expiration_time")[0];
        await (0, db_1.updateLoginDatas)(email, { access_token: accessToken });
    }
}
async function facebookLogin(credentials) {
    try {
        await (0, db_1.createDb)();
        const browser = await puppeteer_1.default.launch({
            headless: false,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });
        const page = await browser.newPage();
        console.log("login in please wait...");
        const login = async () => {
            await page.goto(const_1.facebookUrl, {
                waitUntil: "networkidle2",
            });
            page.on("console", async (message) => {
                await checkConsoleForToken(credentials.email, message.text());
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
            await page.goto(const_1.facebookAuthUrl, {
                waitUntil: "networkidle2",
            });
            // bypass already logged
            await page.click('[role="button"]');
            await page.waitForNavigation();
        };
        await login();
        await getToken();
        await browser.close();
        return true;
    }
    catch (error) {
        return false;
    }
}
exports.default = facebookLogin;
