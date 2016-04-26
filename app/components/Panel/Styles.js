define( [ 'jquery', 'GlobalStyles' ], function( $, GlobalStyles ) {
	var content = {
		padding: 30,
		backgroundColor: 'rgb( 30, 61, 97 )'
	};
	return {
		panel: {
			marginBottom: 30,
			borderRadius: 5,
			overflow: 'hidden',
			boxShadow: '0 2px 4px 1px rgba( 0, 0, 0, .15 )'
		},
		header: {
			backgroundColor: 'rgb( 73, 159, 255 )',
			height: 40,
			borderBottom: '1px solid rgb( 24, 40, 58 )',
			borderTop: '1px solid rgb( 135, 200, 255 )'
		},
		button: {
			float: 'right',
			cursor: 'pointer',
			backgroundColor: 'transparent',
			border: 0,
			borderLeft: '1px solid rgb( 13, 127, 255 )',
			boxShadow: 'inset 1px 0 0 rgb( 121, 178, 226 )',
			color: GlobalStyles.mainFontColor,
			textShadow: '0 1px 0 rgb( 135, 200, 255 )',
			height: '100%',
			width: '40px',
			lineHeight: '40px',
			color: 'rgb( 24, 40, 58 )',
			fontSize: '2.4rem',
			padding: '0 10px'
		},
		content: content,
		contentMinimized: $.extend( {}, content, {
			display: 'none'
		}),
		title: {
			color: 'white',
			fontSize: '1.8rem',
			fontWeight: 'bold',
			lineHeight: '40px',
			marginLeft: 15,
			height: 20,
			textShadow: '0px -1px 0px rgba( 0, 0, 0, .55 )',
		}
	};
});