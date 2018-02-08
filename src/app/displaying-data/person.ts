export class Person {
  constructor(
    public id: number,
    public name: string
  ) { }
}
 // 定义了一个类，具有一个构造函数和两个属性，id和name。他可能看上去不像是有属性的类，但是确实有，利用ts提供的简写形式，用构造函数的参数直接定义属性。
