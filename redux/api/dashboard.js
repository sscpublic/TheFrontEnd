import axios from 'axios';
import BASE_ADDR from '.';

const PROFILE_API = `${BASE_ADDR}/accounts/profile/`;
const TASK = (id) => `${BASE_ADDR}/resources/${id}/`;
const TASK_LIST = `${BASE_ADDR}/resources/`;
const ALL_CONTESTS = `${BASE_ADDR}/contest/contests/`;
const CONTEST = (contestID) => `${BASE_ADDR}/contest/${contestID}/`;
const MILESTONE = (contestID, milestoneID) => `${BASE_ADDR}/contest/${contestID}/${milestoneID}/`;
const PASSWORD_RESET_API = `${BASE_ADDR}/accounts/password/change/`;
const TEAM_NAME_API = `http://81.31.170.5/test/api/participation/teams/`;
//const TEAM_NAME_API = `${BASE_ADDR}/participation/teams/`;

export function getTeamNameAPI(token) {
  return axios.get(TEAM_NAME_API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function passwordUpdateAPI(data, token) {
  return axios.post(PASSWORD_RESET_API, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export function profileUpdateAPI(data, token) {
  return axios.put(PROFILE_API, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function profileAPI(token) {
  return axios.get(PROFILE_API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function taskListAPI(token) {
  return axios.get(TASK_LIST, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function taskAPI(id, token) {
  return axios.get(TASK(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function allContestsAPI(token) {
  return axios.get(ALL_CONTESTS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function contestAPI(contestId, token) {
  return axios.get(CONTEST(contestId), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function milestoneAPI(contestID, milestoneID, token) {
  return axios.get(MILESTONE(contestID, milestoneID), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const SCOREBOARD_BASE_ADD = 'http://81.31.170.5:8000';
const SCOREBOARD = (
  start_index,
  end_index,
  ms_id,
) => `${SCOREBOARD_BASE_ADD}/scoreboard/?start_index=${start_index}
&end_index=${end_index}&ms_id=${ms_id}`;

const TEAMCOUNT = (ms_id) => `${SCOREBOARD_BASE_ADD}/milestone_info/?ms_id=${ms_id}`

export function teamCountAPI(milestoneID, token) {
  return axios.get(TEAMCOUNT(milestoneID), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function scoreboardAPI(startIndex, endIndex, milestoneID, token) {
  return axios.get(SCOREBOARD(startIndex, endIndex, milestoneID), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const CONTENT_FINISHED = (content_id, milestone_id, task_id) =>
  `${BASE_ADDR}/contest/${content_id}/${milestone_id}/${task_id}/content_finished/`;

export function contentFinished(content_id, milestone_id, task_id) {
  return axios.get(CONTENT_FINISHED(content_id, milestone_id, task_id));
}
