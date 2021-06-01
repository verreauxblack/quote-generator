const blockquote = document.querySelector("blockquote")
const cite = document.querySelector("cite")
const btn = document.querySelector("button")


blockquote.innerHTML="Wait for a second..."
cite.innerHTML="RAJ"


const url = "https://goquotes-api.herokuapp.com/api/v1/all/quotes"

// const quotes =  (url) =>{
//     fetch(url).then(respon => respon.json())
//     // // const allquotes = await respone.json()
//     // return respone
// }

// let quote = quotes(url)
// quote.then(data => console.log(data))

function handle(){
    let count,random,quote
    fetch(url)
    .then(respone => respone.json())
    .then((data)=>{
        count = data.count;
        random = Math.round(Math.random() * count)
        console.log(random)
        quote = data.quotes[random]
        blockquote.innerHTML = quote.text
        cite.innerHTML = quote.author
    }).catch((err)=>console.log(err.message))

}
handle();

btn.addEventListener("click",() =>handle())
