let searchButton = document.querySelector("#search");
const keyAPINnasa = 'NbrFmVqi4X50ahB3EcoXqni5L3t1kUyauuwsfVOK';

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let response = await fetch(``);
  console.log(response)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){

}

