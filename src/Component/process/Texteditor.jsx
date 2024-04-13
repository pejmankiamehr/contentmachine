import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class Texteditor extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <Editor
      
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height:"700px",
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default Texteditor;