# Dr. Fahad Ayaz — Portfolio

A single-page portfolio site hosted on GitHub Pages at https://faay65.github.io/

## How It Works

Everything lives in **`index.html`** — the page structure, all styling (in a
`<style>` block), and all content (in `<script>` blocks near the bottom of the
file). There are no separate data or CSS files to wire up; open `index.html` and
edit the relevant section in place.

> Note: earlier versions of this project kept content in a `data/` folder and
> styling in `css/style.css`. Those files are no longer used and have been
> removed — `index.html` is now the single source of truth.

## File Map

| File / Folder | What it holds |
|---------------|---------------|
| `index.html` | The entire site: layout, styles, content, and scripts |
| `photos/` | Event photos shown in the gallery |
| `Certificates/` | Certificate images shown in the Certificates section |
| `Logos/` | Institution logos used in the Education section |

## Editing Content

Open `index.html` and scroll to the labelled `<script>` section. Each content
block is a JavaScript array/object you can edit directly:

- `PERSONAL` — name, title, photo, languages, hero stats
- `CONTACT` — email, phone, office, social links
- `ABOUT` — summary paragraphs and research tags
- `EDUCATION` — degrees, institutions, years
- `EXPERIENCE` — roles, dates, descriptions
- `PUBLICATIONS` — papers, venues, DOI links
- `PROJECTS` — current/ongoing projects
- `SKILLS` — skill groups and percentages
- `CERTIFICATES` / `AWARDS` / `ACHIEVEMENTS` — recognition section
- `COLLABORATORS` — partner institutions
- `PHOTOS` — event gallery images

### Add a Certificate

1. Put the image file in the `Certificates/` folder.
2. In `index.html`, find the `CERTIFICATES` array and add an entry:
```js
{
  title:  "Certificate Name",
  issuer: "Issuing Organisation",
  year:   "2026",
  image:  "your_file.png",   // filename inside Certificates/
  url:    "https://verification-link",  // optional
},
```

### Add a Photo

1. Put the image file in the `photos/` folder.
2. In `index.html`, find the `PHOTOS` array and add an entry:
```js
{
  file:     "graduation.jpg",
  caption:  "PhD Graduation",
  location: "University of Glasgow",
  year:     "2025",
  category: "Graduation",
},
```

### Add a Publication

In `index.html`, find the `PUBLICATIONS` array and add an entry:
```js
{
  type:  "Journal",
  year:  "2026",
  title: "Your paper title",
  venue: "IEEE Transactions on ...",
  tags:  ["Tag1", "Tag2"],
  url:   "https://doi.org/...",
},
```

### Change Colours

In `index.html`, find the `:root` block inside the `<style>` section near the
top and edit the variables (`--blue`, `--cyan`, `--bg-dark`, etc.).

## Publishing to GitHub Pages

1. Verify your changes by opening `index.html` locally in a browser.
2. Commit and push to the `faay65.github.io` repository (keep `index.html` at
   the repository root).
3. GitHub Pages serves the updated site automatically.
