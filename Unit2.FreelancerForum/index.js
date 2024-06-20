const maxShapes = 17;
let randomNames = ["Jessica", "Morgan", "Ronnie", "Kirsten", "Jacob", "Jeannette", "Violet", "Amy", "Lana", "Zuri"]
let randomJobs = ["Carpenter", "Streamer", "Editor", "Tutor", "Web Dev", "Writer", "Nutritionist", "Herbalist", "Painter", "Trainer"]

const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50
  },
  {
    name: "Carol",
    occupation: "Programmer",
    price: 70
  },
  {
    name: "Ryan",
    occupation: "Trainer",
    price: 22
  },
  {
    name: "Bianca",
    occupation: "Nutritionist",
    price: 34
  },
  {
    name: "Paisley",
    occupation: "Painter",
    price: 79
  },
  {
    name: "Aria",
    occupation: "Herbalist",
    price: 22
  },

];

function createTableRow( freelancer ) {
  const row = document.createElement("tr")

  const name = document.createElement("td")
  name.textContent = freelancer.name

  const occupation = document.createElement("td")
  occupation.textContent = freelancer.occupation

  const price = document.createElement("td")
  price.textContent = freelancer.price

  row.append(name)
  row.append(occupation)
  row.append(price)

  return row
}

function setAveragePrice(index) {

  let sum = 0
  for (let i = 0; i < index; i++) {
    sum += freelancers[i].price
  }

  let answer = Math.round((sum/index)* 100) / 100

  return answer
}

let index = 0
let interval = setInterval(() => {
  if (index === freelancers.length -1) {
    clearInterval(interval)
  }
  let nextRow = createTableRow(freelancers[index])
  index +=1

  let table = document.querySelector("table")
  table.append(nextRow)

  let averagePrice = setAveragePrice(index)
  const priceSpan = document.querySelector('#price')
  priceSpan.textContent = averagePrice

  randomFreelancer()

}, 1000)



function randomFreelancer() {
  let randomPrice = Math.round(Math.random() * 100);
  let randomJob = randomJobs[Math.floor(Math.random() * randomJobs.length)];
  let randomName = randomNames[Math.floor(Math.random() * randomNames.length)]

  let newFreelancer = {
    name: randomName,
    occupation: randomJob,
    price: randomPrice
  }
  
  freelancers.push(newFreelancer);
  return randomName, randomJob, randomPrice
}