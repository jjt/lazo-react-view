define([
    'react',
    'backbone-react-component',
    'jsx!./PersonList'
], function (
    React,
    BackboneReactMixin,
    PersonList
) {
    return React.createClass({
        mixins: [BackboneReactMixin],

        // Adds a person to the end of the list
        addPerson: function () {
            var nameCollection = this.props.collection['collection-example'];
            nameCollection.add({
                fname: 'First',
                lname: 'Last',
                id: Math.random()
            });
        },

        // Pops a person off the end of the list
        popPerson: function () {
            var nameCollection = this.props.collection['collection-example'];
            nameCollection.pop();
        },

        // Removes a name from the collection by id
        removePerson: function (id) {
            var nameCollection = this.props.collection['collection-example'];
            nameCollection.remove(id);
        },

        // Changes person name to random jibber jabber
        changePerson: function (id) {
            var nameCollection = this.props.collection['collection-example'];
            var person = nameCollection.findWhere({id: id});
            if (!person) return;
            person.set({'fname': Math.random(), 'lname': Math.random()});
        },

        render: function () {
            // Pass the names as props to a stateless child component
            // Also pass two methods to handle changing data from the component
            // We don't want to pass in the collection, because any child
            // components should be "dumb" and not know anything about the
            // data, so let's be explicit
            return (
                <div>
                    <div style={{color: "blue", fontSize: "20px", cursor: "pointer"}}>
                        <a onClick={this.addPerson}>Add Person </a>
                        <a onClick={this.popPerson}>Remove Person</a>
                    </div>
                    <PersonList
                        removePerson={this.removePerson}
                        changePerson={this.changePerson}
                        items={this.state['collection-example']}
                    />
                </div>
            );
        }
    });

});
