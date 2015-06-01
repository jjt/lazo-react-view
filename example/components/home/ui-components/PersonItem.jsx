define([
    'react'
], function (
    React
) {
    return React.createClass({
        render: function () {
            var name = this.props.fname + " " + this.props.lname;
            var style = {color: "blue", cursor: "pointer"};
            return (
                <div>
                    <a
                        style={style}
                        onClick={this.props.removePerson.bind(null, this.props.id)}
                    >
                        [delete]
                    </a>
                    <a
                        style={style}
                        onClick={this.props.changePerson.bind(null, this.props.id)}
                    >
                        [change]
                    </a>
                    {name}
                </div>
            );
        }
    });

});
