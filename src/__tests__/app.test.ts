import request from 'supertest';
import app from '../lib/app';

describe('app tests', () => {
  it('responds to a request', async () => {
    const response = await request(app).get('/');
    expect(response).toBeTruthy();
  });

  it('responds to a request for an unimplemented endpoint with a 404 error', async () => {
    const response = await request(app).get(
      '/this-is-an-endpoint-that-is-not-used'
    );
    expect(response.status).toBe(404);
  });
});

describe('basic checks', () => {
  it('responds with an error', async () => {
    const response = await request(app).get('/health-check/error');
    expect(response.status).toBe(500);
    expect(response.error).toEqual(expect.any(Error));
  });

  it('responds to a post request', async () => {
    const response = await request(app).post('/health-check');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('POST');
  });

  it('responds to a get request', async () => {
    const response = await request(app).get('/health-check');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('GET');
  });

  it('responds to a patch request', async () => {
    const response = await request(app).patch('/health-check');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('PATCH');
  });

  it('responds to a put request', async () => {
    const response = await request(app).put('/health-check');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('PUT');
  });

  it('responds to a delete request', async () => {
    const response = await request(app).delete('/health-check');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('DELETE');
  });
});
