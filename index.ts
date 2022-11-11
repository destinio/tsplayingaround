import { sayAge } from './sayAge.js'
const sayHello = (name: string) => {
  console.log(name)
  sayAge()
}

sayHello('James')
