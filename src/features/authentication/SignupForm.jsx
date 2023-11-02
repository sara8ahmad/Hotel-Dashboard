import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import {useForm} from 'react-hook-form';
import { useSignUp } from "./useSignUp";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {

  const{userSignUp , isLoading} = useSignUp();

  const { register, handleSubmit , formState , getValues , reset } = useForm();
  const{ errors } = formState;

  function onSubmit({fullName,email,password}){
    userSignUp({fullName,email,password} , {onSettled: () => reset()})
  }


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input type="text" id="fullName" {...register("fullName", { required: 'This Field is required', maxLength: 20 })} />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input type="email" id="email"  {...register("email", {
            required: "This field is required",
            pattern: {
             value: /\S+@\S+\.\S+/,
             message: "Please provide a valid email address",
            },
          })} />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input type="password" id="password"  {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            }, })} />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirmed?.message}>
        <Input type="password" id="passwordConfirm"  {...register("passwordConfirm", {
            required: "This field is required",
              validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button sizes ='medium'  variations="secondary" type="reset">
          Cancel
        </Button>
        <Button sizes ='medium' >Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
