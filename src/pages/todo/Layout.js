import { PlaylistAdd } from "@mui/icons-material";
import { Box, Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { call } from "../../service/ApiService";
import TodoList from "./List";

export default function Layout() {
  const [item, setItem] = useState({
                            title: "",
                            done: false,
                            progress: 0,
                            priority: 1,
                            stress: 1,
                            deadline: new Date(),
                            createdDate: null,
                            updatedDate: null,
                          });
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

  const onButtonClick = () => {
    addItem(item);
    setItem({
      title: "",
      done: false,
      progress: 0,
      priority: 1,
      stress: 1,
      deadline: new Date(),
      createdDate: null,
      updatedDate: null,
    });
  };

  let todoPage = (
    <Paper
      elevation={0}
      sx={{ mb: 2 }}
    >
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
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="todo list table" size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">{"완료"}</TableCell>
              <TableCell align="center">{"제목"}</TableCell>
              <TableCell align="center">{"진행도"}</TableCell>
              <TableCell align="center">{"우선순위"}</TableCell>
              <TableCell align="center">{"스트레스"}</TableCell>
              <TableCell align="center">{"마감 날짜"}</TableCell>
              <TableCell align="center">{"편집"}</TableCell>
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
      <CircularProgress size={100} sx={{ margin: 6 }} />
  );

  return (
    <Box textAlign={"center"}>
      {!loading ? todoPage : loadingAnimation}
    </Box>
  );
}