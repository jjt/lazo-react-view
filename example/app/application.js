define(['lazoApp'], function (LazoApp) {

    'use strict';

    return LazoApp.extend({

        initialize: function (calllback) {
            calllback();
        }

    });

})