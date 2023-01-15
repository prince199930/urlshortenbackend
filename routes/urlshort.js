const express = require('express');
const router = express.Router();
const Url = require('../models/Url')
const utils = require('../utils/util')
const urlShort = require('../utils/short')

//ROUTE 1 : GET ALL NOTES using GET "api/notes/fetchallnotes"
router.get("/fetchallurls", async (req, res) => {
    Url.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
})

//ROUTE 2 : ADD A NEW URL and create a shorten url using POST "api/url/addurl"
router.post("/addurl", async (req, res) => {
    console.log("HERE", req.body);
    const { origUrl } = req.body;
    const base = `http://localhost:8000/api/url`;

    // UrlShortener is  a function to generate a random string from orignalUrl
    let urlValue = urlShort.urlShortener(origUrl)
    //Here splitng is doing if urlValue exits any /
    let urlId = urlValue.split('/').join('');

    //ValidateUrl is a function to check if it follow the regex patter or not
    if (utils.validateUrl(origUrl)) {
        try {
            let url = await Url.findOne({ origUrl });
            if (url) {
                res.json(url);
            } else {

                //Here creating a Object of url to add in database
                const shortUrl = `${base}/${urlId}`;

                url = new Url({
                    origUrl,
                    shortUrl,
                    urlId,
                    date: new Date(),
                });

                await url.save();
                res.json(url);
            }
        } catch (err) {
            console.log(err);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(400).json('Invalid Original Url');
    }
});

//ROUTE 3: To reiderct from short url to orignal Url
router.get('/:urlId', async (req, res) => {
    try {
        //It will find one urlId if exists
        let url = await Url.findOne({ urlId: req.params.urlId });
        if (url) {
            //Click count increment when we click on shortUrl
            url.clicks++;
            url.save();
            return res.redirect(url.origUrl);
        }
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router;