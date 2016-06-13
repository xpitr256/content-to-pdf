/**
 * Created by pablo on 13/06/16.
 */


var Q = require('q');

var mimeTypes = [
    'application/vnd.oasis.opendocument.text'
];

var next = null;

function doConversion(contentType) {

    var deferred = Q.defer();

    console.log("[OpenOffice] converting "+contentType+" to PDF...");

    deferred.resolve({status: true});

    return deferred.promise;
}


module.exports = {

    convert: function(config) {

        var deferred = Q.defer();

        if (mimeTypes.indexOf(config.contentType) >= 0) {
            return doConversion(config.contentType);
        }

        if (next){

            next.convert(config)
                .then(function(response){
                    deferred.resolve(response);
                })
                .fail(function(error){
                    deferred.reject(error);
                });
        }else{
            deferred.reject(false);
        }

        return deferred.promise;
    },

    // set the stack that comes next in the chain
    setNextStack: function(stack) {
        next = stack;
    }
};