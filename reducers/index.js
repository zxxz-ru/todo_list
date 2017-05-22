import { combineReducers } from "redux";
import * as actions from "../actions/ActionsConstants";

/*
Shape of Store
{
  notes [] note =
  [{id :string, title: string, text:string, color: string}]

  counter {} keys  string constants of color counting quantity of notes with particular color.
  
  filterColor: string (it get color as filter argument)
  noteColor: string color is going to be used for all created notes
  isFetching: false 
}
*/

const notes = (notesMap = [], action) => {
  switch (action.type) {
    case actions.UPDATE:
      return Object.values(action.json);
    default:
      return notesMap;
  }
};

const filter = (filterColor = null, action) => {
  switch (action.type) {
    case actions.FILTER_ACTION:
      return action.color;
    default:
      return filterColor;
  }
};

const counter = (
  map = {
    "#FFFFFF": 0,
    "#80D8FF": 0,
    "#FFFF8D": 0,
    "#FF8A80": 0,
    "#CCFF90": 0,
    "#CFD8DC": 0,
    "#FFD180": 0
  },
  action
) => {
  switch (action.type) {
    case actions.UPDATE: {
      const arr = Object.values(action.json);
      const nm = {
        "#FFFFFF": 0,
        "#80D8FF": 0,
        "#FFFF8D": 0,
        "#FF8A80": 0,
        "#CCFF90": 0,
        "#CFD8DC": 0,
        "#FFD180": 0
      };
      arr.forEach(n => {
        const color = n.Color;
        nm[color] += 1;
      });
      return Object.assign({}, map, nm);
    }
    default:
      return map;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case actions.TOGGLE_IS_FETCHING:
      return !state;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  notes,
  filter,
  counter,
  isFetching
});
export default todoApp;
