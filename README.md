# Romantic Birthday Website 💗

A responsive React + Tailwind CSS birthday surprise website with:
- Romantic hero section and responsive design
- Photo gallery with click-to-open details
- Music play/pause button
- Interactive digital gift surprise
- Personal birthday letter modal
- Smooth scrolling and reduced-motion support
- Netlify single-page redirect rule

## 1. Requirements
Install Node.js LTS from https://nodejs.org/ . Then open this project folder in VS Code.

## 2. Install and run locally
```bash
npm install
npm run dev
```
Open the local URL shown in the terminal (usually `http://localhost:5173`).

## 3. Personalize the website
Open `src/App.jsx`:
- Change the birthday message and letter text.
- In the `memories` array, replace the sample image URLs with your photos.
- Change captions and notes to match your memories.
- Replace the hero image URL with a photo you have permission to use.


### Use your five local photos
Create this folder inside `src` (keep the spelling and capitalization exactly as shown):
`src/Imaiges/`

Put your five image files there using these names:
- `puja1.jpg` (or `.png` / `.webp`)
- `puja2.jpg` (or `.png` / `.webp`)
- `puja3.jpg` (or `.png` / `.webp`)
- `puja4.jpg` (or `.png` / `.webp`)
- `puja5.jpg` (or `.png` / `.webp`)

The imports in `src/App.jsx` use extensionless paths, so Vite resolves common image extensions. Keep each filename lowercase exactly as above. `Puja1` is used in the hero image and all five images are shown in the gallery.

### Add your own photos (recommended)
Create `public/images/` and copy photos into it, for example:
- `public/images/hero.jpg`
- `public/images/memory-1.jpg`
Then use `/images/hero.jpg` and `/images/memory-1.jpg` in `src/App.jsx`.
Keep photos compressed (ideally under 500 KB each) for fast mobile loading.

### Add birthday music
Copy an MP3 you are allowed to use to:
`public/music/birthday-song.mp3`
The existing music control plays that file. Browsers block autoplay until the visitor interacts with the page, so music starts only after clicking the button.

### Change the title
Edit the `<title>` and description in `index.html`.

## 4. Build for production
```bash
npm run build
npm run preview
```
Vite creates the production website in `dist/`.

## 5. Free deployment on Netlify
### Option A — deploy from GitHub (recommended)
1. Create a new GitHub repository and push this project.
2. Sign in at https://app.netlify.com/ and choose **Add new site → Import an existing project**.
3. Connect GitHub and select your repository.
4. Set **Build command** to `npm run build`.
5. Set **Publish directory** to `dist`.
6. Click **Deploy**. Netlify will provide a public URL.
7. Future pushes to the connected branch trigger new deployments.

### Option B — manual deploy
1. Run `npm install` and `npm run build` locally.
2. Open Netlify's manual deploy page and drag the generated `dist` folder into the drop area.
3. If you change the site later, rebuild and upload the new `dist` folder.

The included `public/_redirects` file supports client-side routes if you add them later.

## 6. Free deployment on GitHub Pages
Netlify is the simpler choice for this Vite project. GitHub Pages is also possible, but needs a Vite `base` setting matching the repository name and a GitHub Actions workflow. Use Netlify to avoid that extra configuration.

## Notes
- The gallery uses public Unsplash image URLs as visual placeholders; replace them with your own photos for a personal gift.
- Use images and audio you own or have permission to share.
- No account, database, or paid service is required.
