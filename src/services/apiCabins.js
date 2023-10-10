import supabase, { supabaseUrl } from "./supabase";

export async function getCabins(){
    
const { data , error } = await supabase
.from('Cabins')
.select('*')

if(error){
    console.log(error)
    throw new Error("Cabins can not be loaded")
}
return data;
}


export async function createCabins(newCabin){

 // https://dccsafxeahvqcednghox.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg


   /* const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/' , "")
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`*/

   const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

    const imageName = `${newCabin.image.name}`.replaceAll( "/", ""  );
    const imagePath = hasImagePath
      ? newCabin.image
      : `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;
    
const { data, error } = await supabase
     .from('Cabins')
     .insert([{...newCabin , image : imagePath}])
     .select()
    
    if(error){
        console.log(error)
        throw new Error("Cabins can not be loaded")
    }

    // If there is error during uploading cabin image delete the cabin
/*
const { error: storageError } = await supabase
  .storage
  .from('cabins-images')
  .upload(imageName, newCabin.image)

  if (storageError) {
    await supabase.from("Cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }
*/

    return data;

    }


export async function deleteCabin(id){    
const { error } = await supabase
.from('Cabins')
.delete()
.eq('id' , id)

if(error){
    console.log(error)
    throw new Error("Cabins can not be loaded")
}


}