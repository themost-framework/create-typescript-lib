import { Service } from '../src/index';

describe('Service', () => {
    it('should create instance', () => {
        const service = new Service();
        expect(service).toBeInstanceOf(Service);
    });
});