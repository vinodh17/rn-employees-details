import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import HomeScreen from '../Screens/Home';
import { shallow } from 'enzyme';

const mockStore = configureMockStore();
const store = mockStore({});

const createTestProps = () => ({
	navigation: {
		navigate: jest.fn()
	}
})

describe('Home Screen', () => {
	describe('rendering', () => {

		const props = createTestProps();

		const wrapper = shallow(
		<Provider store={store}>
			<HomeScreen {...props}/>
		</Provider>
		)

		it('should render view', () => {	
			expect(wrapper.find('.home-wrapper')).toHaveLength(0)
		})
	})
})