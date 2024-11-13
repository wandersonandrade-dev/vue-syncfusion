<template>
  <img alt="Genesis logo" class="logo" src="@/assets/genesis.png" width="300" height="85" />
  <HelloWorld msg="Word Processor" />
  <div id="app">
    <DocumentEditorContainerComponent ref="documentEditorContainerComponent" height="590px" :serviceUrl='serviceUrl'
      :enableToolbar='true' :enableSpellCheck='true' @created="() => {
  console.log('Calendar Created');

  console.log(this.documentEditorSettings)
}" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {
  DocumentEditorContainerComponent,
  Toolbar,
  SpellChecker
} from '@syncfusion/ej2-vue-documenteditor';

import { ref } from 'vue';
const documentEditorContainerComponent = ref(null);

// const documentEditorContainerComponentCreated = () => {
//   alert('Calendar Created');
// }

export default {
  name: 'App',
  components: {
    HelloWorld,
    DocumentEditorContainerComponent
  },
  data() {
    // return { serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/' }
    // return { serviceUrl: 'https://services.syncfusion.com/js/production/api/documenteditor/' }
    return { serviceUrl: 'http://localhost:6002/api/documenteditor/' }
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar, SpellChecker],
    DocumentEditorContainerComponent: [Toolbar, SpellChecker]
  },
  mounted: function () {
    console.log(documentEditorContainerComponent.value)
    // console.log(documentEditorContainerComponent.value.enableSpellCheck)
    // console.log(documentEditorContainerComponent.value.documentEditorSettings)
    // console.log(documentEditorContainerComponent.value.enableSpellCheck)
    //Set language id to map dictionary.
    // this.$refs.documenteditor.ej2Instances.spellChecker.languageID = 1033;
    // this.$refs.documenteditor.ej2Instances.spellChecker.removeUnderline = false;
    // this.$refs.documenteditor.ej2Instances.spellChecker.allowSpellCheckAndSuggestion = true;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
