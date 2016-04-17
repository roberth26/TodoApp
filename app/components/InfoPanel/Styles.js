define( [ 'GlobalStyles' ], function( GlobalStyles ) {
	return {
		title: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: 15
        },
        list: {
        	listStyle: 'none'
        },
        list_item: {
        	padding: '8px 0',
        	borderBottom: '1px solid lightgrey',
            color: GlobalStyles.mainFontColor
        }
	};
});