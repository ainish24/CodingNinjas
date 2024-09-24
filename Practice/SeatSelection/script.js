//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu
const selectElement = document.querySelector('#selectMovie');
moviesList.forEach((movie,index) => {
  const option = document.createElement('option');
  option.text = movie.movieName;
  option.value = index;
  selectElement.appendChild(option);
});
const movieNameSec=document.getElementById("movieName")
const moviePriceSec=document.getElementById("moviePrice")
selectElement.addEventListener("change",function(){
    const selectedMovieIndex=this.value
    movieNameSec.innerText=moviesList[selectedMovieIndex].movieName
    moviePriceSec.innerText=`$${moviesList[selectedMovieIndex].price}`
})

//Add eventLister to each unoccupied seat
const selectedSeatsHolderContainer = document.getElementById("selectedSeatsHolder")
const allSeats = document.getElementsByClassName("seat")
for(let i=0;i<allSeats.length;i++){
    allSeats[i].setAttribute("data-value",i-2)
}
// for(let i=0;i<allSeats.length;i++){
//     console.log(allSeats[i].dataset.value)
// }
let count=0
const numberOfSeatsContainer=document.getElementById("numberOfSeat")
const totalPriceContainer=document.getElementById("totalPrice")
let selectedSeatArray=[]
let unoccupiedSeats = [...allSeats].filter((seat)=>!seat.classList.contains("occupied"))
const newDiv=document.createElement("div")
selectedSeatsHolderContainer.append(newDiv)
newDiv.display="none"
const noShowText=document.getElementsByClassName("noSelected")
function checkSelectedSeats(){
    newDiv.innerText=''
    newDiv.innerText=selectedSeatArray.sort((a,b)=>a-b).join(",")

    if(selectedSeatArray.length==0){
        noShowText[0].innerText="No Seat Selected"
        newDiv.display="none"
    }else{
        noShowText[0].innerText=""
        newDiv.display="inline-block"
    }
}
unoccupiedSeats.forEach((seat)=>seat.addEventListener("click",()=>{
    if(!seat.classList.contains("selected")){
        seat.classList.add("selected")
        count++;
        selectedSeatArray.push(seat.dataset.value)
    }else if(seat.classList.contains("selected")){
        seat.classList.remove("selected")
        count--;
        selectedSeatArray.splice(selectedSeatArray.indexOf(seat.dataset.value),1)
    }
    numberOfSeatsContainer.innerText=count
    let currentPrice=moviesList[selectElement.value].price
    console.log(currentPrice)
    totalPriceContainer.innerText=`$${currentPrice*count}`;
    checkSelectedSeats()
}))

const contBtn=document.getElementById("proceedBtn")
contBtn.addEventListener("click",()=>{
    if(selectedSeatArray.length==0){
        alert("Oops no seat Selected")
    } else if(selectedSeatArray.length!=0){
        alert("Yayy! Your Seats have been booked")
    }
    for(let i=3;i<allSeats.length;i++){
        if(allSeats[i].classList.contains("selected")){
            allSeats[i].classList.add("occupied")
            allSeats[i].classList.remove("selected")
        }
    }
    noShowText[0].innerText="No Seat Selected"
    newDiv.innerText=''
    newDiv.display="none"
    numberOfSeatsContainer.innerText="0"
    totalPriceContainer.innerText="$ 0"
    selectedSeatArray=[]
    count=0
})

//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button