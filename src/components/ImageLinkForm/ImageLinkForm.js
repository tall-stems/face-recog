import React from 'react';
import styles from './ImageLinkForm.module.css';

const ImageLinkForm = () => {
	return (
		<div className="flex flex-column">
			<p className="f3">
				Using Clarifai, this app will detect faces in your images.
			</p>
			<div className="flex justify-center">
				<div className={`pa4 br3 shadow-5 flex ${styles.form}`}>
					<input className="f4 pa2 w-70" type="text"/>
					<button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Find Faces</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
