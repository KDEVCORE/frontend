import { PlaylistAdd } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

const AddTodo = (props) => {
  const [item, setItem] = useState({ title: "", progress: 0 });
  const addItem = props.addItem;

  const onButtonClick = () => {
    addItem(item);
    setItem({ title: "" });
  };

  const onInputChange = (e) => {
    setItem({ title: e.target.value });
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') onButtonClick();
  };

  return (
    <Box marginTop={2}>
      <TextField
        label="Add Todo"
        fullWidth
        variant="outlined"
        onChange={onInputChange}
        onKeyPress={enterKeyEventHandler}
        value={item.title}
        InputProps={{
          endAdornment:
            <InputAdornment position="start">
              <Button
                fullWidth
                variant="contained"
                onClick={onButtonClick}
                startIcon={<PlaylistAdd />}
              >
                ADD
              </Button>
            </InputAdornment>,
        }}
      />
    </Box>
  );
};

export default AddTodo;