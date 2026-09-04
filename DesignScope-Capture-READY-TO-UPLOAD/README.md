# DesignScope Capture — Chrome-ready source

This is the single clean folder to load into Chrome as an unpacked extension.

## Install in Chrome

1. Open chrome://extensions.
2. Turn on Developer mode.
3. Click Load unpacked.
4. Select the **DesignScope-Capture-READY-TO-UPLOAD** folder.
5. Pin **DesignScope Capture** from the extensions menu.

Do not select the repository root or the folder's parent directory. The manifest.json file is already at this folder's root.

## Included tools

- Visible-area, full-page, selected-area, desktop/window, and history-based screenshot capture.
- Annotation and PDF, HTML, and Markdown export.
- Screen and camera recording with the editing surfaces.
- Local Design Extractor in AI Tools, producing validated DESIGN.md or SKILL.md files from the active page.

## Permissions and privacy

Design extraction runs locally in the extension. It does not require an API key or external service. The included icon set is under src/assets/icons and is already wired into manifest.json.
