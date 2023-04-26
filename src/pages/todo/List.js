import { Delete, KeyboardArrowDown, KeyboardArrowUp, Send, SentimentDissatisfied, SentimentSatisfied, SentimentSatisfiedAlt, SentimentVeryDissatisfied, SentimentVerySatisfied } from "@mui/icons-material";
import { Box, Collapse, IconButton, InputAdornment, Rating, Slider, Switch, Table, TableBody, TableCell, TableHead, TableRow, TextField, Tooltip, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { DatePicker, DateTimeField } from "@mui/x-date-pickers";
import dayjs from "dayjs";
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
  
  const editItem = props.editItem;
  const deleteItem = props.deleteItem;

  const editSaveHandler = (e) => {
    editItem(item);
  };
  const editTitleHandler = (event) => {
    item.title = event.target.value;
    setItem({...item});
  };
  const editDoneHandler = (event) => {
    item.done = event.target.checked;
    setItem({...item});
  };
  const editProgressHandler = (event) => {
    const value = Number(event.target.value);
    item.progress = value < 0 ? 0 : value > 100 ? 100 : value;
    setItem({...item});
  };
  const editPriorityHandler = (event) => {
    const value = Number(event.target.value);
    item.priority = value < 1 ? 1 : value > 5 ? 5 : value;
    setItem({...item});
  };
  const editStressHandler = (event) => {
    const value = Number(event.target.value);
    item.stress = value < 1 ? 1 : value > 5 ? 5 : value;;
    setItem({...item});
  };
  const editDateHandler = (value) => {
    item.deadline = new Date(dayjs(value));
    setItem({...item});
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
            <Slider value={item.progress} readOnly />
          </TableCell>
          <TableCell align="center">
            <Rating value={item.priority} readOnly />
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
                      <TableCell align="center">{"저장"}</TableCell>
                      <TableCell align="center">{"삭제"}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <TextField
                          variant="outlined"
                          type="text"
                          label="제목"
                          value={item.title}
                          onChange={editTitleHandler}
                          fullWidth 
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Switch
                          checked={item.done}
                          onChange={editDoneHandler}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          label="진행률"
                          variant="outlined"
                          type="number"
                          value={item.progress}
                          helperText="0~100"
                          sx={{ m: 1, width: '25ch' }}
                          InputProps={{
                            endAdornment: <InputAdornment position="end">{"%"}</InputAdornment>,
                          }}
                          onChange={editProgressHandler}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Rating
                          value={item.priority}
                          onChange={editPriorityHandler}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <StyledRating
                          name="stress"
                          value={item.stress}
                          onChange={editStressHandler}
                          IconContainerComponent={IconContainer}
                          getLabelText={(value) => customIcons[value].label}
                          highlightSelectedOnly
                        />
                      </TableCell>
                      <TableCell align="center">
                        <DatePicker
                          label="마감 날짜"
                          value={dayjs(item.deadline)}
                          onChange={(value) => editDateHandler(value)}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <DateTimeField
                          label="변경 날짜"
                          defaultValue={dayjs(item.updatedDate)}
                          readOnly
                        />
                      </TableCell>
                      <TableCell align="center">
                        <DateTimeField
                          label="생성 날짜"
                          defaultValue={dayjs(item.createdDate)}
                          readOnly
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="저장" placement="bottom">
                          <IconButton
                            color="info"
                            aria-label="Edit Todo"
                            onClick={editSaveHandler}
                          >
                            <Send />
                          </IconButton>
                        </Tooltip>
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