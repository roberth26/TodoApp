define( [ 'jquery', 'Component', 'DateFormatter', './Styles' ],
	function( $, Component, DateFormatter, Styles ) {
		return Component.extend({
			state: {
				isExpanded: false
			},
			handleChange: function() {
				var props = this.getProps();
				if ( props.todo.completed )
					props.resetTodo( props.index )
				else
					props.completeTodo( props.index )
			},
			handleExpand: function() {
				console.log( this.getState() );
				this.setState({
					isExpanded: !this.getState().isExpanded
				});
			},
			render: function() {
				var props = this.getProps();
				var state = this.getState();
				return (
					$( '<li />', {
						css: props.index % 2 == 0 ? {} : Styles.listItemAlt
					}).append(
						$( '<div />', {
							css: Styles.container
						}).append([
							$( '<input />', {
								type: 'checkbox',
								css: Styles.checkbox,
								checked: props.todo.completed
							}).change( this.handleChange ),
							$( '<span />', {
								text: props.todo.title,
								css: props.todo.completed ? Styles.titleCompleted : Styles.title
							}),
							$( '<button />', {
								css: Styles.infoBtn
							}).append(
								$( '<div />', {
									css: state.isExpanded ? Styles.arrowUp : Styles.arrowDown
								})
							).click( this.handleExpand ),
							$( '<button />', {
								html: '&times;',
								css: Styles.deleteBtn
							}).click( props.removeTodo.bind( null, props.index ) )
						])
					).append(
						state.isExpanded ?
							$( '<div />', {
								css: Styles.detailsContainer
							}).append(
								$( '<ul />', {
									css: Styles.metaList
								}).append([
									$( '<li />', {
										css: Styles.metaListItem,
										html: '<strong>Created:</strong> ' + DateFormatter.format( props.todo.startTime )
									}),
									$( '<li />', {
										css: Styles.metaListItem,
										html: '<strong>Completed:</strong> ' + ( props.todo.endTime != null ? DateFormatter.format( props.todo.endTime ) : 'In Progress' )
									})
								])
							).append(
								$( '<div />', {
									html: '<strong>Description:</strong> ' + props.todo.description,
									css: Styles.description
								})
							)
						: null
					)
				);
			}
		});
	}
);