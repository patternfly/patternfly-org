import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const contentDir = join(import.meta.dirname, 'src', 'content');

function addFrontmatter(content, newFrontmatter) {
  return content.replace(
    /^---\n([\s\S]*?\n)---/,
    `---\n$1${newFrontmatter}\n---`
  );
}

async function patchAboutUs() {
  const filePath = join(contentDir, 'about-us.md');
  const content = await readFile(filePath, 'utf8');
  const patched = addFrontmatter(content, 'section: get-started');
  await writeFile(filePath, patched, 'utf8');
}

patchAboutUs();