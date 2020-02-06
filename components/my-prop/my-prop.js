// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '这是默认值！',
      observer: function (newval, oldval) {
        console.log(newval, oldval)
      }
    },

  },
  externalClasses: ['colortitle'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
