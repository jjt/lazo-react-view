define(['lazoSyncher'], function (LazoSyncher) {

    'use strict';

    return LazoSyncher.extend({

        fetch: function (options) {
            return options.success([
                { fname: 'Rick', lname: 'Sanchez', id: 0 },
                { fname: 'Jerry', lname: 'Smith', id: 1 }
            ]);
        }

    });

});
