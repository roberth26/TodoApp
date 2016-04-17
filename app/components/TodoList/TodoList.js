define( [ 'jquery', 'Component', 'Panel/Panel', 'TodoListItem/TodoListItem' ],
	function( $, Component, Panel, TodoListItem ) {
		return Component.extend({
			render: function() {
				var props = this.getProps();
				return (
					new Panel({
						id: props.id + 'Panel__',
						title: 'To-do List',
						onClose: props.removeChild.bind( null, props.index ),
						children: [
							$( '<ul />' )
							.append(
								props.todos.length == 0 ? 
									$( '<h2>No To-dos yet.</h2>' )
								:
									props.todos.map( function( todo, index ) {
										return (
											new TodoListItem({
												id: 'TodoListItem-0' + ( index + 1 ),
												todo: todo,
												index: index,
												removeTodo: props.removeTodo,
												completeTodo: props.completeTodo,
												resetTodo: props.resetTodo
											})
										);
									}.bind( this ))
							)
						]
					})
				);
			}
		});
	}
);