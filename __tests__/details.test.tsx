import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import DetailsScreen from "../Screens/Details";
import { shallow } from "enzyme";

const mockStore = configureMockStore();
const store = mockStore({});

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn(),
  },
});

describe("Details Screen", () => {
  describe("rendering", () => {
    const props = createTestProps();

    const wrapper = shallow(
      <Provider store={store}>
        <DetailsScreen {...props} />
      </Provider>
    );

    it("should render view", () => {
      expect(wrapper.find(".details-wrapper")).toHaveLength(0);
    });
  });
});
