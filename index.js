const puppeteer = require('puppeteer');

open = async () => {
    const browser = await puppeteer.launch({headless : true, devtools : true});
    const page = await browser.newPage();
    page.setViewport({width: 1920, height: 1080, deviceScaleFactor: 1})
    await page.goto("https://hirmify.vercel.app/");


    const list = [
        "https://github.com/puppeteer/puppeteer",
        "https://hirmify.vercel.app/"
    ]

    var i = 1;

    for(x of list){ 
        await page.goto(x);
        await page.screenshot({
            path : `./screenshot/${i}.png`,
            fullPage : true
        })
        await page.pdf({
            path: `./pdf/${i}.pdf`,
            format: "a4",
            margin: {
                top: "70px",
                bottom: "70px",
                left: "70px",
                right: "70px"
            }
        })
        i++;
    }

}

open();