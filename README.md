# Dr. Fahad Ayaz — Portfolio

## How to Edit Your Portfolio

You only ever need to edit files in the `data/` folder.
Each file controls one section of your website.

---

## File Map

| File | What it controls |
|------|-----------------|
| `data/personal.js` | Your name, title, photo, languages, stats |
| `data/contact.js` | Email, phone, office, LinkedIn, Scholar, ResearchGate |
| `data/about.js` | Professional summary paragraphs and tags |
| `data/education.js` | Degrees, institutions, years, URLs |
| `data/experience.js` | Jobs, roles, dates, descriptions |
| `data/publications.js` | Papers, journals, conferences, DOI links |
| `data/projects.js` | Ongoing/current research projects |
| `data/skills.js` | Skill groups and percentages |
| `data/certificates.js` | Certificates, awards, honours, achievements |
| `data/collaborators.js` | Partner institutions and organisations |
| `data/photos.js` | Event photos (graduation, awards, conferences) |
| `css/style.css` | All colours, fonts, and layout |
| `js/render.js` | Page builder — do NOT edit |
| `index.html` | Page structure — do NOT edit |

---

## How to Add a Photo

1. Put your image file (e.g. `graduation.jpg`) in the `photos/` folder
2. Open `data/photos.js`
3. Add an entry:
```js
{
  file:     "graduation.jpg",
  caption:  "PhD Graduation",
  location: "University of Glasgow",
  year:     "2024",
  category: "Graduation",
},
```

## How to Add a Publication

Open `data/publications.js` and add:
```js
{
  type:  "Journal",
  year:  "2025",
  title: "Your paper title here",
  venue: "IEEE Transactions on ...",
  tags:  ["Tag1", "Tag2"],
  url:   "https://doi.org/...",
},
```

## How to Change Colours

Open `css/style.css` and find the `:root` block at the top.
Change `--blue`, `--cyan`, or `--bg-dark` to your preferred colours.

---

## Uploading to GitHub Pages

1. Upload ALL files and folders to your repository
2. Make sure `index.html` is at the root level
3. GitHub Pages will serve it automatically
