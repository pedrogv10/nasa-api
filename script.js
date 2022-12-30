//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
    let API_KEY = "NbrFmVqi4X50ahB3EcoXqni5L3t1kUyauuwsfVOK";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response);
    let data = await response.json();
    console.log(data);

    useApiData(data)
}

sendApiRequest();

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {

    if (data.media_type == "video") {
        console.log('é video')

        document.querySelector('#content').innerHTML =
            `<iframe width="100%" height="540px"
        src="${data.url}">
        </iframe>`;
    }

    if (data.media_type == "image") {
        console.log('é imagem');
        document.querySelector('#content').innerHTML += `<div class="image-apod" style="background-image: url(${data.url});"></div>`;

        document.querySelector('#api-title').innerHTML += data.title;

        document.querySelector('.image-explanation').innerHTML += data.explanation;
    }
}

