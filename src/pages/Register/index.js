import React, { PureComponent } from "react";
import Form from "../../components/Form";
import { initialValues, fields, registerSchema } from "./fields";
import axios from "../../utils/axios";

export class Register extends PureComponent {
  submit = async (values, actions) => {
    try {
      console.log(actions);
      const { confirm_password, ...data } = values;
      const { token } = await axios.post("api/user", data);
      sessionStorage.setItem("token", token);
      actions.resetForm();
      this.props.history.push("/home");
    } catch (error) {
      console.log(error.message);
      actions.setErrors({ serverError: error.message });
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <Form
          fields={fields}
          enableReinitialize={true}
          initialValues={initialValues}
          btnName="Register"
          validationSchema={registerSchema}
          onSubmit={this.submit}
        />
      </div>
    );
  }
}

export default Register;
