// data () devuelve un objeto de propiedades

new Vue({
  el: '#app',

  data () {
    return {
     name: 'Bitcoin',
     img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
     changePercent: 10,
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
  // en this.myColor lo convierte en array, lo invierte y vuelve a concatenar en un string.
  // le da un efecto de dark mode cuando se da clic
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices
      this.myColor = this.myColor.split('')
        .reverse().join('')
      }
  }
})
