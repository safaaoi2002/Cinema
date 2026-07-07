

//search btn in movie page ********************************************************************************************

let search = document.getElementById("search")
let movies = document.querySelectorAll(".movie-card")

if (search) {
search.addEventListener("input",  ()=> {

    let value = search.value.toLowerCase()

    movies.forEach(movie =>{

        let movieName = movie.querySelector(".card-title").textContent.toLowerCase()

        if(movieName.includes(value)){
            movie.style.display = "block"
        }
        else{
            movie.style.display = "none"
        }

    })
})}

// toggle btn *********************************************************************************************************

function toggleTheme(){

    document.body.classList.toggle("dark-mode");

}

// book page using CRUD ****************************************************************************************************
let Bookings =JSON.parse(localStorage.getItem("Bookings")) || []
let editIndex= -1

function displayBookings(){
  const tablebody =document.getElementById("tablebody")
  if (!tablebody) return
  
  tablebody.innerHTML=""

  Bookings.forEach((Booking , idx) =>{
    tablebody.innerHTML+=`
    <tr>
    <td>${idx+1}</td>
    <td>${Booking.name}</td>
    <td>${Booking.number}</td>
    <td>${Booking.movie}</td>
    <td>${Booking.date}</td>
    <td>${Booking.time}</td>
    <td>
      <button class=" btn btn-warning btn-sm p-2 m-2" onclick="editData(${idx})">Edit </button>
      <button class=" btn btn-danger btn-sm p-2 m-2" onclick="deleteData(${idx})">delete </button>
      <button class=" btn btn-success btn-sm p-2 m-2" onclick="confirmData(${idx})">confirm </button>
    </td>
    </tr>
    `
  })
}


  displayBookings()

  function deleteData(idx){
  if (confirm("Are you sure?")){
    Bookings.splice(idx,1)
    saveBookings()
    displayBookings()
  }
}

  function editData(idx){
  document.getElementById("name").value =Bookings[idx].name
  document.getElementById("number").value=Bookings[idx].number
  document.getElementById("movie").value=Bookings[idx].movie
  document.getElementById("date").value=Bookings[idx].date
  document.getElementById("time").value=Bookings[idx].time
  editIndex = idx
    
}
function confirmData(){
    let answer = confirm(
        "You need to log in before confirming your booking and paying for your ticket.\n\nGo to Login Page?"
    );

    if(answer){
        window.location.href = "login.html";
    }
   
}


function BookNow(){
  const name  = document.getElementById("name").value
  const number= document.getElementById("number").value
  const movie = document.getElementById("movie").value
  const date  = document.getElementById("date").value
  const time= document.getElementById("time").value
 

  if(name===""||movie===""){
    alert("please add name and movie name")
    return
  }

  const Booking={
    name:name,number:number,movie:movie,date:date,time:time
  }

    if(editIndex === -1){
    Bookings.push(Booking)
  }else{
    Bookings[editIndex]=Booking
    editIndex = -1
  }
  saveBookings()
  displayBookings()
  clearform()
}



function saveBookings(){
  localStorage.setItem("Bookings",JSON.stringify(Bookings))
}

function clearform(){
  document.getElementById("name").value =""
  document.getElementById("number").value=""
  document.getElementById("movie").value=""
  document.getElementById("date").value=""
  document.getElementById("time").value=""
}
