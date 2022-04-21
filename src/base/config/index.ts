'use strict';

export const FindAPIBaseURL = (): string =>
  process.env.REACT_APP_BASE_URL || "";