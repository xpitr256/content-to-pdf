/**
 * Created by pablo on 13/06/16.
 */


var chai = require("chai");
var should = require('chai').should();
var chaiAsPromised = require( 'chai-as-promised' );
chai.use(chaiAsPromised);

var contentToPDF = require('../client');

describe('# Convert a word document', function() {
    it('should eventually response true ', function() {
        contentToPDF.convert().should.eventually.equal(true);
    });
});