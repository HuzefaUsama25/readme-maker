import ReactDOMServer from 'react-dom/server';

const SVGComponent = (props) => {
	const css = `
    * {
        padding: 0;
        margin: 0;
        color: ${props.fontColor};
        font-family: ${props.font}, monospace, sans-serif ;
    }

    .banner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-image: linear-gradient(45deg, #BE43DD, #FF37AF, #FF5F80, #FF965C, #FFCA52, #F9F871);
        background-size: 600%;
        background-position: left;
        animation: move-bg 10s infinite alternate;
    }

    .main-title {
        font-size: 5em;
        font-weight: 900;

    }

    .catchphrase {
        font-size: 1.25em;
        letter-spacing: 0em;

    }

    @keyframes move-bg {
        100% {
            background-position: right;
        }
    }
    `;

	const svg = (
		<svg width="830" height="335" xmlns="http://www.w3.org/2000/svg">
			<foreignObject width="830" height="335">
				<style>{css}</style>

				<div class="banner" xmlns="http://www.w3.org/1999/xhtml">
					<text className="main-title">{props.title}</text>
					<text className="catchphrase">{props.catchphrase}</text>
				</div>
			</foreignObject>
		</svg>
	);
	const encodeSvg = (reactElement) => {
		return 'data:image/svg+xml,' + escape(ReactDOMServer.renderToStaticMarkup(reactElement));
	};

	return <img src={encodeSvg(svg)} />;
};

export default SVGComponent;
