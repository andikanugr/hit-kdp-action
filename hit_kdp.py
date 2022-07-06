from github import Github
import sys

git = Github(sys.argv[1])
org = sys.argv[2]
repo = sys.argv[3]
kdp_host = sys.argv[4]
service = sys.argv[5]

def get_latest_tag():
    organization = git.get_organization(org)
    repository = organization.get_repo(repo)
    return repository.get_latest_release()

def main():
    print("============ Starting =============")
    print(get_latest_tag())

main()

