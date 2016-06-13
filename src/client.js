/**
 * Created by pablo on 13/06/16.
 */

var Q = require('q');

var word = require('./converters/word.js');
var openOffice = require('./converters/openOffice.js');


module.exports = {

    convert: function(config){

        var deferred = Q.defer();

        // Chain of responsability pattern was applied
        word.setNextStack(openOffice);
        word.convert(config)
            .then(function(response){
                deferred.resolve(response);
            })
            .fail(function(error){
                deferred.reject(error);
            });

        return deferred.promise;
    }
};