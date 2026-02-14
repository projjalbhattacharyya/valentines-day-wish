# 💖 Valentine’s Week Interactive Website

A fully interactive, multi-page romantic website that guides users through **Valentine’s Week (Feb 7–14)** with animations, interactions, and surprises for each day.

Built with **HTML + CSS + JavaScript** only — no frameworks, no backend required.

---

# 🌹 Features

* 7 interactive pages (Rose → Valentine)
* Unlock-next-day progression system
* Animations & effects on every page
* Promise submission via email
* Photo slideshow finale
* Music player
* Fully mobile responsive
* Works on any browser

---

# 📂 Project Structure

```
VALENTINES_DAY/
│
├── index.html
├── pages/
├── css/
├── js/
├── data
├── assets/
│   ├── images/
│   ├── audio/
│   └── icons/
├── README
```

---

# 🚀 Live Deployment (Recommended: Netlify)

### Steps

1. Go to → https://netlify.com
2. Drag and drop project folder
3. Done 🎉
   Netlify instantly gives you a live URL.

You can now share your website publicly.

---

# 📬 IMPORTANT — Setup Email Receiving (Promise Page)

The Promise Day page sends user promises to your email.

You **must configure this before publishing**.

---

### Step 1 — Open file

```
pages/promise5.html
```

---

### Step 2 — Find form tag

```
<form id="promiseForm" action="https://formsubmit.co/YOUR_EMAIL" method="POST">
```

---

### Step 3 — Replace with YOUR email

Example:

```
action="https://formsubmit.co/yourname@gmail.com"
```

---

### Step 4 — Activate Form

When first promise is submitted:

You’ll receive an email from **FormSubmit**

Click:

```
Activate Form
```

After that it works forever.

---

✅ Now promises will be sent directly to your inbox.

---

# 🖼 Add Your Photos (Final Page)

Open folder:

```
assets/images/
```

Replace images with your own couple photos:

```
1.png
2.png
3.png
4.png
```

Keep filenames same or update inside:

```
js/pages/valentines.js
```

Edit this array if filenames differ:

```
const images = [
"../assets/images/1.png",
"../assets/images/2.png"
];
```

---

# 🎵 Add Music

Place your audio file in:

```
assets/audio/
```

Then update in:

```
pages/valentines.html
```

Replace filename:

```
<audio id="music" src="../assets/audio/YOURFILE.mp3"></audio>
```

---

⚠️ **Copyright Note**

If publishing publicly:

Do NOT upload copyrighted songs.

Use:

* instrumental
* royalty-free music
* or voice note (recommended 💖)

---

# 🎨 Customize Text Messages

You can edit romantic lines in each page file:

```
pages/rose1.html
pages/propose2.html
pages/chocolate3.html
...
```

Search for text inside `<p>` tags and change freely.

---

# 🔒 Progress System (How It Works)

Each page checks user progress using:

```
localStorage
```

Example:

```
localStorage.setItem("progress","rose");
```

This prevents users from skipping days.

---

# 🌍 Publishing for Public Use

To share publicly:

1. Deploy on Netlify
2. Copy site URL
3. Share link anywhere:

   * LinkedIn
   * Instagram bio
   * Portfolio
   * GitHub README

---

# 🏆 What This Project Demonstrates

This project showcases skills in:

* Frontend architecture
* UI/UX design
* Animation logic
* Event handling
* Mobile responsiveness
* Interactive storytelling

It’s not just a website — it’s an **experience project**.

---

# 📜 License

Free to use for personal projects 💝

If you share publicly, please credit:

```
Inspired template by Projjal
```

(optional but appreciated)

---

# ❤️ Final Note

This project was designed to create a memorable emotional experience, not just display content.

If someone smiles while using it —
it did its job.

---

✨ Enjoy building love stories on the web.

