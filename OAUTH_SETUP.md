# OAuth Setup Guide

This guide walks you through setting up Google and GitHub OAuth authentication for DreamDot.

## Overview

DreamDot uses NextAuth.js to provide OAuth authentication with:
- **Google OAuth** - Sign in with Google
- **GitHub OAuth** - Sign in with GitHub

Both providers are **optional** and controlled by feature flags, allowing you to enable them independently.

---

## Prerequisites

- DreamDot installed and running locally
- A Google account (for Google OAuth)
- A GitHub account (for GitHub OAuth)

---

## Google OAuth Setup

### Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services > Credentials**
4. Click **Create Credentials > OAuth 2.0 Client ID**
5. Configure the OAuth consent screen:
   - User Type: **External**
   - App name: **DreamDot**
   - User support email: Your email
   - Developer contact: Your email
6. Create OAuth 2.0 Client ID:
   - Application type: **Web application**
   - Name: **DreamDot Web**
   - Authorized redirect URIs:
     - Development: `http://localhost:5000/api/auth/callback/google`
     - Production: `https://yourdomain.com/api/auth/callback/google`

### Step 2: Add Credentials to .env

Copy the Client ID and Client Secret from Google Cloud Console:

```bash
# Google OAuth
GOOGLE_CLIENT_ID="1234567890-abcdefghijklmnop.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="GOCSPX-abcdefghijklmnopqrstuvwx"
```

### Step 3: Enable Google OAuth

Set the feature flags in `.env`:

```bash
# Server-side flag
GOOGLE_OAUTH_ENABLED="true"

# Client-side flag (for UI)
NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED="true"
```

### Step 4: Restart Development Server

```bash
npm run dev:all
```

### Step 5: Test Google OAuth

1. Navigate to `http://localhost:5000/auth/signin`
2. You should see a "Sign in with Google" button
3. Click it to test the OAuth flow
4. You'll be redirected to Google for authentication
5. After successful authentication, you'll be redirected back to DreamDot

---

## GitHub OAuth Setup

### Step 1: Create GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **New OAuth App**
3. Fill in the application details:
   - **Application name**: DreamDot
   - **Homepage URL**: 
     - Development: `http://localhost:5000`
     - Production: `https://yourdomain.com`
   - **Authorization callback URL**:
     - Development: `http://localhost:5000/api/auth/callback/github`
     - Production: `https://yourdomain.com/api/auth/callback/github`
4. Click **Register application**
5. Generate a new client secret

### Step 2: Add Credentials to .env

Copy the Client ID and Client Secret from GitHub:

```bash
# GitHub OAuth
GITHUB_ID="Iv1.a1b2c3d4e5f6g7h8"
GITHUB_SECRET="a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0"
```

### Step 3: Enable GitHub OAuth

Set the feature flags in `.env`:

```bash
# Server-side flag
GITHUB_OAUTH_ENABLED="true"

# Client-side flag (for UI)
NEXT_PUBLIC_GITHUB_OAUTH_ENABLED="true"
```

### Step 4: Restart Development Server

```bash
npm run dev:all
```

### Step 5: Test GitHub OAuth

1. Navigate to `http://localhost:5000/auth/signin`
2. You should see a "Sign in with GitHub" button
3. Click it to test the OAuth flow
4. You'll be redirected to GitHub for authentication
5. After successful authentication, you'll be redirected back to DreamDot

---

## Feature Flags Explained

### Server-Side Flags

These control whether OAuth providers are registered in NextAuth:

```bash
GOOGLE_OAUTH_ENABLED="true"   # Enables Google provider in NextAuth
GITHUB_OAUTH_ENABLED="true"   # Enables GitHub provider in NextAuth
```

### Client-Side Flags

These control whether OAuth buttons appear in the UI:

```bash
NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED="true"  # Shows Google sign-in button
NEXT_PUBLIC_GITHUB_OAUTH_ENABLED="true"  # Shows GitHub sign-in button
```

