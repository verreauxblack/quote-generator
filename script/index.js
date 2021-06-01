const blockquote = document.querySelector("blockquote")
const cite = document.querySelector("cite")
const btn = document.querySelector("button")


blockquote.innerHTML="Wait for a second..."
cite.innerHTML="RAJ"


const url = "https://goquotes-api.herokuapp.com/api/v1/all/quotes"

const quotes = async (url) =>{
    const respone = await fetch(url)
    const allquotes = await respone.json()
    return allquotes
}

// let quote = quotes(url)
// quote.then(data => console.log(data))

function handle(){
    let count,random,quote
    quotes(url)
    .then((data)=>{
        count = data.count;
        random = Math.round(Math.random() * count)
        quote = data.quotes[random]
        blockquote.innerHTML = quote.text
        cite.innerHTML = quote.author
    }).catch((err)=>console.log(err.message))

}
handle();

btn.addEventListener("click",() =>handle())
