
var h1 =  <h1>Hello, world!</h1>;
var dateTag = <HelloWorld date={new Date()}/>;
var HelloWorld= React.createClass({
    render:function(){
        return (
                <p>
                Hello <input type="text" placeholder="Your name here"/>!
                It is {this.props.date.toTimeString()}
                </p>
        );
    }
});

setInterval(function(){
        React.render(dateTag,document.getElementById('exmaple2'));
},500);

React.render(h1,document.getElementById('example'));

var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});


React.render(
  <LikeButton />,
  document.getElementById('example3')
);
var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic username={this.props.username} />
        <ProfileLink username={this.props.username} />
      </div>
    );
  }
});
var ProfilePic = React.createClass({
  render: function() {
    return (
      <img src={'https://graph.facebook.com/' + this.props.username + '/picture'} />
    );
  }
});
var ProfileLink = React.createClass({
  render: function() {
    return (
      <a href={'https://www.facebook.com/' + this.props.username}>
        {this.props.username}
      </a>
    );
  }
});


var FormInput = React.createClass({
    getInitialState :function(){
        return {value : 'LuizZz'};
    },
    handleChange:function(event){
        this.setState({value:event.target.value});
    },
    render: function() {
        var value =  this.state.value;
        return <input type="text" value={value} onChange={this.handleChange} />;
      }
});

React.render(
  <FormInput/>,
  document.getElementById('example5')
);
