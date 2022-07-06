from github import Github
import sys

git = Github(sys.argv[1])

def main():
    print("============ Starting =============")
    print(sys.argv)

main()