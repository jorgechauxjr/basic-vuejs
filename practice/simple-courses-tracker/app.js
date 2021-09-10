new Vue({
  el: '#app',
  
  data () {
    return {
      courses: [],

      title: "",
      time: ""
    }
  },
  
  computed: {
    totalTime () {
      if (!this.courses.length) { return 0 }

      return this.courses.reduce((a, b) => a + parseInt(b.time), 0)
    }
  },
  
  methods: {
    addCourse() {
      if (!this.title || !this.time) {  return }
      cursoNuevo = {
        title: this.title,
        time: this.time
      }
      this.courses.push(cursoNuevo)

      this.title = ""
      this.time = 0

    }
  }
})
