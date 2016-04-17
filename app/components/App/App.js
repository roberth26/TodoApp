define( [ 'jquery', 'Component', 'Header/Header', 'InputPanel/InputPanel', 'TodoList/TodoList', 'InfoPanel/InfoPanel' ],
	function( $, Component, Header, InputPanel, TodoList, InfoPanel ) {
		return Component.extend({
			state: {
				todos: [],
				children: [
					InputPanel, // these are just constructors
					TodoList,
					InfoPanel
				]
			},
			createTodo: function( todoTitle, todoDescription ) {
				var todos = this.getState().todos;
				todos.unshift({
					title: todoTitle,
					description: todoDescription,
					completed: false,
					startTime: new Date(),
					endTime: null
				});
				this.setState({
					todos: todos
				});
			},
			removeTodo: function( index ) {
				var todos = this.getState().todos;
				todos.splice( index, 1 );
				this.setState({
					todos: todos
				});
			},
			completeTodo: function( index ) {
				console.log( 'CompleteTodo()' );
				var todos = this.getState().todos;
				todos[ index ].completed = true;
				todos[ index ].endTime = new Date();
				this.setState({
					todos: todos
				});
			},
			resetTodo: function( index ) {
				var todos = this.getState().todos;
				todos[ index ].completed = false;
				todos[ index ].endTime = null;
				this.setState({
					todos: todos
				});
			},
			removeChild: function( childIndex ) {
				var children = this.getState().children;
				children.splice( childIndex, 1 );
				this.setState({
					children: children
				});
			},
			render: function() {
				return (
					$( '<div />' ).append(
						new Header({
							id: 'Header-01__',
							text: 'Hello'
						})
					).append(
						this.getState().children.map( function( Child, index ) {
							return new Child({
								id: 'AppChild-0' + ( index + 1 ),
								index: index,
								todos: this.getState().todos,
								createTodo: this.createTodo,
								removeTodo: this.removeTodo,
								completeTodo: this.completeTodo,
								resetTodo: this.resetTodo,
								removeChild: this.removeChild
							});
						}.bind( this ))
					)
				);
			}
		});
	}
);