# 🤝 Contributing to CSI Hall of PRs

First off, **thank you for contributing!** 🎉 Whether this is your first PR or your hundredth, we're glad you're here.

This guide will walk you through everything you need to know to contribute to the Hall of PRs.

---

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
- [Getting Started](#-getting-started)
- [Adding Your Card — Step by Step](#-adding-your-card--step-by-step)
- [Card Template Reference](#-card-template-reference)
- [Choosing Your Bio](#-choosing-your-bio)
- [Submitting Your Pull Request](#-submitting-your-pull-request)
- [What Happens Next?](#-what-happens-next)
- [Do's and Don'ts](#-dos-and-donts)
- [Need Help?](#-need-help)

---

## 📜 Code of Conduct

By participating in this project, you agree to maintain a **respectful, inclusive, and harassment-free** environment. Be kind, be helpful, and be welcoming to everyone — especially beginners.

---

## 💡 How Can I Contribute?

### 🟢 For Beginners (Start Here!)

**Add your contributor card** to the Hall of PRs website. This is the main way to contribute and is designed to be beginner-friendly.

### 🔵 For Experienced Contributors

- 🐛 Report bugs by opening an [Issue](https://github.com/csi-sct-sb/CSI-Hall-of-PRs/issues)
- 💡 Suggest new features or improvements
- 🎨 Improve the UI/UX design
- 📝 Improve documentation
- ♿ Fix accessibility issues

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

| Tool | Download Link |
|------|------|
| **Git** | [git-scm.com/downloads](https://git-scm.com/downloads) |
| **Code Editor** | [VS Code](https://code.visualstudio.com/) (recommended) |
| **GitHub Account** | [github.com](https://github.com) |

### Verify Git Installation

Open your terminal and run:

```bash
git --version
```

You should see something like `git version 2.x.x`. If not, [install Git](https://git-scm.com/downloads) first.

---

## 🃏 Adding Your Card — Step by Step

### Step 1: Fork the Repository

1. Go to the [CSI Hall of PRs repository](https://github.com/csi-sct-sb/CSI-Hall-of-PRs).
2. Click the **Fork** button in the top-right corner.
3. This creates a copy of the repository under your GitHub account.

---

### Step 2: Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/CSI-Hall-of-PRs.git
```

> ⚠️ Replace `YOUR-USERNAME` with your actual GitHub username.

---

### Step 3: Navigate to the Project

```bash
cd CSI-Hall-of-PRs
```

---

### Step 4: Create a New Branch

**Always work on a new branch**, never directly on `main`:

```bash
git checkout -b add-your-name
```

Good branch name examples:
- `add-jane-doe`
- `add-my-card`
- `first-contribution`

---

### Step 5: Open `index.html`

Open the file in your text editor. You can use VS Code:

```bash
code index.html
```

---

### Step 6: Find the Insertion Point

Scroll through `index.html` and look for this comment:

```html
<!-- ADD YOUR CARD ABOVE THIS LINE -->
```

This is where you'll paste your card.

---

### Step 7: Copy and Paste the Card Template

Copy this template and paste it **directly above** the `<!-- ADD YOUR CARD ABOVE THIS LINE -->` comment:

```html
        <div class="card">
            <div class="badge">
                <div class="medal"><span class="number">1</span></div>
                <p class="badge-text">FIRST PR</p>
            </div>

            <h2 class="name">YOUR NAME</h2>
            <p class="bio">YOUR BIO</p>
            <p class="credit">#FirstPR with CSI SCT SB</p>
            <button class="celebrate-btn" onclick="showPopup()">
              Celebrate 🎉
            </button>
        </div>
```

---

### Step 8: Customize Your Card

Replace the placeholder values:

| Placeholder | Replace With | Rules |
|------------|-------------|-------|
| `YOUR NAME` | Your real name | Keep it clean and professional |
| `YOUR BIO` | A short bio or quote | Max **12 words**. Pick from [`ChooseYourBio.txt`](ChooseYourBio.txt) or write your own |

#### ✅ Example — Completed Card

```html
        <div class="card">
            <div class="badge">
                <div class="medal"><span class="number">1</span></div>
                <p class="badge-text">FIRST PR</p>
            </div>

            <h2 class="name">Jane Doe</h2>
            <p class="bio">From confused to contributor in one step 💻✨</p>
            <p class="credit">#FirstPR with CSI SCT SB</p>
            <button class="celebrate-btn" onclick="showPopup()">
              Celebrate 🎉
            </button>
        </div>
```

---

### Step 9: Save the File

Save `index.html` after making your changes (`Ctrl + S` or `Cmd + S`).

---

### Step 10: Preview Your Changes (Optional)

Open `index.html` in your browser to verify your card looks correct:
- Right-click `index.html` → **Open with** → your browser
- Or use the VS Code **Live Server** extension

Check that:
- ✅ Your name displays correctly
- ✅ Your bio is readable and within 12 words
- ✅ The card looks good alongside other cards
- ✅ The "Celebrate 🎉" button works

---

## 📝 Card Template Reference

Here's the full card structure with explanations:

```html
<div class="card">
    <!-- Badge Section — DO NOT MODIFY -->
    <div class="badge">
        <div class="medal"><span class="number">1</span></div>
        <p class="badge-text">FIRST PR</p>
    </div>

    <!-- Your Details — EDIT THESE -->
    <h2 class="name">YOUR NAME</h2>           <!-- Your full name -->
    <p class="bio">YOUR BIO</p>               <!-- Short bio, max 12 words -->
    <p class="credit">#FirstPR with CSI SCT SB</p>  <!-- DO NOT MODIFY -->

    <!-- Celebrate Button — DO NOT MODIFY -->
    <button class="celebrate-btn" onclick="showPopup()">
      Celebrate 🎉
    </button>
</div>
```

### What You CAN Edit
- ✅ `YOUR NAME` — your real name
- ✅ `YOUR BIO` — a short bio (max 12 words)

### What You Should NOT Edit
- ❌ The badge section (medal, number, badge-text)
- ❌ The credit line (`#FirstPR with CSI SCT SB`)
- ❌ The celebrate button
- ❌ Any CSS class names
- ❌ Any other contributor's card

---

## 🎨 Choosing Your Bio

Open [`ChooseYourBio.txt`](ChooseYourBio.txt) for a full list of ready-made bios. Here are some popular ones:

| Category | Bio |
|----------|-----|
| 🔥 Hype | Made my first PR and I'm honestly proud 😄🚀 |
| 💪 Motivational | I was scared, but I still did it 😤✨ |
| 🎯 Simple | First PR done, confidence unlocked 🔓🚀 |
| 🌱 Journey | My open source journey begins today 🌱🚀 |
| 💻 Technical | CSE student · Tech enthusiast · Open source contributor |
| 🏆 Achievement | First PR. It feels like a win 🏆 |
| 📈 Growth | From beginner to contributor 🌱💻 |
| 🔥 Bold | No more fear, just action 💪🚀 |

> **Or write your own!** Just keep it to **12 words or less** and keep it appropriate.

---

## 📤 Submitting Your Pull Request

### Stage and Commit

```bash
git add index.html
git commit -m "Add [Your Name] to Hall of PRs"
```

> Replace `[Your Name]` with your actual name.

### Push to GitHub

```bash
git push origin add-your-name
```

> Replace `add-your-name` with whatever branch name you used in Step 4.

### Open a Pull Request

1. Go to your forked repository on GitHub.
2. Click the **"Compare & pull request"** button (it appears automatically after pushing).
3. Fill in the details:

| Field | Example |
|-------|---------|
| **Title** | `Add Jane Doe to Hall of PRs` |
| **Description** | `Adding my contributor card. This is my first PR! 🎉` |

4. Click **"Create Pull Request"** ✅

---

## ⏳ What Happens Next?

1. ⏱️ A maintainer will **review your PR** (usually within 24–48 hours).
2. ✅ If everything looks good, your PR will be **merged**.
3. 🌐 Your card will appear **live on the website** after deployment.
4. 🎉 **Celebrate!** Share your achievement on LinkedIn or Instagram.

### If Changes Are Requested

Don't worry! The maintainer might ask you to:
- Fix a typo in your name or bio
- Adjust formatting
- Remove accidental changes to other files

Simply make the changes locally, commit, and push again — the PR updates automatically.

---

## ✅ Do's and Don'ts

### ✅ Do

- Add **only your own card**
- Keep your bio **under 12 words**
- Use a **real or recognizable name**
- Follow the **exact card template**
- Create a **new branch** for your changes
- **Preview** your changes before submitting
- Write a **clear commit message**

### ❌ Don't

- Modify **other contributors' cards**
- Change **CSS, JS, or other files** (unless fixing a bug with an issue)
- Add **inappropriate content**, links, or images
- Submit **duplicate cards**
- Push directly to the **main branch**
- Remove the **sample card comment** in the HTML

---

## ❓ Need Help?

If you're stuck at any step, don't hesitate to reach out:

- 💬 Open an [Issue](https://github.com/csi-sct-sb/CSI-Hall-of-PRs/issues) on GitHub
- 📸 DM us on [Instagram](https://www.instagram.com/csisctsb)
- 💼 Connect on [LinkedIn](https://www.linkedin.com/company/csi-sct-sb)

We're here to help you succeed! 💪

---

<p align="center">
  Made with ❤️ by <strong>CSI SCT Student Branch</strong><br>
  <em>Helping students make their first PR since day one.</em>
</p>
