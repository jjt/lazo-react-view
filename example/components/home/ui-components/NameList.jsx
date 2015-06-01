define([
    'react'
], function (
    React
) {
    return React.createClass({
        defaultProps: function () {
            return {
                items: []
            };
        },

        componentWillMount: function () {
            console.log(this.props);
        },

        render: function () {
            var nameComponents = this.props.items.map(function (item) {
                var name = item.fname + " " + item.lname;
                return <div key={item.id}>{name}</div>;
            });
            return (
                <div>{nameComponents}</div>
            );
        }
    });

});
