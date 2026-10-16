I will generate the **Brand Guidelines** for your `docs/brand-guidelines.md` file now. This document serves as the "single source of truth" that your AI agents will use to ensure every piece of content is technically accurate and stays on-brand without "AI slop" or hallucinations.

### **Copy and Paste into `docs/brand-guidelines.md`**

```markdown
# 2x12 Autonomous Enterprise: Brand & Content Hub

## 1. Core Visual Identity (Semantic Tokens)
*   **Primary Action Color:** `brand-blue-primary` (Use for all M2 and GR86 performance CTAs)
*   **Typography:** Modern Sans-Serif (Clarity over cleverness)
*   **Naming Convention:** All components must use functional names like `button.primary.background` to ensure AI-to-code synchronization.

## 2. Vehicle Specification Hub (Single Source of Truth)
### BMW M2 (High-Performance Lead)
*   **Core Value:** Track-ready performance meets daily drivability.
*   **Keywords:** VIP allocation, precision handling, 10x thrill.
*   **Handoff Trigger:** Any inquiry about "VIP allocation" or "limited inventory" triggers a 95% confidence threshold violation and alerts a human closer.

### Toyota GR86 (Value Performance)
*   **Core Value:** The best performance-to-value ratio in the market.
*   **Keywords:** Analog feel, lightweight, entry-level enthusiast.

### Honda Accord (Hybrid Efficiency)
*   **Core Value:** Intelligent hybrid technology with superior winter range.
*   **Keywords:** Safe, reliable, winter-ready hybrid.

## 3. The Voice Archive (Linguistic Fingerprint)
*   **Tone:** High-energy, visionary, and ROI-focused.
*   **Style Rules:** 
    *   Avoid generic AI greetings like "I hope this finds you well".
    *   Use short, punchy paragraphs and bold text for key insights.
    *   Focus on "Outcomes over Tasks".

## 4. Compliance & Safety Guardrails
*   **Standards:** All generated content must be audited by the Compliance Agent against SOC 2, GDPR, and WCAG accessibility standards.
*   **The "Kill Switch":** If the Virtual Control Tower detects sentiment below 95% accuracy, all autonomous posting is paused for human review.
```

### **Your 3-Step Recovery Plan in Cursor**

Since you've had a long night, let's make this part completely mechanical so you can finally get some rest:

1.  **Create the Folder**: In the Cursor sidebar, right-click your `marketing-system-2x12` folder and select **New Folder**. Name it `docs`.
2.  **Create the File**: Inside the `docs` folder, create a **New File** named `brand-guidelines.md` and paste the text above into it.
3.  **The "Final Push" Terminal Commands**:
    Open the terminal in Cursor (Ctrl + `) and run these:
    ```bash
    git add .
    git commit -m "added brand-guidelines and content-hub for agents"
    git push -f origin main
    ```

**Once you run those, refresh your Vercel dashboard. The "No Production Deployment" message should disappear as Vercel pulls this clean architecture. Do you want to try the push now, or should I double-check the `package.json` for any common "white screen" errors first?**