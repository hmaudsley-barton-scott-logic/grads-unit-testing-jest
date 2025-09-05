import { Profile, User } from './component';

describe('Profile', () => {
    let component: Profile;

    beforeEach(() => {
        component = new Profile();
    });

    it('should identify an admin as an admin', () => {
        const user: User = { name: 'Alice', isAdmin: true };
        component.user = user;
        expect(component.isAdmin).toEqual(true);
    });

    it('should identify a non-admin as not an admin', () => {
        const user: User = { name: 'Bob', isAdmin: false };
        component.user = user;
        expect(component.isAdmin).toEqual(false);
    });

    it('should throw an error if user is not set', () => {
        expect(() => component.isAdmin).toThrow('User not set');
    });
});
