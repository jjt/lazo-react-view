define([
    'react',
    'jsx!./PersonItem'
], function (
    React,
    PersonItem
) {
    return React.createClass({
        defaultProps: function () {
            return {
                items: []
            };
        },

        render: function () {
            var personItems = this.props.items.map(function (item) {
                return (
                    <PersonItem
                        key={item.id}
                        removePerson={this.props.removePerson}
                        changePerson={this.props.changePerson}
                        {...item}
                    />
                )
            }, this);

            return (
                <div>{personItems}</div>
            );
        }
    });

});
