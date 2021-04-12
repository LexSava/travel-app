import { getCountries, signup } from "./api";
import "@babel/polyfill";

describe("API tests", () => {
  const testValue = [
    {
      testField: "test_value",
    },
  ];
  const toJson = (value) => () => Promise.resolve(value);
  const setFetch = (params) => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({ ...params });
    });
  };
  beforeEach(() => {
    setFetch({ json: toJson(testValue) });
  });
  afterEach(() => {
    fetch.mockRestore();
  });

  it("Should return promise with countries", async () => {
    const resp = await getCountries();

    expect(resp).toEqual(testValue);
  });

  it("Should return res with body when signup status 200", async () => {
    setFetch({ json: toJson(testValue), status: 200 });

    const res = await signup();
    const user = await res.user;

    expect(user).toEqual(testValue);
  });

  it("Should return res without body when signup status 403", async () => {
    setFetch({ json: toJson(testValue), status: 403 });

    const res = await signup();

    expect(res.user).toBeUndefined();
  });
});
