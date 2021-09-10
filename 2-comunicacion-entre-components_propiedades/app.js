// data () devuelve un objeto de propiedades

new Vue({
  el: '#app',

  data () {
    return {
     name: 'Bitcoin',
     symbol: 'BTC',
     img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
     changePercent: 10,

     value: 0,

     myColor: 'f4f4f4',

     price: 8400,

     pricesWithDays: [
       { day: 'Lunes', value: 8400},
       { day: 'Martes', value: 7900},
       { day: 'Miercoles', value: 8200},
       { day: 'Jueves', value: 9000},
       { day: 'Viernes', value: 9400},
       { day: 'Sabado', value: 10000},
       { day: 'Domingo', value: 10200},
     ],

     showPrices: false
    }
  },

  computed: {
    title() {
      return `${this.name} - ${this.symbol}`
    },
    // La división es para poner el valor en dolares y al mismo tiempo ver el valor en bitcoin
    // escribir 8400 como ejemplo dara 1 bitcoin
    convertedValue() {
      if (!this.value) {
        return 0
      }
      return this.value / this.price
    }
  },

  watch: {
    showPrices (newVal, oldVal) {
      console.log(`Nuevo: ${newVal} viejo: ${oldVal}`)
    }
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices
      this.myColor = this.myColor.split('')
        .reverse().join('')
      }
  }
})
