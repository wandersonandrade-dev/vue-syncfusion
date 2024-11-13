import { createApp } from 'vue'
import App from './App.vue'
import {
    DocumentEditorContainerPlugin,
    DocumentEditorPlugin 
} from '@syncfusion/ej2-vue-documenteditor';

// createApp(App).mount('#app')
const app = createApp(App)

// app.use(router)
// app.use(vuetify)
app.use(DocumentEditorPlugin);
app.use(DocumentEditorContainerPlugin);

app.mount('#app')