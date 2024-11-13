<template>
  <img alt="Genesis logo" class="logo" src="@/assets/genesis.png" width="300" height="85" />
  <div id="app">
    <DocumentEditorContainerComponent ref="documentEditorContainerComponent" height="590px" :serviceUrl='serviceUrl'
      :enableToolbar='true' :enableSpellCheck='true' v-on:create="onCreate" />
  </div>
</template>

<script>
import {
  DocumentEditorContainerComponent,
  Toolbar,
  SpellChecker
} from '@syncfusion/ej2-vue-documenteditor';

// import { ref } from 'vue';
// const documentEditorContainerComponent = ref(null);

export default {
  name: 'App',
  components: {
    DocumentEditorContainerComponent
  },
  data() {
    // return { serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/' }
    // return { serviceUrl: 'https://services.syncfusion.com/js/production/api/documenteditor/' }
    return { serviceUrl: 'http://localhost:6002/api/documenteditor/' }
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar, SpellChecker]
  },
  mounted: function () {
    const container = this.$refs.documentEditorContainerComponent.ej2Instances
    const editor = container.documentEditorInternal

    // console.log(container)
    // console.log(editor)

    //Set language id to map dictionary.
    editor.spellChecker.languageID = 1033
    editor.spellChecker.removeUnderline = false
    editor.spellChecker.allowSpellCheckAndSuggestion = true

    let sfdt = `{
                    "sections": [
                        {
                            "blocks": [
                                {
                                    "inlines": [
                                        {
                                            "characterFormat": {
                                                "bold": true,
                                                "italic": true
                                            },
                                            "text": "Hello Wolrd"
                                        }
                                    ]
                                }
                            ],
                            "headersFooters": {
                            }
                        }
                    ]
                }`

    //Open the default document in Document Editor.
    editor.open(sfdt)
  },
  methods: {
    onCreate: function () {
      console.log('created')
    }
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
