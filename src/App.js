import Directory from "./components/directory/directory.component";
import "./components/directory/directory.styles.scss";

const App = () => {
	const categories = [
		{id: "001", title: "Hats", imageUrl: "https://i.ibb.co/cvpntL1/hats.png"},
		{id: "002", title: "Jackets", imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"},
		{id: "003", title: "Sneakers", imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"},
		{id: "004", title: "Women", imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"},
		{id: "005", title: "Men", imageUrl: "https://i.ibb.co/R70vBrQ/men.png"},
	];
	return <Directory categories={categories} />;
};

export default App;
