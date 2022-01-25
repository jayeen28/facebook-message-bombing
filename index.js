const puppeteer = require('puppeteer');
require('dotenv').config();
const handleSendMessage = async (page) => {

}
(async () => {
    const browser = await puppeteer.launch({
        headless: false, executablePath: 'google-chrome-stable', args: [
            '--start-maximized',
            '--disable-notifications'
        ]
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 9768 })
    //go to facebook
    await page.goto('https://facebook.com');
    //write email
    await page.type('#email', `${process.env.FACEBOOK_EMAIL}`);
    //write pass
    await page.type('#pass', `${process.env.FACEBOOK_PASS}`);
    //hit login
    await page.evaluate(() => {
        const loginButton = document.getElementsByName('login')[0];
        loginButton.click()
    });
    console.log(process)
    //wait until loaded
    await page.waitForNavigation();
    //go to message room
    //go to mobile version
    await page.goto(`${process.env.FACEBOOK_TARGETED_INBOX}`);
    await page.evaluate(() => {
        const input = document.getElementById('composerInput');
        const send = document.getElementsByName('send')[0];
        const like = document.getElementsByName('like')[0];
        // input.focus();
        setInterval(async () => {
            // input.focus();
            // input.innerText = "Hello, I am Jayeen's bot";
            like.click();
        }, 4000);
    })
})();
