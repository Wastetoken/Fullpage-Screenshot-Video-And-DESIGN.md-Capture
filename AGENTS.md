# DesignScope Capture — Base44 Dev Environment

## What this project is

A **Chrome Extension** (Manifest V3) called "DesignScope Capture" (formerly "CocoShot").
It is a pre-built extension — no build step, no package.json, no server. The source lives
in `DesignScope-Capture-READY-TO-UPLOAD/` and is meant to be loaded as an unpacked extension
in Chrome via `chrome://extensions → Developer mode → Load unpacked`.

## How it runs in Base44

Since a Chrome extension cannot run as a web app, we serve its static files via **nginx**
on port 3000 so the UI pages are visible in the preview.

- `docker-compose.base44.yml` — nginx:alpine serving the extension folder on port 3000
- `nginx.base44.conf` — nginx server config
- `DesignScope-Capture-READY-TO-UPLOAD/index.html` — landing page linking to all extension pages

## Limitations

Extension-specific APIs (`chrome.tabs`, `chrome.runtime`, `chrome.storage`, `chrome.scripting`,
etc.) only work inside Chrome's extension context. Pages will render but interactive
features that depend on those APIs will error in the preview. The design extractor
(`design-extractor/`) runs locally and does not require an API key.

## Verification

```bash
docker compose -f docker-compose.base44.yml up -d
curl -sf http://localhost:3000/                              # landing page
curl -sf http://localhost:3000/src/pages/popup.html           # popup UI
curl -sf -o /dev/null -w '%{http_code}' http://localhost:3000/assets/popup.html-B3DoIyR0.js  # → 200
```

## No secrets required

This extension runs entirely locally. No external API keys or credentials are needed.
