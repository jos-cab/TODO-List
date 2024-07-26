export default function AddItem({ addItemToList }) {
	return (
		<>
			<div className="add-item input-group">
				<input
					className="form-control"
					type="text"
					name="new-item"
					id="new-item"
					autoComplete="off"
				/>
				<button className="btn btn-primary" onClick={addItemToList}>
					Add item
				</button>
			</div>
		</>
	);
}
