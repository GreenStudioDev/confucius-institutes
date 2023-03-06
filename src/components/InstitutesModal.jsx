import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const style = {
  margin: "4vh auto",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: "32px 0",
  "&:focus-visible": {
    outline: "none",
  },
  "@media (max-width: 501px)": {
    width: 300,
    height: 450,
  },
};

const buttonStyle = {
  position: "absolute",
  zIndex: 999,
  right: 20,
  bottom: 35,
  p: 3.5,
  //   bgColor: "linear-gradient(-180deg, #00D775, #00BD68)",
  backgroundImage: "linear-gradient(-180deg, #00D775, #00BD68)",
  borderRadius: 4,
  boxShadow: "rgba(0, 0, 0, 0.1) 0 2px 4px",
  color: "#FFFFFF",
  cursor: "pointer",
  height: 44,
  lineHeight: 1.2,
  textAlign: "center",
  width: "auto",
  border: 0,
  "&:hover": {
    background: "#00bd68",
  },
  "@media (max-width: 501px)": {
    bottom: "31vh",
    height: "auto",
    width: 130,
    lineHeight: 1,
    fontSize: "12px",
    p: 1.5,
  },
};

export const InstitutesModal = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} sx={buttonStyle}>
        About
        <br />
        Institutes
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {window.innerWidth <= 500 ? (
            <img
              src="https://fundacionandresbello.org/infografiainstitutosconfucio-300x450"
              alt="indicaciones institutos Confucio"
            />
          ) : (
            <img
              src="https://fundacionandresbello.org/comp-1-compr-700"
              alt="indicaciones institutos Confucio"
            />
          )}
        </Box>
      </Modal>
    </>
  );
};
