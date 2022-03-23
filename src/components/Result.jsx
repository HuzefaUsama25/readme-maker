import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SVGComponent from './SVGComponent';
import { marked } from 'marked';

const Result = (props) => {
	const [currentTab, setcurrentTab] = useState('preview');

	const [html, sethtml] = useState(marked.parse(props.allMarkdown));

	return (
		<>
			<>{() => html()}</>
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
						<div dangerouslySetInnerHTML={{ __html: html }} />
					</>
				) : (
					html
				)}
			</div>
		</>
	);
};

export default Result;
