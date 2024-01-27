const isAuthorization = (allowedProfiles: string[], userProfiles: string | string[]) => {
  const profiles = Array.isArray(userProfiles) ? userProfiles : [userProfiles];

  const isAllowed = profiles.map((p) => {
    if (allowedProfiles.includes(p)) return true;
    return false;
  });

  if (isAllowed.includes(true)) return true;

  return false;
};

export default isAuthorization;
