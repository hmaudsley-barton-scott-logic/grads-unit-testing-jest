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

    it('should call toggle()', () => {
        component = new CustomColumnHeader();
        component.init(mockParams());
        component.toggle();
        expect(component.toggle()).toHaveBeenCalled;
    });
});
