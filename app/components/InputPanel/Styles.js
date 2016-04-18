define( [ 'jquery', 'GlobalStyles' ], function( $, GlobalStyles ) {
	return {
		button: {
			float: 'left',
			width: '25%',
			borderTopRightRadius: 5,
			borderBottomRightRadius: 5,
			lineHeight: '38px',
			height: 40,
			backgroundColor: 'rgb( 73, 159, 255 )',
			border: '1px solid rgb( 14, 23, 33 )',
			borderLeft: 0,
			boxShadow: 'inset 0 1px 0 rgb( 135, 200, 255 )',
			color: 'white',
			textShadow: '0px -1px 0px rgba( 0, 0, 0, .55 )',
			cursor: 'pointer'
		},
        textField: {
    		float: 'left',
    		width: '75%',
    		lineHeight: '40px',
    		height: 40,
    		backgroundColor: 'rgb( 24, 40, 58 )',
			border: '1px solid rgb( 14, 23, 33 )',
			borderRight: 0,
			borderTopLeftRadius: 5,
			borderBottomLeftRadius: 5,
			padding: '0 15px',
			color: GlobalStyles.mainFontColor
        },
        inputGroup: {
        	maxWidth: 480,
        	margin: '0 auto',
        	paddingBottom: 30
        },
        textArea: {
    		height: 100,
    		padding: 15,
    		width: '100%',
    		backgroundColor: 'rgb( 24, 40, 58 )',
			border: '1px solid rgb( 14, 23, 33 )',
			borderRadius: 5,
			color: GlobalStyles.mainFontColor,
			fontFamily: 'inherit',
			display: 'block',
			margin: '0 auto',
			maxWidth: 480
        }
	};
});