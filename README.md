# Cook & Bake Academy practice website

A responsive demonstration catalogue with 20 sample courses, search and filters,
validated sign-up forms, a local course assistant, and a workshop invitation
that appears after 10 seconds. Forms do not send or store personal information.

## GitHub Pages

In Settings → Pages, choose **Deploy from a branch**, select the branch holding
these files and the **/docs** folder, then save. The site uses relative asset
paths so it works under a repository URL. No build step is required.

## Checks

With Node.js installed, run `npm run eval` or `npm run check`.
These run 30 demo checks, not the official course golden-question evaluation.

## Assessment scope

The catalogue contains synthetic data. The assistant uses JavaScript demo
documents, not the lab SQLite FTS5 knowledge base. A real hook run and the exact
Term 4 flyer require the original lab project and source materials. The site
includes a screenshot guide explaining the available screens and limitations.

## Image credit

“Croissant” by Ondřej Šmejkal, Wikimedia Commons, CC BY 3.0, cropped for display.
Source: https://commons.wikimedia.org/wiki/File:Croissant_(238010371).jpeg
License: https://creativecommons.org/licenses/by/3.0/
