# Action Repository

This is the action repository for testing GitHub webhooks. When changes are made to this repository, GitHub will send webhook events to our webhook endpoint.

## Supported Events

- **PUSH**: When code is pushed to a branch
- **PULL_REQUEST**: When a pull request is opened
- **MERGE**: When a pull request is merged

## How to Test

1. Set up a GitHub repository
2. Configure a webhook pointing to your webhook endpoint (`https://your-webhook-url/webhook`)
3. Select the following events: `push`, `pull_request`
4. Make changes to the repository to trigger events
5. Monitor the events in the webhook UI

## Sample Files

This repository includes some sample files for testing:
- `index.js`: A simple JavaScript file
- `styles.css`: A simple CSS file
- `.gitignore`: Standard Git ignore file

## GitHub Webhook Setup

To set up the GitHub webhook:

1. Go to your GitHub repository
2. Click on Settings
3. Click on Webhooks
4. Click "Add webhook"
5. Set the Payload URL to your webhook endpoint URL
6. Set the Content type to `application/json`
7. Set the Secret to match the one in your webhook-repo `.env` file
8. Select "Let me select individual events" and check:
   - Push
   - Pull requests
9. Ensure "Active" is checked
10. Click "Add webhook"
