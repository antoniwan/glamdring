import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MockedProvider } from "@apollo/react-testing";
import Signup, { SIGNUP_MUTATION } from "../components/Signup";
import { CURRENT_USER_QUERY } from "../components/User";
import { fakeUser } from "../libs/testUtils";

const me = fakeUser();
const mocks = [
  {
    request: {
      query: SIGNUP_MUTATION,
      variables: {
        name: me.name,
        email: me.email,
        password: "666",
      },
    },
    result: {
      data: {
        createUser: {
          __typename: "User",
          id: "test-user",
          email: me.email,
          name: me.name,
        },
      },
    },
  },
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { authenticatedUser: me } },
  },
];

describe("<Signup/>", () => {
  it("Renders and matches the snapshot.", async () => {
    const { container } = render(
      <MockedProvider>
        <Signup />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("Completes the mutation properly.", async () => {
    const { container } = render(
      <MockedProvider mocks={mocks}>
        <Signup />
      </MockedProvider>
    );
    await userEvent.type(screen.getByPlaceholderText("name"), me.name);
    await userEvent.type(screen.getByPlaceholderText("email"), me.email);
    await userEvent.type(screen.getByPlaceholderText("password"), "666");
    await userEvent.click(screen.getByText("Sign Up!"));
    expect(screen.getByTestId("loading")).toHaveAttribute("aria-busy", "true");
    expect(screen.getByTestId("loading")).toHaveAttribute("disabled");
    await screen.findByText(`Signed up with ${me.email} — Please Sign In now`);
  });
});
