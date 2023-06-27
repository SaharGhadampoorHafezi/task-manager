import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ModalByMe from "../components/ModalByMe";
import Task from "../components/Task";
import Filter from "../components/FilterByMe";
import TableData from "../components/FilterByMe";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  // const openModalHandler = (e) => {
  //   // e.preventDefault();
  //   openModal();
  // };

  const closeModalHandler = (e) => {
    // e.preventDefault();
    closeModal();
  };

  return mounted ? (
    <div>
      <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        // sx={boxDefault}
      >
        {/* <Button onClick={handleOpen} variant="contained">Create a Task</Button> */}
        <Button onClick={() => setOpen(true)} variant="contained">
          Create a Task
        </Button>
        {/* <TableData /> */}
        
      </Box>
      <ModalByMe close={closeModalHandler} open={open} />
      <Task />
    </div>
  ) : null;
}
