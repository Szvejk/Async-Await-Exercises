
// async function getData(url){
//     const response=await fetch(url)
//     if(response.ok){
//         const data=await response.json()
//         return data;
//     }
// }

// getData("https://restcountries.com/v3.1/all").then(countries=>{

// // countries.forEach(e =>{
// //     console.log(e.area,e.population)
// // })
// const sortedByArea=countries.sort((a,b)=>a.area-b.area)
// console.log(sortedByPopulation.slice(sortedByPopulation.length-11,sortedByPopulation.length-1))
// })

// getData("https://api.thecatapi.com/v1/breeds").then(cats=> {
//     cats.forEach(e =>{
//         console.log(e.name)
//     })
// })

// async function zad1(param){
// if (typeof param === "number") {
//     setTimeout(()=>{
//         return "test"
//     },2000)
// } else if(typeof param === "string") {
//     setTimeout(()=>{
//         return "test"
//     },1000)
// }else{
//     return await Promise.reject()
// }
// }

// zad1(3)


// ZADANIE 1
// async function getData("https://restcountries.com/v3.1/all") {
// 	const countriesAPI = await fetch("https://restcountries.com/v3.1/all")
// const data = await response.json()
// return data
// }
// async function getMoreData(){
// 	const countries = await getData("https://restcountries.com/v3.1/all")
// 	const cats = await getData("https://api.thecatapi.com/v1/breeds")
// 	return data;
// }
// const variables = data.map(function(data){
// return `Panstwo: ${el.Panstwo} ${el.Stolica} ${el.Powierzchnia} ${el.Języki Urzędowe} ${el.Populacja}`
// 	});

// 	getMoreData().then(data =>{
// 	console.log(data)
// })



// B

// async function getData("https://api.thecatapi.com/v1/breeds") {
// 	const catAPI = await fetch("https://api.thecatapi.com/v1/breeds")
// const data = await response.json()
// return data
// }
// async function getMoreData(){
// 	const cats = await getData("https://api.thecatapi.com/v1/breeds")
// const variables = cats.map(cat => name)
// }
// getMoreData().then(data =>{
// 	console.log(data)
// })






// C
// async function getData("https://restcountries.com/v3.1/all"){
	
// / 	const countriesAPI = await fetch("https://restcountries.com/v3.1/all")
// // const data = await response.json()
// // return data }
// // async function getMoreData(){
// // 	const countries = await getData("https://restcountries.com/v3.1/all")
// / 	return data
// // }
// const variables = arr.map(function(data){
// // let area  = data.sort((a,b) => a.powierzchnia - b.powierzchnia
// // console.log(area)

// // let population  = data.sort((a,b) => b-a). slice (0,1)
// // console.log(population)
// })
// getMoreData().then(data=>{
// 	console.log(data)
// })
// f(getData).catch(alert);

// ZADANIE 2
// function job() {
//     return 'hello world';
// }
// let job = () => {
// let promise = new Promise(resolve, reject) 
// 	setTimeout(() => resolve("hello world"),
// 	2000);
// 	reject("it's not working...")
// }
//  return job

// ZADANIE 3 
// async function job(result, database, errorManager) {
//   

//     await(function(id) {
//         return database.get(id);
//     })

//     await(function(info) {
//         return info.name;
//     })

//     .catch(function(error) {
//         errorManager.notify(error);
//         throw error;
//     });
// }
// job().then(result => {
// 	console.log(result)
// })

// ZADANIE 4
// async function API(quantity) {
// 	const peopleAPI = await fetch(`https://fakerapi.it/api/v1/persons?_quantity=${quantity}`)
// const data = await response.json()
// return data
// }

// function sum(a,b) {
//     return a+b;
// }
// sum(2,4)

// zadanie 4
getData("https://fakerapi.it/api/v1/persons?_quantity=10").then((persons)=>{
    console.log(persons.data)
    persons.data.forEach(element => {
        const p=document.createElement("p")
        p.textContent=`${element.firstname} ${element.lastname}`
        document.body.appendChild(p)
        const img=document.createElement("img"); 
        //  tu tworze element
        img.src=element.image
        document.body.appendChild(img)
        // tu go dodaje do html
    });
})



