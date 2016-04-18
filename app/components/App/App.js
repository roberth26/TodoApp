define(
	[ 
		'jquery',
		'Component',
		'Row/Row',
		'Header/Header',
		'InputPanel/InputPanel',
		'TodoList/TodoList', 
		'InfoPanel/InfoPanel',
		'MacroPanel/MacroPanel',
		'./Styles'
	],
	function(
		$,
		Component,
		Row,
		Header,
		InputPanel,
		TodoList,
		InfoPanel,
		MacroPanel,
		Styles
	) {
		var savedTodos = JSON.parse( window.localStorage.getItem( 'Todos' ) );
		console.log( savedTodos );
		return Component.extend({
			state: {
				todos: savedTodos ? savedTodos : [],
				children: [
					InputPanel, // these are just constructors
					TodoList,
					InfoPanel
				],
				sidebarChildren: [
					MacroPanel,
					InfoPanel,
					TodoList
				]
			},
			saveState: function() {
				window.localStorage.setItem( 'Todos', JSON.stringify( this.getState().todos ) );
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
				this.saveState();
			},
			removeTodo: function( index ) {
				var todos = this.getState().todos;
				todos.splice( index, 1 );
				this.setState({
					todos: todos
				});
				this.saveState();
			},
			completeTodo: function( index ) {
				console.log( 'CompleteTodo()' );
				var todos = this.getState().todos;
				todos[ index ].completed = true;
				todos[ index ].endTime = new Date();
				this.setState({
					todos: todos
				});
				this.saveState();
			},
			resetTodo: function( index ) {
				var todos = this.getState().todos;
				todos[ index ].completed = false;
				todos[ index ].endTime = null;
				this.setState({
					todos: todos
				});
				this.saveState();
			},
			removeChild: function( childIndex ) {
				var children = this.getState().children;
				children.splice( childIndex, 1 );
				this.setState({
					children: children
				});
				this.saveState();
			},
			removeSidebarChild: function( childIndex ) {
				var children = this.getState().sidebarChildren;
				children.splice( childIndex, 1 );
				this.setState({
					sidebarChildren: children
				});
				this.saveState();
			},
			render: function() {
				var state = this.getState();
				var props = this.getProps();
				return (
					$( '<div />', {
						css: Styles.app
					}).append(
						new Header({
							id: 'Header-01__',
							text: 'Hello'
						})
					).append( 
						$( '<div />', {
							css: Styles.container
						}).append(
							new Row({
								id: props.id + 'App__Row__',
								children: [
									state.children.length ?
										$( '<div />', {
											'class': state.sidebarChildren.length ? 'col_9' : 'col'
										}).append(
											state.children.map( function( Child, index ) {
												return new Child({
													id: 'AppChild-0' + ( index + 1 ),
													index: index,
													todos: state.todos,
													createTodo: this.createTodo,
													removeTodo: this.removeTodo,
													completeTodo: this.completeTodo,
													resetTodo: this.resetTodo,
													removeComponent: this.removeChild
												});
											}.bind( this ))
										)
									:
										null,
									state.sidebarChildren.length ?
										$( '<div />', {
											'class': state.children.length ? 'col_3' : 'col'
										}).append(
											state.sidebarChildren.map( function( Child, index ) {
												return new Child({
													id: 'AppSidebarChild-0' + ( index + 1 ),
													index: index,
													todos: state.todos,
													createTodo: this.createTodo,
													removeTodo: this.removeTodo,
													completeTodo: this.completeTodo,
													resetTodo: this.resetTodo,
													removeComponent: this.removeSidebarChild
												});
											}.bind( this ))
										)
									: null
								]
							})
						)
					)
				);
			}
		});
	}
);