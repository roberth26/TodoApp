define( function ( require ) {
    var $            = require( 'jquery' );
    var Component    = require( 'Component' );
    var Panel        = require( 'Panel/Panel' );
    var TodoListItem = require( 'TodoListItem/TodoListItem' );
    var Styles       = require( './Styles' );

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
									props.todos.map( function( todo, index ) {
										return (
											new TodoListItem({
												id: props.id + 'Panel__TodoListItem-0' + ( index + 1 ) + '__',
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
});