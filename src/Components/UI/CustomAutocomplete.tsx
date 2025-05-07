import { Autocomplete, TextField } from "@mui/material";
import React from "react";

interface CustomAutocompleteProps {
    options: (string | number)[];
    onChange: (event: React.SyntheticEvent, value: string | number | null) => void;
    label?: string;
}
 
export const CustomAutocomplete: React.FC<CustomAutocompleteProps>  = ({ options, onChange, label }) => {
    return <Autocomplete
        disablePortal
        options={options}
        sx={{ backgroundColor: '#1E2538', color: '#FFFFFF' }}
        onChange={onChange}
        getOptionLabel={(option) => option.toString()}
        renderInput={(params) => <TextField {...params} label={label}
        sx={{
            '& .MuiInputLabel-root': {
                color: '#FFFFFF',  
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                borderColor: 'transparent',
                },
                '&:hover fieldset': {
                borderColor: 'transparent', 
                },
                '&.Mui-focused fieldset': {
                borderColor: 'transparent',
                },
            },
            '& .MuiSvgIcon-root': {
                color: '#FFFFFF', 
            },
        }}
        />} 
        slotProps={{
            paper: {
                sx: {
                backgroundColor: '#1E2538',
                color: '#FFFFFF',
                borderbottom: 2,
                },
            },
            listbox: {
                sx: {
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#3657CB',
                    borderRadius: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#00000021',
                },
                '&::-webkit-scrollbar-button': {
                    display: 'none',
                },
                },
            },
        }}
    />
}