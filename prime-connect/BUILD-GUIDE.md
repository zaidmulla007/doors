# Build & Deployment Guide for Prime Connect

## 🚀 Creating a New Build

Every time you make changes to your code and want to deploy, follow these steps:

### Step 1: Build Your Project
```bash
npm run build
```

**What happens automatically:**
- ✅ Next.js **deletes the entire old `out` folder**
- ✅ Creates a **completely fresh `out` folder** from scratch
- ✅ Includes **ALL your latest code changes**
- ✅ Generates static HTML for all 31+ pages
- ✅ Copies all PHP email files from `public/api-for-email/`
- ✅ Copies all images and assets from `public/`

**✨ VERIFIED:** Next.js automatically cleans the `out` folder before every build, so you will ALWAYS get the latest version!

### Step 2: Verify Build Success
After the build completes, you should see:
```
✓ Generating static pages (31/31)
Route (app)
├ ○ /
├ ○ /about
├ ○ /contact
├ ● /product/[slug]
└ ... all your pages
```

### Step 3: Upload to Server
Upload the entire `out` folder to your hosting:
- **Hostinger/cPanel:** Upload to `public_html/`
- **Other hosting:** Upload to your web root directory

---

## ⚙️ Current Configuration

### next.config.ts
```typescript
{
  output: 'export',           // Creates static 'out' folder
  images: {
    unoptimized: true,        // Required for static export
  },
  trailingSlash: true,        // SEO friendly URLs
}
```

### Key Files Structure
```
prime-connect/
├── app/                      # Your Next.js app
│   ├── product/[slug]/
│   │   ├── page.tsx         # Server component (handles static generation)
│   │   └── ProductPageClient.tsx  # Client component (interactive features)
├── public/
│   └── api-for-email/       # PHP email backend
│       ├── config.php       # Email configuration
│       ├── send-email.php   # Email handler
│       └── PHPMailer/       # Email library
├── out/                     # Generated after build (upload this!)
└── BUILD-GUIDE.md          # This file
```

---

## 🔧 How It Works

### Static Generation Process

1. **Server Component** (`page.tsx`):
   - Runs `generateStaticParams()` to get all product slugs
   - Pre-generates HTML for each product page
   - Creates 21+ product pages automatically

2. **Client Component** (`ProductPageClient.tsx`):
   - Contains all interactive features
   - Image zoom, forms, modals
   - Runs in the browser after page loads

3. **Build Output** (`out` folder):
   - Contains all static HTML files
   - All JavaScript bundles
   - All images and assets
   - PHP email files

---

## ✅ Troubleshooting

### Problem: Build shows old content
**Solution:**
```bash
# Delete old build and rebuild
rm -rf out .next
npm run build
```

### Problem: Images not showing
**Cause:** `images.unoptimized: true` is required for static export
**Check:** Verify it's in `next.config.ts`

### Problem: Dynamic product pages missing
**Cause:** Missing `generateStaticParams()`
**Check:** Verify `app/product/[slug]/page.tsx` has the function

### Problem: Forms not working
**Cause:** PHP files missing on server
**Check:** Ensure `out/api-for-email/` folder uploaded to server

---

## 📝 Before Every Build Checklist

- [ ] Made your code changes
- [ ] Tested locally with `npm run dev`
- [ ] Ready to deploy

## 🎯 Build Command (All You Need!)

```bash
npm run build
```

That's it! The `out` folder now has all your latest changes.

---

## 🌐 Upload Instructions

### For Hostinger/cPanel:
1. Open File Manager
2. Navigate to `public_html/`
3. Delete old files (optional but recommended)
4. Upload entire `out` folder contents
5. Clear browser cache (Ctrl + Shift + Delete)

### For Vercel/Netlify:
```bash
# Deploy directly
vercel deploy
# or
netlify deploy
```

---

## 📧 Email System

Your site has PHP-based email functionality:

### Files Location:
- `public/api-for-email/config.php` - SMTP credentials
- `public/api-for-email/send-email.php` - Email handler

### Email Recipients:
- Primary: `abde@primeconnects.ae`
- Secondary: `info@primeconnects.ae`

### Form Types Supported:
1. Contact Form (`/contact`)
2. Consultation Requests (modal)
3. Product Inquiries (product pages)

---

## 🔐 Important Notes

### Security:
- ⚠️ `config.php` contains email credentials (keep secure!)
- ✅ Rate limiting: 5 requests per hour per IP
- ✅ CORS protection enabled

### Performance:
- Static pages load instantly
- No server-side rendering needed
- CDN-friendly

---

## 📞 Need Help?

If builds aren't reflecting changes:
1. Clear `.next` and `out` folders
2. Run `npm run build` again
3. Upload fresh `out` folder
4. Clear browser cache

---

## ✅ VERIFICATION TEST RESULTS

I tested the build system to confirm it works correctly:

### Test 1: Does Next.js clean the `out` folder?
- Created a test file: `out/test-delete-me.txt`
- Ran `npm run build`
- **Result:** ✅ Test file was deleted - `out` folder was completely cleaned

### Test 2: Are new files copied to `out`?
- Created timestamp file: `public/build-timestamp.txt`
- Ran `npm run build`
- **Result:** ✅ New file appeared in `out/build-timestamp.txt`

### Conclusion:
**YES, 100% CONFIRMED** - When you run `npm run build`, Next.js:
1. Completely deletes the old `out` folder
2. Creates a brand new `out` folder from scratch
3. Copies ALL files from `public/` to `out/`
4. Generates all static pages with your latest code

**You will ALWAYS get the latest version in the `out` folder!**

---

**Last Updated:** January 1, 2026 (Verified & Tested)
**Next.js Version:** 16.0.10
**Build System:** Static Export (output: 'export')
**Status:** ✅ Working Perfectly
