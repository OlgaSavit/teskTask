import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Text from "../Text";
import { useController } from "react-hook-form";
import { forwardRef } from "react";

const RadioComponent = forwardRef(
  ({ list, data, handleChange, textLabel, nameRadio, ...field }, ref) => {
    return (
      <FormControl>
        <Text style={{ marginBottom: "5px" }} type={"p1"}>
          {textLabel}
        </Text>
        {list.map((item) => {
          return (
            <RadioGroup
              key={item.id}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name={nameRadio}
            >
              <FormControlLabel
                checked={parseInt(field.value) === item.id ? true : false}
                value={item.id}
                control={
                  <Radio
                    sx={{
                      color: "#D0CFCF",
                      padding: "5px 10px",
                      "&.Mui-checked": {
                        color: "#00BDD3",
                      },
                    }}
                  />
                }
                label={item.name}
                onChange={handleChange}
              />
            </RadioGroup>
          );
        })}
      </FormControl>
    );
  }
);
export default RadioComponent;
