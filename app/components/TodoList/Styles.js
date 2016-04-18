define( [ 'jquery', 'GlobalStyles' ], function( $, GlobalStyles ) {
	return {
		noTodos: {
			color: GlobalStyles.mainFontColor
		},
		wrapper: {
			overflow: 'hidden'
		},
        list: {
        	listStyle: 'none',
			marginTop: -1
        }
	};
});