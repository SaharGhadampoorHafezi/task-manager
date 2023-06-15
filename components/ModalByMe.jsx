import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { taskStore, useStore } from "../store/store";

const level = ["Hight", "Medium", "Low"];

export default function ModalByMe({ close, open }) {
  const [change, setChange] = useState({
    title: "",
    description: "",
    priority: "",
    date: "",
  });

  const submit = taskStore((state) => state.addTask);
   
  const onSubmitHandler = () => {
    submit(change);
    console.log(change);
  };

  const titleHandler = (e) => {
    setChange((change) => ({
      title: e.target.value,
      ...change,
    }));
  };

  const descriptionHandler = (e) => {
    setChange((change) => ({
      description: e.target.value,
      ...change,
    }));
  };

  const dateHandler = (e) => {
    setChange((change) => ({
      date: e.target.value,
      ...change,
    }));
  };

  const autoCompleteHandler = (e) => {
    setChange((change) => ({
      priority: e.target.value,
      ...change,
    }));
  };

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          background: "#DCDCDC",
          border: "2px solid #848482",
          width: "50%",
          minWidth: "400px",
          height: "500px",
        }}
      >
        <form onSubmit={onSubmitHandler}>
          <FormControl
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <TextField
              label="Enter your task:"
              size="small"
              sx={{ pb: 3 }}
              value={change.title}
              onChange={titleHandler}
            />
            <TextField
              label="Description"
              size="normal"
              onChange={descriptionHandler}
              value={change.description}
            />
            <TextField
              type="date"
              sx={{
                pt: 3,
                pb: 3,
              }}
              value={change.date}
              onChange={dateHandler}
            />
            <Autocomplete
              options={level}
              renderInput={(params) => {
                return <TextField name="priority level" {...params} />;
              }}
              getOptionLabel={(levelOption) => `${levelOption}`}
              renderOption={(props, option) => {
                return <li {...props}>{`${option}`}</li>;
              }}
              value={change.priority}
              onChange={autoCompleteHandler}
            />
            <Button variant="text" type="submit" sx={{ pt: 3 }}>
              Confirm
            </Button>
          </FormControl>
        </form>
      </Box>
    </Modal>
  );
}