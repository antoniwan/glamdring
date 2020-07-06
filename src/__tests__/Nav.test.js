import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import Nav from "../components/Nav";
import { CURRENT_USER_QUERY } from "../components/User";
import { fakeUser } from "../libs/testUtils";
import { CheckoutStateProvider } from "../components/LocalState";

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } },
  },
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedUser: fakeUser() } },
  },
];

describe("<Nav/>", () => {
  it("Renders a shorter nav bar when users are signed out.", async () => {
    const { container } = render(
      <CheckoutStateProvider>
        <MockedProvider mocks={notSignedInMocks}>
          <Nav />
        </MockedProvider>
      </CheckoutStateProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("Renders a full nav bar when users are signed in.", async () => {
    const { container } = render(
      <CheckoutStateProvider>
        <MockedProvider mocks={signedInMocks}>
          <Nav />
        </MockedProvider>
      </CheckoutStateProvider>
    );
    await screen.findByText("Account");
    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent("Sign Out");
    expect(container).toHaveTextContent("My MFFFing Cart");
  });
});
