import { useState } from "react";
import { loginSchema } from "../../config/registerSchema";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = loginSchema;

const Login = () => {
  const [showPassword, setShowPassword] = useState("password");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const allAthlete = JSON.parse(localStorage.athlete || null) || [];
    const allPartner = JSON.parse(localStorage.partner || null) || [];
    const allData = [...allAthlete, ...allPartner];

    const isHaveUser = allData.find(
      (item) => item.email === data.email && item.password === data.password
    );

    if (isHaveUser) {
      toast.success("Login Success");
      localStorage.setItem("loggedUser", JSON.stringify(isHaveUser));

      isHaveUser.id == "2" ? navigate('/posted-job') : navigate('/my-jobs');

    } else toast.error("Invalid credentials");
  };

  return (
    <Form
      validated={isValid}
      className="container p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Email Control */}
      <Form.Group className="mt-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          {...register("email")}
          type="text"
          placeholder="Enter your email"
        />
        {errors?.email && (
          <Form.Text className="text-danger">
            {errors?.email?.message}
          </Form.Text>
        )}
      </Form.Group>

      {/* Password */}
      <Form.Group className="mt-3">
        <Form.Label>Password</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type={showPassword}
            {...register("password")}
            placeholder="Enter password"
            aria-describedby="inputGroupPrepend"
          />
          <InputGroup.Text id="inputGroupPrepend">
            {showPassword == "text" ? (
              <IoMdEyeOff onClick={() => setShowPassword("password")} />
            ) : (
              <IoEye onClick={() => setShowPassword("text")} />
            )}
          </InputGroup.Text>
        </InputGroup>
        {errors?.password && (
          <Form.Text className="text-danger">
            {errors?.password?.message}
          </Form.Text>
        )}
      </Form.Group>

      {/* Submit Button */}
      <Form.Group className="mt-3">
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
};

export default Login;
