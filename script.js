//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
    document.getElementById('all-content').style.display = 'none';
    document.getElementById('loading').style.display = 'block';


    let API_KEY = "NbrFmVqi4X50ahB3EcoXqni5L3t1kUyauuwsfVOK";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response);
    let data = await response.json();
    console.log(data);

    useApiData(data);
    document.getElementById('all-content').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
}

sendApiRequest();

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {

    const imageQuality = [
        {
            hdurl: data.hdurl,
            lowUrl: data.url,
        }
    ]

    let currentQuality = 'lowUrl';  // Inicia com a qualidade baixa
    let currentUrl = imageQuality[0][currentQuality];  // Inicia com a primeira imagem da qualidade baixa

    if (data.media_type == "video") {
        console.log('é video')

        document.querySelector('#content').innerHTML =
            `<iframe width="100%" height="540px"
        src="${data.url}">
        </iframe>`;
    }

    if (data.media_type == "image") {
        console.log('é imagem');

        document.querySelector('#content').innerHTML += `<div role="img" aria-label="imagem de destaque do dia" class="image-apod" style="background-image: url(${currentUrl});"></div>`;

        document.querySelector('#api-title').innerHTML += data.title;

        document.querySelector('.image-explanation').innerHTML += data.explanation;

        // Adiciona event listeners para os botões
        document.querySelector('#low-quality-button').addEventListener('click', () => {
            currentQuality = 'lowUrl';
            currentUrl = imageQuality[0][currentQuality];
            document.querySelector('#content').innerHTML = `<div role="img" aria-label="imagem de destaque do dia" class="image-apod" style="background-image: url(${currentUrl});"></div>`;
        });

        document.querySelector('#high-quality-button').addEventListener('click', () => {
            currentQuality = 'hdurl';
            currentUrl = imageQuality[0][currentQuality];
            document.querySelector('#content').innerHTML = `<div role="img" aria-label="imagem de destaque do dia" class="image-apod" style="background-image: url(${currentUrl});"></div>`;
        });
    }


    { data.url == data.hdurl ? document.getElementById('high-quality-button').style.display = 'none' : '' }
}
