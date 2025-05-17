import { supertest } from 'supertest';
const request = supertest('https://gorest.co.in/public/')
const token = '527246668dcc146507572d9f41a43963bf066f080f8b7fea9c9b2b989d040d6b';

describe('API - users', () => {
    it('GET request test', async()=> {
    request.get(
      `v2/users?access-token=${token}`).end((err, res) => {
       expect(res.body.data).to.not.toBe.empty;
       expect(res.status).to.equal(200);
        });
    });

});