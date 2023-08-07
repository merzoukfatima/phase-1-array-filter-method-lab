// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
    
const findMatching=(array,string)=>
array.filter(item=>item.toLowerCase()===string.toLowerCase())


const fuzzyMatch=(array,string)=>
array.filter(item=>item.toLowerCase().startsWith(string.toLowerCase()))


const driverss = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const matchName=(array,name)=>
    array.filter(item=>item.name.toLowerCase()===name.toLowerCase())

