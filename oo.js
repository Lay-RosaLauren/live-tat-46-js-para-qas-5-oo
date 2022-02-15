// instalar o npm i faker@5.5.3 -S

// Encapsulamento
const faker = require('faker')

class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        return Math.random() > 0.5 ? 'Hi' : 'Hello'
    }
}

const randomHuman = new Human(faker.name.firstName(), faker.datatype.number(99))

console.log(randomHuman)
console.log('')
console.log(`${randomHuman.greet()}, I'm ${randomHuman.name}`)
console.log('')

// Herança
class Wizard extends Human {
    constructor(name, age, powers) {
        super(name, age)
        this.powers = [...powers]
    }

    showRandomPower() {
        if (this.powers.length <= 0) {
            return "I haven't developed any power yet, but I'm learning at Hogwartz."
        } else {
            const randomIndex = Math.floor(Math.random() * this.powers.length)
            return this.powers[randomIndex]
        }
    }
}

const randomWizard = new Wizard(
    faker.name.firstName(),
    faker.datatype.number(150),
    [
        'Lumux Maxima',
        'Expecto Patronum',
        'Danger Sensor'
    ]
)

console.log(randomWizard)
console.log('')
console.log(`${randomWizard.greet()}, I'm ${randomWizard.name}. I'm a wizard.`)
console.log('')
console.log(`Here's one of my powers: ${randomWizard.showRandomPower()}`)
console.log('')

const anotherRandomWizard = new Wizard(
    faker.name.firstName(),
    faker.datatype.number(150),
    [
        'Super Visão',
        'Super Olfato',
        'Visão Microscópica'
    ]  
)
  
console.log(`${anotherRandomWizard.greet()}, I'm ${anotherRandomWizard.name}. I'm a wizard too.`)
console.log(anotherRandomWizard.showRandomPower())
console.log('')

/**
 * Polimorfismo
 */
 class Gaucho extends Human {
    constructor(name, age) {
      super(name, age)
    }
  
    greet() {
      return 'E aí tchê'
    }
  }
  
  const randomGaucho = new Gaucho(faker.name.firstName(), faker.datatype.number(99))
  
  console.log(`${randomGaucho.greet()}, me chamo ${randomGaucho.name}.`)
  
  class Mineiro extends Human {
    constructor(name, age) {
      super(name, age)
    }
  
    greet() {
      return 'Bão'
    }
  }
  
  const randomMineiro = new Mineiro(faker.name.firstName(), faker.datatype.number(99))
  
  console.log(`${randomMineiro.greet()}, michamo ${randomMineiro.name}.`)
