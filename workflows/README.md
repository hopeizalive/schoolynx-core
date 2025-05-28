# GitHub Actions Deployment Workflow

This workflow automates the deployment of the Learnovate Consultants application to the production server using GitHub Actions with hardcoded credentials.

## Workflow Configuration

The workflow is configured with the following hardcoded values:
- Username: `learnovateadmin`
- Password: `YourPassword123` (replace with your actual password)
- Host: `learnovateconsultants.com`
- Deploy Path: `/opt/learnovateconsultants.com`

## How to Modify Credentials

If you need to change the credentials or deployment path:
1. Edit the `.github/workflows/deployment.yml` file
2. Update the hardcoded values in the "Execute deployment script" step
3. Commit and push your changes

## Workflow Behavior

This workflow will:
1. Trigger when changes are pushed to the main branch
2. Install sshpass for password-based authentication
3. Execute the deployment script remotely using the provided credentials
4. Log the results

## Security Notice

**IMPORTANT**: Hardcoding credentials in your workflow file is NOT recommended for production environments as:
- Credentials are visible to anyone with repository access
- Credentials are stored in Git history
- Anyone with read access can see the credentials

Consider using GitHub Secrets for improved security in production environments.

## Troubleshooting

If you encounter issues with the deployment:
1. Check the GitHub Actions logs for any errors
2. Verify that the username and password are correct
3. Ensure the hostname and deployment path are correct
4. Make sure the deploy.sh script is executable (`chmod +x scripts/deploy.sh`) 