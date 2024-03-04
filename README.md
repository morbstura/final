
https://github.com/morbstura/final
# final

Instructions for repository and Test running
Initialize a repository in a local folder
To initialize a new local repository, pick an existing or new folder on your computer and open it in VS Code. In the Source Control view, select the Initialize Repository button. This creates a new Git repository in the current folder, allowing you to start tracking code changes.
Publish local repository to GitHub
Once you have a local Git repository set up, you can publish it to GitHub. This will create a new repository on your GitHub account, and push your local code to the remote repository. 
Execute Cypress Tests Using Cypress Test Runner
From your Visual Studio Code Terminal, run the command at the project folder level.
‘npx cypress open’
The command above opens the Cypress Test Runner. Choose the newly created test file.
Assuming you've successfully installed Cypress and opened Cypress, you then add your test. You are going to do this with the Create new empty spec button. Enter the name of your new spec.
 Click on your new spec and watch Cypress launch it. 
Write your test and run it to see the test results.

For Github Actions:
Create a .github/workflows directory in your repository on GitHub if this directory does not already exist. 
In the .github/workflows directory, create a file with the .yml or .yaml extension
Copy the YAML contents. 
Scroll to the bottom of the page and select Create a new branch for this commit and start a pull request. Then, to create a pull request, click Propose new file. Get to vscode with tests already previously done and add the yml. file under a .github workflow folder.
 Add a test job directly following the build
 Commit your changes.
Select the “Actions” tab and click on the “add test” workflow run.
You will see the status and results of both the build and test jobs.



