const count = 10;
const apiKey = 'Pu4PY9RSK0YoWHYzmSZSk0nvd_xbTJ_nlzT1fL8oIVs';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos(){
    try{
const response = await fetch(apiUrl);
const data = await response.json
console.log(data);
    } catch (error){

    }
}

getPhotos