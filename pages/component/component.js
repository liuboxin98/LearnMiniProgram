// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    list: null
  },
  Increment(event) {
    this.setData({
      counter: this.data.counter + 1,
      list: event.detail
    })

    console.log(event)
  },
  itemClick(event) {
    console.log(event);
  },
  btn_click() {
    
    var obj = this.selectComponent('#btn_id');
    console.log(obj)

    // 方式一
    // obj.setData({
    //   counter: obj.data.counter + 20
    // })

    //方式二  调用组件内部的方法改变其值
    obj.incrementCounter(5)
  }
})