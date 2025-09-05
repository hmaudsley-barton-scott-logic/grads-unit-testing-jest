import { Engine } from './component';

describe('Engine', () => {
    let component: Engine;

    beforeEach(() => {
        component = new Engine();
        jest.spyOn(console, 'log').mockImplementation(() => null);
    });

    it('should get stopped status at start', () => {
        expect(component.status).toEqual('stopped');
    });

    it('should start', () => {
        component.start();
        expect(component.status).toBe('started');
    });

    it('should stop', () => {
        component.start();
        component.stop();
        expect(component.status).toBe('stopped');
    });
});
