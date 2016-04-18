define( [ 'jquery', 'GlobalStyles' ], function( $, GlobalStyles ) {
	var title = {
		color: GlobalStyles.mainFontColor
	};
	return {
		container: {

		},
        listItem: {
        	padding: '8px 0',
        	borderTop: '1px solid rgb( 48, 91, 140 )',
            color: GlobalStyles.mainFontColor
        },
		checkbox: {

		},
		title: title,
		titleCompleted: $.extend( {}, title, {
			textDecoration: 'line-through'
		}),
		deleteBtn: {

		}
	};
});