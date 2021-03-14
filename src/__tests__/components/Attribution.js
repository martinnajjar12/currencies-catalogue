import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Attribution from '../../components/Attribution';

describe('Attribution component', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Attribution />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a link that its href attribute value is https://nomics.com', () => {
    const wrapper = shallow(<Attribution />);
    const link = wrapper.find('.makeStyles-subtitle1-2');
    expect(link.html()).toEqual('<a class="MuiTypography-root MuiLink-root MuiLink-underlineHover makeStyles-subtitle1-2 MuiTypography-colorPrimary" target="_blank" href="https://nomics.com">CRYPTO MARKET CAP &amp; PRICING DATA PROVIDED BY NOMICS</a>');
  });
});
