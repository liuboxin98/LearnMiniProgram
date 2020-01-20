Page({
  data: {
    name: '张三',
    counter: 0,
    students: [
      { id: 2003, age: 18, name: '张三' },
      { id: 2003, age: 18, name: '里斯' },
      { id: 2003, age: 18, name: '王五' },
      { id: 2003, age: 18, name: '赵六' }
    ]
  },
  btn_add() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  sub_add() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})