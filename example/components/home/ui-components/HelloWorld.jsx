define([
    'react',
    'backbone-react-component',
    'jsx!./NameList'
], function (
    React,
    BackboneReactMixin,
    NameList
) {
    return React.createClass({
        mixins: [BackboneReactMixin],

        componentDidMount: function () {
            console.log(this.state);
        },

        addName: function () {
            var nameCollection = this.props.collection['collection-example'];
            nameCollection.add({
                fname: 'First',
                lname: 'Last',
                id: Math.random()
            });
        },

        removeName: function () {
            var nameCollection = this.props.collection['collection-example'];
            nameCollection.pop();
        },

        render: function () {
            return (
                <div>
                    <div style={{color: "blue", fontSize: "20px", cursor: "pointer"}}>
                        <a onClick={this.addName}>Add Name </a>
                        <a onClick={this.removeName}>Remove Name</a>
                    </div>
                    <NameList items={this.state['collection-example']}/>
                </div>
            );
        }
    });

});
