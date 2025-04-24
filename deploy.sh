#!/bin/bash

# Configuration
APP_NAME="schoolnyx-core"
REPO_PATH=$(pwd)
PM2_PATH=$(which pm2)

# Text colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if PM2 is installed
if [ -z "$PM2_PATH" ]; then
  echo -e "${RED}Error: PM2 is not installed. Please install it using yarn global add pm2${NC}"
  exit 1
fi

# Function to display status messages
function echo_status() {
  echo -e "${GREEN}[INFO]${NC} $1"
}

# Function to display warning messages
function echo_warning() {
  echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Function to display error messages
function echo_error() {
  echo -e "${RED}[ERROR]${NC} $1"
}

# Pull latest changes from git
echo_status "Pulling latest changes from git repository..."
git pull

# Install dependencies
echo_status "Installing dependencies..."
yarn install

# Check if the app is already running in PM2
if $PM2_PATH list | grep -q "$APP_NAME"; then
  echo_status "Application $APP_NAME is already running in PM2. Restarting..."
  $PM2_PATH restart $APP_NAME
  
  # Check if restart was successful
  if [ $? -eq 0 ]; then
    echo_status "Application $APP_NAME has been restarted successfully!"
  else
    echo_error "Failed to restart application $APP_NAME."
    exit 1
  fi
else
  echo_warning "Application $APP_NAME is not running in PM2. Starting it..."
  
  # Start the application with PM2 in dev mode
  $PM2_PATH start yarn --name $APP_NAME -- dev
  
  # Check if start was successful
  if [ $? -eq 0 ]; then
    echo_status "Application $APP_NAME has been started successfully!"
    
    # Save PM2 configuration
    echo_status "Saving PM2 configuration..."
    $PM2_PATH save
  else
    echo_error "Failed to start application $APP_NAME."
    exit 1
  fi
fi

# Display status of the application
echo_status "Current PM2 status:"
$PM2_PATH status

echo_status "Deployment completed successfully!" 