// components/m-tab-control/m-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currenetIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event) {
      const index = event.currentTarget.dataset.index;
      this.setData({
        currenetIndex: index
      })

      this.triggerEvent('itemClick',{ index: index, title: this.properties.title[index] })
    }
  }
})
