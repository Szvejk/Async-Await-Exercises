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

// ZADANIE 4
// async function API(quantity) {
// 	const peopleAPI = await fetch(`https://fakerapi.it/api/v1/persons?_quantity=${quantity}`)
// const data = await response.json()
// return data
// }

// getData("https://fakerapi.it/api/v1/persons?_quantity=10").then((persons)=>{
//     console.log(persons.data)
//     persons.data.forEach(element => {
//         const p=document.createElement("p")
//         p.textContent=`${element.firstname} ${element.lastname}`
//         document.body.appendChild(p)
//         const img=document.createElement("img"); Ss
//         //  tu tworze element
//         img.src=element.image
//         document.body.appendChild(img)
//         // tu go dodaje do htmlSS
//     });
// })S

// zadanie 5

// async function getData(users) {
// 	const userAPI = await fetch('https://jsonplaceholder.typicode.com/users');
// 	const data = await userAPI.json();
// 	return data;
// }

// getData('https://jsonplaceholder.typicode.com/users').then((users) => {
// 	console.log(users);
// 	users.forEach((element) => {
// 		const card = document.createElement('div');
// 		card.innerHTML = `${element.name} ${element.username} ${element.email} ${element.address.city} ${element.address.zipcode} ${element.address.street}`;
// 		document.body.appendChild(card);
// 	});
// });

// zadanie 2 zadania ze slacka
// async function API() {
// 	const peopleAPI = await fetch(
// 		'https://api.adviceslip.com/advice'
// 	);
// 	const data = await peopleAPI.json();
// 	return data;
 
// }
// API().then(data =>{
//     console.log(data.slip.advice)
// })

// zadanie 4a ze slacka
// async function getData() {
//     const response = await fetch("https://restcountries.com/v3.1/all")
//     const data = await response.json()
//     return data
// }
// const arrayOfcurrencies = []
// getData("https://restcountries.com/v3.1/all").then(countries=>{
//     console.log(countries)
//  const countriesWithEuro=countries.filter(el=>{
//     if(el.currencies){
//         return Object.keys(el.currencies).includes("EUR")
//     }
//  })
//  console.log(countriesWithEuro)
//  console.log(countriesWithEuro.length)
// const groupBy = (arrayOfcurriences, euro) => {
//     return arrayOfcurriences.reduce((result, currentValue) => {
//         (result[currenValue[euro]] = result[currentValue[euro]] || []).push(currentValue);
//         return result;
//     },{});
// const curriencesByeuro = groupBy(currencies,euro)

//}
// })
// })
// zadanie 4 punkt b
// async function getData() {
//     const response = await fetch("https://restcountries.com/v3.1/all")
//     const data = await response.json()
//     return data
// }
// getData().then( data => {
//     const countriesWithoutCapital=data.forEach(el=>{
//     if(el.capital === undefined) {
//         console.log(el.name.common)
//     }
        
//     })
    
// })

// 4c
async function getData() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json()
    return data
}

const groupBy = (groupByContinent, key) => {

    return groupByContinent.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );

      return result;
    }, {});
  };
getData().then(data=>{
    const groupedByContinents=groupBy(data,'continents')
    const leng=Object.entries(groupedByContinents).map(el=>{
        return [el[0], el[1].length]
    })
    const sorted=leng.sort((a,b)=>a[1]-b[1])
    console.log(sorted)
})
//  const groupedByContinent = groupBy(continents);

// // zadanie 4 punkt d

//  groupedByContinent.forEach(e =>{
//     console.log(e.region)
// })
/*const = groupedByContinent.sort((a,b)=>a.region-b.region)
console.log( groupedByContinent.slice(sortedByRegion.length-11,sortedByRegion.length-1))
console.log('Kontynenty które maja najwiecej państw')
console.log( groupedByContinent.slice(sortedByRegion.length -0,sortedByRegion.length -10))
console.log("To są kontynenty które maja najmniej panstw")
})*/

//4. e

// zsumuj popuacje krajów na danych kontynentach

// groupedByContinents
// object entries -> reduce ->




// f

// g, h, i

// zadanie 4g (najwieksza i najmniejsza powierzchnia)

// async function getData(url){
//     const response=await fetch(url)
//     if(response.ok){
//         const data=await response.json()
//         return data;
//     }
// }
// getData("https://restcountries.com/v3.1/all").then(continents=>{

// // //  groupedByContinent.forEach(continents =>{
// // //     console.log(continent.area)
// // // })
// // const sortedBy= groupedByContinent.sort((a,b)=>a.area-b.area)
// // console.log( groupedByContinent.slice(sortedBy.length-11,sortedBy.length-1))
// // console.log(Kontynenty które maja najwiekszą powierzchnię)
// // console.log( groupedByContinent.slice(sortedBy.length -0,sortedBy.length -10))
// // console.log("To są kontynenty które maja najmniejszą powierzchnię")
// // })

// h
// wyswietl nazwy kontynentow o najwiekszej i najmniejszej populacji

// // const sortedBy= groupedByContinent.sort((a,b)=>a.population-b.population)
// // console.log( groupedByContinent.slice(sortedBy.length-11,sortedBy.length-1))
// // console.log(Kontynenty o największej populacji)
// // console.log( groupedByContinent.slice(sortedBy.length -0,sortedBy.length -10))
// // console.log("To są kontynenty o najmniejszej populacji")
// // })

// i posortuj waluty alfabetycznie

// async function getData(url){
//     const response=await fetch(url)
//     if(response.ok){
//         const data=await response.json()
//         return data;
//     }
// }
// getData("https://restcountries.com/v3.1/all").then(continents=>{

// // //  groupedByContinent.forEach(countries =>{
// // //     console.log(countries.currencies)

// // // })
// let sortedCurriences = curriences.sort()
