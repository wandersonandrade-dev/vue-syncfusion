<template>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <img alt="Genesis logo" class="logo" src="@/assets/genesis.png" width="300" height="85" />
    <div id="app">
        <button id='import' v-on:click="onClick">Import</button>
        <DocumentEditorComponent ref="editor" height="370px" :enableToolbar='true' :enableSpellCheck='true'
            :serviceUrl='serviceUrl' :isReadOnly='false' :enablePrint='true' :enableSfdtExport='true'
            :enableSelection='true' :enableContextMenu='true' :enableSearch='true' :enableOptionsPane='true'
            :enableWordExport='true' :enableTextExport='true' :enableEditor='true' :enableImageResizer='true'
            :enableEditorHistory='true' :enableHyperlinkDialog='true' :enableTableDialog='true'
            :enableBookmarkDialog='true' :enableTableOfContentsDialog='true' :enablePageSetupDialog='true'
            :enableStyleDialog='true' :enableListDialog='true' :enableParagraphDialog='true' :enableFontDialog='true'
            :enableTablePropertiesDialog='true' :enableBordersAndShadingDialog='true' :enableTableOptionsDialog='true'>
        </DocumentEditorComponent>
    </div>
</template>
<script>
import { DocumentEditorComponent, Toolbar, SpellChecker, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog } from '@syncfusion/ej2-vue-documenteditor';

export default {
    components: {
        DocumentEditorComponent
    },
    data: function () {
        return { serviceUrl: 'http://localhost:6002/api/documenteditor/' }
    },
    mounted: function () {
        const editor = this.$refs.editor.ej2Instances

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
        editor.open(sfdt);
    },
    provide: {
        //Inject require modules.
        DocumentEditor: [Toolbar, SpellChecker, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog]
    },
    methods: {
        onClick: function () {
            let http = new XMLHttpRequest();
            //add your url in which you want to open document inside the ""
            let content = { fileUrl: "http://localhost:8081/powerful-point.docx" };
            let baseurl = "/api/documenteditor/ImportFileURL";
            http.open("POST", baseurl, true);
            http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            http.onreadystatechange = () => {
                if (http.readyState === 4) {
                    if (http.status === 200 || http.status === 304) {
                        //open the SFDT text in Document Editor
                        this.$refs.container.ej2Instances.documentEditor.open(http.responseText);
                    }
                }
            };
            http.send(JSON.stringify(content));
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>