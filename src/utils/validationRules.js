import validator from "validator";
const validationRulesError = ({ name, data, message, length, confirm_str }) => {
  switch (name) {
    case "isEmail": {
      if (!validator.isEmpty(data)) {
        if (validator.isEmail(data)) {
          return { message: "" };
        } else return { message: "Invalid Email" };
      } else return { message: "Field is required" };
    }
    case "isEmpty": {
      if (!validator.isEmpty(data)) {
        return {};
      } else return { message: message };
    }
    case "minLength": {
      if (validator.isLength(data, { min: 6, max: undefined })) {
        return { message: "" };
      } else return { message: message };
    }
    case "isValidName": {
      if (!validator.isEmpty(data)) {
        if (validator.isLength(data, { min: 2, max: 5 })) {
          return { message: "" };
        } else return { message: "min lenght 2 max 5" };
      } else return { message: "Field is required" };
    }
    case "isPhone": {
      let pattern = /^[\+]{0,1}380([0-9]{9})$/;
      if (pattern.test(data)) {
        return { message: "" };
      } else return { message: "Invalid Phone" };
    }
  }
};

export { validationRulesError };
