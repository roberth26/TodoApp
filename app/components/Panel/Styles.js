define( [ 'jquery', 'GlobalStyles' ], function( $, GlobalStyles ) {
	var content = {
		padding: 30,
		backgroundColor: 'rgb( 30, 61, 97 )'
	};
	var button = {
		position: 'absolute',
		top: 0,
		right: 0,
		cursor: 'pointer',
		backgroundColor: 'transparent',
		border: 0,
		borderLeft: '1px solid rgb( 24, 40, 58 )',
		boxShadow: 'inset 1px 0 0 rgb( 135, 200, 255 )',
		color: GlobalStyles.mainFontColor,
		textShadow: '0 1px 0 rgb( 135, 200, 255 )',
		height: '100%',
		width: '40px',
		lineHeight: '40px',
		color: 'rgb( 24, 40, 58 )',
		fontSize: '2.4rem',
		padding: '0 10px'
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
			padding: '10px 0 10px 10px',
			height: 40,
			borderBottom: '1px solid rgb( 24, 40, 58 )',
			borderTop: '1px solid rgb( 135, 200, 255 )',
			position: 'relative'
		},
		minimizeBtn: $.extend( {}, button, {
			right: 40
		}),
		closeBtn: $.extend( {}, button, {
			//borderTopRightRadius: 5,
			//borderBottomRightRadius: 5,
			//borderLeft: 0
		}),
		content: content,
		contentMinimized: $.extend( {}, content, {
			display: 'none'
		}),
		title: {
			color: 'white',
			fontSize: '1.8rem',
			fontWeight: 'bold',
			lineHeight: '20px',
			height: 20,
			textShadow: '0px -1px 0px rgba( 0, 0, 0, .55 )',
		}
	};
});