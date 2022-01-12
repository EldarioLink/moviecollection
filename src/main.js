import { createApp } from 'vue'
import App from './App.vue' 
import PrimeVue from 'primevue/config'; 
import Button from 'primevue/button';
 
import Dialog from 'primevue/dialog';

import "primevue/resources/themes/saga-blue/theme.css"  //theme
import "primevue/resources/primevue.min.css"   //core css
import "primeicons/primeicons.css"     //icons

const app = createApp(App);

app.use(PrimeVue);
  
app.component('Button',Button)
app.component('Dialog', Dialog);


app.mount('#app')
