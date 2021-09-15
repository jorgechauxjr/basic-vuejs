Vue.component("CoinDetail", {
  props: ['coin'],

  data () {
    return {
      showPrices: false,
      value: 0
    }
  },

  methods: {
    toggleShowPrices () {
      this.showPrices = !this.showPrices

      this.$emit('change-color', this.showPrices ? 'FF96C8' : '3D3D3D')
    }
  },

  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`
    },
    convertedValue() {
      if (!this.value) {
        return 0
      }
      return this.value / this.coin.price
    }
  },

  template: `
  <div>
    <img
      v-on:mouseover="toggleShowPrices"
      v-on:mouseout="toggleShowPrices"
      v-bind:src="coin.img" v-bind:alt="coin.name">
    <h1 
      v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
      {{ title }}
      <span v-if="coin.changePercent > 0">👍</span>
      <span v-else-if="coin.changePercent < 0">👎</span>
      <span v-else>✌</span>
      
      <span v-on:click="toggleShowPrices">
        {{ showPrices ? 'Hide 🙈' : 'Show 🐵' }}</span>
    </h1>
    
    <input type="number" v-model="value"> 
    <span>{{ convertedValue }}</span>

    <slot name="text"></slot>
    <slot name="link"></slot>

    <ul v-show=showPrices>
      <li
        class="uppercase"
        v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price }"
        v-for="(p, idx) in coin.pricesWithDays"
        v-bind:key="p.day">
        {{ idx }} - {{ p.day }} - {{ p.value }}
      </li>
    </ul>
  </div>
  `
})

new Vue({
  el: '#app',

  data () {
    return {

      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 10,
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
      },     

     color: 'f4f4f4'
    }
  },

// La variable theColor es el color recibido de la linbea 15
// L94 si el color existe lo usa, sino reversa this.color
  methods: {
    updateColor (theColor) {
      this.color = theColor || this.color
        .split('')
        .reverse()
        .join('')
      }
  }
})
