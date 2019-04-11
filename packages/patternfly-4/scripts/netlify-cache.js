const { join, resolve, basename } = require('path');
const { ensureDir, remove, readdir, copySync } = require('fs-extra');

async function calculateDirs() {
  const program = {
    directory: join('/', 'opt', 'build', 'cache'),
  };

  const dirsToCache = [resolve(program.directory, 'public'), resolve(program.directory, '.cache')];

  for (const dir of dirsToCache) {
    await ensureDir(dir);
  }

  const netlifyCacheDir = resolve(process.env.NETLIFY_BUILD_BASE, 'cache', 'gatsby');

  await ensureDir(netlifyCacheDir);

  return {
    dirsToCache,
    netlifyCacheDir,
  };
}

async function main() {
  console.log('\nPrebuild - Checking Netlify server\n');

  if (!process.env.NETLIFY_BUILD_BASE) {
    console.log('\nNetlify Cache Post build - not on netlify server\n');
    return;
  }

  const removePath = join('/', 'opt', 'build', 'cache');
  remove(removePath, err => {
    if (err) return console.error(err);
    console.log('successfully removed cache dir'); // I just deleted my entire HOME directory.
  });

  const { dirsToCache, netlifyCacheDir } = await calculateDirs();

  for (const dirPath of dirsToCache) {
    const dirName = basename(dirPath);
    const cachePath = resolve(netlifyCacheDir, dirName);

    const dirFiles = await readdir(dirPath);
    const cacheFiles = await readdir(cachePath);

    console.log(
      `Found ${dirFiles.length} files in ${dirName} directory with ${
        cacheFiles.length
      } already cached files.`,
    );

    try {
      copySync(dirPath, cachePath);
      console.log(
        'NETLIFY CACHE PLUGIN - POST BUILD:\n Success - copied ',
        cachePath,
        ' to ',
        dirPath,
      );
    } catch (err) {
      console.log(
        'NETLIFY CACHE PLUGIN - POST BUILD:\n Failed - could not copy ',
        cachePath,
        ' to ',
        dirPath,
      );
    }
  }
}

main();