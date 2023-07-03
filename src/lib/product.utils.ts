import { client } from "../../sanity/lib/client";

export const getProducts = async ( type: string) => {
    const groq = (type == "" || type === undefined)? 
        `*[_type=='product']`: 
        `*[_type=='product' && categorySet == '${type}']`
    console.log(groq)
    const data = await client.fetch(`${groq}{
        _id,
        name,
        price,
        image,
        type,
        description,
        materials
      } | order(_createdAt desc)`)
      return data;
}


export const getSearchProducts = async ( searchKeyword: string) => {
   
    const data = await client.fetch(`*[_type=='product' && name match '${searchKeyword}*']{
        _id,
        name,
        price,
        image,
        type,
        description,
        materials
      } | order(_createdAt desc)`)
      return data
}