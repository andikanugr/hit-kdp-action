const core = require('@actions/core');
const github = require('@actions/github');
const Octokit = require("@octokit/core").Octokit

const githubToken = process.env.GITHUB_TOKEN
const owner = process.env.OWNER
const repo = process.env.REPO
const service = core.getInput('service')
const kdpHost = core.getInput('host')

const octokit = new Octokit({ auth: githubToken });

async function getLatestRelease(){
    resp = await octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
        owner: owner,
        repo: repo
    })

    return release = {
        pic : resp.data.author.login,
        service: service,
        tag: resp.data.html_url,
        rfc: "-",
        authors: extractAuthors(resp.data.body)
    }
}

function extractAuthors(body) {
    const authors = body.match(/@\w*/g)
    return (authors || [])
}

function tellKDP(data){
    console.log(data)
}

function main(){
    const release = getLatestRelease()
    tellKDP(release)
    
}

main()
