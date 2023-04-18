import { Delete, ExpandMore, SentimentDissatisfied, SentimentSatisfied, SentimentSatisfiedAlt, SentimentVeryDissatisfied, SentimentVerySatisfied } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Grid, IconButton, Rating, Slider, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React, { useState } from "react";

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
  const [readOnly, setReadOnly] = useState(true);
  const deleteItem = props.deleteItem;
  const editItem = props.editItem;

  const editEventHandler = (e) => {
    switch(e.target.name) {
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
        setItem({ ...item, deadline: e.target.value });
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

  const turnOffReadOnly = () => {
    setReadOnly(false);
  };

  const turnOnReadOnly = (e) => {
    if (e.key === "Enter" && readOnly === false) {
      setReadOnly(true);
      editItem(item);
    }
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
      >
        <Typography>
          {item.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={{ sm: 2, md: 4 }} columns={{ sm: 6, md: 12 }}>
          <Grid item sm={1} md={1}>
            <Checkbox checked={item.done} onChange={checkboxEventHandler} />
          </Grid>
          <Grid item sm={4} md={10}>
            <TextField
              onClick={turnOffReadOnly}
              onKeyDown={turnOnReadOnly}
              onChange={editEventHandler}
              type="text"
              name="title"
              value={item.title}
              multiline
              fullWidth
              disabled={readOnly}
            />
          </Grid>
          <Grid item sm={1} md={1}>
            <IconButton
              color="error"
              aria-label="Delete Todo"
              onClick={deleteEventHandler}
            >
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={{ sm: 2, md: 4 }} columns={{ sm: 6, md: 12 }}>
          <Grid item sm={2} md={4}>
            <Typography>
              {"progress: " + item.progress}
            </Typography>
            <Slider name="progress" value={item.progress} onChange={editEventHandler} valueLabelDisplay="auto" />
          </Grid>
          <Grid item sm={2} md={4}>
            <Typography>
              {"priority: " + item.priority}
            </Typography>
            <Rating name="priority" value={item.priority} onChange={editEventHandler} />
          </Grid>
          <Grid item sm={2} md={4}>
            <Typography>
              {"stress: " + item.stress}
            </Typography>
            <StyledRating
              name="stress"
              value={item.stress}
              onChange={editEventHandler}
              IconContainerComponent={IconContainer}
              getLabelText={(value) => customIcons[value].label}
              highlightSelectedOnly
            />
          </Grid>
        </Grid>
        <Grid container spacing={{ sm: 2, md: 4 }} columns={{ sm: 6, md: 12 }}>
          <Grid item sm={2} md={4}>
            <Typography>
              {"created: " + item.createdDate}
            </Typography>
          </Grid>
          <Grid item sm={2} md={4}>
            <Typography>
              {"updated: " + item.updatedDate}
            </Typography>
          </Grid>
          <Grid item sm={2} md={4}>
            <Typography>
              {"deadline: " + item.deadline}
            </Typography>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default List;
