import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = () => {
  const editor = useRef(null);

  const config = {
    readonly: false, // All options from https://xdsoft.net/jodit/doc/
    toolbarButtonSize: 'large',
    height: 400,
    buttons: [
      'bold', 'italic', 'underline', 'ul', 'ol','source'
    ]
  };

  return (
    <JoditEditor
      ref={editor}
      config={config}
    />
  );
};

export default TextEditor;
