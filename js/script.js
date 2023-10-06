let input_tag= document.getElementById('input_box')
let list_tag= document.querySelector('.list-group #list')
var taskarray=[]
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const d = new Date();
let day = weekday[d.getDay()];
if (day=="Sunday") {
 document.getElementById("weekend").innerHTML = "enjoy the weekend!";}
else if (day=="Saturday"){
 document.getElementById("weekend").innerHTML = "enjoy the weekend!";}
 else if (day=="Friday"){
  document.getElementById("weekend").innerHTML = "weekend is near!";}
else{
document.getElementById('weekend').innerHTML= 5-d.getDay()+ " days left till weekend";}

let fetched_tasks= localStorage.getItem('task')
if (fetched_tasks!=null){
 taskarray= JSON.parse(fetched_tasks)}
displaytask()

input_box.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
    //   event.preventDefault();
      addtask(input_tag.value)
    }
  });


function addtask(input_passed){
    taskarray.push(input_passed)
    localStorage.setItem('task',JSON.stringify(taskarray))
    location.reload();
}
function displaytask(){
    var i=0
    taskarray.forEach(element => {
        var i= i+1
        let text= `<span onclick='removetask(${i})' class="btn">✦ This weekend i will
        ${element}</span>`
        list_tag.innerHTML += text
    });
}
function removetask(item_id){
    taskarray.splice(item_id,1)
    localStorage.setItem('task',JSON.stringify(taskarray))
    location.reload()
}
