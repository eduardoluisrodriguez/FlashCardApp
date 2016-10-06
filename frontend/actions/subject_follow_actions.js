export const GET_CURRENT_USER_SUBJECT_FOLLOWS = 'GET_CURRENT_USER_SUBJECT_FOLLOWS';
export const  RECEIVE_SUBJECT_FOLLOWS = 'RECEIVE_SUBJECT_FOLLOWS';
export const SET_ACTIVE_SUBJECT_FOLLOW = 'SET_ACTIVE_SUBJECT_FOLLOW';

export const getCurrentUserSubjectFollows = () => ({
  type: GET_CURRENT_USER_SUBJECT_FOLLOWS
});

export const receiveSubjectFollows = subjectFollows => ({
  type: RECEIVE_SUBJECT_FOLLOWS,
  subjectFollows
});

export const setActiveSubjectFollow = (subjectId) => ({
  type: SET_ACTIVE_SUBJECT_FOLLOW,
  subjectId
});