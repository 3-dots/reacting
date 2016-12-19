import React from 'react';
import placeholder from './placeholder.jpg';

const Logo = ({img, filter, title, tagline}) => (
	<div>
		<img src={(img)? img : placeholder} className="App-logo" alt={ ( title ) ? title : ''} />
		<h1>{title}</h1>
		<h2>{tagline}</h2>
	</div>
	)

export default Logo;