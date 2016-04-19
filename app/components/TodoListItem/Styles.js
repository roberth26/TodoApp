define( [ 'jquery', 'GlobalStyles' ], function( $, GlobalStyles ) {
	var title = {
		color: GlobalStyles.mainFontColor
	};
	var button = {
		width: 24,
		height: 24,
		borderRadius: 5,
		lineHeight: '22px',
		fontSize: '16px',
		textAlign: 'center',
		backgroundColor: 'rgb( 73, 159, 255 )',
		border: '1px solid rgb( 14, 23, 33 )',
		boxShadow: 'inset 0 1px 0 rgb( 135, 200, 255 )',
		color: 'white',
		textShadow: '0px -1px 0px rgba( 0, 0, 0, .55 )',
		cursor: 'pointer'
	};
	return {
		listItemAlt: {
			backgroundColor: 'rgb( 25, 52, 82 )'
		},
        container: {
        	position: 'relative',
        	padding: '8px 0 8px 10px',
        	borderTop: '1px solid rgb( 48, 91, 140 )',
            color: GlobalStyles.mainFontColor
        },
		checkbox: {
			display: 'inline-block',
			width: 16,
			height: 16,
   			border: 0,
    		margin: '0 10px 0 0',
    		verticalAlign: 'middle',
		},
		title: title,
		titleCompleted: $.extend( {}, title, {
			textDecoration: 'line-through'
		}),
		deleteBtn: $.extend( {}, button, {
			position: 'absolute',
			top: 5,
			right: 10
		}),
		infoBtn: $.extend( {}, button, {
			position: 'absolute',
			top: 5,
			right: 40
		}),
		arrowDown: {
			width: 0,
			height: 0, 
			borderLeft: '5px solid transparent',
			borderRight: '5px solid transparent',
			borderTop: '5px solid white',
			boxShadow: '0px -1px 0px rgba( 0, 0, 0, .3 )',
		},
		arrowUp: {
			width: 0,
			height: 0, 
			borderLeft: '5px solid transparent',
			borderRight: '5px solid transparent',
			borderBottom: '5px solid white'
		},
		detailsContainer: {
			padding: 10,
			borderTop: '1px solid rgb( 39, 73, 112 )',
			color: GlobalStyles.mainFontColor
		},
        metaList: {
            listStyle: 'none',
            marginBottom: 5,
            paddingTop: 5
        },
        metaListItem: {
            padding: '5px 0'
        },
        description: {
            marginBottom: 10
        }
	};
});