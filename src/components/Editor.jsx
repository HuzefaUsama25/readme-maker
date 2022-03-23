import {
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
	TextField,
	Typography,
} from '@material-ui/core';

import { ContactSupportOutlined } from '@material-ui/icons';
import { useEffect, useState } from 'react';

const Editor = (props) => {
	const [bannerTitle, setbannerTitle] = useState('WORKS');
	const [bannerFont, setbannerFont] = useState('sans-serif');
	const [bannerFontColor, setbannerFontColor] = useState('white');
	const [bannerCatchphrase, setbannerCatchphrase] = useState('make shit hapen');

	useEffect(() => {
		console.log(props);
		props.setBanner({
			title: bannerTitle,
			font: bannerFont,
			fontColor: bannerFontColor,
			catchphrase: bannerCatchphrase,
		});

		return () => {
			console.log('cleanup');
		};
	}, [bannerTitle, bannerFont, bannerFontColor, bannerCatchphrase]);

	return (
		<>
			<div className="form">
				<Typography variant="h4">🚩 Banner</Typography>
				<TextField
					htmlFor="banner-title"
					variant="outlined"
					label="Title"
					color="secondary"
					textColor="primary"
					value={bannerTitle}
					onChange={(e) => setbannerTitle(e.target.value)}
				/>
				<TextField
					htmlFor="banner-font"
					variant="outlined"
					label="Font"
					color="secondary"
					value={bannerFont}
					onChange={(e) => setbannerFont(e.target.value)}
				/>
				<TextField
					htmlFor="banner-fontColor"
					variant="outlined"
					label="Font Color"
					color="secondary"
					value={bannerFontColor}
					onChange={(e) => setbannerFontColor(e.target.value)}
				/>
				<TextField
					htmlFor="banner-catchphrase"
					variant="outlined"
					label="Catchphrase"
					color="secondary"
					value={bannerCatchphrase}
					onChange={(e) => setbannerCatchphrase(e.target.value)}
				/>
				<hr />
				<Typography variant="h4">📛 Badges</Typography>
			</div>
		</>
	);
};

export default Editor;
