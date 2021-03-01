import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const expectedId = 'abc';
    const expectedSrc = 'image.jpg';
    const component = shallow(<TripSummary id={expectedId} tags={['']} image={expectedSrc}
    />);

    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual('/trip/' + expectedId);
  });

  it('should render correct src and alt', () => {
    const expectedId = 'abc';
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'trip';
    const component = shallow(<TripSummary id={expectedId} image={expectedSrc} name={expectedAlt} tags={['']} />);

    const renderedSrc = component.find('img').prop('src');
    const renderedAlt = component.find('img').prop('alt');

    expect(renderedSrc).toEqual(expectedSrc);
    expect(renderedAlt).toEqual(expectedAlt);
  });

  it('should render name, cost and days correctly', () => {
    const expectedName = 'trip';
    const expectedCost = '100';
    const expectedDays = 2;
    const expectedId = 'abc';
    const expectedSrc = 'image.jpg';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} id={expectedId} tags={['']} image={expectedSrc} />);

    const renderedName = component.find('.title').text();
    const renderedCost = component.find('span').at(1).text();
    const renderedDays = component.find('span').at(0).text();

    expect(renderedName).toEqual(expectedName);
    expect(renderedCost).toEqual('from' + expectedCost);
    expect(renderedDays).toEqual(expectedDays + 'days');
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags', () => {
    const expectedSrc = 'image.jpg';

    const component = shallow(<TripSummary tags={['firstTag', 'secondTag', 'thirdTag']} image={expectedSrc} />);

    expect(component.find('.tag').at(0).text()).toEqual('firstTag');
    expect(component.find('.tag').at(1).text()).toEqual('secondTag');
    expect(component.find('.tag').at(2).text()).toEqual('thirdTag');
  });

  it('should not render tags when array is empty or tags is false', () => {
    const expectedSrc = 'image.jpg';

    const component = shallow(<TripSummary tags={[]} image={expectedSrc} />);

    expect(component.find('tags')).toMatchObject({});
  });

});

