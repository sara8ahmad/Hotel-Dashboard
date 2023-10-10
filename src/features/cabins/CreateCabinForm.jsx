import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabins } from "../../services/apiCabins";
import toast from 'react-hot-toast';


const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({onCloseModal}) {

  
  const queryClient = useQueryClient();

  const {mutate ,isLoading: isCreating , reset}  = useMutation({
    mutationFn:(data) => createCabins(data),
    // to update the UI by deleting the cache and refetching data  
    onSuccess: ()=> {
      toast.success('Cabin Sucessfully Created')
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      })
      reset();
    },
    onError: (err)=> toast.error(err.message)
  })


  const { register, handleSubmit , formState : {errors} , getValues } = useForm();
  
  const onFormSubmit  = data => mutate({...data, image:data.image[0]});

  const onErrors = errors => console.error(errors);


  const validateDiscount = (value) => {
    if (!value) {
      return "Discount is required";
    } else if (value >= getValues().regularPrice) {
      return "Discount must be less than regular price";
    } else {
      return true;
    }
  };
  const registerOptions = {
    name: { required: "Name is required",
     },

    regularPrice: { required: "Regular Price is required"  },

    discount: { required: "Discount is required" ,
    validate: (value) => Number(value) < getValues().regularPrice || "Discount must be less than regular price"},

    maxCapacity: {
      required: "MaxCapacity is required",
      min: {
        value: 1,
        message: "Capacity at least be 1"
      }
    }
  };

  



  return (
    <Form onSubmit={handleSubmit(onFormSubmit, onErrors)} type = {onCloseModal? "modal" : "regular"}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input type="text" id="name" {...register('name' , registerOptions.name)}  />
        {errors?.name?.message && <Error> {errors.name.message} </Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input type="number" id="maxCapacity" {...register('maxCapacity',registerOptions.maxCapacity)  } />
        {errors?.maxCapacity?.message && <Error> {errors.maxCapacity.message} </Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input type="number" id="regularPrice" {...register('regularPrice' , registerOptions.regularPrice)} />
        {errors?.regularPrice?.message && <Error> {errors.regularPrice.message} </Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input type="number" id="discount" defaultValue={0} {...register('discount' , registerOptions.discount)}  />
        {errors?.discount?.message && <Error> {errors.discount.message} </Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea type="number" id="description" defaultValue="" {...register('description')} />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" type = 'file' accept="image/*" {...register('image')} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={()=>onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isCreating}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
