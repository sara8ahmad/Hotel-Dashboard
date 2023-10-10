import supabase from "./supabase";

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