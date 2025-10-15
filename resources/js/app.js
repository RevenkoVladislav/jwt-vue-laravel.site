import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import IndexComponent from './components/IndexComponent.vue';
app.component('index-component', IndexComponent);

app.mount('#app');
