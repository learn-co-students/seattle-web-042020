import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Pet from '../src/components/Pet';

Enzyme.configure({ adapter: new Adapter() });

const MALE_DOG = {
  id: '9e7cc723-d7f5-440d-8ead-c311e68014ee',
  type: 'dog',
  gender: 'male',
  age: 8,
  weight: 6,
  name: 'Kennedy',
  isAdopted: false,
};

const FEMALE_CAT = {
  id: '86520b4b-7849-4462-b511-cddc7f416ad6',
  type: 'cat',
  gender: 'female',
  age: 7,
  weight: 6,
  name: 'Cuddles',
  isAdopted: false,
};

const GENDER_ICON_MALE = '♂';
const GENDER_ICON_FEMALE = '♀';

describe('<Pet />', () => {
  describe('Rendering props', () => {
    it('should render the name', () => {
      const wrapper = shallow(<Pet pet={MALE_DOG} />);
      expect(wrapper.text().includes(MALE_DOG.name)).to.be.true;
    });

    it('should render the correct gender icon for male pets', () => {
      const wrapper = shallow(<Pet pet={MALE_DOG} />);
      expect(
        wrapper.text().includes(GENDER_ICON_MALE) && !wrapper.text().includes(GENDER_ICON_FEMALE)
      ).to.be.true;
    });

    it('should render the correct gender icon for female pets', () => {
      const wrapper = shallow(<Pet pet={FEMALE_CAT} />);
      expect(
        wrapper.text().includes(GENDER_ICON_FEMALE) && !wrapper.text().includes(GENDER_ICON_MALE)
      ).to.be.true;
    });

    it('should render the pet type', () => {
      const wrapper = shallow(<Pet pet={FEMALE_CAT} />);
      expect(wrapper.text().includes(FEMALE_CAT.type)).to.be.true;
    });

    it('should render the pet age', () => {
      const wrapper = shallow(<Pet pet={FEMALE_CAT} />);
      expect(wrapper.text().includes(FEMALE_CAT.age)).to.be.true;
    });

    it('should render the pet weight', () => {
      const wrapper = shallow(<Pet pet={FEMALE_CAT} />);
      expect(wrapper.text().includes(FEMALE_CAT.weight)).to.be.true;
    });
  });

  describe('Adopting a pet', () => {
    describe('Pet is not adopted yet', () => {
      it('should only show the adopt button', () => {
        const wrapper = shallow(<Pet pet={FEMALE_CAT} />);
        expect(
          wrapper.find('button.ui.primary.button').length === 1 &&
            wrapper.find('button.ui.disabled.button').length === 0
        ).to.be.true;
      });

      it('should call the `onAdoptPet` callback prop when the adopt button is clicked', () => {
        const spy = sinon.spy();
        const wrapper = shallow(<Pet pet={FEMALE_CAT} onAdoptPet={spy} />);
        wrapper.find('button.ui.primary.button').simulate('click');
        expect(spy.calledOnce).to.be.true;
        expect(spy.firstCall.args[0]).to.equal(FEMALE_CAT.id);
      });

      it('should call the `onAdoptPet` callback prop with the pet ID', () => {
        const spy = sinon.spy();
        const wrapper = shallow(<Pet pet={FEMALE_CAT} onAdoptPet={spy} />);
        wrapper.find('button.ui.primary.button').simulate('click');
        expect(spy.firstCall.args[0]).to.equal(FEMALE_CAT.id);
      });
    });

    describe('Pet is already adopted', () => {
      it('should only show the already adopted button', () => {
        const wrapper = shallow(<Pet pet={{ ...FEMALE_CAT, isAdopted: true }} />);
        expect(
          wrapper.find('button.ui.disabled.button').length === 1 &&
            wrapper.find('button.ui.primary.button').length === 0
        ).to.be.true;
      });

      it('should not call the `onAdoptPet` callback prop when the button is clicked', () => {
        const spy = sinon.spy();
        const wrapper = shallow(<Pet pet={{ ...FEMALE_CAT, isAdopted: true }} onAdoptPet={spy} />);
        wrapper.find('button.ui.disabled.button').simulate('click');
        expect(spy.called).to.be.false;
      });
    });
  });
});
