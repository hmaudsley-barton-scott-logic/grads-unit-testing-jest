import { mock } from 'node:test';
import { Car, Shop } from './component';

describe('Shop', () => {
    let component: Shop;

    beforeEach(() => {
        component = new Shop();
    });
    const mockCar = (): Car => <Car>{ make: 'foo', model: 'bar', year: 1999 };

    it('should add an order', () => {
        const car = mockCar();
        component.newOrder(car, 10000);
        expect(component.orders).toEqual([
            expect.objectContaining({ car: car, price: 10000 })
        ]);
    });
});
