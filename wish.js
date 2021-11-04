// Github.com/healer-op
/*-------------- Audio Files --------------- */
const success = new Audio('https://github.com/healer-op/HealCloud/blob/main/mp3/Indian%20Instrumental%20Music%20Happy%20Diwali%20Diwali%20Background%20Music%20Diwali%202020%20Diwalispecial_48k.mp3?raw=true');
function wishme(){
  success.play();
  success.play();
}

/** Main Render **/
const params = new URLSearchParams(document.location.search);
const to = params.get("to");
const from = params.get("from");
const bg = params.get("bg");
document.getElementById("to").innerHTML =`🪔Happy Diwali <b class="name bounceInDown">${to}</b>`
document.getElementById("from").innerHTML =`<b class="name bounceInDown">${from}</b>   has Send You A Warm Diwali Wish - A festival full of sweet childhood memories, a sky full of fireworks, mouth full of sweets, house full of diyas and heart full of joy. Wishing you all a very happy Diwali.`
if(bg == "Green"){
    document.body.style.backgroundImage = "url('/gift/3248.png')";
}
if(bg == "Orange"){
    document.body.style.backgroundImage = "url('/gift/2703.png')";
}
if(bg == "Purple"){
    document.body.style.backgroundImage = "url('/gift/27534.png')";
}
if(bg == "Yellow"){
    document.body.style.backgroundImage = "url('/gift/27620.png')";
}
if(bg == "Blue"){
    document.body.style.backgroundImage = "url('/gift/27536.png')";
}