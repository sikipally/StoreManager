import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

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

describe('Get Request to /products/:productId endpoint', () => {
  it('should return status 200 and the product with the given Id', (done) => {
    chai.request(server)
      .get('/products/234B52')
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.property('product');
        expect(res.body).to.have.property('product').to.be.an('object');
        done();
      });
  });

  it('should return status 404 if no product with the given Id is found', (done) => {
    chai.request(server)
      .get('/products/tfd')
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        done();
      });
  });
});
