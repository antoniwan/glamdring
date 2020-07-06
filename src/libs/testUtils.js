import casual from "casual";

casual.seed(666);

const fakeCar = () => ({
  // __typename: 'Car',
  id: "honda-accord-ex-2020",
  mrsp: 29520,
  user: null,
  image: {
    publicUrlTransformed: "honda-accord-ex-2020.jpg",
  },
  name: "Honda Accord EX",
  description: "Honda Accord EX",
});

const fakeUser = (overrides) => ({
  // __typename: 'User',
  id: "4234",
  name: casual.name,
  email: casual.email,
  permissions: ["ADMIN"],
  orders: [],
  cart: [],
  ...overrides,
});

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

export { LocalStorageMock, fakeCar, fakeUser };
