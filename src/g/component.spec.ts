import { ColumnHeaderParams, CustomColumnHeader } from './component';

describe('CustomColumnHeader', () => {
    let component: CustomColumnHeader;

    const mockParams = (): ColumnHeaderParams =>
        <ColumnHeaderParams>{
            headerName: 'foo',
            api: {
                isExpandable: () => true,
                isExpanded: () => true,
                setExpanded: (expanded: boolean) => expanded
            }
        };

    it('should get header name', () => {
        component = new CustomColumnHeader();
        component.init(mockParams());
        expect(component.displayName).toEqual('foo');
    });

    it('display name should return undefined if no params', () => {
        component = new CustomColumnHeader();
        expect(component.displayName).toEqual(undefined);
    });

    it('isExpanded should return false if no params', () => {
        component = new CustomColumnHeader();
        expect(component.isExpanded).toEqual(false);
    });

    it('should call toggle()', () => {
        component = new CustomColumnHeader();
        component.init(mockParams());
        component.toggle();
        expect(component.toggle()).toHaveBeenCalled;
    });

    it('toggle should return undefined if no params set', () => {
        component = new CustomColumnHeader();
        expect(component.toggle()).toEqual(undefined);
    });
});
