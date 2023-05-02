import { Delete, KeyboardArrowDown, KeyboardArrowUp, Send, SentimentDissatisfied, SentimentSatisfied, SentimentSatisfiedAlt, SentimentVeryDissatisfied, SentimentVerySatisfied } from "@mui/icons-material";
import { Box, Checkbox, CircularProgress, Collapse, FormControl, FormHelperText, IconButton, InputLabel, MenuItem, Paper, Rating, Select, Switch, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Tooltip, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { DateField, DateTimeField } from "@mui/x-date-pickers";
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

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate"  readOnly {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
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
    setItem({ ...item });
  };
  const editDoneHandler = (event) => {
    item.done = event.target.checked;
    setItem({ ...item });
  };
  const editProgressHandler = (event) => {
    const value = Number(event.target.value);
    item.progress = value < 0 ? 0 : value > 100 ? 100 : value;
    setItem({ ...item });
  };
  const editPriorityHandler = (event) => {
    const value = Number(event.target.value);
    item.priority = value < 1 ? 1 : value > 5 ? 5 : value;
    setItem({ ...item });
  };
  const editStressHandler = (event) => {
    const value = Number(event.target.value);
    item.stress = value < 1 ? 1 : value > 5 ? 5 : value;;
    setItem({ ...item });
  };
  const editDateHandler = (value) => {
    item.deadline = new Date(dayjs(value));
    setItem({ ...item });
  };

  const deleteEventHandler = () => {
    deleteItem(item);
  };

  return (
    <Fragment>
      <TableRow>
        <TableCell align="center">
          <Switch checked={item.done} readOnly />
        </TableCell>
        <TableCell align="center">
          {item.title}
        </TableCell>
        <TableCell align="center">
          <CircularProgressWithLabel value={item.progress} />
        </TableCell>
        <TableCell align="center">
          <Rating value={item.priority} readOnly />
        </TableCell>
        <TableCell align="center">
          <StyledRating value={item.stress} IconContainerComponent={IconContainer} getLabelText={(value) => customIcons[value].label} highlightSelectedOnly readOnly />
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
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ my: 2 }}>
              <Typography variant="h6" gutterBottom component="div">
                {"편집"}
              </Typography>
              <TableContainer component={Paper} sx={{ width: "100%" }}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">
                        <Tooltip title="완료여부" placement="bottom">
                          <Checkbox
                            checked={item.done}
                            onChange={editDoneHandler}
                          />
                        </Tooltip>
                      </TableCell>
                      <TableCell width="20%" align="center">
                        <TextField
                          variant="standard"
                          type="text"
                          label="제목"
                          value={item.title}
                          onChange={editTitleHandler}
                          helperText="입력해 주세요."
                          fullWidth
                        />
                      </TableCell>
                      <TableCell width="8%" align="center">
                        <TextField
                          label="진행도"
                          variant="standard"
                          type="number"
                          value={item.progress}
                          onChange={editProgressHandler}
                          helperText="0 ~ 100"
                        />
                      </TableCell>
                      <TableCell width="7%" align="center">
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="select-priority-label">우선순위</InputLabel>
                          <Select
                            labelId="select-priority-label"
                            label="우선순위"
                            value={item.priority}
                            onChange={editPriorityHandler}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                          </Select>
                        </FormControl>
                        <FormHelperText>1 ~ 5</FormHelperText>
                      </TableCell>
                      <TableCell width="7%" align="center">
                        <FormControl variant="standard" fullWidth>
                          <InputLabel id="select-stress-label">스트레스</InputLabel>
                          <Select
                            labelId="select-stress-label"
                            label="스트레스"
                            value={item.stress}
                            onChange={editStressHandler}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                          </Select>
                        </FormControl>
                        <FormHelperText>1 ~ 5</FormHelperText>
                      </TableCell>
                      <TableCell width="10%" align="center">
                        <DateField
                          label="마감 날짜"
                          variant="standard"
                          value={dayjs(item.deadline)}
                          onChange={(value) => editDateHandler(value)}
                          helperText="입력해 주세요."
                        />
                      </TableCell>
                      <TableCell width="15%" align="center">
                        <DateTimeField
                          label="변경 날짜"
                          variant="standard"
                          defaultValue={dayjs(item.updatedDate)}
                          helperText="수정할 수 없습니다."
                          readOnly
                        />
                      </TableCell>
                      <TableCell width="15%" align="center">
                        <DateTimeField
                          label="생성 날짜"
                          variant="standard"
                          defaultValue={dayjs(item.createdDate)}
                          helperText="수정할 수 없습니다."
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
              </TableContainer>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default List;