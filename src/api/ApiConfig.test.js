import { API_CONFIG } from './ApiConfig';

describe('environment variables', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  // it('will not recieve process.env variables', () => {
  //   expect(API_CONFIG.baseUrl).toEqual('http://localhost:8080/api');
  // });

  // it('will recieve development process.env variable', () => {
  //   process.env.NODE_ENV = 'development';
  //   expect(API_CONFIG.baseUrl).toEqual('http://localhost:8080/api');
  // });

  it('will recieve production process.env variable', () => {
    process.env.NODE_ENV = 'production';
    expect(API_CONFIG.baseUrl).toEqual('https://totallyNotLocalhost/api');
  });

  it('will recieve test process.env variable', () => {
    process.env.NODE_ENV = 'test';
    expect(API_CONFIG.baseUrl).toEqual('https://totallyNotLocalhost/api');
  });
});