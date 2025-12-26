# Prime Connect - Complete Project Overview & Implementation Brief

## 📋 Project Summary

**Project Name:** Prime Connect General Trading
**Type:** B2B E-commerce Showcase Website
**Technology:** Next.js 16 (Static Export) + React 19 + TypeScript
**Hosting:** Hostinger (https://primeconnects.ae)
**Email System:** PHPMailer with Gmail SMTP

---

## 🏗️ Architecture Overview

### Frontend Stack
- **Framework:** Next.js 16.0.10 (App Router, Static Export)
- **UI Library:** React 19.2.1
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 4.1.18
- **Animations:** Framer Motion 12.23.26
- **Icons:** Lucide React
- **Notifications:** SweetAlert2
- **Internationalization:** Custom context (English, Arabic, Chinese)

### Backend Stack
- **Email Handler:** PHP with PHPMailer library
- **SMTP Provider:** Gmail (smtp.gmail.com:587 TLS)
- **Server Configuration:** Apache with .htaccess

---

## 📁 Project Structure

```
prime-connect/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Homepage with hero, products, factories
│   ├── about/                    # About page
│   ├── contact/                  # Contact page with form
│   │   └── page.tsx             # ✅ Email integrated
│   ├── product/[slug]/          # Dynamic product pages
│   │   └── page.tsx             # ✅ Inquiry form integrated
│   ├── products/                # Product listing page
│   ├── categories/              # Category listing
│   ├── certificates/            # Certifications page
│   ├── projects/                # Projects gallery
│   ├── data/                    # Static data files
│   │   ├── products.ts          # 50+ products
│   │   ├── categories.ts        # 6 categories
│   │   ├── translations.ts      # 3 languages (1000+ lines)
│   │   ├── constants.ts         # Navigation structure
│   │   └── index.ts
│   ├── components/              # Reusable components
│   │   ├── ConsultationModal.tsx # ✅ Email integrated
│   │   ├── FloatingActions.tsx   # WhatsApp, Call, Consultation
│   │   ├── Header.tsx           # Navigation + Language switcher
│   │   ├── Footer.tsx           # Site footer
│   │   └── ProductSidebar.tsx   # Category navigation
│   ├── context/
│   │   └── LanguageContext.tsx  # i18n state management
│   └── globals.css              # Global styles
│
├── out/                         # Static export output + API
│   └── api-for-email/           # ⭐ Email API Backend
│       ├── send-email.php       # Main email handler
│       ├── config.php           # Email credentials
│       ├── config.example.php   # Template
│       ├── README.md            # API documentation
│       └── PHPMailer/           # PHPMailer library
│           └── src/
│               ├── PHPMailer.php
│               ├── SMTP.php
│               └── Exception.php
│
├── public/                      # Static assets (395+ images)
│   ├── banner-images/           # 19 hero slides
│   ├── doors/                   # 93+ door variants
│   ├── core-panel/              # 48+ panel images
│   ├── kitchen-cabinets/        # 22 cabinet variants
│   ├── wardrobes/               # 12 variants
│   ├── door-mech-access/        # 21 hardware items
│   ├── color-card/              # 30 color options
│   ├── brochures/               # 6 PDF catalogues
│   └── certificate-images/      # 5 certificates
│
├── .htaccess                    # ⭐ Apache configuration
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind settings
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies

```

---

## 📧 Email System Implementation

### Email Configuration

**SMTP Details:**
```php
Host:     smtp.gmail.com
Port:     587 (TLS)
From:     abdprimeconnect@gmail.com
Password: bsmf fgdw cwim hazv (Gmail App Password)
To:       abde@primeconnects.ae, info@primeconnects.ae
```

### Three Email Forms Implemented

#### 1. **Consultation Modal Form**
**File:** `app/components/ConsultationModal.tsx`

**Fields:**
- Full Name (required)
- Email Address (required)
- Phone Number (required)
- Subject (dropdown: General Inquiry, Request Quote, Doors & Panels, Cabinets, New Project, Support)
- Message (required)

**Features:**
- Floating modal triggered globally via `window.openConsultationModal()`
- API integration with environment detection
- Blue-to-purple gradient submit button
- Loading spinner during submission
- SweetAlert2 success/error notifications
- Form reset on success
- Auto-closes modal on successful submission

**Email Payload:**
```javascript
{
  name: "John Doe",
  email: "john@example.com",
  phone: "+971 XX XXX XXXX",
  subject: "Request a Quote",
  message: "I need a quote for...",
  formType: "consultation"
}
```

---

#### 2. **Product Inquiry Form**
**File:** `app/product/[slug]/page.tsx`

**Context:** Appears in modal when user selects a product variant/color

**Fields:**
- Your Name (required)
- Email Address (required)
- Phone Number (required)
- Message/Requirements (required)

**Features:**
- Dynamic product name included in email
- Shows selected variant/color name
- Form state management with `inquiryForm` state
- Loading states and validation
- Gradient styling matching site theme
- Inquiry specific to selected product

**Email Payload:**
```javascript
{
  name: "Jane Smith",
  email: "jane@example.com",
  phone: "+971 XX XXX XXXX",
  message: "Interested in bulk order",
  subject: "Product Inquiry: MDF Door - Model PM-001",
  productName: "MDF Door - Model PM-001",
  formType: "product-inquiry"
}
```

---

#### 3. **Contact Page Form**
**File:** `app/contact/page.tsx`

**Fields:**
- Full Name (required)
- Email Address (required)
- Phone Number (optional)
- Company Name (optional)
- Message (required)

**Features:**
- Full-page professional contact form
- Company field appended to message if provided
- Success animation with checkmark
- 3-second success state display
- Loading states with spinner
- SweetAlert2 notifications

**Email Payload:**
```javascript
{
  name: "Mike Johnson",
  email: "mike@company.com",
  phone: "+971 XX XXX XXXX",
  subject: "Contact Form: ABC Trading LLC",
  message: "We are interested in your products\n\nCompany: ABC Trading LLC",
  formType: "contact"
}
```

---

### Email API Backend (`out/api-for-email/send-email.php`)

#### Flow Diagram:
```
User submits form
    ↓
Frontend validates input
    ↓
Detects environment (localhost vs production)
    ↓
Sends POST request to PHP API
    ↓
send-email.php receives request
    ↓
├─ Checks CORS origin
├─ Validates HTTP method (POST only)
├─ Loads PHPMailer library
├─ Applies rate limiting (5/hour per IP)
├─ Sanitizes all input fields
├─ Validates required fields
    ↓
Creates PHPMailer instance
    ↓
├─ Configures SMTP (Gmail)
├─ Sets From: abdprimeconnect@gmail.com
├─ Adds To: abde@primeconnects.ae
├─ Adds To: info@primeconnects.ae
├─ Sets Reply-To: user's email
├─ Builds HTML email body based on formType
├─ Sets subject line
    ↓
Sends email via Gmail SMTP
    ↓
├─ Success → Returns JSON: {"status": "success", "message": "..."}
├─ Error → Returns JSON: {"status": "error", "message": "..."}
    ↓
Frontend receives response
    ↓
├─ Success → SweetAlert success popup → Reset form
└─ Error → SweetAlert error popup
```

#### Environment Detection:
```javascript
const apiUrl = window.location.hostname === 'localhost'
  ? 'http://localhost/prime-connect/out/api-for-email/send-email.php'  // XAMPP Local
  : 'https://primeconnects.ae/api-for-email/send-email.php';           // Hostinger Production
```

#### Security Features:
1. **CORS Protection** - Only allows requests from authorized origins
2. **Rate Limiting** - Max 5 submissions per hour per IP address
3. **Input Sanitization** - All fields filtered with `FILTER_SANITIZE_STRING`
4. **Email Validation** - Uses `FILTER_SANITIZE_EMAIL`
5. **SMTP Authentication** - Secure Gmail SMTP with app password
6. **Error Logging** - Logs errors to server, returns generic message to user

#### Email Template (HTML):
```html
<h2>New [Form Type] Submission</h2>
<p><strong>Name:</strong> John Doe</p>
<p><strong>Email:</strong> john@example.com</p>
<p><strong>Phone:</strong> +971 XX XXX XXXX</p>
<p><strong>Subject:</strong> Request a Quote</p>
<hr>
<p><strong>Message:</strong><br>I need a quote for MDF doors...</p>
```

---

## 🌐 Routing & .htaccess Configuration

### Next.js Static Export
The website uses Next.js static export (`output: 'export'`), which generates static HTML files:

```
Homepage:        /index.html
About:           /about.html
Contact:         /contact.html
Products:        /products.html
Product Detail:  /product/mdf-doors.html
```

### The Problem:
When users refresh `/about` or `/product/mdf-doors`, the server looks for a folder, not `about.html` or `product/mdf-doors.html`, causing **404 errors**.

### The Solution: `.htaccess`

The `.htaccess` file solves this by:

1. **URL Rewriting** - Maps clean URLs to .html files
```apache
# /about → /about.html
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# /product/mdf-doors → /product/mdf-doors.html
RewriteRule ^([^/]+)/([^/]+)/?$ $1/$2.html [L]
```

2. **SPA Fallback** - If file doesn't exist, serve index.html
```apache
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

3. **Force HTTPS** - Redirects all HTTP to HTTPS
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

4. **Remove WWW** - Forces non-WWW URLs
```apache
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
```

5. **Performance Optimization**
- **Gzip Compression** - Compresses HTML, CSS, JS, fonts
- **Browser Caching** - 1 year for images, 1 month for CSS/JS
- **Cache-Control Headers** - Optimized for each file type

6. **Security**
- Security headers (X-Frame-Options, XSS Protection)
- Blocks bad bots and scanners
- Protects sensitive files (.env, config.php)
- Custom error pages (404, 500)

7. **CORS for API**
```apache
<FilesMatch "\.(php)$">
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "POST, GET, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type"
</FilesMatch>
```

---

## 🎨 Design System

### Color Palette
**Primary Gradient:** Blue to Purple
```css
from-blue-500 to-purple-500     /* #3b82f6 → #a855f7 */
hover:from-blue-600 to-purple-600  /* #2563eb → #9333ea */
```

**Applied To:**
- All submit buttons
- SweetAlert2 confirm buttons
- Primary CTAs
- Navigation accents
- Shadows: `shadow-blue-500/50`

### Typography
- **Headings:** Bold, modern sans-serif
- **Body:** Clean, readable
- **RTL Support:** Full Arabic support with proper text direction

### Components
- **Buttons:** Gradient with hover effects and shadows
- **Forms:** Rounded corners, blue focus rings
- **Modals:** Backdrop blur, smooth animations
- **Cards:** Elevated with subtle shadows
- **Loading States:** Spinning border animation

---

## 🌍 Internationalization (i18n)

### Supported Languages
1. **English (en)** - Default
2. **Arabic (ar)** - RTL support
3. **Chinese (zh)** - Simplified

### Implementation
**File:** `app/context/LanguageContext.tsx`

**Features:**
- Global state management
- LocalStorage persistence
- RTL layout switching for Arabic
- Translation function `t(key)`
- Language switcher in header

**Translation Keys:** 1000+ lines in `app/data/translations.ts`

**Example:**
```typescript
{
  en: "Get Free Consultation",
  ar: "احصل على استشارة مجانية",
  zh: "获取免费咨询"
}
```

---

## 📊 Static Data Structure

### Products Database (`app/data/products.ts`)
**Total Products:** 50+

**Categories:**
1. **Core Panels** (8 products)
   - MDF Core Panel, MR MDF, Plywood variants
2. **Doors** (7 types, 93+ variants)
   - MDF, WPC, Iron/Steel, Wooden, Aluminium, Emergency Exit, Glass
3. **Kitchen Cabinets** (1 product, 22 variants)
   - Base, Wall, Pantry cabinets
4. **Wardrobes** (1 product, 12 variants)
   - Walk-in, Built-in
5. **Door Hardware** (3 types, 21 variants)
   - Mechanisms, Hinges, Smart Locks
6. **Color Options** (1 product, 30 colors)
   - PM-001 to PM-304

**Product Schema:**
```typescript
interface Product {
  id: string;
  slug: string;
  categoryId: string;
  name: { en: string; ar: string; zh?: string };
  description: { en: string; ar: string; zh?: string };
  features: { en: string[]; ar: string[]; zh?: string[] };
  specifications?: { [key: string]: string };
  images: string[];
  variants?: { name: string; image: string }[];
  colors?: { name: string; image: string }[];
}
```

---

## 🚀 Deployment Workflow

### Local Development (XAMPP)
1. Install XAMPP (Apache server)
2. Copy project to: `C:\xampp\htdocs\prime-connect\`
3. Start Apache in XAMPP Control Panel
4. Access API: `http://localhost/prime-connect/out/api-for-email/send-email.php`
5. Run Next.js: `npm run dev` → `http://localhost:3000`

### Production Deployment (Hostinger)

**Step 1: Build Next.js**
```bash
npm run build
```
This generates static files in `out/` folder.

**Step 2: Upload to Hostinger**
- Upload `out/` contents to `public_html/`
- Upload `out/api-for-email/` to `public_html/api-for-email/`
- Upload `.htaccess` to `public_html/.htaccess`

**Step 3: Verify Structure**
```
public_html/
├── index.html
├── about.html
├── contact.html
├── product/
│   ├── mdf-doors.html
│   └── [other-products].html
├── _next/
├── api-for-email/
│   ├── send-email.php
│   ├── config.php
│   └── PHPMailer/
├── .htaccess
└── [other static files]
```

**Step 4: Set Permissions**
```bash
chmod 644 send-email.php
chmod 644 config.php
chmod 644 .htaccess
chmod 755 api-for-email/
```

**Step 5: Test**
- Visit: `https://primeconnects.ae`
- Test all form submissions
- Check email delivery to both recipients
- Test page refresh (should not 404)
- Test dynamic routes

---

## ✅ Testing Checklist

### Email Forms
- [ ] Consultation modal opens and submits
- [ ] Product inquiry form works from any product
- [ ] Contact page form submits successfully
- [ ] Both email recipients receive messages
- [ ] Reply-To is set to user's email
- [ ] SweetAlert popups appear correctly
- [ ] Loading spinners show during submission
- [ ] Form resets after successful submission
- [ ] Error handling works (invalid email, rate limit)

### Routing & Navigation
- [ ] Homepage loads correctly
- [ ] All static pages accessible
- [ ] Dynamic product pages work
- [ ] Page refresh doesn't cause 404
- [ ] Back/forward navigation works
- [ ] Language switching works
- [ ] RTL layout for Arabic

### Performance
- [ ] Images load quickly
- [ ] Gzip compression active
- [ ] Browser caching working
- [ ] Mobile responsive
- [ ] Animations smooth

### Security
- [ ] HTTPS enforced
- [ ] CORS configured correctly
- [ ] Rate limiting prevents spam
- [ ] Sensitive files protected
- [ ] Security headers present

---

## 📝 Summary for ChatGPT Review

**Question to Ask ChatGPT:**

> "I have a Next.js 16 static export website for Prime Connect (door manufacturer) hosted on Hostinger.
>
> **Email System:**
> - 3 forms: Consultation Modal, Product Inquiry, Contact Page
> - PHPMailer with Gmail SMTP (port 587, TLS)
> - Sends from abdprimeconnect@gmail.com to abde@primeconnects.ae + info@primeconnects.ae
> - API endpoint: `/api-for-email/send-email.php` with CORS, rate limiting, input sanitization
> - Environment detection: localhost vs production URLs
> - SweetAlert2 notifications with blue-to-purple gradient theme
>
> **.htaccess Configuration:**
> - Rewrites clean URLs to .html files (e.g., /about → /about.html)
> - Handles dynamic routes (/product/mdf-doors → /product/mdf-doors.html)
> - SPA fallback to index.html
> - Forces HTTPS and non-WWW
> - Gzip compression + browser caching (1 year images, 1 month CSS/JS)
> - Security headers, bad bot blocking, sensitive file protection
> - CORS headers for PHP files
>
> **Please review:**
> 1. Is the email implementation secure and following best practices?
> 2. Is the .htaccess configuration correct for Next.js static export on Apache?
> 3. Will page refreshes work without 404 errors?
> 4. Are there any security vulnerabilities or performance issues?
> 5. Is the environment detection logic correct?
> 6. Any improvements or missing configurations?"

---

## 📞 Contact Information

**Company:** Prime Connect General Trading
**Email:** info@primeconnects.ae, abde@primeconnects.ae
**Phone:** +971 6 573 3816, +971 58 912 6137
**Website:** https://primeconnects.ae
**Location:** Sharjah, UAE

---

**Document Version:** 1.0
**Last Updated:** December 26, 2025
**Prepared By:** Claude (Anthropic AI)
