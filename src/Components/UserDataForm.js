import { useUser } from "@clerk/clerk-react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { setName, setEmail, setPhone, setAddress, setUserID } from "../redux/slices/UserDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { alreadyAUser } from "../utils/utils";

export default function UserDataForm() {

    const { user } = useUser();
    const userId = user.id; 

    const dispatch = useDispatch();
    const { name, email, phone, address } = useSelector(state => state.userdata);
    
    const [formUpdated, setFormUpdated] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();
        
        if (name === '' || email === '' || phone === '' || address === '') {
            alert('Kindly fill all the details');
            return;
        }

        const userid = userId ? userId : uuidv4();
        dispatch(setUserID(userid))

        const userDataObj = { name: name, email: email, phone: phone, address: address, userID: userid };

        const usersData = JSON.parse(localStorage.getItem('usersData'));
        if (usersData === null) {
            const usersData = [];
            usersData.push(userDataObj);
            localStorage.setItem('usersData', JSON.stringify(usersData));
        } else {
            if (alreadyAUser(usersData,userId)) {
                console.log('yes');
                const updatedUsersData = usersData.map(obj => {
                    if (obj.userID === userId) {
                        obj = {...userDataObj}
                    }
                    return obj;
                })
                localStorage.setItem('usersData', JSON.stringify(updatedUsersData));
            } else {
                usersData.push(userDataObj);
                localStorage.setItem('usersData', JSON.stringify(usersData));
            }
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

    useEffect(() => {
        const usersData = JSON.parse(localStorage.getItem('usersData'));
        if (usersData !== null) {
            if (alreadyAUser(usersData, userId)) {
                const currentUser = usersData.filter(obj => obj.userID === userId);
                const { name, email, phone, address } = currentUser[0];
                dispatch(setName(name));
                dispatch(setEmail(email));
                dispatch(setPhone(phone));
                dispatch(setAddress(address));
            }
        }
    }, [])
   
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <Container component="main" maxWidth="xs">
                <Box className="mt-8 flex flex-col items-center">
                    <Typography component="h1" variant="h5">FORM</Typography>
                    <Box component="form" sx={{ mt: 3 }}>
                    <TextField 
                        value={name}
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        onChange={(e) => {
                            setFormUpdated(true)
                            dispatch(setName(e.target.value))
                        }}
                    />
                    
                    <TextField
                        value={email}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        type="email"
                        onChange={(e) => {
                            setFormUpdated(true)
                            dispatch(setEmail(e.target.value))
                        }}
                    />
                    <TextField
                        value={phone}
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        autoComplete="phone"
                        type="number"
                        onChange={(e) => {
                            setFormUpdated(true)
                            dispatch(setPhone(e.target.value))
                        }}
                    />
                    <TextField
                        value={address}
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="address"
                        multiline
                        rows={4}
                        onChange={(e) => {
                            setFormUpdated(true)
                            dispatch(setAddress(e.target.value))
                        }}
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
