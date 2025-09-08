import { AccountService, UserPortal } from './component';

describe('UserPortal', () => {
    let component: UserPortal;
    let accountService: Partial<AccountService>;

    beforeEach(() => {
        const exampleUser = { id: 'foo', name: 'bar' };
        accountService = {
            get user() {
                return exampleUser;
            },
            doLogin: jest.fn(),
            doLogout: jest.fn()
        };
        component = new UserPortal(<AccountService>accountService);
    });

    it('should get user from our service', () => {
        const exampleUser = { id: 'foo', name: 'bar' };
        jest.spyOn(accountService, 'user', 'get').mockReturnValueOnce(exampleUser);
        expect(component.user).toEqual(exampleUser);
    });

    it('should call the account service on login', () => {
        component.login();
        expect(accountService.doLogin).toHaveBeenCalledWith('foo');
    });

    it('should call the account service on logout', () => {
        component.logout();
        expect(accountService.doLogout).toHaveBeenCalled();
    });
});

describe('AccountService', () => {
    let service: AccountService;

    beforeEach(() => {
        service = new AccountService();
    });

    it('should start with no user', () => {
        expect(service.user).toBeUndefined();
    });

    it('should set a user on login', () => {
        service.doLogin('foo');
        expect(service.user).toEqual(expect.objectContaining({ id: 'foo' }));
    });

    it('should remove the user on logout', () => {
        service.doLogin('foo');
        expect(service.user).toBeDefined();
        service.doLogout();
        expect(service.user).toBeUndefined();
    });

    it('should not throw if logging out when not logged in', () => {
        expect(() => service.doLogout()).not.toThrow();
    });
});
