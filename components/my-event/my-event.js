// components/my-event/my-event.js
Component({
  methods: {
    handleIncrement() {
      this.triggerEvent('increment', {'name':'张三','age':18,'gender':'男'}, {})
    }
  }
})
