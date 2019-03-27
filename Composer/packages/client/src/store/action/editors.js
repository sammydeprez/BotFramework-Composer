import { ActionTypes } from './../../constants/index';

export function addEditor(dispatch, editor) {
  dispatch({
    type: ActionTypes.EDITOR_ADD,
    payload: { editor },
  });
}

export function setEditor(dispatch, editor) {
  dispatch({
    type: ActionTypes.EDITOR_SET,
    payload: { editor },
  });
}

export function resetVisualEditor(dispatch, isReset) {
  dispatch({
    type: ActionsTypes.EDITOR_RESET_VISUAL,
    payload: { isReset },
  });
}