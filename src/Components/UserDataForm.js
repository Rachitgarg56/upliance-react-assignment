import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function UserDataForm() {

    const [formUpdated, setFormUpdated] = useState(false);
    // const history = useHistory();

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const addressRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.querySelector('input').value;
        const email = emailRef.current.querySelector('input').value;
        const phone = phoneRef.current.querySelector('input').value;
        const address = addressRef.current.querySelector('textarea').value;
        
        if (name === '' || email === '' || phone === '' || address === '') {
            alert('Kindly fill all the details');
            return;
        }

        const userDataObj = { name: name, email: email, phone: phone, address: address, userID: uuidv4() };
        
        const usersData = JSON.parse(localStorage.getItem('usersData'));
        if (usersData === null) {
            const usersData = [];
            usersData.push(userDataObj);
            localStorage.setItem('usersData', JSON.stringify(usersData));
        } else {
            usersData.push(userDataObj);
            localStorage.setItem('usersData', JSON.stringify(usersData));
        }
        alert('Details updated successfully!');
    }

    useEffect(() => {

        const handleBeforeUnload = (e) => {
            if (formUpdated) {
                e.preventDefault();
                e.returnValue = ''
            }
        }

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    
    }, [formUpdated])
   

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <Container component="main" maxWidth="xs">
                <Box className="mt-8 flex flex-col items-center">
                    <Typography component="h1" variant="h5">FORM</Typography>
                    <Box component="form" sx={{ mt: 3 }}>
                    <TextField 
                        ref={nameRef}
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        onChange={() => setFormUpdated(true)}                    
                    />
                    
                    <TextField
                        ref={emailRef}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        type="email"
                        onChange={() => setFormUpdated(true)}
                    />
                    <TextField
                        ref={phoneRef}
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        autoComplete="phone"
                        type="number"
                        onChange={() => setFormUpdated(true)}
                    />
                    <TextField
                        ref={addressRef}
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="address"
                        multiline
                        rows={4}
                        onChange={() => setFormUpdated(true)}
                    />
                    <Button
                        onClick={handleSubmit}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}
