/**
 * Created by pablo on 13/06/16.
 */

var Q = require('q');

module.exports = {

    convert: function(){

        var deferred = Q.defer();

        deferred.resolve(true);

        return deferred.promise;
    }
};