<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <img alt="Genesis logo" class="logo" src="@/assets/genesis.png" width="300" height="85" />
  <HelloWorld msg="Word Processor" />
  <div id="app">
    <DocumentEditorContainerComponent ref="documentEditorContainerComponent" height="590px" :serviceUrl='serviceUrl'
      :enableToolbar='true' :enableSpellCheck='true'>
      <DocumentEditorComponent ref="documenteditor" id="container_1" height="370px" :serviceUrl='serviceUrl'
        :enablePrint='true' :enableSfdtExport='true' :enableSelection='true' :enableContextMenu='true'
        :enableSearch='true' :enableOptionsPane='true' :enableWordExport='true' :enableTextExport='true'
        :enableEditor='true' :enableImageResizer='true' :enableEditorHistory='true' :enableHyperlinkDialog='true'
        :enableTableDialog='true' :enableBookmarkDialog='true' :enableTableOfContentsDialog='true'
        :enablePageSetupDialog='true' :enableStyleDialog='true' :enableListDialog='true' :enableParagraphDialog='true'
        :enableFontDialog='true' :enableTablePropertiesDialog='true' :enableBordersAndShadingDialog='true'
        :enableTableOptionsDialog='true' />
    </DocumentEditorContainerComponent>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog } from '@syncfusion/ej2-vue-documenteditor';
import {
  DocumentEditorContainerComponent,
  DocumentEditorComponent,
  Toolbar,
  SpellChecker
} from '@syncfusion/ej2-vue-documenteditor';
// import { ref } from 'vue';

// import Vue from 'vue';
// import { DocumentEditorContainerPlugin } from '@syncfusion/ej2-vue-documenteditor';
// Vue.use(DocumentEditorContainerPlugin);

// const documentEditorContainerComponent = ref(null);

export default {
  name: 'App',
  components: {
    HelloWorld,
    DocumentEditorContainerComponent,
    DocumentEditorComponent
  },
  data() {
    // return { serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/' }
    // return { serviceUrl: 'https://services.syncfusion.com/js/production/api/documenteditor/' }
    return { serviceUrl: 'http://localhost:6002/api/documenteditor/' }
  },
  provide: {
    //Inject require modules.
    DocumentEditorContainer: [Toolbar, SpellChecker],
    DocumentEditorContainerComponent: [Toolbar, SpellChecker],
    DocumentEditor: [Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog]
  },
  mounted: function () {
    // console.log(this.$refs.documentEditorContainer.value)
    // console.log(this.$refs.documentEditorContainerComponent.documentEditorSettings)
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
