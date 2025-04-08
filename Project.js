let btnid=document.getElementById("btn")
let api_id=document.getElementById("api_data")

const apiUrl = "https://icanhazdadjoke.com/"


let count=0
function fetchdata(){
    if (count>=10){
        api_id.innerText="🔥 You heated my mind, let me drink some cold water! 💧😂"
        btnid.disabled=true
        btnid.style.backgroundColor="grey"
        setTimeout(()=>{
            btnid.disabled=false
            btnid.style.backgroundColor = "#ff6b81";
            api_id.innerText="i am refreshed heat up my brain again"
            count=0
        },10000)
    

    }
    else{fetch(apiUrl,{
       headers:{
        Accept:"application/json"
       }
    }).then((res)=>{
        console.log(res)
        return res.json()
    }).then((data)=>{
        
        console.log(data)
        api_id.innerText=`${data.joke}`
        count++
        
        
        
    }).catch((err)=>{
        console.log(err)
    })
    
    
    }
}

fetchdata()

btnid.addEventListener("click",fetchdata)

console.log("Hello")
