import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { forwardRef } from 'react'
const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        // Some CSS
        notchedOutline: {
          fontSize: "16px",
          color: "black",
          borderColor: "#D0CFCF",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        // Some CSS
        root: {
          fontSize: "12px",
          color: "#7E7E7E",
          fontFamily: "Nunito",
          marginTop: 0,
          letterSpacing: "initial",
        },
      },
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    "& .Mui-error": {
      border: "2px solid",
    },
  },
  customStyles: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid red",
    },
  },
}));
const InputTextNew =forwardRef((props,ref) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <TextField
        fullWidth
        {...props}
        error={props.errors}
        helperText={props.errors ? props.errors?.message : props.helperText}
        className={props.errors ? classes.customStyles : ""}
        ref={ref}
      />
    </ThemeProvider>
  );
});
export default InputTextNew;
