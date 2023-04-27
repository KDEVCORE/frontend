import { PlaylistAdd } from "@mui/icons-material";
import { Box, Button, Tooltip } from "@mui/material";
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

  return (
    <Box
      sx={{
        my: 2,
        textAlign: "left",
      }}
    >
      <Tooltip title="할 일을 추가하고 내용을 작성해 주세요" placement="bottom">
        <Button
          color="inherit"
          onClick={onButtonClick}
          variant="outlined"
          startIcon={<PlaylistAdd />}>
          {"추가"}
        </Button>
      </Tooltip>
    </Box>
  );
};

export default Add;