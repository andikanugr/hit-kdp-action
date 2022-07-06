from github import Github
import sys
import os

git = Github("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")
# org = os.environ['org']
# repo = os.environ['repo']
# kdp_host = os.environ['host']
# service = os.environ['service']

def get_latest_tag():
    # organization = git.get_organization("andikanugr")
    repository = git.get_repo("hit-kdp-action")
    return repository.get_latest_release()

def main():
    print("============ Starting =============")
    print(get_latest_tag())

main()
# print(sys.argv)

