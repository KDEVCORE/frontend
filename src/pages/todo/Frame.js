import { Box, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { call } from "../../service/ApiService";
import TodoAdd from "./Add";
import TodoList from "./List";

function Frame() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (!accessToken || accessToken === null) window.location.href = "/signin";

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

  let todoPage = (
    <Paper
      elevation={0}
      sx={{
        my: 2,
      }}
    >
      <TodoAdd addItem={addItem} />
      <TableContainer component={Paper}>
        <Table aria-label="todo list table">
          <TableHead>
            <TableRow>
              <TableCell align="center">{"제목"}</TableCell>
              <TableCell align="center">{"완료"}</TableCell>
              <TableCell align="center">{"진행도"}</TableCell>
              <TableCell align="center">{"우선순위"}</TableCell>
              <TableCell align="center">{"마감 날짜"}</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );

  let loadingAnimation = (
    <Box margin={6} textAlign={"center"}>
      <CircularProgress size={100} />
    </Box>
  );

  return (
    <Box textAlign={"center"}>
      {!loading ? todoPage : loadingAnimation}
    </Box>
  );
}

export default Frame;