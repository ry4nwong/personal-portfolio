import path from 'path';
import getConfig from 'next/config';

const serverPath = (staticFilePath: string) => {
  const { serverRuntimeConfig } = getConfig();
  return path.join(serverRuntimeConfig.PROJECT_ROOT, staticFilePath);
};

export default serverPath;