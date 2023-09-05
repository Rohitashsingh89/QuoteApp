
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuote = document.getElementById("new");
let realData = "";

const getNewQuotes = () => {
    let rendomNum = Math.floor(Math.random() * realData.length);
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
        getNewQuotes();
    } catch(error) {

    }
};

newQuote.addEventListener("click", getNewQuotes);
getQuotes();
