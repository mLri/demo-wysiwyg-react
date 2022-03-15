import { useState } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


function App() {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (edit) => {
    console.log(editorState)
    setEditorState(edit)
  }

  return (
    <div className="App">
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
      <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>
  );
}

export default App;