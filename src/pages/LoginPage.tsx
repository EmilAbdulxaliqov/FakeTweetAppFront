import {useState} from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Text, useToast
} from "@chakra-ui/react";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {AuthService} from "../services/api/AuthService.ts";
import {useNavigate} from "react-router-dom";

const loginSchema = Yup.object().shape({
        username: Yup.string()
            .trim("Username cannot start or end with whitespace")
            .strict(true)
            .required('Username is required')
            .min(3, 'Username is too short')
            .max(255, 'Username is too long'),
        password: Yup.string()
            .trim("Password cannot start or end with whitespace")
            .strict(true)
            .required('Password is required')
            .min(8, 'Password is too short')
            .max(255, 'Password is too long')
});


function LoginPage() {
    const toast = useToast();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
            AuthService.login(values.username, values.password).then(response => {
                console.log(response);
                if (response.status == 200) {
                    console.log(response);
                    console.log(response.data);
                    toast({
                        title: "Login successful",
                        status: 'success',
                        position: 'top-right',
                        isClosable: true,
                        duration: 1000
                    });
                    localStorage.setItem("token", response.data.token);
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                }
            }).catch(error => {
                console.log(error);
                if (error.message === "Network Error") {
                    toast({
                        title: "Network error",
                        description: "Please check your internet connection",
                        status: 'error',
                        position: 'top-right',
                        isClosable: true,
                        duration: 2000
                    });
                } else {
                    toast({
                        title: error.response.data || "Invalid username or password",
                        status: 'error',
                        position: 'top-right',
                        isClosable: true,
                        duration: 2000
                    })
                }

            })
        }
    });

    const handleClick = () => setShow(!show);
    return (
        <Flex alignItems={"center"} justifyContent={"center"} w={"100vw"} h={"100vh"} bg={"black"}>
            <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"} gap={"4"} w={"500px"} h={"100%"}>
                <Text fontWeight={"900"} fontSize={"xx-large"} color={"white"}>Sign in to FakeTweetApp</Text>
                <Box onSubmit={formik.handleSubmit} as={'form'} w={"100%"} display={"flex"} flexDir={"column"} gap={"4"}>
                    <FormControl isRequired>
                        <FormLabel color={"white"}>Username</FormLabel>
                        <Input
                            type='text'
                            color={"white"}
                            placeholder='Enter username'
                            name={"username"}
                            onChange={formik.handleChange}
                            value={formik.values.username}
                        />
                        {formik.errors.username ? <FormHelperText color={"red"}>{formik.errors.username}</FormHelperText> : null}
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel color={"white"}>Password</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                color={"white"}
                                name={"password"}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? <ViewOffIcon /> : <ViewIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {formik.errors.password ? <FormHelperText color={"red"}>{formik.errors.password}</FormHelperText> : null}
                    </FormControl>
                    <Button w={"100%"} colorScheme='twitter' type={"submit"}>Login</Button>
                    <Text color={"white"}>Don't have an account?{" "}
                        <Box as={"a"} href="/auth/register" textDecoration={"underline"} color={"#1DA1F2"}>Register</Box>
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
}

export default LoginPage;
