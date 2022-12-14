const DOG_CEO = `https://dog.ceo/api/breeds/image/random`;
const newDogImg = document.querySelector("#dog");
const fetchButton = document.querySelector("#fetch");
// function addNewDogImg (){
//     const promise = fetch(DOG_CEO);
//     promise
//     .then(function (res){
//         const processedPromise = res.json();
//         console.log(`the promise:`);
//         console.log(processedPromise);
//         return processedPromise;
//     })
//     .then(function(response){
//         //skip incase .json() instead of .text() since it returns an object
//         //const dogObject = JSON.parse(response); 
//         console.log(`dog object`);
//         console.log(response);
//         newDogImg.src = response.message; 
//         newDogImg.alt = `cute dog image`;
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }
async function addNewDogImg (){
    const promise = await fetch(DOG_CEO);
    const response = await promise.json();
    newDogImg.src = response.message;
    newDogImg.alt = `this is an image of a cute dog`;
}
fetchButton.addEventListener("click", addNewDogImg);
