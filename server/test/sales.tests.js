import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const { expect } = chai;
chai.use(chaiHttp);

describe('Get Request to /sales endpoint', () => {
  it('should return status 200 and an array of sales', (done) => {
    chai.request(server)
      .get('/sales')
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.property('salesRecord');
        expect(res.body).to.have.property('salesRecord').to.be.an('array');
        done();
      });
  });
});

describe('Get Request to /sales/:salesId endpoint', () => {
  it('should return status 200 and the sale with the given Id', (done) => {
    chai.request(server)
      .get('/sales/2')
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.have.property('sale');
        expect(res.body).to.have.property('sale').to.be.an('object');
        done();
      });
  });

  it('should return status 404 if no sale with the given Id is found', (done) => {
    chai.request(server)
      .get('/sales/tfd')
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        done();
      });
  });
});

describe('Post Request to /sales endpoint', () => {
  it('should return status 201 and the created sales record', (done) => {
    chai.request(server)
      .post('/sales')
      .send({
        products: [
          '234B52',
          '234B63',
          '234B82',
        ],
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(201);
        expect(res.body).to.have.property('sales');
        expect(res.body).to.have.property('sales').to.be.an('object');
        done();
      });
  });

  it('should return status 400 if the product field is not an array', (done) => {
    chai.request(server)
      .post('/sales')
      .send({
        products: '234B12',
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        done();
      });
  });
});
