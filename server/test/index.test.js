import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

const { expect } = chai;
chai.use(chaiHttp);

describe('Home route', () => {
  it('should return status 200 and a message', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        done();
      });
  });
});

describe('No matching routes', () => {
  it('should return status 404 and a message', (done) => {
    chai.request(server)
      .get('/dsddsdsds')
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        done();
      });
  });
});
