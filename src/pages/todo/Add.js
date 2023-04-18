import { PlaylistAdd } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

const Add = (props) => {
  const [item, setItem] = useState({
    title: "",
    done: false,
    progress: 0,
    priority: 1,
    stress: 3,
    deadline: null,
    createdDate: null,
    updatedDate: null,
  });
  const addItem = props.addItem;

  const onButtonClick = () => {
    addItem(item);
    setItem({
      title: "",
      done: false,
      progress: 0,
      priority: 1,
      stress: 3,
      deadline: null,
      createdDate: null,
      updatedDate: null,
    });
  };

  const onInputChange = (e) => {
    setItem({...item, title: e.target.value, deadline: new Date() });
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') onButtonClick();
  };

  return (
    <Box
      sx={{
        my: 2,
      }}
    >
      <TextField
        disabled={props.loading ? true : false}
        label="Add Todo"
        fullWidth
        variant="outlined"
        onChange={onInputChange}
        onKeyPress={enterKeyEventHandler}
        value={item.title}
        InputProps={{
          endAdornment:
            <InputAdornment position="end">
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

export default Add;