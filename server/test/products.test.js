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

describe('Post Request to /products endpoint', () => {
  it('should return status 201 and the product that was created', (done) => {
    chai.request(server)
      .post('/products')
      .send({
        name: 'Tecno Camon Cx',
        category: 'Tecno',
        price: 60000,
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(201);
        expect(res.body).to.have.property('product');
        expect(res.body).to.have.property('product').to.be.an('object');
        expect(res.body.product).to.have.property('id');
        expect(res.body.product).to.have.property('price').to.equal(60000);
        done();
      });
  });

  it('should return status 404 if no product with the given Id is found', (done) => {
    chai.request(server)
      .post('/products')
      .send({
        name: 'Tecno Camon Cx',
        category: 'Tecno',
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        expect(res.body.status).to.be.equal('error');
        done();
      });
  });
});
