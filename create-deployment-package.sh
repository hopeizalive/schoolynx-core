#!/bin/bash
# Deployment Package Creation Script
# This script automates step 3.1 from TRADITIONAL_SERVER_DEPLOYMENT.md
# Windows Git Bash Compatible

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script configuration
PROJECT_ROOT="$(pwd)"
PACKAGE_NAME="schoolnyx-app.tar.gz"
BUILD_DIR="$PROJECT_ROOT/.next"

echo -e "${BLUE}🚀 SchoolNyx Core - Deployment Package Creator${NC}"
echo -e "${BLUE}=============================================${NC}"
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

# Step 1: Check if we're in the right directory
print_info "Checking project structure..."
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

if [ ! -f "next.config.ts" ]; then
    print_error "next.config.ts not found. This doesn't appear to be a Next.js project."
    exit 1
fi

print_status "Project structure validated"

# Step 2: Check if build exists and is complete
print_info "Checking build status..."

if [ ! -d "$BUILD_DIR" ] || [ ! -f "$BUILD_DIR/BUILD_ID" ] || [ ! -d "$BUILD_DIR/server" ] || [ ! -d "$BUILD_DIR/static" ]; then
    print_warning "Build missing or incomplete. Building application for production..."
    
    # Clean any partial build
    if [ -d "$BUILD_DIR" ]; then
        print_info "Removing incomplete build..."
        rm -rf "$BUILD_DIR"
    fi
    
    # Build the application
    if command -v yarn &> /dev/null; then
        print_info "Using Yarn to build..."
        yarn build
    elif command -v npm &> /dev/null; then
        print_info "Using NPM to build..."
        npm run build
    else
        print_error "Neither Yarn nor NPM found. Please install one of them."
        exit 1
    fi
    
    if [ $? -ne 0 ]; then
        print_error "Build failed. Please fix build errors before creating deployment package."
        exit 1
    fi
    
    # Verify build completed successfully
    if [ ! -f "$BUILD_DIR/BUILD_ID" ]; then
        print_error "Build completed but BUILD_ID file missing. Build may be corrupted."
        exit 1
    fi
    
    print_status "Application built successfully"
else
    print_status "Complete build directory found"
fi

# Show build info
BUILD_ID=$(cat "$BUILD_DIR/BUILD_ID")
print_info "Build ID: $BUILD_ID"
print_info "Ready to package production build"

# Step 3: Create deployment package
print_info "Creating deployment package..."

# Remove existing package if it exists
if [ -f "$PACKAGE_NAME" ]; then
    print_warning "Removing existing deployment package..."
    rm "$PACKAGE_NAME"
fi

# Verify .next directory is complete before packaging
print_info "Verifying build completeness..."
if [ ! -f ".next/BUILD_ID" ]; then
    print_error ".next/BUILD_ID missing - build is incomplete"
    exit 1
fi

if [ ! -d ".next/server" ]; then
    print_error ".next/server directory missing - build is incomplete"
    exit 1
fi

if [ ! -d ".next/static" ]; then
    print_error ".next/static directory missing - build is incomplete"
    exit 1
fi

print_status "Build verification passed"

# Prepare list of files to include
print_info "Preparing file list..."

# Required files (must exist)
REQUIRED_FILES=".next package.json public next.config.ts tsconfig.json postcss.config.mjs"

# Optional files (include if they exist)
OPTIONAL_FILES="package-lock.json yarn.lock pnpm-lock.yaml tailwind.config.ts tailwind.config.js .env.example"

# Build the tar command arguments
TAR_ARGS=""

# Add required files
for file in $REQUIRED_FILES; do
    if [ -e "$file" ]; then
        TAR_ARGS="$TAR_ARGS $file"
        echo "  ✓ Including: $file"
    else
        print_error "Required file missing: $file"
        exit 1
    fi
done

# Add optional files if they exist
for file in $OPTIONAL_FILES; do
    if [ -e "$file" ]; then
        TAR_ARGS="$TAR_ARGS $file"
        echo "  ✓ Including: $file"
    else
        echo "  ℹ Skipping (not found): $file"
    fi
done

# Create tar.gz package
print_info "Packaging files..."
tar -czf "$PACKAGE_NAME" $TAR_ARGS

if [ $? -eq 0 ]; then
    print_status "Deployment package created successfully"
else
    print_error "Failed to create deployment package"
    exit 1
fi

# Step 4: Display package information
if command -v du &> /dev/null; then
    PACKAGE_SIZE=$(du -h "$PACKAGE_NAME" 2>/dev/null | cut -f1)
else
    PACKAGE_SIZE="Unknown"
fi

print_info "Package Information:"
echo "  📦 Package Name: $PACKAGE_NAME"
echo "  📏 Package Size: $PACKAGE_SIZE"
echo "  📍 Package Location: $PROJECT_ROOT/$PACKAGE_NAME"

# Step 5: Verify package contents
print_info "Verifying package contents..."
echo ""
echo -e "${BLUE}Package Contents:${NC}"
tar -tzf "$PACKAGE_NAME" | head -20
TOTAL_FILES=$(tar -tzf "$PACKAGE_NAME" | wc -l)
if [ $TOTAL_FILES -gt 20 ]; then
    echo "... and $(( $TOTAL_FILES - 20 )) more files"
fi

# Step 6: Generate deployment commands
echo ""
echo -e "${GREEN}🎉 Deployment Package Ready!${NC}"
echo ""
echo -e "${BLUE}Next Steps for Production Deployment:${NC}"
echo ""
echo -e "${YELLOW}1. Transfer to server:${NC}"
echo "   scp $PACKAGE_NAME schoolnyx@your-server-ip:~/apps/schoolnyx-core/"
echo ""
echo -e "${YELLOW}2. SSH to server and extract:${NC}"
echo "   ssh schoolnyx@your-server-ip"
echo "   cd ~/apps/schoolnyx-core"
echo "   tar -xzf $PACKAGE_NAME"
echo ""
echo -e "${YELLOW}3. Install dependencies:${NC}"
echo "   npm ci --production"
echo ""
echo -e "${YELLOW}4. Setup environment and start with PM2:${NC}"
echo "   # Create .env.production file with your production settings"
echo "   # Then start with PM2 using ecosystem.config.js"
echo "   pm2 start ecosystem.config.js --only schoolnyx-core --env production"
echo ""
print_info "For detailed deployment steps, refer to TRADITIONAL_SERVER_DEPLOYMENT.md"
echo ""
print_status "Deployment package creation completed successfully! 🚀" 

# Windows-specific note
echo ""
print_info "Windows Users: Use Git Bash, WSL, or PowerShell with tar support for best compatibility" 