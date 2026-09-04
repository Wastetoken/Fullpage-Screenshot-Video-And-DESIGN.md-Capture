# CocoShot + Design Extractor

Visual-Capture is the unified Chrome extension. It preserves the existing CocoShot screenshot and recording runtime and adds the DESIGN.md/SKILL.md workflow to the popup's AI Tools section.

## Unified capabilities

- Full-page, visible-area, selected-area, desktop/window, and screenshot-history workflows.
- Annotation, PDF, HTML, Markdown, and video recording tools.
- A Design Extractor action that samples the active page and creates validated DESIGN.md or SKILL.md guidance for AI coding tools.

## Design Extractor architecture

The integration is kept separate from the compiled capture internals so upgrades to the capture runtime remain low-risk:

1. design-content-script.js samples visible elements and page signals.
2. design-extractor/lib/normalize.mjs deduplicates and assigns semantic-like tokens.
3. The existing generators produce DESIGN.md or SKILL.md.
4. validate.mjs reports structural and accessibility conformance issues.
5. The existing AI Tools popup bundle mounts the extractor panel on demand.

Extraction is local to the extension and requires no network service. It uses the active-tab permission only after the user chooses the extractor action.

## Loading

Load Visual-Capture as an unpacked extension from chrome://extensions.
