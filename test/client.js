/**
 * Created by pablo on 13/06/16.
 */


var chai = require("chai");
var should = require('chai').should();
var chaiAsPromised = require( 'chai-as-promised' );
chai.use(chaiAsPromised);

var contentToPDF = require('../src/client');

var validOpenOfficeConfig = {
    contentType: "application/vnd.oasis.opendocument.text"
};

var validWordConfig = {
    contentType: "application/msword"
};

var invalidConfig = {
    contentType: "invalid"
};

var twoValuesConfig = {
    contentType: [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ]
};

var emptyConfig = {};

describe('#Converting a document', function() {

    this.timeout(0);

    it('should response status = true for Word', function(done) {
        contentToPDF.convert(validWordConfig).should.eventually.have.property("status").be.true.and.notify(done);
    });

    it('should response status = true for OpenOffice', function(done) {
        contentToPDF.convert(validOpenOfficeConfig).should.eventually.have.property("status").be.true.and.notify(done);
    });

    it('should be rejected for invalid contenType', function(done) {
        contentToPDF.convert(invalidConfig).should.be.rejected.and.notify(done);
    });

    it('should be rejected for malformed config', function(done) {
        contentToPDF.convert(twoValuesConfig).should.be.rejected.and.notify(done);
    });

    it('should be rejected for empty contenType', function(done) {
        contentToPDF.convert(emptyConfig).should.be.rejected.and.notify(done);
    });
});