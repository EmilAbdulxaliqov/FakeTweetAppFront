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
    Text, useToast,
} from "@chakra-ui/react";
import {useState} from "react";
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import {useFormik} from "formik";
import * as Yup from "yup";
import {AuthService} from "../services/api/AuthService.ts";
import {useNavigate} from "react-router-dom";

const registerSchema = Yup.object().shape({
    username: Yup.string()
        .trim("Username cannot start or end with whitespace")
        .strict(true)
        .required('Username is required')
        .max(255, 'Username is too long'),
    password: Yup.string()
        .trim("Password cannot start or end with whitespace")
        .strict(true)
        .required('Password is required')
        .max(255, 'Password is too long')
});

function RegisterPage() {
    const toast = useToast();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: registerSchema,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
            AuthService.register(values.username, values.password).then(response => {
                console.log(response);
                if (response.status == 200) {
                    toast({
                        title: "Account created successfully",
                        status: 'success',
                        position: 'top-right',
                        isClosable: true,
                        duration: 3000
                    })
                    setTimeout(() => {
                        navigate('/auth/login');
                    }, 3000);
                }
            });
        }
    });
    const handleClick = () => setShow(!show);
  return (
    <Flex alignItems={"center"} justifyContent={"center"} w={"100vw"} h={"100vh"} bg={"black"}>
      <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"} gap={"4"} w={"500px"} h={"100%"}>
          <Text fontWeight={"900"} fontSize={"xx-large"} color={"white"}>Create your account</Text>
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
              <Button w={"100%"} colorScheme='twitter' type={"submit"}>Register</Button>
          </Box>
      </Flex>
    </Flex>
  );
}

export default RegisterPage;
