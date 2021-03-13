import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
    console.log('check component', component.debug());
  });

  it('should render correct days number and title', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkTitleOnDay = (day, expectedTitle) => {
  it(`should show correct at ${day}`, () => {
    global.Date = mockDate(`${day}T00:00:00.000Z`);

    const component = shallow(<DaysToSummer />);
    const renderedTitle = component.find(select.title).text();
    expect(renderedTitle).toEqual(expectedTitle);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkTitleOnDay('2021-06-21', '');
  checkTitleOnDay('2021-08-08', '');
  checkTitleOnDay('2021-09-23', '');
});

describe('Component DaysToSummer with mocked Date', () => {
  checkTitleOnDay('2021-06-20', '1 day to summer!');
  checkTitleOnDay('2021-05-28', '24 days to summer!');
  checkTitleOnDay('2021-09-24', '270 days to summer!');
});
