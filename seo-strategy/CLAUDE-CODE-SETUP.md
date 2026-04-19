# Using Claude Code for Future Git Operations

Since the sandbox (Cowork) can't authenticate to GitHub, Claude Code is the better tool for any git push/pull operations going forward. Claude Code runs on your machine with your existing Git credentials already set up.

## When to Use Claude Code

Use Claude Code (command line Claude) when you need to:
- Push commits to GitHub
- Pull remote changes
- Resolve merge conflicts
- Commit multiple files at once
- Any git operation that requires authentication

## How to Use Claude Code

1. Open your terminal and navigate to the project folder:
   ```
   cd "C:\Users\nicki\Desktop\Master websites\Drone Survey CR Copy 2026"
   ```

2. Ask Claude Code (via the command line):
   ```
   claude --help
   ```
   to see available options, OR directly describe your task:

3. Example prompts for Claude Code:

   **For a simple push after editing files:**
   ```
   claude "I just edited some files in my DroneSurveyCR website. 
   Can you commit and push them to GitHub with a descriptive message?
   Folder: C:\Users\nicki\Desktop\Master websites\Drone Survey CR Copy 2026
   Git author: dronesurveycr@gmail.com"
   ```

   **For pulling changes before editing:**
   ```
   claude "Pull the latest from origin/master, check git status,
   and tell me what changed"
   ```

   **For checking what's been modified:**
   ```
   claude "Run git status and git diff to show me what's changed locally"
   ```

## Why Claude Code Works Better

- **Credentials:** Your machine already has GitHub credentials configured (SSH key or PAT)
- **No sandbox limitations:** Runs directly on your computer, not in a restricted environment
- **Speed:** No network latency between services
- **Full git access:** Can handle complex operations like rebases, merges, and conflict resolution

## Quick Reference — Common Tasks

### Push new blog post
```
claude "I wrote a new blog post at blog/[filename].html 
and updated sitemap.xml and blog/index.html. 
Can you commit with message 'Add [date] blog: [title]' and push?"
```

### Sync before editing
```
claude "Pull origin/master, rebase if needed, and show me git status"
```

### Create a commit
```
claude "Stage these files and commit: [list files]
Message: '[your message]'
Then push to origin/master"
```

## Note for Automated Tasks

When the Tuesday/Friday blog tasks run in a future Cowork session and need to push, they will also fail to authenticate to GitHub from the sandbox. The workaround is to have those tasks commit locally, then you'll run a quick Claude Code command to push everything at once:

```
claude "Push all local commits to origin/master"
```

This is a one-liner from your terminal and takes 10 seconds.

---

*Setup guide created April 2026*
