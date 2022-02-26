import React, { useState, useEffect } from 'react';

const Quote = () => {

 let [quote, setQuote] = useState();
 let [author, setAuthor] = useState();
 
 useEffect(() => {
  async function getQuote() {
   let randomQuote = await fetch('/random');
   let data = await randomQuote.json();
   setQuote(data[0].q);
   setAuthor(data[0].a)
  }
  getQuote();
 }, []);

 return (
  <footer>
   <div className="quote">
    {quote} ~ {author}
   </div>
    <div className="citation">
    Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank" rel="noreferrer">ZenQuotes API</a> ~ contact the website author at doodlepath at gmail dot com
   </div>
  </footer>
 )

}

export default Quote;