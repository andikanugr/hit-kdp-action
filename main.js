const core = require('@actions/core');
const github = require('@actions/github');
const Octokit = require("@octokit/core").Octokit

const githubToken = process.env.GITHUB_TOKEN
const owner = process.env.OWNER
const repo = process.env.REPO
const octokit = new Octokit({ auth: githubToken });

async function getLatestRelease(){
    resp = await octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
        owner: owner,
        repo: repo
    })

    console.log(resp)
}

await getLatestRelease()