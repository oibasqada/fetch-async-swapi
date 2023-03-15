// hw #5

// function (numbers) {
//     1**2 + 2**2 + 2**2 = 9
// }
// id = 14
// const nameV = fetch(`https://swapi.dev/api/vehicles/${id}`)
//     .then(res => res.json())
//     .then((data) => {
//         console.log(`${data.name}`)
//     })
//
// id = 1

// fetch(`https://swapi.dev/api/people/${id}`)
//     .then(res => res.json())
//     .then((data) => {
//         console.log(`name: ${data.name}, birth_year: ${data.birth_year}, vehicles:
//         ${nameV}`)
        //
        // .then(res=> res.json())
        // .then((data)=> {return Object.entries(data)}))}`)
    // })
// async function handleFetch(id) {
//     const res = await fetch(`https://swapi.dev/api/people/${id}`);
//     const result = await res.json();
//     const vehicles = await result.vehicles[0]
//     const vehiclesName = await fetch(vehicles)
//     const nameV = await vehiclesName.json();
//     const finalV = await nameV.name
//     alert(`name: ${result.name}, birth_year: ${result.birth_year}, vehicles: ${finalV}`)
// }
// handleFetch(1)

async function res(id){
    const res = await  fetch(`https://swapi.dev/api/people/${id}`);
    const result = await res.json()
    console.log(result.name)
    const vehicles = result?.vehicles?.map(async (veh)=>{
        const vehName = await fetch(veh)
        const nameX =await vehName.json()
        return console.log(nameX.name)
    })

}










// function solution(str) {
//     let rev = str.split('').reverse().join('')
//     return rev
// }
//
// console.log(solution('world'))







//
// id = 12
//
// fetch(`https://swapi.dev/api/starships/${id}`)
//     .then(res => res.json())
//     .then((data) => {
//         alert(`starships: ${data.starships}`)
//     })

    //
    // .map(
    //     async (item) => {
    //         const res =  await fetch(item);
    //         // const data = await res.json();
    //         console.log( res.json())
    //     })