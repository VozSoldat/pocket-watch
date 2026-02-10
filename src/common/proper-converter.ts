import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

let headComments = `// PocketWatch by VozSoldat.\n// https://github.com/VozSoldat/PocketWatch`;
let tailComments = `// END OF PocketWatch by VozSoldat. \n// Copy other scripts below.`;

async function copyWithComments(src: string, dest: string) {
    try {
        // 1. Read the source file
        const originalCode = await readFile(src, 'utf8');

        // 2. Wrap the code with your custom comments
        const finalContent = [
            headComments,
            originalCode,
            tailComments
        ].join('\n');

        // 3. Ensure the destination directory exists (Bonus safety!)
        await mkdir(dirname(dest), { recursive: true });

        // 4. Write the new file
        await writeFile(dest, finalContent, 'utf8');

        console.log(`Successfully copied ${src} to ${dest} with comments!`);
    } catch (error) {
        console.error('Operation failed:', error);
    }
}

// Usage
copyWithComments('./dist/bundle.js', './dist/library.js');