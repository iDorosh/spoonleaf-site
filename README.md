# Spoonleaf website

A static marketing and privacy website for the Spoonleaf iPhone and iPad app. It uses plain HTML, CSS, and JavaScript, with no build step, external packages, remote fonts, analytics, or form backend.

## Local preview

Run from this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173`. Both `index.html` and `privacy.html` use relative asset and internal-page URLs, so the site works beneath a GitHub Pages repository path.

## Publish with GitHub Pages

Publish the repository root from the desired branch in GitHub Pages settings. `.nojekyll` keeps the static files intact. No credentials, app source, build artifacts, or private user data belong in this repository.

The marketing page intentionally says “Coming soon on the App Store.” Replace that text with a verified App Store URL and appropriate badge only when a public listing exists. Canonical and social-preview URLs target `https://idorosh.github.io/spoonleaf-site/`; update them and `sitemap.xml` if the deployment domain changes.

## Assets

`assets/images/` contains optimized local copies of the app icon, bundled sample pasta image, three actual iPhone library-layout screenshots, and an actual iPad favorites/detail screenshot. The source screenshots show the bundled sample recipe, not personal cookbook content. The food photograph was generated for the app concept. Screenshots were captured from the app on November 12, 2026. The interactive layout preview swaps these real screenshots; it does not simulate an import or collect recipe links.

## Privacy copy

The policy is based on the app’s local SwiftData store, optional private CloudKit configuration, temporary URL-import/image sessions, local App Group share inbox, JSON backups, and current absence of app-owned analytics/advertising SDKs. Website hosting is described as GitHub Pages, which logs visitor IP addresses for security. The support contact is `ian.dorosh@outlook.com`.

Before releasing a changed app or changing hosting, keep these statements aligned with the implementation. Confirm the owner’s support-email retention practice and any use of Apple-provided crash reports or App Store analytics when finalizing App Store privacy disclosures. Do not treat a policy page as a substitute for those disclosures. No claim of end-to-end encryption, verified cross-device synchronization, universal import compatibility, or zero third-party data processing is made.

Primary references reviewed November 12, 2026:

- [Apple app privacy details](https://developer.apple.com/app-store/app-privacy-details/)
- [Apple CloudKit containers](https://developer.apple.com/documentation/cloudkit/ckcontainer)
- [Apple Privacy Policy](https://www.apple.com/legal/privacy/)
- [GitHub Pages data collection](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection)
- [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)

## Interaction and accessibility

The three library-layout buttons update the screenshot and an announced description. FAQs use native disclosure elements. All main content works without JavaScript. Motion honors the system’s reduced-motion preference, controls are keyboard accessible, and the pages include a skip link, heading structure, descriptive image text, and visible focus indicators.
