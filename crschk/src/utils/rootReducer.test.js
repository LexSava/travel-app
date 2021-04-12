import rootReducer, { initialState } from "./rootReducer";
import actions from "./actions";

describe("Root reducer", () => {
  let state;
  beforeEach(() => (state = initialState));
  it("Should return default state", () => {
    const newState = rootReducer(undefined, {});
    expect(newState).toEqual(state);
  });

  it("Should set user", () => {
    const user = { login: "alekseiby", avatar: null };
    const newState = rootReducer(undefined, {
      type: actions.SET_USER,
      user,
    });
    expect(newState).toEqual({ ...state, user });
  });

  it("Should set auth form", () => {
    const payloads = [
      { isFormOpen: false, isSignup: true },
      { isFormOpen: true, isSignup: true },
      { isFormOpen: true, isSignup: false },
      { isFormOpen: false, isSignup: false },
    ];
    const newStates = payloads.map((payload) =>
      rootReducer(undefined, {
        type: actions.SET_AUTHFORM,
        payload,
      })
    );
    expect(newStates).toEqual(payloads.map((payload) => ({ ...state, authForm: payload })));
  });
});
