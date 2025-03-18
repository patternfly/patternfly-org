import fs from 'fs-extra';
import path from 'path';

const sourceDir = path.join(__dirname, 'packages/documentation-core/src/content');
const destDir = path.join(__dirname, 'packages/org/src/content');

async function copyFiles() {
  try {
    await fs.ensureDir(destDir);
    console.log(`Ensured that the destination directory exists: ${destDir}`);
    
    await fs.copy(sourceDir, destDir);
    console.log(`Successfully copied files from ${sourceDir} to ${destDir}`);
  } catch (error) {
    console.error('Error copying files:', error);
  }
}

copyFiles();