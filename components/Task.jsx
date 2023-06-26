import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { taskStore } from "../store/store";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import ModalByMe from "./ModalByMe";
import Edit from "./Edit";
import { useStore } from "zustand";
import Filter from "./FilterByMe";

export default function Task() {
  const [open, setOpen] = useState(false);

  const tasks = taskStore((state) =>(state.tasks));
  const remove = taskStore((state) => state.removeTask);
  const replace = taskStore((state) => state.replaceTask);

 const replaceTask = replace;
  
  const editHandler = () => {
    setOpen(true);
  }

  const closeModalHandler = () => {
    setOpen(false);
  }
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.title}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{task.priority}</TableCell>
              <TableCell>{task.date}</TableCell>
              <TableCell >
                <DeleteIcon onClick={() => remove(task.title)} />
              </TableCell>
              <TableCell>
                <EditIcon onClick={editHandler} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Edit close={closeModalHandler} open={open} replace={replaceTask} />
      <Filter />
    </TableContainer>
  );
}
