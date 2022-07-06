from github import Github
import sys
import os

git = Github(os.environ['token'])
org = os.environ['org']
repo = os.environ['repo']
kdp_host = os.environ['host']
service = os.environ['service']

def get_latest_tag():
    organization = git.get_organization(org)
    repository = organization.get_repo(repo)
    return repository.get_latest_release()

def main():
    print("============ Starting =============")
    print(get_latest_tag())

main()
# print(sys.argv)

