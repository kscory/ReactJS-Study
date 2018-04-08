import React from 'react';
import renderer from 'react-test-renderer';
import NameList from './NameList';

describe('NameList', () => {
    let component = null;

    it('renders correctly', () => {
        component = renderer.create(<NameList names={['Kyung','Seok']}/>);
    });

    it('match correctly', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});