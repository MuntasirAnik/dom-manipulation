/* Task 1 */
var heading = document.getElementById("heading")
console.log(heading.innerText)

/* Task 2 using plain JavaScript */
//task 2a
var textBtn = document.getElementById('textBtn2')
textBtn.addEventListener('click',function(){
   var task2 = document.getElementById('task2a') 
   var paragraph = document.createElement('p')
   paragraph.innerText = 'Hello world'
   task2.appendChild(paragraph)
})
//task 2b
function changeBGcolor(event){
    var body= document.getElementsByTagName('body')[0]
    if(event.target.innerText=="Red"){
        body.style.background = 'red';
    }
    if(event.target.innerText=="Green"){
        body.style.background = 'green';
    }
}
// task 2c
function redirectToGoogle(){
    window.location.assign('http://google.com')
}



/* Task 4 using jQuery */
