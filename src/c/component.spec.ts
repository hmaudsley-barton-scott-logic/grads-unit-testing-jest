import { SimpleBank } from './component';

describe('SimpleBank', () => {
    let component: SimpleBank;

    beforeEach(() => {
        component = new SimpleBank();
    });

    it('should get an accurate balance', () => {
        expect(component.balance).toEqual(0);
    });

    it('should deposit money correctly', () => {
        component.deposit(100);
        expect(component.balance).toEqual(100);
    });

    it('should withdraw money correctly', () => {
        component.withdraw(40);
        expect(component.balance).toEqual(-40);
    });

    it('should not allow deposits of zero or less', () => {
        expect(() => component.deposit(0)).toThrow();
        expect(() => component.deposit(-10)).toThrow();
    });

    it('should not allow withdrawals of zero or less', () => {
        expect(() => component.withdraw(0)).toThrow();
        expect(() => component.withdraw(-10)).toThrow();
    });
});
