define( [ 'jquery', 'GlobalStyles' ],
	function( $, GlobalStyles ) {
		var button = {
			borderRadius: 5,
			display: 'block',
			width: '100%',
			lineHeight: '38px',
			height: 40,
			backgroundColor: 'rgb( 73, 159, 255 )',
			border: '1px solid rgb( 14, 23, 33 )',
			boxShadow: 'inset 0 1px 0 rgb( 135, 200, 255 )',
			color: 'white',
			textShadow: '0px -1px 0px rgba( 0, 0, 0, .55 )',
			cursor: 'pointer',
			marginBottom: 15
		};
		return {
			button: button,
			buttonLast: $.extend( {}, button, {
				marginBottom: 0
			})
		};
	}
);