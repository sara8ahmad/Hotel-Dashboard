import supabase, { supabaseUrl } from "./supabase";

export async function login({email , password}){
    
let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  console.log(data)

  if(error){
    console.log(error)
    throw new Error("Invaild User Data")
}
  return data 
}


export async function signup({ fullName , email , password}){
    
  let { data, error } = await supabase.auth.signUp({
      email,
      password, options:{
        data : {
          fullName,
          avatar:''
        }
      }
    })
  
    console.log(data)
  
    if(error){
      console.log(error)
      throw new Error(error.message)
  }
    return data;  
  }

  export async function updateUsers({ fullName , password , avatar }){

    let updateData;

    if(password) updateData = {password}
    if(fullName) updateData = {data : {fullName}}
    
    let { data, error } = await supabase.auth.updateUser(updateData)

      if(error){
        throw new Error(error.message)
    }
    if(!avatar) return data; 
    
    const fileName = `avatar-${data.user.id}-${Math.random()}`;

    const { error: storageError } = await supabase.storage
      .from("avatars")
      .upload(fileName, avatar);
  
    if (storageError) throw new Error(storageError.message);


    let { data : updatedUser, error : error2 } = await supabase.auth.updateUser({
      
        data : {
          avatar:`${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`
        }
    })
  
    if(error2){
      throw new Error(error2.message)
  }
    return updatedUser;  
  }
  



export async function getCurrentUser(){
  const {data: session } = await supabase.auth.getSession();
  if(!session.session) return null;
  const{ data , error} = await supabase.auth.getUser();

  if(error){
    console.log(error)
    throw new Error("Invaild Login")
}

  return data?.user;
}

export async function logout(){
    
  let { error } = await supabase.auth.signOut();
  
    if(error){
      console.log(error)
      throw new Error(error.message)
  }
    
  }