### Important Notes

- **Both flags must be set to "true"** for OAuth to work
- If only the server-side flag is enabled, the provider is available but no UI button appears
- If only the client-side flag is enabled, the button appears but clicking it will fail
- Setting either flag to `"false"` disables that OAuth provider

---

## Disabling OAuth

To disable OAuth providers:

1. Set feature flags to `"false"` in `.env`:
   ```bash
   GOOGLE_OAUTH_ENABLED="false"
   GITHUB_OAUTH_ENABLED="false"
   NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED="false"
   NEXT_PUBLIC_GITHUB_OAUTH_ENABLED="false"
   ```

2. Restart the development server

The OAuth buttons will disappear from the sign-in page, and the providers won't be available.

---

## Production Deployment

### Update Callback URLs

When deploying to production, update the OAuth callback URLs:

1. **Google Cloud Console**:
   - Add `https://yourdomain.com/api/auth/callback/google` to Authorized redirect URIs

2. **GitHub OAuth App Settings**:
   - Update Authorization callback URL to `https://yourdomain.com/api/auth/callback/github`

### Update Environment Variables

Update `.env` for production:

```bash
# Update NextAuth URL
NEXTAUTH_URL="https://yourdomain.com"

# Keep OAuth credentials the same (or use production credentials)
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
GITHUB_ID="..."
GITHUB_SECRET="..."

# Enable OAuth in production
GOOGLE_OAUTH_ENABLED="true"
GITHUB_OAUTH_ENABLED="true"
NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED="true"
NEXT_PUBLIC_GITHUB_OAUTH_ENABLED="true"
```

---

## Troubleshooting

### "Sign in with Google/GitHub" button doesn't appear

**Cause**: Client-side feature flag is not enabled or set incorrectly.

**Solution**:
```bash
# Make sure these are set to "true" (as strings)
NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED="true"
NEXT_PUBLIC_GITHUB_OAUTH_ENABLED="true"
```

Restart the dev server after making changes.

### OAuth callback fails with "Configuration Error"

**Cause**: Server-side feature flag is not enabled, or credentials are missing.

**Solution**:
```bash
# Check server-side flags
GOOGLE_OAUTH_ENABLED="true"
GITHUB_OAUTH_ENABLED="true"

# Check credentials are present
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
GITHUB_ID="..."
GITHUB_SECRET="..."
```

### "Redirect URI mismatch" error

**Cause**: The callback URL in your OAuth app doesn't match the one being used.

**Solution**:
- For Google: Ensure `http://localhost:5000/api/auth/callback/google` is in Authorized redirect URIs
- For GitHub: Ensure Authorization callback URL is `http://localhost:5000/api/auth/callback/github`
- Make sure `NEXTAUTH_URL` matches your domain

### OAuth works locally but not in production

**Cause**: Production callback URLs not configured, or wrong `NEXTAUTH_URL`.

**Solution**:
- Update OAuth app settings with production URLs
- Set `NEXTAUTH_URL="https://yourdomain.com"` in production `.env`
- Redeploy after updating environment variables

---

## Security Best Practices

1. **Never commit OAuth secrets to git**
   - Always use `.env` files (which are gitignored)
   - Use environment variables in CI/CD pipelines

2. **Use separate OAuth apps for development and production**
   - Create a "DreamDot Dev" and "DreamDot Production" OAuth app
   - This allows you to use different callback URLs and revoke access independently

3. **Restrict OAuth app access**
   - Google: Don't publish your app to production unless necessary
   - GitHub: Review the scopes requested (DreamDot only needs basic profile info)

4. **Rotate secrets regularly**
   - Regenerate OAuth secrets periodically
   - Update `.env` after rotation

---

## Support

For issues with OAuth setup:
1. Check this guide thoroughly
2. Review the [NextAuth.js documentation](https://next-auth.js.org/providers/google)
3. Check the [Integration Guide](INTEGRATION_GUIDE.md)
4. Contact the development team
