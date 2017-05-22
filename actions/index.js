import "whatwg-fetch";
import * as actions from "./ActionsConstants";

export const Update = json => ({
  type: actions.UPDATE,
  json
});

export const FilterNote = color => ({
  type: actions.FILTER_ACTION,
  color
});

const ToggleIsFetching = () => ({
  type: actions.TOGGLE_IS_FETCHING
});

const shouldFetch = state => {
  const notes = state.notes;
  if (!notes.length > 0) {
    return true;
  } else if (state.isFetching) {
    return false;
  }
  return true;
};

const getJson = (url, opt) => dispatch => {
  dispatch(ToggleIsFetching());
  return fetch(url, opt)
    .then(response => response.json())
    .then(json => {
      dispatch(ToggleIsFetching());
      return Promise.resolve(json);
    })
    .then(json => dispatch(Update(json)));
};

export const DoFetch = (state, dispatch, caller, note) => {
  if (!shouldFetch(state)) {
    return;
  }

  const env = process.env.NODE_ENV;
  const prefix = "loclahost/";

  const mutopt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify(note)
  };

  let url;
  switch (caller) {
    case "save": {
      url = `${prefix}`;
      dispatch(getJson(url, mutopt));
      break;
    }
    case "delete": {
      url = `${prefix}`;
      dispatch(getJson(url, mutopt));
      break;
    }
    default: {
      url = `${prefix}`;
      const pullopt = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors"
      };
      dispatch(getJson(url, pullopt));
      break;
    }
  }
};
