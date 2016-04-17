define( [ 'jquery' ], function( $ ) {
	var content = {
		padding: 15
	};
	return {
		panel: {
			border: '1px solid black',
		},
		header: {
			backgroundColor: 'rgb( 0, 120, 255 )'
		},
		button: {
			float: 'right'
		},
		content: content,
		contentMinimized: $.extend( {}, content, {
			display: 'none'
		}),
		title: {

		}
	};
});