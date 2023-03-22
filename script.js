function round(){
    let word=document.getElementById("our-input").value
    if(!word){
        alert("Enter a Number to Round")
    }
    let value=Math.round(word)
    document.getElementById("output").innerHTML=value
    document.getElementById("text").innerHTML=word
}
function ceil(){
    let word=document.getElementById("our-input").value
    if(!word){
        alert("Enter a Number to Ceil")
    }
    let value=Math.ceil(word)
    document.getElementById("output").innerHTML=value
    document.getElementById("text").innerHTML=word
}
function floor(){
    let word=document.getElementById("our-input").value
    if(!word){
        alert("Enter a Number to Floor")
    }
    let value=Math.floor(word)
    document.getElementById("output").innerHTML=value
    document.getElementById("text").innerHTML=word
}
function random(){
    let word=Math.random()
    document.getElementById("output").innerHTML=word
    
}
function diece(){
    let word=Math.random()
    
    let final=(word*6)+1
    let total=Math.floor(final)
    document.getElementById("output").innerHTML="you got "+" "+total+" "+"at diecing"
}
function gst(){
    let word=document.getElementById("our-input").value
    if(!word){
        alert("Enter price of products which you have buyed")
        return
    }
    let tax= +prompt("Enter tax")
    if(!tax){
        alert("Your tax is missing")
        return

    }
    let totaltax= word*(tax/100)
    let total=totaltax.toFixed(2)
    document.getElementById("output").innerHTML="Your GST is : "+total
}
function clr1(){
    document.getElementById("output").innerHTML=" "
}
function clr2(){
    document.getElementById("our-input").value=" "
}
function string(){
    let word=document.getElementById("our-input").value
    if(!word){
        alert("Enter value ")
        return
    }
    let value =Number(word)
    let final=value.toFixed(2)
    document.getElementById("output").innerHTML=final+"<br> " +"your string is converted to Number "
    document.getElementById("text").innerHTML=word
}
function password(){
    document.getElementById("output").innerHTML=" "
    let word=document.getElementById("our-input").value
    let abc=Number(word)
    if(!word){
        alert("Enter length of password ")
        return
    }

    let string=""
    let digit='0123456789'
    let ALP='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let alp='abcdefghijklmnopqrstuvwxyz'
    let symbol='<>./?£$!`¬&^,'
    let sum=digit+ALP+alp+symbol;
    console.log(sum.length)
    for(let i=0;i<abc;i++){
        let  h=Math.random()
        let w=h*sum.length
        document.getElementById("output").innerHTML+=sum.charAt(w)

    }
   
}
function length(){
    let word=document.getElementById("our-input").value
  if(!word){
    alert("Enter input in Decimal!")
  }
  let word1=Number(word)
  let final=word1.toFixed(2)
  document.getElementById("output").innerHTML=final
}