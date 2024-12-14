import { Modal, Box, Button, Typography } from "@mui/material";
import s from "./Modal.module.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => (
  <ThemeProvider theme={theme}>
    <Modal className={s.modal} open={isOpen} onClose={onClose}>
      <Box className={s.box}>
        <Typography className={s.message}>{message}</Typography>
        <Box className={s.container}>
          <Button onClick={onConfirm} variant="contained" color="blue">
            Confirm
          </Button>
          <Button onClick={onClose} variant="outlined" color="red">
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  </ThemeProvider>
);

export default ConfirmModal;
