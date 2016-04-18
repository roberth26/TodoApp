define( [ 'jquery', 'Component', 'Panel/Panel', 'Row/Row', 'DateFormatter', './Styles' ],
	function( $, Component, Panel, Row, DateFormatter, Styles ) {
		return Component.extend({
			render:	function() {
				var props = this.getProps();
				var count = props.todos.length;
				var completed = props.todos.filter( function( todo ) { return todo.completed; } ).length;
				var percentage = parseFloat( completed ) / parseFloat( count ) * 100;
				percentage = isNaN( percentage ) ? 0 : percentage;

				var mostRecent = props.todos.filter( function( todo ) {
					return todo.completed;
				}).sort( function( a, b ) {
					return b.endTime.getTime() - a.endTime.getTime();
				})[ 0 ];
			
				return (
					new Panel({
						title: 'Info',
						id: props.id + 'Panel__',
						onClose: props.removeComponent.bind( null, props.index ),
						children: [
							new Row({
								id: props.id + 'Panel__Row__',
								children: [
									$( '<div />', {
										'class': 'col_6'
									}).append(
										$( '<ul />', {
											css: Styles.list
										}).append(
											$( '<li />', {
												css: Styles.list_item,
												html: '<strong>Todos:</strong> ' + count
											})
										).append(
											$( '<li />', {
												css: Styles.list_item,
												html: '<strong>Completed:</strong> ' + completed
											})
										).append(
											$( '<li />', {
												css: Styles.list_item,
												html: '<strong>Progress:</strong> ' + percentage.toFixed( 2 ) + '%'
											})
										)
									),
									$( '<div />', {
										'class': 'col_6'
									}).append(
										$( '<ul />', {
											css: Styles.list
										}).append(
											$( '<li />', {
												css: Styles.list_item,
												html: '<strong>Recently Completed:</strong>'
											})
										).append(
											mostRecent ? $( '<li />', {
												css: Styles.list_item,
												html: mostRecent.title
											}) : null
										).append(
											mostRecent ? $( '<li />', {
												css: Styles.list_item,
												html: '<strong>Elapsed:</strong> ' + DateFormatter.difference( mostRecent.startTime, mostRecent.endTime )
											}) : null
										)
									)
								]
							})									
						]
					}) // end of panel
				);
			}
		});
	}
);