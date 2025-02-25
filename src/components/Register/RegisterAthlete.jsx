import React, { useState } from "react";
import { Button, Form, InputGroup, Row } from "react-bootstrap";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { athleteRegisterSchema } from "../../config/registerSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = athleteRegisterSchema;

const RegisterAthlete = ({ onSubmit }) => {
    const [showPassword, setShowPassword] = useState("password");
    const [showConfirmPassword, setShowConfirmPassword] = useState("password");

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: zodResolver(schema),
    });

    return (
        <Form validated={isValid} onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
                {/* Name Control */}
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        {...register("name")}
                        type="text"
                        placeholder="Enter your name"
                    />
                    {errors?.name && (
                        <Form.Text className="text-danger">
                            {errors?.name?.message}
                        </Form.Text>
                    )}
                </Form.Group>

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

                {/* Confirm Password */}
                <Form.Group className="mt-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            {...register("confirmPassword")}
                            type={showConfirmPassword}
                            placeholder="Enter confirm password"
                            aria-describedby="inputGroupPrepend"
                        />
                        <InputGroup.Text id="inputGroupPrepend">
                            {showConfirmPassword == "text" ? (
                                <IoMdEyeOff
                                    onClick={() => setShowConfirmPassword("password")}
                                />
                            ) : (
                                <IoEye onClick={() => setShowConfirmPassword("text")} />
                            )}
                        </InputGroup.Text>
                    </InputGroup>
                    {errors?.confirmPassword && (
                        <Form.Text className="text-danger">
                            {errors?.confirmPassword?.message}
                        </Form.Text>
                    )}
                </Form.Group>

                {/* Submit Button */}
                <Form.Group className="mt-3">
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Row>
        </Form>
    );
};

export default RegisterAthlete;
