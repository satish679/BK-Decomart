const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  ShadingType
} = require('docx');
const fs = require('fs');

const borderNone = {
  top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
  right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
};

const cellBorder = {
  top: { style: BorderStyle.SINGLE, size: 4, color: "D1D5DB" },
  bottom: { style: BorderStyle.SINGLE, size: 4, color: "D1D5DB" },
  left: { style: BorderStyle.SINGLE, size: 4, color: "D1D5DB" },
  right: { style: BorderStyle.SINGLE, size: 4, color: "D1D5DB" },
};

function createHeaderCell(text, widthPercent) {
  return new TableCell({
    width: { size: widthPercent, type: WidthType.PERCENTAGE },
    shading: { fill: "1E293B", type: ShadingType.CLEAR },
    borders: cellBorder,
    children: [
      new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
          new TextRun({
            text: text,
            bold: true,
            color: "FFFFFF",
            font: "Calibri",
            size: 22,
          }),
        ],
      }),
    ],
  });
}

function createBodyCell(text, widthPercent, isBold = false, isRight = false) {
  return new TableCell({
    width: { size: widthPercent, type: WidthType.PERCENTAGE },
    borders: cellBorder,
    children: [
      new Paragraph({
        alignment: isRight ? AlignmentType.RIGHT : AlignmentType.LEFT,
        children: [
          new TextRun({
            text: text,
            bold: isBold,
            font: "Calibri",
            size: 20,
            color: "1F2937",
          }),
        ],
      }),
    ],
  });
}

