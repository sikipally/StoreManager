import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const { expect } = chai;
chai.use(chaiHttp);

describe('Get Request to /products endpoint', () => {
  it('should return status 200 and an array of products', (done) => {
    chai.request(server)
      .get('/products')
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.property('products');
        expect(res.body).to.have.property('products').to.be.an('array');
        done();
      });
  });
});
