# OAuth Quick Start

**5-minute guide to enable OAuth in DreamDot**

## Enable Google OAuth

```bash
# 1. Add to .env
GOOGLE_CLIENT_ID="your_client_id"
GOOGLE_CLIENT_SECRET="your_client_secret"
GOOGLE_OAUTH_ENABLED="true"
NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED="true"

# 2. Restart
npm run dev:all

# 3. Test at http://localhost:5000/auth/signin
```

**Get credentials**: [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)  
**Callback URL**: `http://localhost:5000/api/auth/callback/google`

---

## Enable GitHub OAuth

```bash
# 1. Add to .env
GITHUB_ID="your_client_id"
GITHUB_SECRET="your_client_secret"
GITHUB_OAUTH_ENABLED="true"
NEXT_PUBLIC_GITHUB_OAUTH_ENABLED="true"

# 2. Restart
npm run dev:all

# 3. Test at http://localhost:5000/auth/signin
```

**Get credentials**: [github.com/settings/developers](https://github.com/settings/developers)  
**Callback URL**: `http://localhost:5000/api/auth/callback/github`

---

## Disable OAuth

```bash
# Set all to "false" in .env
GOOGLE_OAUTH_ENABLED="false"
GITHUB_OAUTH_ENABLED="false"
NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED="false"
NEXT_PUBLIC_GITHUB_OAUTH_ENABLED="false"

# Restart
npm run dev:all
```

---

## Troubleshooting

**Buttons don't appear?**  
→ Check `NEXT_PUBLIC_*` flags are set to `"true"` (as strings)

**OAuth fails?**  
→ Check server-side flags and credentials are set

**Redirect error?**  
→ Verify callback URLs match in OAuth app settings

---

**For detailed instructions, see `OAUTH_SETUP.md`**