const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 1440, // 1 inch
            bottom: 1440,
            left: 1440,
            right: 1440,
          },
        },
      },
      children: [
        // Title Block
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
          children: [
            new TextRun({
              text: "PROJECT PROPOSAL & TECHNICAL SPECIFICATION",
              bold: true,
              size: 32,
              font: "Calibri",
              color: "0F172A",
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 360 },
          children: [
            new TextRun({
              text: "Next-Generation Web Presence, Local SEO Architecture & Digital CMS",
              italics: true,
              size: 24,
              font: "Calibri",
              color: "475569",
            }),
          ],
        }),

        // Metadata Header Table
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  width: { size: 50, type: WidthType.PERCENTAGE },
                  borders: borderNone,
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({ text: "Prepared For: ", bold: true, font: "Calibri", size: 22, color: "0F172A" }),
                        new TextRun({ text: "BK Decomart", font: "Calibri", size: 22, color: "334155" }),
                      ],
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({ text: "Showroom: ", bold: true, font: "Calibri", size: 20, color: "0F172A" }),
                        new TextRun({ text: "12, Sivagangai Main Road, Gomathipuram, Madurai", font: "Calibri", size: 20, color: "475569" }),
                      ],
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({ text: "Industry: ", bold: true, font: "Calibri", size: 20, color: "0F172A" }),
                        new TextRun({ text: "Luxury Curtains, Blinds & Home Dressing Atelier", font: "Calibri", size: 20, color: "475569" }),
                      ],
                    }),
                  ],
                }),
                new TableCell({
                  width: { size: 50, type: WidthType.PERCENTAGE },
                  borders: borderNone,
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({ text: "Proposal Date: ", bold: true, font: "Calibri", size: 22, color: "0F172A" }),
                        new TextRun({ text: "[ Date: ____________________ ]", font: "Calibri", size: 22, color: "64748B" }),
                      ],
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({ text: "Validity Period: ", bold: true, font: "Calibri", size: 20, color: "0F172A" }),
                        new TextRun({ text: "[ Valid Until: ____________________ ]", font: "Calibri", size: 20, color: "64748B" }),
                      ],
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({ text: "Project Reference: ", bold: true, font: "Calibri", size: 20, color: "0F172A" }),
                        new TextRun({ text: "[ Project Code / Ref: ________________ ]", font: "Calibri", size: 20, color: "64748B" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        new Paragraph({ spacing: { after: 360 } }),

        // 1. Executive Summary
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
          children: [
            new TextRun({
              text: "1. EXECUTIVE SUMMARY & STRATEGIC OBJECTIVE",
              bold: true,
              size: 24,
              font: "Calibri",
              color: "0F172A",
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: "The objective of this engagement is to engineer a bespoke, high-performance web platform and comprehensive Local Search Engine Optimization (SEO) infrastructure for BK Decomart. Drawing upon thirty years of heritage since 1995, the digital solution delivers a cinematic user experience that establishes brand dominance across Madurai and Tamil Nadu, drives qualified WhatsApp and phone consultation leads, and provides effortless administrative control over catalogue offerings.",
              font: "Calibri",
              size: 21,
              color: "334155",
            }),
          ],
        }),

        // 2. SEO-Friendly Digital Design & Technology
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
          children: [
            new TextRun({
              text: "2. SEO-FRIENDLY DIGITAL DESIGN & TECHNOLOGY",
              bold: true,
              size: 24,
              font: "Calibri",
              color: "0F172A",
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 160 },
          children: [
            new TextRun({
              text: "To ensure BK Decomart's website is fully discoverable and performs exceptionally on Google, the platform integrates an SEO-first framework directly into the development model. Engineering practices align with Google's Core Web Vitals to deliver ultra-fast loading, mobile responsiveness, and high organic indexing ranks.",
              font: "Calibri",
              size: 21,
              color: "334155",
            }),
          ],
        }),

        // SEO Bullet Points
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 120 },
          children: [
            new TextRun({ text: "Clean, Semantic URL Slugs: ", bold: true, font: "Calibri", size: 21, color: "0F172A" }),
            new TextRun({ text: "Human-readable, keyword-optimized routes (e.g., /products/curtains, /products/blinds, /products/wallpapers, /gallery, /about) rather than obscure server parameters.", font: "Calibri", size: 21, color: "334155" }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 120 },
          children: [
            new TextRun({ text: "Admin Metadata Management: ", bold: true, font: "Calibri", size: 21, color: "0F172A" }),
            new TextRun({ text: "Built-in configurations for administrators to dynamically modify Meta Titles, Meta Descriptions, Focus Keywords, and social sharing images on a page-by-page and category-by-category basis.", font: "Calibri", size: 21, color: "334155" }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 120 },
          children: [
            new TextRun({ text: "Image Compression & WebP / High-Performance Formatting: ", bold: true, font: "Calibri", size: 21, color: "0F172A" }),
            new TextRun({ text: "Automated asset compression to guarantee instant visual rendering, combined with mandatory Alternative Text (Alt Text) attributes on all fabric and showroom photographs for Google Image Search crawling.", font: "Calibri", size: 21, color: "334155" }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 120 },
          children: [
            new TextRun({ text: "JSON-LD Schema Markup (LocalBusiness & HomeGoodsStore): ", bold: true, font: "Calibri", size: 21, color: "0F172A" }),
            new TextRun({ text: "Integration of structural metadata for Organization, HomeGoodsStore, PostalAddress (Gomathipuram, Madurai), GeoCoordinates (9.9195° N, 78.1565° E), Opening Hours, and Category Offer Catalogues to earn Rich Snippets and Google Knowledge Panels.", font: "Calibri", size: 21, color: "334155" }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 120 },
          children: [
            new TextRun({ text: "Technical Compliance Engine: ", bold: true, font: "Calibri", size: 21, color: "0F172A" }),
            new TextRun({ text: "Native generation of XML sitemap (sitemap.xml) and robots.txt files, Canonical URL tags to eliminate indexing duplication, OpenGraph tags for WhatsApp and social previews, and full SSL/HTTPS encryption enforcement.", font: "Calibri", size: 21, color: "334155" }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 200 },
          children: [
            new TextRun({ text: "Core Web Vitals & Mobile-First Execution: ", bold: true, font: "Calibri", size: 21, color: "0F172A" }),
            new TextRun({ text: "Sub-second First Contentful Paint (FCP), minimal layout shifts (CLS), and touch-optimized responsive styling across mobile devices, tablets, and high-DPI desktop screens.", font: "Calibri", size: 21, color: "334155" }),
          ],
        }),

        // 3. Static Core Information Pages Table
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
          children: [
            new TextRun({
              text: "3. CORE INFORMATION & PRODUCT CATALOGUE ARCHITECTURE",
              bold: true,
              size: 24,
              font: "Calibri",
              color: "0F172A",
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 160 },
          children: [
            new TextRun({
              text: "Comprehensive scope breakdown of pages, interactive showcases, and digital solutions included in the platform build:",
              font: "Calibri",
              size: 21,
              color: "334155",
            }),
          ],
        }),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                createHeaderCell("Section", 30),
                createHeaderCell("Core Pages & Solutions Covered", 70),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Home & Brand Showcase", 30, true),
                createBodyCell("Cinematic Scroll Animation Hero, Brand Atelier Heritage Story (1995), Featured Collections Matrix, Interactive Transformation Before/After Slider, 'Why BK Decomart' Pillars, Marquee Ticker, Corporate Client Reel, and Global Footer.", 70),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Our Atelier & Heritage (/about)", 30, true),
                createBodyCell("Showroom Photostory, 30-Year Milestones Timeline (1995–2024), Hand-Tailoring Philosophy, In-House Master Stitching Craft, and Senior Designer Home Consultation Credentials.", 70),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Product Catalogue Hub (/products)", 30, true),
                createBodyCell("Comprehensive Collection Showcase: Curtains, Architectural Blinds, Designer Wallpapers, Luxury Carpets, Orthopaedic Mattresses, and Botanical Artificial Plants with live quick-preview selectors.", 70),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Category Deep-Dives (/products/:slug)", 30, true),
                createBodyCell("Individual Dedicated Landing Pages per Category: High-Resolution Fabric Grids, Interactive Lightbox Zoom, Material Specifications, Applications, Custom Varieties, and One-Click WhatsApp Consultation Links.", 70),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Real Project Gallery (/gallery)", 30, true),
                createBodyCell("Filterable Photo Gallery showcasing real Madurai villa installations, corporate office blinds, master suite drapes, and high-definition lifestyle imagery with lightbox navigation.", 70),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Showroom & Contact Hub (/contact)", 30, true),
                createBodyCell("Interactive Google Maps Embed (Sivagangai Main Road, Gomathipuram), Instant WhatsApp Direct-Connect, One-Tap Phone Calling, Opening Hours Schedule, and Consultation Enquiry Form.", 70),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Guidance & Compliance (/faq, /terms)", 30, true),
                createBodyCell("Measurement & Fitting FAQ Accordion, Delivery Timelines, Maintenance & Fabric Care Guides, Privacy Policy, and Terms of Service.", 70),
              ],
            }),
          ],
        }),

        new Paragraph({ spacing: { after: 360 } }),

        // 4. System Administrative CMS Features
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
          children: [
            new TextRun({
              text: "4. SYSTEM ADMINISTRATIVE CMS FEATURES",
              bold: true,
              size: 24,
              font: "Calibri",
              color: "0F172A",
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 160 },
          children: [
            new TextRun({
              text: "A user-friendly Administrative Control Panel is handed over to the internal team upon launch, granting autonomous capacity to execute core platform updates with zero coding reliance.",
              font: "Calibri",
              size: 21,
              color: "334155",
            }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 120 },
          children: [
            new TextRun({ text: "Catalogue & Fabric Management: ", bold: true, font: "Calibri", size: 21, color: "0F172A" }),
            new TextRun({ text: "Add, edit, or reorganize fabric categories, patterns, material descriptions, and custom tailoring options.", font: "Calibri", size: 21, color: "334155" }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 120 },
          children: [
            new TextRun({ text: "Media & Installation Showcase: ", bold: true, font: "Calibri", size: 21, color: "0F172A" }),
            new TextRun({ text: "Upload high-resolution photography of recently completed home installations with automatic compression and caption tagging.", font: "Calibri", size: 21, color: "334155" }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 120 },
          children: [
            new TextRun({ text: "Corporate Client & Partner Registry: ", bold: true, font: "Calibri", size: 21, color: "0F172A" }),
            new TextRun({ text: "Update the client marquee banner with new institutional and corporate partner logos (hospitals, hotels, convention centers).", font: "Calibri", size: 21, color: "334155" }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 200 },
          children: [
            new TextRun({ text: "Enquiry & Consultation Pipeline: ", bold: true, font: "Calibri", size: 21, color: "0F172A" }),
            new TextRun({ text: "Receive and archive customer consultation requests with contact details and preferred measurement appointment dates.", font: "Calibri", size: 21, color: "334155" }),
          ],
        }),

        // 5. Development Roadmap & Timeline
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
          children: [
            new TextRun({
              text: "5. DEVELOPMENT ROADMAP & PROJECT TIMELINE",
              bold: true,
              size: 24,
              font: "Calibri",
              color: "0F172A",
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 160 },
          children: [
            new TextRun({
              text: "Phased implementation schedule outlining delivery milestones and review checkpoints (dates and durations to be confirmed prior to kickoff):",
              font: "Calibri",
              size: 21,
              color: "334155",
            }),
          ],
        }),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                createHeaderCell("Phase", 20),
                createHeaderCell("Activity Description", 55),
                createHeaderCell("Est. Duration / Target Date", 25),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Phase 1", 20, true),
                createBodyCell("Requirements finalization, branding alignment, information architecture & luxury UI/UX wireframes.", 55),
                createBodyCell("[ ___ Weeks / Date: ________ ]", 25),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Phase 2", 20, true),
                createBodyCell("Responsive frontend development (HTML5, TailwindCSS, Cinematic Animation, mobile-first layouts).", 55),
                createBodyCell("[ ___ Weeks / Date: ________ ]", 25),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Phase 3", 20, true),
                createBodyCell("Product catalogue database configuration, interactive before/after component, and dynamic galleries.", 55),
                createBodyCell("[ ___ Weeks / Date: ________ ]", 25),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Phase 4", 20, true),
                createBodyCell("High-resolution photography integration, product copy placement, and WhatsApp lead-generation routing.", 55),
                createBodyCell("[ ___ Weeks / Date: ________ ]", 25),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Phase 5", 20, true),
                createBodyCell("Advanced Local SEO technical setup, Schema.org JSON-LD generation, sitemap.xml, robots.txt, and metadata tuning.", 55),
                createBodyCell("[ ___ Weeks / Date: ________ ]", 25),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Phase 6", 20, true),
                createBodyCell("Cross-device testing, SSL activation, Google Search Console indexing, DNS cutover & official platform launch.", 55),
                createBodyCell("[ ___ Weeks / Date: ________ ]", 25),
              ],
            }),
          ],
        }),

        new Paragraph({ spacing: { after: 360 } }),

        // 6. Commercial Quotation
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
          children: [
            new TextRun({
              text: "6. COMMERCIAL QUOTATION & INVESTMENT BREAKDOWN",
              bold: true,
              size: 24,
              font: "Calibri",
              color: "0F172A",
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 160 },
          children: [
            new TextRun({
              text: "Comprehensive scope breakdown with customizable investment fields for internal budgeting and approval:",
              font: "Calibri",
              size: 21,
              color: "334155",
            }),
          ],
        }),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                createHeaderCell("Scope Item", 30),
                createHeaderCell("Technical Deliverables & Inclusions", 45),
                createHeaderCell("Amount (INR)", 25),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Custom UI/UX & Brand Design", 30, true),
                createBodyCell("Atelier-inspired aesthetic, tailored typography, custom responsive layouts, and interactive components.", 45),
                createBodyCell("[ Rs. ________________ ]", 25, false, true),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Frontend & Responsive Architecture", 30, true),
                createBodyCell("High-performance React/Tailwind build, canvas animation sequence, mobile touch navigation, and zero-clutter layout.", 45),
                createBodyCell("[ Rs. ________________ ]", 25, false, true),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Catalogue & Visual Showcase", 30, true),
                createBodyCell("Complete product suite integration (Curtains, Blinds, Wallpapers, Carpets, Mattresses, Plants), lightboxes & filters.", 45),
                createBodyCell("[ Rs. ________________ ]", 25, false, true),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("SEO-First Infrastructure & Schema", 30, true),
                createBodyCell("Madurai LocalBusiness JSON-LD markup, OpenGraph social cards, canonical links, robots.txt, sitemap.xml & Google Search indexing.", 45),
                createBodyCell("[ Rs. ________________ ]", 25, false, true),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Administrative CMS & Lead Pipeline", 30, true),
                createBodyCell("Self-serve management console, image compression pipeline, enquiry logging, and WhatsApp consultation routing.", 45),
                createBodyCell("[ Rs. ________________ ]", 25, false, true),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Deployment, SSL & Launch Support", 30, true),
                createBodyCell("Production server configuration, automated daily backups, SSL certificate, DNS binding, and staff handover training.", 45),
                createBodyCell("[ Rs. ________________ ]", 25, false, true),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("SUBTOTAL BASE INVESTMENT", 30, true),
                createBodyCell("All development, creative, and technical deliverables listed above.", 45),
                createBodyCell("[ Rs. ________________ ]", 25, true, true),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Applicable Taxes (CGST @ 9%)", 30, false),
                createBodyCell("Central Goods & Services Tax (as applicable)", 45),
                createBodyCell("[ Rs. ________________ ]", 25, false, true),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("Applicable Taxes (SGST @ 9%)", 30, false),
                createBodyCell("State Goods & Services Tax (as applicable)", 45),
                createBodyCell("[ Rs. ________________ ]", 25, false, true),
              ],
            }),
            new TableRow({
              children: [
                createBodyCell("TOTAL PROJECT INVESTMENT", 30, true),
                createBodyCell("All-inclusive total turnkey investment.", 45, true),
                createBodyCell("[ Rs. ________________ ]", 25, true, true),
              ],
            }),
          ],
        }),

        new Paragraph({ spacing: { after: 360 } }),

        // 7. Payment Milestones & Acceptance Sign-Off
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 120 },
          children: [
            new TextRun({
              text: "7. PAYMENT SCHEDULE & PROJECT ACCEPTANCE",
              bold: true,
              size: 24,
              font: "Calibri",
              color: "0F172A",
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 160 },
          children: [
            new TextRun({
              text: "The payment schedule is linked directly to tangible development milestones:",
              font: "Calibri",
              size: 21,
              color: "334155",
            }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 120 },
          children: [
            new TextRun({ text: "Milestone 1 (Advance / Project Kickoff): ", bold: true, font: "Calibri", size: 21, color: "0F172A" }),
            new TextRun({ text: "[ _____ % ] — [ Rs. ________________ ] payable upon contract execution and scope sign-off.", font: "Calibri", size: 21, color: "334155" }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 120 },
          children: [
            new TextRun({ text: "Milestone 2 (Design & Core Pages Approval): ", bold: true, font: "Calibri", size: 21, color: "0F172A" }),
            new TextRun({ text: "[ _____ % ] — [ Rs. ________________ ] payable upon approval of responsive layouts and catalogue assembly.", font: "Calibri", size: 21, color: "334155" }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 240 },
          children: [
            new TextRun({ text: "Milestone 3 (Final Testing & Launch Handover): ", bold: true, font: "Calibri", size: 21, color: "0F172A" }),
            new TextRun({ text: "[ _____ % ] — [ Rs. ________________ ] payable upon successful deployment, SSL activation, and admin handover.", font: "Calibri", size: 21, color: "334155" }),
          ],
        }),

        new Paragraph({
          spacing: { before: 200, after: 200 },
          children: [
            new TextRun({
              text: "IN WITNESS WHEREOF, the parties hereto have executed and approved this Proposal as of the date written below:",
              italics: true,
              font: "Calibri",
              size: 20,
              color: "475569",
            }),
          ],
        }),

        // Sign-off Table
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  width: { size: 50, type: WidthType.PERCENTAGE },
                  borders: cellBorder,
                  children: [
                    new Paragraph({ children: [new TextRun({ text: "Authorized Client Sign-off:", bold: true, font: "Calibri", size: 21 })] }),
                    new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "For: BK Decomart", bold: true, font: "Calibri", size: 20 })] }),
                    new Paragraph({ spacing: { before: 240 }, children: [new TextRun({ text: "Signature: __________________________", font: "Calibri", size: 20 })] }),
                    new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "Name: ______________________________", font: "Calibri", size: 20 })] }),
                    new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "Designation: ________________________", font: "Calibri", size: 20 })] }),
                    new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "Date: ______________________________", font: "Calibri", size: 20 })] }),
                  ],
                }),
                new TableCell({
                  width: { size: 50, type: WidthType.PERCENTAGE },
                  borders: cellBorder,
                  children: [
                    new Paragraph({ children: [new TextRun({ text: "Technology Partner Sign-off:", bold: true, font: "Calibri", size: 21 })] }),
                    new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "For: Digital Agency / Development Partner", bold: true, font: "Calibri", size: 20 })] }),
                    new Paragraph({ spacing: { before: 240 }, children: [new TextRun({ text: "Signature: __________________________", font: "Calibri", size: 20 })] }),
                    new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "Name: ______________________________", font: "Calibri", size: 20 })] }),
                    new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "Designation: ________________________", font: "Calibri", size: 20 })] }),
                    new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: "Date: ______________________________", font: "Calibri", size: 20 })] }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('public/BK_Decomart_Website_SEO_Proposal.docx', buffer);
  fs.writeFileSync('BK_Decomart_Website_SEO_Proposal.docx', buffer);
  console.log('Successfully generated BK_Decomart_Website_SEO_Proposal.docx');
});
