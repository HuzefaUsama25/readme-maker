import Navbar from './components/Navbar';
import Editor from './components/Editor';
import Result from './components/Result';
import { useState } from 'react';

const App = () => {
	const [bannerJson, setbannerJson] = useState({
		title: 'WORKS MAKER',
		font: 'sans-lol',
		fontColor: 'white',
		catchphrase: 'aurtomate the process of making readmes!',
	});

	const [allMarkdown, setallMarkdown] = useState('');

	return (
		<div className="App beauty-box">
			<Navbar />

			<section className="builder beauty-box">
				<section className="Work beauty-box">
					<Editor setBanner={setbannerJson} />
				</section>

				<section className="Result beauty-box">
					<Result bannerJson={bannerJson} allMarkdown={allMarkdown} />
				</section>
			</section>
		</div>
	);
};

export default App;
