import "./categories.styles.scss";

const App = () => {
	const categories = [
		{id: "001", title: "Hats"},
		{id: "002", title: "Jackets"},
		{id: "003", title: "Sneakers"},
		{id: "004", title: "Women"},
		{id: "005", title: "Men"},
	];
	return (
		<div className="categories-container">
			{categories.map(category => {
				return (
					<div key={category.id} className="category-container">
						{/*<img src="" alt="" />*/}
						<div className="category-body-container">
							<h2>{category.title}</h2>
							<p>Shop Now</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default App;
