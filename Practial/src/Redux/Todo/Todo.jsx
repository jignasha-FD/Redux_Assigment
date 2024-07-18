import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, editItem } from "../feature/todo";
import { Delete, Edit } from "@mui/icons-material";

export default function Todo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(null);
  const todoData = useSelector((state) => state.todokey.TodoItems);
  const handleData = () => {
    if (input === "") {
      alert("Please fill Data");
      return;
    }
    if (edit == null) {
      dispatch(addItem(input));
    } else {
      dispatch(editItem({ edit, input }));
      setEdit(null);
    }
    setInput("");
  };
  const handleEdit = (index) => {
    setEdit(index);
    setInput(todoData[index]);
  };
  return (
    <Box bgcolor={grey[200]} height="100vh">
      <Typography variant="h4" textAlign="center" py={3}>
        Todo with Crud
      </Typography>
      <Box maxWidth="700px" p={2} mx="auto" component={Paper}>
        <Grid container alignItems={"center"} spacing={2}>
          <Grid item md={9}>
            <TextField
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              fullWidth
              label="Add Todo"
            ></TextField>
          </Grid>
          <Grid item md={3}>
            <Button
              onClick={handleData}
              sx={{
                bgcolor: green[700],
                "&:hover": {
                  bgcolor: green[900],
                },
              }}
              fullWidth
              variant="contained"
            >
              {edit === null ? "Add Item" : "Edit Item"}
            </Button>
          </Grid>
        </Grid>
        {todoData.length === 0 ? (
          <Typography mt={2} color="red" variant="h6">
            No Data Found
          </Typography>
        ) : (
          todoData.map((item, index) => {
            return (
              <Grid
                spacing={2}
                my={0}
                alignItems="center"
                container
                key={index}
              >
                <Grid item md={8}>
                  <Typography variant="h6">{item}</Typography>
                </Grid>
                <Grid item md={2}>
                  <Button
                    sx={{
                      bgcolor: red[600],
                      "&:hover": {
                        bgcolor: red[700],
                      },
                    }}
                    onClick={() => dispatch(deleteItem(index))}
                    fullWidth
                    size="small"
                    startIcon={<Delete></Delete>}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </Grid>
                <Grid item md={2}>
                  <Button
                    onClick={() => handleEdit(index)}
                    fullWidth
                    size="small"
                    startIcon={<Edit></Edit>}
                    variant="contained"
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>
            );
          })
        )}
      </Box>
    </Box>
  );
}
