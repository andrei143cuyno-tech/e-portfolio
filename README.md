# Andrei Christian Aban — e-Professional Portfolio

A responsive single-page portfolio built with plain HTML, CSS, and JavaScript. It is designed for GitHub Pages and includes a professional profile, selected work, two STAR case studies, an ATS-friendly résumé with print-to-PDF styling, credentials/training, and a privacy note.

## Files

- `index.html` — page content and all portfolio sections
- `styles.css` — responsive styles, project artwork, accessibility states, and one-page résumé print layout
- `script.js` — mobile navigation, project filters, résumé print action, and dynamic footer year

## Preview locally

1. Download or extract the project folder.
2. Open `index.html` in a browser. No build tools or package installation are needed.
3. For a local development server, open the folder in VS Code and use an available static-server extension, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `andrei-eportfolio`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Wait for GitHub Pages to publish the site and open the URL shown in Settings → Pages.

To push from the terminal, run these commands from this folder after creating the empty GitHub repository:

```bash
git init
git add .
git commit -m "Create professional e-portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with the repository URL from your own GitHub account. If Git is already initialized, skip `git init` and check `git remote -v` first.

## Personalize before submitting

- Replace `your.professional.email@example.com` in `index.html` with a professional email address you are comfortable publishing. It appears in both the résumé and contact section.
- Confirm your education details and expected graduation details with your current records. The résumé intentionally does not state a graduation date that was not confirmed.
- Confirm that each certificate/training listed in the page has actually been completed. Add a safe public credential link if available; remove anything that is not earned or cannot be verified.
- Review the résumé and all project descriptions for accuracy. Update project outcomes to reflect what you actually implemented and tested. Add your own screenshots, demos, and repository links where you have them.
- The Dictionary Finder repository link and GitHub profile link are based on the supplied project context; verify that they are still correct.
- If you add references/recommendations, obtain permission first. Do not publish a referee's private phone number or email without consent.
- Do not upload identity numbers, home addresses, private phone numbers, school records, private API keys, passwords, confidential source code, or unredacted certificates.
- The supplied résumé draft included an internship labelled as sample experience and private contact/reference details. That internship and the references were not copied into this portfolio. Only add real experience that you can substantiate.

## Résumé PDF

Use the **Print / Save as PDF** button in the résumé section. The print stylesheet hides the rest of the website and formats the résumé as a clean, single-column A4 page. Select **Save as PDF** in the browser's print dialog. Check the exported PDF to confirm it fits on one page before submitting.

## Notes

- No framework or build step is required.
- The layout uses semantic HTML, responsive CSS, keyboard focus indicators, a skip link, and reduced-motion handling.
- The font import is optional. If you prefer no external network requests, remove the Google Fonts `@import` at the top of `styles.css`; system fallback fonts are included.
- The privacy statement describes design choices; it is not a legal certification. Review the actual content you choose to publish for RA 10173 compliance.
