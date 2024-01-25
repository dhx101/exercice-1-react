import { data } from "./bd/bd";
import "./App.css";
import Header from "./Component/Header/Header";
import Promotion from "./Component/Promotion/Promotion";
import Heading from "./Component/Heading/Heading";
import Gallery from "./Component/Heading/Gallery/Gallery";
const { header, promotion, heading, gallery } = data;
function App() {
	return (
		<>
			<Header data={header}></Header>
			<Promotion data={promotion}></Promotion>
			<Heading data={heading}></Heading>
      <Gallery data={gallery}></Gallery>
		</>
	);
}

export default App;
