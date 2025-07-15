import { createApi,fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection,getDocs,addDoc } from "firebase/firestore";
import { db } from "../../firebase";


export const apiSlice = createApi({

    reducerPath: 'api',
    tagTypes:["products"],
    baseQuery:fakeBaseQuery(),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            async queryFn(){
                try{
                   const productsCollectionRef =  collection(db, 'producsts');
                   const data = await getDocs(productsCollectionRef);
                   const filderedData = data.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                 }));
                 return {data : filderedData , error : null};

                // eslint-disable-next-line no-unused-vars
                }catch(error){
                    return {error : "Failed to fetch products from db"};
                }
            },
            providesTags: ["products "],
        }),
    


        addProduct : builder.mutation({
            queryFn: async(product) => {
                try{
                    await addDoc(collection(db,"producsts"),product)
                    return {data: product}
                }catch(error){
                    return {error}
                }
            },
            invalidatesTags: ["products"],
        })

    })



})

export const {useGetAllProductsQuery , useAddProductMutation} = apiSlice;