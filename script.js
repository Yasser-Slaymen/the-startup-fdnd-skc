const dark= document.querySelector("div")
console.log(dark);
function openup(url) {
    console.log('url')
    window.open(url,' hallo' ,"top=100, left=100 , width=1100, height=550");
    dark.classList.add("dark");
}
window.addEventListener("focus",function(){
    console.log("focus")
    dark.classList.remove("dark");
});