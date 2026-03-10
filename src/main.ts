import { createApp } from 'vue';
import { Button, Empty, List, PullRefresh, Tag } from 'vant';
import App from './App.vue';
import router from './router';
import './styles/tailwind.css';
import './styles/theme.less';
import 'vant/lib/index.css';

const app = createApp(App);

app.use(router);
app.use(Button);
app.use(Empty);
app.use(List);
app.use(PullRefresh);
app.use(Tag);

app.mount('#app');
