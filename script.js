
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuote = document.getElementById("new");
// const Tweet = document.getElementById("tweet");
let realData = "";

// const tweetNow = () => {
//     let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
//     window.open(tweetPost);
// }

const getNewQuotes = () => {
    let rendomNum = Math.floor(Math.random() * realData.length);
    // console.log(realData[rendomNum].author);
    // console.log(rendomNum);
    let quotesData = realData[rendomNum]
    quotes.innerText = `${quotesData.text}`;
    if(quotesData.author == null) {
        author.innerText = "Unknown";
    }
    else {
        author.innerText = `${quotesData.author}`;
    }
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try{
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData.length);
        getNewQuotes();
        // console.log(realData[0].text);
        // console.log(realData[0].author);
    } catch(error) {

    }
};

newQuote.addEventListener("click", getNewQuotes);
// Tweet.addEventListener("click", tweetNow);
getQuotes();