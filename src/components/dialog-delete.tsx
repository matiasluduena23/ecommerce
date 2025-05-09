import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export function DeleteProduct({ id }: { id: number }) {
	const [open, setOpen] = useState(false);

	const handleDelete = () => {
		fetch(`http://localhost:8081/ecommerce/v1/product/${id}`, {
			method: "DELETE",
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				console.log("Product deleted:", data);
				setOpen(false);
			})
			.catch((error) => {
				console.error("There was a problem with the fetch operation:", error);
			});
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="destructive">Delete</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Delete Product</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete this product? This action cannot be
						undone.
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<Button variant={"secondary"} onClick={() => setOpen(false)}>
						Cancel
					</Button>
					<Button variant={"destructive"} onClick={handleDelete}>
						Delete
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
