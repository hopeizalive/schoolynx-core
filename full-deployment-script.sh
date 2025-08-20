#!/bin/bash
# Full Production Deployment Script - Source to Production
# This script combines package creation and deployment in one go
# Suitable for remote deployment with proper directory management

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script configuration - MODIFY THESE PATHS AS NEEDED
SOURCE_DIR="D:/Git-Projects/schoolnyx-core"
DEPLOYMENT_DIR="D:/deployment/schoolnyx"
PACKAGE_NAME="schoolnyx-app.tar.gz"
ENV_FILE=".env.production"
APP_NAME="schoolnyx-core"

echo -e "${BLUE}🚀 Full SchoolNyx Core Deployment${NC}"
echo -e "${BLUE}=================================${NC}"
echo ""

# Function to print status
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

print_step() {
    echo ""
    echo -e "${BLUE}═══ $1 ═══${NC}"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check and create directories
setup_directories() {
    print_step "STEP 1: Directory Setup"
    
    # Check if source directory exists
    if [ ! -d "$SOURCE_DIR" ]; then
        print_error "Source directory not found: $SOURCE_DIR"
        print_info "Please ensure your source code is available at this location:"
        print_info "  - Clone your repository to: $SOURCE_DIR"
        print_info "  - Or update SOURCE_DIR in this script to point to your project"
        exit 1
    fi
    
    # Validate source directory contains a Next.js project
    if [ ! -f "$SOURCE_DIR/package.json" ]; then
        print_error "package.json not found in source directory"
        print_info "Source directory must contain a valid Next.js project"
        exit 1
    fi
    
    if [ ! -f "$SOURCE_DIR/next.config.ts" ]; then
        print_error "next.config.ts not found in source directory"
        print_info "Source directory must contain a valid Next.js project"
        exit 1
    fi
    
    print_status "Source directory validated: $SOURCE_DIR"
    
    # Check if it's a Git repository
    if [ -d "$SOURCE_DIR/.git" ]; then
        print_info "Git repository detected - updates will be pulled before build"
    else
        print_warning "Not a Git repository - will use existing source code"
    fi
    
    # Check if deployment directory exists
    if [ ! -d "$DEPLOYMENT_DIR" ]; then
        print_error "Deployment directory not found: $DEPLOYMENT_DIR"
        print_warning "You must manually create the deployment directory before running this script"
        echo ""
        print_info "Create the deployment directory with these steps:"
        echo ""
        echo "1. Create directory: mkdir -p \"$DEPLOYMENT_DIR\""
        echo ""
        print_warning "After creating the directory, run this script again."
        exit 1
    else
        print_status "Deployment directory exists: $DEPLOYMENT_DIR"
    fi
    
    print_info "Source: $SOURCE_DIR"
    print_info "Deployment: $DEPLOYMENT_DIR"
}

# Function to update source from Git
update_source_code() {
    print_step "STEP 2: Source Code Update"
    
    # Navigate to source directory
    print_info "Switching to source directory..."
    cd "$SOURCE_DIR" || {
        print_error "Failed to navigate to source directory: $SOURCE_DIR"
        exit 1
    }
    
    # Check if it's a Git repository
    if [ ! -d ".git" ]; then
        print_warning "Not a Git repository. Skipping Git update."
        print_info "Continuing with existing source code..."
        return 0
    fi
    
    print_info "Updating source code from Git..."
    
    # Check for uncommitted changes
    if ! git diff --quiet || ! git diff --cached --quiet; then
        print_warning "Uncommitted changes detected in source directory"
        echo -n "Continue with Git pull anyway? (y/N): "
        read continue_git
        
        if [ "$continue_git" != "y" ] && [ "$continue_git" != "Y" ]; then
            print_info "Skipping Git update. Using current source code."
            return 0
        fi
    fi
    
    # Get current branch
    CURRENT_BRANCH=$(git branch --show-current)
    print_info "Current branch: $CURRENT_BRANCH"
    
    # Fetch latest changes
    print_info "Fetching latest changes..."
    git fetch origin
    
    if [ $? -ne 0 ]; then
        print_warning "Git fetch failed. Using current source code."
        return 0
    fi
    
    # Pull latest changes
    print_info "Pulling latest changes..."
    git pull origin "$CURRENT_BRANCH"
    
    if [ $? -eq 0 ]; then
        print_status "Source code updated successfully"
        
        # Show latest commit info
        LATEST_COMMIT=$(git log -1 --oneline)
        print_info "Latest commit: $LATEST_COMMIT"
    else
        print_warning "Git pull failed. Using current source code."
        print_info "You may need to resolve conflicts manually."
        
        echo -n "Continue with current source code? (y/N): "
        read continue_anyway
        
        if [ "$continue_anyway" != "y" ] && [ "$continue_anyway" != "Y" ]; then
            print_error "Deployment cancelled due to Git issues."
            exit 1
        fi
    fi
}

# Function to build and package from source
build_and_package() {
    print_step "STEP 3: Build & Package from Source"
    
    # Ensure we're in source directory
    cd "$SOURCE_DIR" || {
        print_error "Failed to navigate to source directory: $SOURCE_DIR"
        exit 1
    }
    
    # Verify source project structure
    if [ ! -f "package.json" ]; then
        print_error "package.json not found in source directory"
        exit 1
    fi
    
    if [ ! -f "next.config.ts" ]; then
        print_error "next.config.ts not found. This doesn't appear to be a Next.js project"
        exit 1
    fi
    
    print_status "Source project structure validated"
    
    # Always build fresh - remove any existing build
    BUILD_DIR="$SOURCE_DIR/.next"
    
    # Remove existing build directory
    if [ -d "$BUILD_DIR" ]; then
        print_info "Removing existing build directory..."
        rm -rf "$BUILD_DIR"
    fi
    
    print_info "Creating fresh build..."
    
    # Install dependencies first (may be needed after Git update)
    print_info "Installing dependencies for build..."
    if command_exists pnpm; then
        pnpm install
    elif command_exists yarn; then
        yarn install
    elif command_exists npm; then
        npm install
    else
        print_error "No package manager found (pnpm, yarn, or npm)"
        exit 1
    fi
    
    # Build the application
    if command_exists pnpm; then
        print_info "Building with pnpm..."
        pnpm build
    elif command_exists yarn; then
        print_info "Building with Yarn..."
        yarn build
    elif command_exists npm; then
        print_info "Building with NPM..."
        npm run build
    else
        print_error "No package manager found (pnpm, yarn, or npm)"
        exit 1
    fi
    
    if [ $? -ne 0 ]; then
        print_error "Build failed"
        exit 1
    fi
    
    print_status "Fresh build created successfully"
    
    # Show build info
    BUILD_ID=$(cat "$BUILD_DIR/BUILD_ID")
    print_info "Build ID: $BUILD_ID"
    
    # Create deployment package
    print_info "Creating deployment package..."
    
    # Remove existing package
    if [ -f "$PACKAGE_NAME" ]; then
        rm "$PACKAGE_NAME"
    fi
    
    # Required files for packaging
    REQUIRED_FILES=".next package.json public next.config.ts tsconfig.json postcss.config.mjs"
    OPTIONAL_FILES="package-lock.json yarn.lock pnpm-lock.yaml tailwind.config.ts tailwind.config.js .env.example"
    
    # Build tar arguments
    TAR_ARGS=""
    
    # Add required files
    for file in $REQUIRED_FILES; do
        if [ -e "$file" ]; then
            TAR_ARGS="$TAR_ARGS $file"
            print_info "✓ Including: $file"
        else
            print_error "Required file missing: $file"
            exit 1
        fi
    done
    
    # Add optional files
    for file in $OPTIONAL_FILES; do
        if [ -e "$file" ]; then
            TAR_ARGS="$TAR_ARGS $file"
            print_info "✓ Including: $file"
        fi
    done
    
    # Create package
    tar -czf "$PACKAGE_NAME" $TAR_ARGS
    
    if [ $? -eq 0 ]; then
        print_status "Package created: $PACKAGE_NAME"
    else
        print_error "Failed to create package"
        exit 1
    fi
    
    # Copy package to deployment directory
    print_info "Copying package to deployment directory..."
    cp "$PACKAGE_NAME" "$DEPLOYMENT_DIR/"
    
    if [ $? -eq 0 ]; then
        print_status "Package copied to deployment directory"
    else
        print_error "Failed to copy package"
        exit 1
    fi
}

# Function to handle deployment
deploy_application() {
    print_step "STEP 4: Deployment"
    
    # Navigate to deployment directory
    print_info "Switching to deployment directory..."
    cd "$DEPLOYMENT_DIR" || {
        print_error "Failed to navigate to deployment directory: $DEPLOYMENT_DIR"
        exit 1
    }
    
    # Check if package exists
    if [ ! -f "$PACKAGE_NAME" ]; then
        print_error "Package not found in deployment directory: $PACKAGE_NAME"
        exit 1
    fi
    
    # Extract package
    print_info "Extracting deployment package..."
    tar -xzf "$PACKAGE_NAME"
    
    if [ $? -eq 0 ]; then
        print_status "Package extracted successfully"
    else
        print_error "Failed to extract package"
        exit 1
    fi
    
    # Verify extracted files
    REQUIRED_FILES=("package.json" ".next" "public")
    
    for file in "${REQUIRED_FILES[@]}"; do
        if [ ! -e "$file" ]; then
            print_error "Required file/directory missing after extraction: $file"
            exit 1
        fi
    done
    
    print_status "All deployment files verified"
    
    # Show extracted build info
    if [ -f ".next/BUILD_ID" ]; then
        BUILD_ID=$(cat ".next/BUILD_ID")
        print_info "Deployed Build ID: $BUILD_ID"
    fi
}

# Function to install dependencies
install_dependencies() {
    print_step "STEP 5: Installing Dependencies"
    
    # Ensure we're in deployment directory
    cd "$DEPLOYMENT_DIR" || exit 1
    
    if command_exists pnpm; then
        print_info "Installing production dependencies with pnpm..."
        if [ -f "pnpm-lock.yaml" ]; then
            pnpm install --prod --frozen-lockfile
        else
            print_warning "pnpm-lock.yaml not found, installing without frozen lockfile"
            pnpm install --prod
        fi
    elif command_exists yarn; then
        print_info "Installing production dependencies with Yarn..."
        yarn install --production --frozen-lockfile
    elif command_exists npm; then
        print_info "Installing production dependencies with NPM..."
        npm ci --production
    else
        print_error "No package manager found (pnpm, yarn, or npm)"
        exit 1
    fi
    
    if [ $? -eq 0 ]; then
        print_status "Dependencies installed successfully"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
}

# Function to start application
start_application() {
    print_step "STEP 6: Starting Application"
    
    cd "$DEPLOYMENT_DIR" || exit 1
    
    # Check if PM2 is available
    if command_exists pm2; then
        print_info "Starting with PM2..."
        
        # Stop existing instance if running
        pm2 stop "$APP_NAME" 2>/dev/null || true
        pm2 delete "$APP_NAME" 2>/dev/null || true
        
        # Start new instance with preferred package manager
        if command_exists pnpm; then
            pm2 start pnpm --name "$APP_NAME" -- start
        elif command_exists yarn; then
            pm2 start yarn --name "$APP_NAME" -- start
        else
            pm2 start npm --name "$APP_NAME" -- start
        fi
        
        if [ $? -eq 0 ]; then
            print_status "Application started with PM2"
            
            # Show status
            sleep 3
            pm2 status
            
            echo ""
            echo -n "Save PM2 configuration? (y/N): "
            read save_pm2
            
            if [ "$save_pm2" = "y" ] || [ "$save_pm2" = "Y" ]; then
                pm2 save
                print_status "PM2 configuration saved"
            fi
        else
            print_error "Failed to start with PM2"
            exit 1
        fi
    else
        print_warning "PM2 not found. Starting with package manager..."
        print_info "Application will run in foreground. Press Ctrl+C to stop."
        print_info "For background execution, install PM2: npm install -g pm2"
        
        # Start with preferred package manager
        if command_exists pnpm; then
            print_info "Starting with pnpm..."
            pnpm start
        elif command_exists yarn; then
            print_info "Starting with yarn..."
            yarn start
        else
            print_info "Starting with npm..."
            npm start
        fi
    fi
}

# Function to verify deployment
verify_deployment() {
    print_step "STEP 7: Deployment Verification"
    
    print_info "Waiting for application to start..."
    sleep 10
    
    if command_exists curl; then
        print_info "Testing application health..."
        HEALTH_CHECK=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000" 2>/dev/null)
        
        if [ "$HEALTH_CHECK" = "200" ]; then
            print_status "Application is responding correctly"
            print_info "Access your application at: http://localhost:3000"
        else
            print_warning "Health check returned: $HEALTH_CHECK"
            if command_exists pm2; then
                print_info "Check logs with: pm2 logs $APP_NAME"
            fi
        fi
    else
        print_warning "curl not available for health check"
        print_info "Manually verify at: http://localhost:3000"
    fi
}

# Function to display configuration
show_configuration() {
    print_step "CONFIGURATION"
    
    echo "Source Directory: $SOURCE_DIR"
    echo "Deployment Directory: $DEPLOYMENT_DIR"
    echo "Package Name: $PACKAGE_NAME"
    echo "Application Name: $APP_NAME"
    echo ""
    print_info "To use different paths, edit the script variables at the top."
    echo ""
}

# Main deployment flow
main() {
    print_info "Starting full deployment process..."
    
    # Show configuration and confirm
    show_configuration
    
    # Execute deployment steps
    setup_directories
    update_source_code
    build_and_package
    deploy_application
    install_dependencies
    start_application
    verify_deployment
    
    # Success message
    echo ""
    echo -e "${GREEN}🎉 Full Deployment Completed Successfully!${NC}"
    echo ""
    print_info "Summary:"
    echo "  ✓ Built from source: $SOURCE_DIR"
    echo "  ✓ Deployed to: $DEPLOYMENT_DIR"
    echo "  ✓ Application running on: http://localhost:3000"
    echo ""
    print_info "Next steps:"
    echo "  1. Test the application thoroughly"
    echo "  2. Configure reverse proxy (Nginx/Apache)"
    echo "  3. Setup SSL certificate"
    echo "  4. Configure monitoring"
    echo ""
    
    if command_exists pm2; then
        print_info "PM2 Management Commands:"
        echo "  pm2 status                 # Check status"
        echo "  pm2 logs $APP_NAME        # View logs"
        echo "  pm2 restart $APP_NAME     # Restart app"
        echo "  pm2 stop $APP_NAME        # Stop app"
    fi
    
    print_status "Full deployment script completed! 🚀"
}

# Run main function
main "$@" 