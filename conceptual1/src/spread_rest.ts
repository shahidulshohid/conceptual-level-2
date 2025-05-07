{


    //spread
const user = {
    name: 'shahidul',
    age: 30,
}
const user2 = {
    id: 1,
    ...user,
    address: "Bogura",
}
console.log(user2)
const {name, age, id} = user2
console.log(name)

const numbers : number[] = [1,2,3,4,5]
const numbers2 : number[] = [0, ...numbers, 33,44,55]
console.log(numbers2[5])

//rest 
function restFn(...num: number[]) : void {
    console.log(num)
}
restFn(2,3,4,5)


}