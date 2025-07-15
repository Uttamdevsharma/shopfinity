import { useState } from "react";
import { useAddProductMutation } from "../features/api/apiSlice";


const AddProductForm = () => {

    const [product,setProduct] = useState({
        title:"",
        description:"",
        price:"",
        image:""
    })

	const [addProduct] = useAddProductMutation();


    const handleChange = (e) => {
		setProduct({...product , [e.target.name]:
			 e.target.name === "price" ?
			  Number(e.target.value) : e.target.value});  
    }

	const submitHandler = async(e) => {
		e.preventDefault();
		await addProduct(product);
	}

	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "center",
				}}
				onSubmit={submitHandler}
			>
				<p>Title:</p>
				<input
					value={product.title}
					onChange={handleChange}
					name="title"
					style={{ display: "block", width: "80%" }}
					required
				/>
				<br />
				<p>Price:</p>

				<input
					value={product.price}
					onChange={handleChange}
					name="price"
					style={{ display: "block", width: "80%" }}
					type="number"
					required
				/>
				<br />

				<p>Description:</p>
				<input
					value={product.description}
					onChange={handleChange}
					name="description"
					style={{ display: "block", width: "80%" }}
					type="text"
					required
				/>
				<br />
				<p>Image URL:</p>

				<input
					onChange={handleChange}
					value={product.image}
					name="image"
					style={{ display: "block", width: "80%" }}
					type="text"
					required
				/>
				<br />
				<input type="submit" />
			</form>
		</>
	);
};

export default AddProductForm;