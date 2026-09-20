# 🚀 CSI Hall of PRs

> **Your first PR is not code. It's confidence.**

A beginner-friendly open source project by **Computer Society of India - SCT Student Branch** to help students make their first-ever Pull Request.

✨ **Contribute** → **See your name live** → **Share your achievement**

---

## 🌐 Live Website

👉 **[View Hall of PRs](https://csi-sct-sb.github.io/CSI-Hall-of-PRs/)**

---

## 🎯 What is This?

This is a **sandbox for beginners** where you can:

* ✅ Make your **first Pull Request**
* ✅ Learn how GitHub works
* ✅ See your name live on the CSI website
* ✅ Boost your developer profile
* ✅ Get started with open source

---

## 🧠 Why This Matters

Most students:
- Learn Git theoretically ❌
- But never actually contribute ❌

**This project helps you:**
> Turn knowledge into action ✅

---

## ⚡ How to Contribute (5 Minutes)

> For detailed contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

### Prerequisites
- A [GitHub](https://github.com) account
- Basic Git knowledge (or follow along!)
- [VS Code](https://code.visualstudio.com/) (or any text editor)
- [Git](https://git-scm.com/downloads) installed on your machine

---

### Step 1: Fork This Repository

Click the **Fork** button at the top right corner of this page to create your own copy of this repository.

![Fork Button](https://img.shields.io/badge/Click-Fork%20↗-blue?style=for-the-badge)

---

### Step 2: Clone Your Fork

Open your terminal and run:

```bash
git clone https://github.com/YOUR-USERNAME/CSI-Hall-of-PRs.git
```

> 🔁 Replace `YOUR-USERNAME` with your actual GitHub username.

---

### Step 3: Navigate into the Project

```bash
cd CSI-Hall-of-PRs
```

---

### Step 4: Create a New Branch

```bash
git checkout -b add-your-name
```

> 💡 You can name your branch anything, e.g., `add-john-doe`.

---

### Step 5: Add Your Card

Open **`index.html`** in your text editor and find this comment:

```html
<!-- ADD YOUR CARD ABOVE THIS LINE -->
```

**Copy the card template below** and paste it **just above** that comment:

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

Now customize it:

| Field | What to do |
|-------|-----------|
| `YOUR NAME` | Replace with your real name |
| `YOUR BIO` | Pick a bio from [`ChooseYourBio.txt`](ChooseYourBio.txt) or write your own (max 12 words) |

#### 📝 Example Card

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

> ⚠️ **Important:** Do NOT modify any other cards or code. Only add your own card above the `<!-- ADD YOUR CARD ABOVE THIS LINE -->` comment.

---

### Step 6: Save and Commit Your Changes

```bash
git add index.html
git commit -m "Add [Your Name] to Hall of PRs"
```

> 🔁 Replace `[Your Name]` with your actual name.

---

### Step 7: Push to Your Fork

```bash
git push origin add-your-name
```

---

### Step 8: Create a Pull Request

1. Go to your forked repository on GitHub.
2. You'll see a **"Compare & pull request"** button — click it.
3. Add a title like: `Add [Your Name] to Hall of PRs`
4. Add a short description (optional).
5. Click **"Create Pull Request"** ✅

---

### Step 9: Wait for Review 🎉

A maintainer will review your PR and merge it. Once merged, **your name will be live on the website!**

---

## 📂 Project Structure

```
CSI-Hall-of-PRs/
├── index.html          ← Main webpage (add your card here)
├── style.css           ← Styling for the website
├── app.js              ← JavaScript (popup & counter logic)
├── extract.js          ← Contributor extraction script
├── ChooseYourBio.txt   ← Pick your bio from here
├── CONTRIBUTING.md     ← Detailed contribution guidelines
├── README.md           ← You are here!
└── assets/
    └── logo.png        ← CSI logo
```

---

## 🎨 Choose Your Bio

Don't know what to write? Pick one from [`ChooseYourBio.txt`](ChooseYourBio.txt)! Here are a few examples:

| Bio |
|-----|
| Made my first PR and I'm honestly proud 😄🚀 |
| From confused to contributor in one step 💻✨ |
| First PR done, confidence unlocked 🔓🚀 |
| My open source journey begins today 🌱🚀 |
| From beginner to contributor 🌱💻 |
| Progress over perfection 💻🔥 |

> Or write your own — just keep it to **12 words or less**.

---

## 🤝 Contributing

We welcome all contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines, code of conduct, and best practices.

---

## 🛠️ Built With

- **HTML5** — Structure
- **CSS3** — Styling & animations
- **JavaScript** — Interactivity
- **GitHub Pages** — Hosting

---

## 📜 License

This project is open source and available for educational purposes by **CSI SCT Student Branch**.

---

## 🔗 Connect With Us

- 💼 [LinkedIn](https://www.linkedin.com/company/csi-sct-sb)
- 📸 [Instagram](https://www.instagram.com/csisctsb)
- 🐙 [GitHub](https://github.com/csi-sct-sb)

---

<p align="center">
  Made with ❤️ by <strong>CSI SCT Student Branch</strong>
</p>
