import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
//import ListItemText from '@mui/material/ListItemText';
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
//import Divider from '@mui/material/Divider';

import "./UserModal.css";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    place: "",
    plantName: "",
    scientificName: "",
    category: "",
    information: "",
    image: null,
    imagePreview: null,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    // Update the image and image preview in the state
    setFormData({
      ...formData,
      image: file,
      imagePreview: URL.createObjectURL(file),
    });
  };

  const handleSubmit = () => {
    // Check if all required fields are filled before submission
    const errors = {};
    let hasErrors = false;

    Object.keys(formData).forEach((field) => {
      if (!formData[field] && field !== "image") {
        errors[field] = "This field is required.";
        hasErrors = true;
      }
    });

    if (!hasErrors) {
      // Handle form submission, e.g., send data to the server
      alert("Form submitted", formData);

      // Reset the form after successful submission
      resetForm();
      handleClose();
    }
  };

  const handleClose = () => {
    // Reset the form when the dialog is closed
    resetForm();
    setOpen(false);
  };

  const resetForm = () => {
    // Reset the form fields to their initial state (empty values)
    setFormData({
      name: "",
      email: "",
      place: "",
      plantName: "",
      scientificName: "",
      category: "",
      information: "",
      image: null,
      imagePreview: null,
    });
  };

  return (
    <React.Fragment>
      <Link
        variant="outlined"
        onClick={handleClickOpen}
        style={{ color: "#fff", textDecoration: "none" }}
      >
        Add Plants
      </Link>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: "relative",
            background:
              "linear-gradient(151deg, rgba(92,150,7,1) 0%, rgba(96,148,52,1) 15%, rgba(135,232,128,1) 100%, rgba(209,237,198,1) 100%)",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon style={{ fontSize: "1.9rem" }} />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              style={{ fontWeight: "600", fontSize: "1.8rem" }}
            >
              Plant Information
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={handleSubmit}
              style={{ fontWeight: "600", fontSize: "1.4rem" }}
            >
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <div className="container py-3">
          <h1>
            <u>Fill Details</u>
          </h1>
          <p style={{ fontWeight: "500", fontSize: "1.2rem" }}>
            Fill all the fields, and your information will be verified by the
            team, later you will be informed about the status.
          </p>

          <div className="row">
            <div className="col-md-5">
              <List>
                <ListItem>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("name")}
                    value={formData.name}
                    required
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("email")}
                    value={formData.email}
                    required
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Place"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("place")}
                    value={formData.place}
                    required
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Plant Name"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("plantName")}
                    value={formData.plantName}
                    required
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Scientific Name"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("scientificName")}
                    value={formData.scientificName}
                    required
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Category"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange("category")}
                    value={formData.category}
                    required
                  />
                </ListItem>
              </List>
            </div>
            <div className="col-md-5">
              <List>
                <ListItem>
                  <TextField
                    label="Information"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    onChange={handleChange("information")}
                    value={formData.information}
                    required
                  />
                </ListItem>
                <ListItem>
                  <input
                    type="file"
                    accept="image/*"
                    id="image-upload"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    required
                  />
                  <label htmlFor="image-upload">
                    <Button variant="outlined" component="span">
                      Upload Image
                    </Button>
                  </label>
                  {formData.image && (
                    <Typography variant="caption" color="textSecondary">
                      {formData.image.name}
                    </Typography>
                  )}
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
