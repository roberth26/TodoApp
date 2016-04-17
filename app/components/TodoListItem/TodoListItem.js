define( [ 'jquery', 'Component', './Styles' ],
	function( $, Component, Styles ) {
		return Component.extend({
			handleChange: function( props ) {
				if ( props.todo.completed )
					props.resetTodo( props.index )
				else
					props.completeTodo( props.index )
			},
			render: function() {
				var props = this.getProps();
				return (
					$( '<li />' ).append(
						$( '<div />', {
							css: Styles.container
						}).append([
							$( '<input />', {
								type: 'checkbox',
								css: Styles.checkbox,
								checked: props.todo.completed
							}).change( this.handleChange.bind( this, props ) ),
							$( '<span />', {
								text: props.todo.title,
								css: props.todo.completed ? Styles.titleCompleted : Styles.title
							}),
							$( '<button />', {
								text: 'remove Item',
								css: Styles.deleteBtn
							}).click( props.removeTodo.bind( null, props.index ) )
						])
					).append(

					)
				);
			}
		});
	}
);