# CoverIT Canada Website

Static HTML website for CoverIT Canada Inc — Ontario's fabric building specialists.

## Pages
- `index.html` — Homepage
- `installation.html` — Fabric Building Installation
- `repair.html` — Repair & Re-covering
- `megadome.html` — MegaDome Buildings
- `insulation.html` — Fabric Building Insulation
- `about.html` — About Us
- `contact.html` — Contact / Get a Quote

## File Structure
```
coveritcanada/
├── index.html
├── installation.html
├── repair.html
├── megadome.html
├── insulation.html
├── about.html
├── contact.html
├── css/
│   ├── style.css      (global styles, nav, footer)
│   ├── home.css       (homepage-specific styles)
│   └── inner.css      (inner page styles)
├── js/
│   └── main.js        (hamburger menu, scroll reveal)
└── images/            (add your project photos here)
```

## Adding Your Photos
1. Add photos to the `images/` folder
2. In `index.html`, find the hero section and replace the placeholder div:
   ```html
   <!-- Replace this: -->
   <div class="hero-photo-placeholder">...</div>
   <!-- With this: -->
   <img src="images/your-photo.jpg" alt="CoverIT Canada fabric building">
   ```
3. For industry cards, add photos inside `.ind-photo` divs

## Deploy to GitHub Pages
1. Create a new GitHub repository called `coveritcanada` (or your preferred name)
2. Upload all these files to the repository
3. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
4. Your site will be live at `https://yourusername.github.io/coveritcanada`

## Connect Your Domain (coveritcanada.com)
1. In GitHub Pages settings, add your custom domain: `coveritcanada.com`
2. In your domain registrar (wherever you bought coveritcanada.com), add these DNS records:
   - Type A: `185.199.108.153`
   - Type A: `185.199.109.153`
   - Type A: `185.199.110.153`
   - Type A: `185.199.111.153`
   - Type CNAME: `www` → `yourusername.github.io`
3. Wait 24-48 hours for DNS to propagate
4. Enable "Enforce HTTPS" in GitHub Pages settings

## Customization
- Replace placeholder testimonials with real client quotes
- Add real project photos from your gallery
- Update the hero photo
- The contact form currently uses `mailto:` — for a proper form, consider Formspree.io (free)
