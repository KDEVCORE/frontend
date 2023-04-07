import { AppBar, Box, Button, CircularProgress, Grid, List, Paper, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddTodo from "./pages/todo/AddTodo";
import Todo from "./pages/todo/Todo";
import { call, signOut } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    call("/todo", "GET", null).then((response) => {
      setItems(response.data);
      setLoading(false);
    });
  }, []);

  const addItem = (item) => {
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

  let todoItems = items.length > 0 && (
    <List>
      {items.map((item) => (
        <Todo
          item={item}
          key={item.id}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      ))}
    </List>
  );

  let navigationBar = (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant="h6">MAIN</Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" onClick={signOut}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  let todoListPage = (
    <Paper style={{ margin: 16 }}>
      {navigationBar}
      <AddTodo addItem={addItem} />
      {todoItems}
    </Paper>
  );

  let loadingPage = (
    <Box margin={5} textAlign={"center"}>
      <CircularProgress size={150} />
    </Box>
  );

  return <Box textAlign={"center"}>{!loading ? todoListPage : loadingPage}</Box>;
}

export default App;
