let data = {
  isAuthenticated: false,
  user: {}
}

let DataFromLocal = JSON.parse(localStorage.getItem('userInfo'))
let localData = {
  isAuthenticated: DataFromLocal.success,
  user: DataFromLocal
}

const initialState = localData.isAuthenticated ? localData: data

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      var newState = Object.assign({}, state);
      console.log(localData)
      newState.isAuthenticated = true;
      newState.user = action.payload;
      return newState;
      // eslint-disable-next-line
      break;

    default:
      return state;
      // eslint-disable-next-line
      break;
  }
}

export default auth;