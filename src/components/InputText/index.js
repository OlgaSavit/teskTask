import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./style.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        // Some CSS
        notchedOutline: {
          fontSize: "16px",
          color: "black",
          borderColor: "#D0CFCF",
          // backgroundColor: "red",
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
const InputText = ({
  name,
  label,
  error,
  value,
  helperText,
  onChange,
  errorMessages,
}) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <TextField
        fullWidth
        className={error ? classes.customStyles : ""}
        name={name}
        label={label}
        aria-describedby="component-error-text"
        error={error}
        helperText={error ? errorMessages : helperText}
        value={value}
        onChange={onChange}
      />
    </ThemeProvider>
  );
};
export default InputText;
