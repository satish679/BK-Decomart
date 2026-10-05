# BK Decomart

Website for BK Decomart — luxury home décor, Madurai. React (Craco) frontend +
FastAPI backend.

This repo was originally scaffolded on Emergent and has been de-coupled from
it: no Emergent-only packages, scripts, or hosted assets remain. The AI room
visualizer feature has also been removed — this is now a plain marketing
site with a photo gallery, product pages, and enquiry links.

## What changed from the Emergent version

- Removed `emergentintegrations` (a private package, not on public PyPI —
  installs would fail outside Emergent's own environment).
- Removed the AI Room Visualizer entirely: the `/visualizer` page, its nav/
  footer links, its homepage teaser section, its FAQ/Terms/Privacy mentions,
  and the backend `/api/visualize` endpoint.
- Removed the `assets.emergent.sh` script tag and the `@emergentbase/visual-edits`
  dev dependency from the frontend.
- Replaced the hot-linked logo image (hosted on Emergent's temporary
  per-job CDN) with a local file you control: `frontend/public/logo.jpg`.
- Added `.env.example` files for both frontend and backend so required
  config is explicit instead of relying on Emergent auto-injecting it.
- Deleted every remaining Emergent scaffold artifact with zero functional
  connection to the app: the `.emergent/` automation folder, `test_result.md`
  and `test_reports/` (Emergent's own testing-agent protocol files),
  `memory/PRD.md`, `design_guidelines.json`, the old AI image-generation
  scripts (`generate_images.py`/`generate_images_2.py`), and the unused
  `frontend/src/constants/testIds/` directory (a QA-bot integration for a
  login feature this site never had). None of these were imported by any
  real code — verified by rebuilding the frontend and booting the backend
  after removal. The site has no AI features running anywhere.

## Where images are stored

There are two layers. For any image slot (e.g. `hero-living`, `cat-curtains`,
`gallery-1`), the site tries the real photo first and silently falls back to
a stock photo if it's missing — see `frontend/src/components/LuxImg.jsx`.

**1. Real photos — `backend/static/img/generated/`**
This is where your actual product/site photos live, as PNG files named
after their slot, e.g.:
```
backend/static/img/generated/hero-living.png
backend/static/img/generated/cat-curtains.png
backend/static/img/generated/gallery-1.png
...
```
**To replace a photo: just overwrite the matching PNG file in this folder**
with your own photo (keep the same filename). To add a brand-new slot, drop
in a new PNG here and reference its name via `<LuxImg name="your-slot-name" />`
wherever you want it to appear (see file names currently in that folder for
the full list of 18 slots in use — living rooms, bedrooms, dining, curtains,
blinds, wallpaper, flooring, carpets, mats, mattresses, plants, gallery
shots, before/after, brand story).

The backend serves these at `/api/static/img/generated/<name>.png`, and the
frontend fetches them relative to `REACT_APP_BACKEND_URL`.

**2. Stock-photo fallbacks — `frontend/src/lib/site.js`**
The `FALLBACK` object near the top of this file maps each slot name to an
Unsplash URL, used only if the matching PNG above is missing or fails to
load. You can leave these as-is (harmless placeholders) or point them at
your own hosted images.

**3. Logo — `frontend/public/logo.jpg`**
Referenced from `frontend/src/lib/site.js` (`SITE.logoUrl`). Add your logo
file here (any format — just update the filename/extension in `site.js` to
match).

## Setup

### 1. Backend

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # fill in MONGO_URL
uvicorn server:app --reload --port 8000
```

`MONGO_URL` — a MongoDB connection string. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
has a free tier that works fine.

### 2. Frontend

```bash
cd frontend
yarn install   # or npm install
cp .env.example .env   # set REACT_APP_BACKEND_URL to your backend's URL
yarn start     # or npm start
```

### 3. Add your images

See "Where images are stored" above — drop your photos into
`backend/static/img/generated/` and your logo into `frontend/public/logo.jpg`.

## Deploying

Any standard host works now that the code has no Emergent lock-in:

- **Backend**: Render, Railway, Fly.io, or a plain VPS — anything that can
  run a Python/uvicorn process and reach your MongoDB instance.
- **Frontend**: Vercel, Netlify, or Cloudflare Pages — point the build
  command at `yarn build` inside `frontend/`, and set `REACT_APP_BACKEND_URL`
  as an environment variable in the host's dashboard to your deployed
  backend's URL.
- **Database**: MongoDB Atlas free tier is the easiest option.

Set `CORS_ORIGINS` on the backend to your frontend's deployed URL once it's live.
