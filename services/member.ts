import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getMemberOverview() {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;
  return callAPI({
    url,
    method: 'get',
    token: true,
  });
}

export async function name() {
  return null;
}
