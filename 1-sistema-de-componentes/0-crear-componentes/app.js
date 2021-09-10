Vue.component("counter", {
  data() {
    return {
      counter: 0
    }
  },
  
  template: `
    <div>
      <button> Click me </button>
      <span> {{ counter }} </span>
    </div>
  `
})

new Vue({
  el: '#app', 
  
  data () {
    return {
      title: 'Hola'
    }
  }
})
