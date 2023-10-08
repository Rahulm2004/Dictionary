import { React, useState } from "react";
import Axios from "axios";
import "./dictionary.css";
import SearchIcon from '@mui/icons-material/Search';

function Dictionary() {
// Setting up the initial states using react hook 'useState'

const [data, setData] = useState("");
const [searchWord, setSearchWord] = useState("");

// Function to fetch information on button
// click, and set the data accordingly
function getMeaning() {
	Axios.get(
	`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
	).then((response) => {
	setData(response.data[0]);
	});
}

// Function to play and listen the
// phonetics of the searched word


return (
	<div className="App">
	<h1>BUDDHIANUVAD</h1>
	<div className="searchBox">
		<input
		type="text"
		placeholder="Search..."
		onChange={(e) => {
			setSearchWord(e.target.value);
		}}
		/>
		<button className="but"
		onClick={() => {
			getMeaning();
		}}
		>
		
        <SearchIcon size="20px" />
		</button>
	</div>
	{data && (
		<div className="showResults">
		<h2>
			{data.word}{" "}
		</h2>
		<div className="all">
		<h4>PARTS OF SPEECH:</h4>

		
<p className="ans">{data.meanings[0].partOfSpeech}</p>


		<h4>DEFINITION:</h4>

		
<p className="ans">{data.meanings[0].definitions[0].definition}</p>

</div>
		{/* <h4>Example:</h4>

		
<p className="ans">{data.meanings[0].definitions[0].example}</p> */}

		</div>
	)}
	</div>
);
}

export default Dictionary;
