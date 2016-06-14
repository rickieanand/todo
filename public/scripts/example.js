  var TodoApp = React.createClass({
            getInitialState: function() {
                return {
                    items: []
                };
            },    
            render: function(){
                return ( 
                  <div> 
                    <TodoForm handleOnSubmit={this.handleOnSubmit} items_TodoApp={this.state.items} handleOnDelete={this.handleOnDelete}/> 
                  </div> 
                ); 
            },
            handleOnSubmit: function(item){
                //All logic to add to list will come here
                var newArray=item
                this.state.items.push(newArray)    
                this.setState(this.state.items);
                console.log(this.state.items);
            },

            handleOnDelete: function(_item){
                //All logic to add to list will come here
                // var newArray=item
                // this.state.items.push(newArray)    
                // this.setState(this.state.items);

                console.log("_item");
                
                console.log(_item);
                var index = this.state.items.indexOf(_item);
                  if(index != -1)
                  this.state.items.splice( index, 1 );
                  this.setState(this.state.items)

                console.log('End');
                console.log(this.state.items);
                console.log('done');
            }
  });

    /* [TODO FORM] */
var TodoForm = React.createClass({
            getInitialState: function() {
                return {
                    item: ""
                };
            },
            handleSubmit: function(e) {
                e.preventDefault()
                this.props.handleOnSubmit(this.state.item)
            },
            onChange: function(e) {
                this.setState({
                    item: e.target.value
                });
            },
            handleOnDelete: function(item){
                //All logic to add to list will come here
                // var newArray=item
                // this.state.items.push(newArray)    
                this.props.handleOnDelete(item)

            },
            render: function() {
                    return ( 
                      <div>
                        <form onSubmit = {this.handleSubmit} >
                          <input type = 'text' ref = 'item' onChange = {this.onChange} value = {this.state.item} /> 
                          <input type='submit' value='Add' />
                        </form> 
                        <TodoList items_TodoList = {this.props.items_TodoApp} handleOnDelete={this.handleOnDelete} /> 
                      </div>
                    ); 
                  } 
  });
 
    /* [TODO LIST] */
  var TodoList = React.createClass({
            handleOnDelete: function(item){
                //All logic to add to list will come here
                // var newArray=item
                // this.state.items.push(newArray)    
                this.props.handleOnDelete(item)

            },
            render: function() {
                // var createItem = function(itemText) {
                //     return ( <TodoListItem key={itemText} val={itemText}  handleOnDelete={this.handleOnDelete } /> ); 
                //   }; 
                return <ul>{this.props.items_TodoList.map(function(itemText) {
                    return ( <TodoListItem key={itemText} val={itemText}  handleOnDelete={this.handleOnDelete } /> ); 
                  }.bind(this))}</ul >;
                }
  });

    /* [TODO LISTITEM] */ 
  var TodoListItem = React.createClass({ 
            handleDelete: function(e){
              e.preventDefault()
              this.props.handleOnDelete(e.target.value)

            },
            render: function(){ 
              return (
                <li>{this.props.val} <button onClick={this.handleDelete} value={this.props.val} /></li> 
                ); 
            } 
  });


ReactDOM.render(
  <TodoApp />,
  document.getElementById('content')
);
