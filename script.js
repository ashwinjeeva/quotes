
async function main(){
    let url = await fetch("https://quoteclear.web.app/api/random")
    let data= await url.json()
    let arr= await data.text
    return arr 


}
async function display(){
    try{
        let text= await main()
        document.getElementById("text").innerHTML=text
        console.log(text);
    }catch(err){
        console.log(err);

    }
    
}
reload=()=>{
    display()
}

reload()

