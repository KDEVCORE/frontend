import { Box, CircularProgress, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { call } from "../../service/ApiService";
import TodoAdd from "./Add";
import TodoList from "./List";

function Frame() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    call("/todo", "GET", null).then((response) => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);

  const addItem = (item) => {
    console.log(item);
    call("/todo", "POST", item)
      .then((response) => setItems(response.data));
  };

  const editItem = (item) => {
    call("/todo", "PUT", item)
      .then((response) => setItems(response.data));
  };

  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
      .then((response) => setItems(response.data));
  };

  let todoListPage = (
    <Paper
      elevation={0}
      sx={{
        my: 2,
      }}
    >
      {items.length > 0 &&
        (items.map((item) => (
          <TodoList
          item={item}
          key={item.uuid}
          editItem={editItem}
          deleteItem={deleteItem}
          />
          )))
        }
    </Paper>
  );
  
  let loadingAnimation = (
    <Box margin={6} textAlign={"center"}>
      <CircularProgress size={100} />
    </Box>
  );
  
  return (
    <Box
    textAlign={"center"}
    >
      <TodoAdd addItem={addItem} loading={loading} />
      {!loading ? todoListPage : loadingAnimation}
    </Box>
  );
}

export default Frame;