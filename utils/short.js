const obj = {};
const urlShortener = (longURL = '') => {
   // Here spliting url to join all character without ('//, ., '') these special characters
   let splitLongUrl = longURL.split("://").join("").split('.').join('');
   let shortURL 
   for(let i=0; i<longURL.length; i++){
      //Here generating random string that assigns to shortURL
      shortURL += longURL.charAt(Math.floor(Math.random() * longURL.length));
   }
   if(!obj[shortURL]){
      obj[shortURL] = longURL;
   };
   return shortURL.slice(-4);
   }
   const urlRedirector = (shortURL = '') => {
   return obj[shortURL];
};

module.exports = { urlShortener, urlRedirector };


