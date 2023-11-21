import store from './store.js'
import './swiper.min.js'

const app = Vue.createApp({
    data(){
        return{
            store
        }
    },
    mounted(){
        AOS.init()
    }
})

app.mount('#root')