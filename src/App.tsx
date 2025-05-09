import { useEffect, useState } from "react";

import "./App.css";
import { type Product } from "./lib/schemas";
import { data } from "./lib/data";
import { CardProduct } from "./components/card-product";
import { CreateProduct } from "./components/dialog-create";

function App() {
	const [products, setProducts] = useState<Product[]>(data);

	useEffect(() => {
		// Uncomment the following lines to fetch data from the API
		// fetch("http://localhost:8081/ecommerce/v1/product")
		// 	.then((response) => {
		// 		if (!response.ok) {
		// 			throw new Error("Network response was not ok");
		// 		}
		// 		return response.json();
		// 	})
		// 	.then((data) => setProducts(data))
		// 	.catch((error) => {
		// 		console.error("There was a problem with the fetch operation:", error);
		// 	});
	}, []);

	return (
		<main className="container mx-auto flex min-h-screen flex-col items-center justify-between p-4">
			<h1 className="my-10 text-4xl">Ecommerce</h1>
			<div className="mb-4 ">
				<CreateProduct />
			</div>
			<section className="flex flex-wrap gap-4 justify-center">
				{products.map((product) => (
					<CardProduct key={product.id} product={product} />
				))}
			</section>
		</main>
	);
}

export default App;
