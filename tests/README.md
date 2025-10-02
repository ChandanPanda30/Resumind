# Test Plan for AI Resume Analyzer Authentication

## Overview

This is a simple test plan with 5 focused tests that check the key aspects of login and registration functionality in the AI Resume Analyzer project.

## Test Framework

- **Framework**: Python unittest (built into Python)
- **No external dependencies needed** - runs with just Python
- **Quick execution** - all tests run in seconds

## The 5 Key Tests

### Test 1: Google Login Success ✅

**What it tests**: Valid Google OAuth login

- Simulates successful Google authentication
- Checks if user data is returned correctly
- Verifies authentication state is set

### Test 2: Invalid Login Fails ✅

**What it tests**: Invalid credential handling

- Tests with invalid/fake credentials
- Ensures system rejects bad logins
- Verifies proper error messages

### Test 3: User Session Management ✅

**What it tests**: Session creation and storage

- Creates user sessions after login
- Stores session data properly
- Retrieves session information correctly

### Test 4: Protected Route Access ✅

**What it tests**: Authentication-based access control

- Authenticated users can access protected routes (/upload, /resume)
- Unauthenticated users are blocked from protected routes
- Public routes (/) remain accessible to everyone

### Test 5: Logout Clears Data ✅

**What it tests**: Proper logout functionality

- User data is cleared after logout
- Authentication state is reset
- Session information is removed

## How to Run Tests

### Option 1: Run the test file directly

```bash
python tests/auth_tests.py
```

### Option 2: Run with unittest

```bash
python -m unittest tests.auth_tests
```

## Expected Results

All 5 tests should pass, showing:

- ✅ Google OAuth login/logout works
- ✅ Invalid credentials are rejected
- ✅ User sessions are managed properly
- ✅ Protected routes require authentication
- ✅ Logout cleans up user data

## Test Coverage

These simple tests cover the essential authentication features:

1. **Login Process** - Users can sign in with Google
2. **Security** - Invalid logins are blocked
3. **Session Management** - User sessions work properly
4. **Authorization** - Protected areas require login
5. **Logout Process** - Users can sign out cleanly

## Why These 5 Tests Matter

- **Test 1 & 2**: Ensure the core login/auth works and is secure
- **Test 3**: Confirms user sessions are handled properly
- **Test 4**: Validates that protected features stay protected
- **Test 5**: Makes sure users can log out safely

