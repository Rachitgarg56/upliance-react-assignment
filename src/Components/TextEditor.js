import React, { useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail, setPhone, setAddress } from '../redux/slices/UserDataSlice';
import { useUser } from "@clerk/clerk-react";

const TextEditor = () => {

  const { user } = useUser();
  const userId = user.id; 

  const { name, email, phone, address } = useSelector(state => state.userdata);

  const editor = useRef(null);
  const dispatch = useDispatch();

  const config = {
    readonly: false, // All options from https://xdsoft.net/jodit/doc/
    toolbarButtonSize: 'large',
    buttons: [
      'bold', 'italic', 'underline', 'ul', 'ol','source'
    ]
  };

  const defaultText = `<p><strong>Name:</strong> ${name}</p>
                       <p><strong>Email:</strong> ${email}</p>
                       <p><strong>Phone:</strong> ${phone}</p>
                       <p><strong>Address:</strong> ${address}</p>`;

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem('usersData'));
    if (usersData !== null) {
      const currentUser = usersData.find(obj => obj.userID === userId);
      if (currentUser) {
        const { name, email, phone, address } = currentUser;
        dispatch(setName(name));
        dispatch(setEmail(email));
        dispatch(setPhone(phone));
        dispatch(setAddress(address));
      }
    }
  }, [dispatch]);

  return (
    <div c>
      <JoditEditor
        className='max-[60%] h-full'
        ref={editor}
        value={defaultText}
        config={config}
        />
    </div>
  );
};

export default TextEditor;
