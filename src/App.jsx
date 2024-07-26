import { useState } from "react";
import AddItem from "./components/AddItem";
import "./App.css";

function Title() {
	return (
		<>
			<thead>
				<tr>
					<td>To do</td>
					<td>Completed</td>
					<td>Delete</td>
				</tr>
			</thead>
		</>
	);
}

function App() {
	const [itemList, setItemList] = useState([]);

	const deleteItem = (i) => setItemList(itemList.filter((_, j) => j !== i));

	const toggleCompleted = (i) => {
		const completed = document.getElementById(i).style.textDecoration;
		document.getElementById(i).style.textDecoration =
			completed === "line-through" ? "none" : "line-through";
	};

	const itemListComponents = itemList.map((item, i) => (
		<tr key={i}>
			<td>
				<span id={i}>{item}</span>
			</td>
			<td>
				<input
					type={"checkbox"}
					name={"completed"}
					id={"toggle " + i}
					onClick={() => toggleCompleted(i)}
				/>
			</td>
			<td>
				<button className="btn btn-danger" onClick={() => deleteItem(i)}>
					<i className="bi bi-trash"></i>
				</button>
			</td>
		</tr>
	));

	let title;

	if (itemListComponents.length != 0) {
		title = <Title />;
	}

	function addItemToList() {
		let newItem = document.getElementById("new-item").value;

		if (newItem && !itemList.includes(newItem)) {
			setItemList([...itemList, newItem]);
		}
	}

	return (
		<>
			<main>
				<AddItem addItemToList={addItemToList} />
				<table className="item-list">
					{title}
					<tbody>{itemListComponents}</tbody>
				</table>
			</main>
		</>
	);
}

export default App;
