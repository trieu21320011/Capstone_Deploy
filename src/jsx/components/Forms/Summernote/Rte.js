import React, { Component } from "react";
import { EditorState, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";

class EditorConvertToHTML extends Component {
   constructor(props) {
      super(props);
      const html = "";
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
         const contentState = ContentState.createFromBlockArray(
            contentBlock.contentBlocks
         );
         const editorState = EditorState.createWithContent(contentState);
         this.state = {
            editorState,
         };
      }
   }

   onEditorStateChange: Function = (editorState) => {
      this.setState({
         editorState,
      });
   };

   render() {
      const { editorState } = this.state;
      return (
         <div>
            
         </div>
      );
   }
}

export default EditorConvertToHTML;
