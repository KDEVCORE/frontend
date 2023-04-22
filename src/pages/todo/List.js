import { Delete, KeyboardArrowDown, KeyboardArrowUp, SentimentDissatisfied, SentimentSatisfied, SentimentSatisfiedAlt, SentimentVeryDissatisfied, SentimentVerySatisfied } from "@mui/icons-material";
import { Box, Collapse, IconButton, Rating, Slider, Switch, Table, TableBody, TableCell, TableHead, TableRow, TextField, Tooltip, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from "react";

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  5: {
    icon: <SentimentVeryDissatisfied color="error" />,
    label: 'Very Dissatisfied',
  },
  4: {
    icon: <SentimentDissatisfied color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfied color="warning" />,
    label: 'Neutral',
  },
  2: {
    icon: <SentimentSatisfiedAlt color="success" />,
    label: 'Satisfied',
  },
  1: {
    icon: <SentimentVerySatisfied color="success" />,
    label: 'Very Satisfied',
  },
};

const List = (props) => {
  const [item, setItem] = useState(props.item);
  const [open, setOpen] = useState(false);
  const deleteItem = props.deleteItem;
  const editItem = props.editItem;

  const editEventHandler = (e) => {
    switch (e.target.name) {
      case "title":
        setItem({ ...item, title: e.target.value });
        break;
      case "progress":
        setItem({ ...item, progress: Number(e.target.value) });
        break;
      case "priority":
        setItem({ ...item, priority: Number(e.target.value) });
        break;
      case "stress":
        setItem({ ...item, stress: Number(e.target.value) });
        break;
      case "deadline":
        setItem({ ...item, deadline: Date(e.target.value) });
        break;
      default:
        setItem({ ...item });
    }
    editItem(item);
  };

  const checkboxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem(item);
  };

  const deleteEventHandler = () => {
    deleteItem(item);
  };

  return (
    <Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell align="center">
            {item.title}
          </TableCell>
          <TableCell align="center">
            <Switch checked={item.done} readOnly />
          </TableCell>
          <TableCell align="center">
            {item.progress}
          </TableCell>
          <TableCell align="center">
            {item.priority}
          </TableCell>
          <TableCell align="center">
            {new Date(item.deadline).toLocaleDateString()}
          </TableCell>
          <TableCell align="center">
            <IconButton
              aria-label="expand row"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ my: 2 }}>
                <Typography variant="h6" gutterBottom component="div">
                  {"상세 내용"}
                </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">{"제목"}</TableCell>
                      <TableCell align="center">{"완료"}</TableCell>
                      <TableCell align="center">{"진행도"}</TableCell>
                      <TableCell align="center">{"우선순위"}</TableCell>
                      <TableCell align="center">{"스트레스"}</TableCell>
                      <TableCell align="center">{"마감 날짜"}</TableCell>
                      <TableCell align="center">{"수정 날짜"}</TableCell>
                      <TableCell align="center">{"생성 날짜"}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <TextField
                          variant="outlined"
                          type="text"
                          name="title"
                          label="제목"
                          value={item.title}
                          onChange={editEventHandler}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Switch
                          checked={item.done}
                          onChange={checkboxEventHandler}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Slider name="progress" value={item.progress} onChange={editEventHandler} valueLabelDisplay="auto" />
                      </TableCell>
                      <TableCell align="center">
                        <Rating name="priority" value={item.priority} onChange={editEventHandler} />
                      </TableCell>
                      <TableCell align="center">
                        <StyledRating
                          name="stress"
                          value={item.stress}
                          onChange={editEventHandler}
                          IconContainerComponent={IconContainer}
                          getLabelText={(value) => customIcons[value].label}
                          highlightSelectedOnly
                        />
                      </TableCell>
                      <TableCell align="center">
                        {new Date(item.deadline).toLocaleString()}
                      </TableCell>
                      <TableCell align="center">
                        {new Date(item.updatedDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell align="center">
                        {new Date(item.createdDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="삭제" placement="bottom">
                          <IconButton
                            color="error"
                            aria-label="Delete Todo"
                            onClick={deleteEventHandler}
                          >
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
    </Fragment>
  );
};

export default List;