#!/usr/bin/env node
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

const runCommand = (command) => {
    try {
        execSync(`${command}`, { stdio: 'inherit' });
    } catch (e) {
        console.log(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone https://github.com/PracticeEveryday/typescript-start-kit.git ${repoName}`;
const installDeepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);

const checkOut = runCommand(gitCheckoutCommand);

if (!checkOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDeepsCommand);
if (!installedDeps) process.exit(-1);

console.log('축하합니다. 모든 준비가 다 끝났습니다. 아래 나오는 커멘드를 입력해주세요!');
console.log(`cd ${repoName} && yarn start:dev`);
