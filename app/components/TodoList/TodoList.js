define( [ 'jquery', 'Component', 'Panel/Panel', 'TodoListItem/TodoListItem', './Styles' ],
	function( $, Component, Panel, TodoListItem, Styles ) {
		return Component.extend({
			render: function() {
				var props = this.getProps();
				return (
					new Panel({
						id: props.id + 'Panel__',
						title: 'To-do List',
						onClose: props.removeComponent.bind( null, props.index ),
						children: [
							$( '<div />', {
								css: Styles.wrapper
							}).append(
								props.todos.length == 0 ? 
									$( '<h2 />', {
										text: 'No to-dos yet.',
										css: Styles.noTodos
									})
								:
									$( '<ul />', {
										css: Styles.list
									}).append(
										props.todos.reverse().map( function( todo, index ) {
											return (
												new TodoListItem({
													id: 'TodoListItem-0' + ( todo.id ),
													todo: todo,
													index: index,
													removeTodo: props.removeTodo,
													completeTodo: props.completeTodo,
													resetTodo: props.resetTodo
												})
											);
										}.bind( this ))
									)
							)
						]
					})
				);
			}
		});
	}
);