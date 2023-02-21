console.log("hello")

let str: string = "hellow word"
str = 'hello Word'
interface PersonFiled {
  name: string,
  age: number
}

function demo(proson: PersonFiled) {
  console.log("name", proson.name)
  console.log("name", proson.age)
}
console.log(str, demo({ name: "玄彬意", age: 23 }))

console.log('mete', import.meta.env.VITE_PROXY_TARGET)


// 在企业级应用中 ts是怎么配置的 怎么约束别人的

// 怎么让ts错误输出到控制台

