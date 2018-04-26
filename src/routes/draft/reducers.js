import { FETCH_YOUTUBE_LIST_RESULTS, FETCH_YOUTUBE_LIST_ERROR, } from '../../constants';

const initialState = {
  data: []
}

const youtube_list = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_YOUTUBE_LIST_RESULTS:
      return {
        ...state,
        data: action.data.items   // items is an Array of YT Video objects
      }
    default:
      return state;
  }
}

export default youtube_list;
