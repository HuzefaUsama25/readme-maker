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

	const [repoName, setrepoName] = useState('Readme-maker');
	const [userName, setuserName] = useState('HuzefaUsama25');

	const [allMarkdown, setallMarkdown] = useState(`
# ✨${repoName}✨

<img src="banner.svg" alt="save the above banner image in the same folder as this README with the name of banner.svg" width="100%" style="display: block; margin: 0 auto" />

<br />

![](https://img.shields.io/github/forks/${userName}/${repoName}?style=for-the-badge) ![](https://img.shields.io/github/stars/${userName}/${repoName}?style=for-the-badge) ![](https://img.shields.io/github/license/${userName}/${repoName}?style=for-the-badge) ![](https://img.shields.io/github/issues/${userName}/${repoName}?style=for-the-badge) ![](https://img.shields.io/github/issues-pr/${userName}/${repoName}?style=for-the-badge) ![](https://img.shields.io/github/directory-file-count/${userName}/${repoName}?style=for-the-badge) ![](https://img.shields.io/github/languages/code-size/${userName}/${repoName}?style=for-the-badge) ![](https://img.shields.io/github/repo-size/${userName}/${repoName}?style=for-the-badge) ![](https://img.shields.io/tokei/lines/github/${userName}/${repoName}?label=Lines%20of%20Code&style=for-the-badge) ![](https://img.shields.io/github/languages/top/${userName}/${repoName}?style=for-the-badge) ![](https://img.shields.io/snyk/vulnerabilities/github/${userName}/${repoName}?style=for-the-badge)

<br />

##  📸 Screenshots

<img src="screenshot.png" alt="save a screenshot in the same folder as this README with the name of screenshot.png" width="100%" style="display: block; margin: 0 auto" />

<br />

## 🏢 Used By

> Google
> Netflix

<br />

## 📄 Documentation

> Does not exist!

<br />

## ⚙️ Installation

\`\`\`bash
# Clone this repository
git clone "https://www.github.com/${userName}/${repoName}"
\n
# Change Directory
cd ${repoName}
\n
# Run the app
npm start
\`\`\`

<br />

## 📙 Usage / Examples

<br />

## 🛣 Roadmap

<br />

## 🙋 Related Repositories

<br />

## ✍️ How to Contribute

<br />

## 🧐 FAQ

<br />

## 👨‍💻 Authors

![GitHub Contributors Image](https://contrib.rocks/image?repo=${userName}/${repoName})

<br />

## ✨ Feedback (How to give feedback about the project)

<br />

## ✊ Support this project

<br />

## 📄 License

<br />

## 📊 Project status

<br />

## 😏 A Bad joke!

<img src="https://readme-jokes.vercel.app/api?bgColor=white&textColor=%2306d6a0&aColor=%2306d6a0&hideBorder" />
`);

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
