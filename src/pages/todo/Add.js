import { PlaylistAdd } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

const Add = (props) => {
  const [item, setItem] = useState({
    title: "",
    done: false,
    progress: 0,
    priority: 5,
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
      priority: 5,
      stress: 3,
      deadline: null,
      createdDate: null,
      updatedDate: null,
    });
  };

  const changeTitleHandler = (e) => {
    setItem({...item, title: e.target.value});
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
        label="할 일의 제목을 입력해 주세요."
        fullWidth
        variant="outlined"
        onChange={changeTitleHandler}
        onKeyPress={enterKeyEventHandler}
        value={item.title}
        InputProps={{
          endAdornment:
            <InputAdornment position="end">
              <Button
                variant="contained"
                color="inherit"
                onClick={onButtonClick}
                startIcon={<PlaylistAdd />}
                fullWidth
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