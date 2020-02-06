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
  }
})