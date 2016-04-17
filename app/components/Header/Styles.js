define( [ 'GlobalStyles' ], function( GlobalStyles ) {
	return {
		header: {
			background: GlobalStyles.mainColor,
			borderBottom: '1px solid ' + GlobalStyles.mainColorBorder,
			height: 100,
			boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px'
		},
		title: {
			fontSize: 32,
			lineHeight: '1',
			color: 'white',
			textShadow: '0px -1px 0px rgba( 0, 0, 0, .4 )',
			padding: '20px 0 10px 0'
		},
		link: {
			color: 'white'
		},
		container: GlobalStyles.container
	};
});