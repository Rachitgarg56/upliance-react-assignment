import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = ({ value, onChange }) => {
  const editor = useRef(null);

  const config = {
    readonly: false, // All options from https://xdsoft.net/jodit/doc/
    toolbarButtonSize: 'large',
    height: 400,
    buttons: [
      'bold', 'italic', 'underline', 'ul', 'ol'
    ]
  };

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
    //   onBlur={newContent => onChange(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={newContent => {}}
    />
  );
};

export default TextEditor;
