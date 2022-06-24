axios.get("https://api.cryptonator.com/api/full/btc-usd")
.then(req => console.log(req.data.ticker.price))
.catch( e => console.log("Error",e))

const fetchPrice = async () => {
    
    try {
        const res = await axios.get("https://api.cryptonator.com/api/full/btc-usd") 
        console.log(res.data.ticker.price)
    } catch (error) {
        console.log("Error",error)
    }
}

const button = document.querySelector("button")
const jokes = document.querySelector("#jokes")
const getDadJokes = async () => {
    try {
        const config = {headers:{Accept: "application/json"}}
        const res= await axios.get("https://icanhazdadjoke.com/",config)
        return res.data.joke
    } catch (error) {
        return "No jokes available! Sorry :("
    }
    
}
const returnDadJoke = async ()=>{
    const jokeText = await getDadJokes()
    let newLi = document.createElement("li")
    newLi.innerText = jokeText
    jokes.append(newLi)
}
button.addEventListener("click",returnDadJoke)



// Tv search App

const form = document.querySelector("#searchForm")
form.addEventListener("submit",function (e) {
    e.preventDefault
    console.dir(form)
})