import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

export default function UserDataForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className='border border-solid border-black w-full h-full flex justify-center items-center'>
            <Container component="main" maxWidth="xs">
                <Box className="mt-8 flex flex-col items-center">
                    <Typography component="h1" variant="h5">FORM</Typography>
                    <Box component="form" sx={{ mt: 3 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        // value={formData.name}
                        // onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        type="email"
                        // value={formData.email}
                        // onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        autoComplete="phone"
                        type="number"
                        // value={formData.phone}
                        // onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="address"
                        multiline
                        rows={4}
                        // value={formData.address}
                        // onChange={handleChange}
                    />
                    <Button
                        onSubmit={handleSubmit}
                        type="submit"
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
