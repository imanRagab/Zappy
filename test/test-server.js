var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
chai.use(chaiHttp);

// test tweets api

describe('Tweets', function() {
    it('should list ALL tweets on /tweets GET', function(done) {
        chai.request(server)
          .get('/tweets')
          .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                done();
          });
      });
});

  