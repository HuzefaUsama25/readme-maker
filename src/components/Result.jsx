import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SVGComponent from './SVGComponent';

const Result = (props) => {
	const [currentTab, setcurrentTab] = useState('preview');

	return (
		<>
			<div className="result-menu beauty-box">
				<div
					className="result-preview-button button beauty-box"
					onClick={() => setcurrentTab('preview')}
				>
					Preview
				</div>
				<div
					className="result-raw-markdown-button button beauty-box"
					onClick={() => setcurrentTab('raw')}
				>
					Raw
				</div>
			</div>

			<div className="result">
				{currentTab == 'preview' ? (
					<>
						<SVGComponent
							title={props.bannerJson.title}
							font={props.bannerJson.font}
							fontColor={props.bannerJson.fontColor}
							catchphrase={props.bannerJson.catchphrase}
						/>
						<ReactMarkdown children={props.allMarkdown} />
					</>
				) : (
					props.allMarkdown
				)}
			</div>
		</>
	);
};

export default Result;
