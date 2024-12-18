import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
  const data = await parent();

  if (data?.user) {
    // console.log(data?.user);
  }

  return {};
};
