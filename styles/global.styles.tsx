import { createGlobalStyle } from 'styled-components'

import * as palette from '@styles/variables'

export const GlobalStyle = createGlobalStyle`
	html {
		background-color: ${palette.COLOR_WHITE_BACKGROUND};
	}
	body {
		font-family: 'Roboto', sans-serif;
		padding: 20px 40px;
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}

	ul, ol, li, h1, h2, h3, h4, h5, h6, p, form, input, button {
		margin: 0;
		padding: 0;
`
