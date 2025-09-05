import { Calculator } from './component';

describe('Calculator', () => {
    let component: Calculator;

    beforeEach(() => {
        component = new Calculator();
    });

    it('should add two numbers correctly', () => {
        expect(component.add(2, 3)).toBe(5);
    });

    it('should subtract two numbers correctly', () => {
        expect(component.subtract(5, 3)).toBe(2);
    });

    it('should sum an array of numbers correctly', () => {
        expect(component.sum([1, 2, 3, 4])).toBe(10);
    });
});
