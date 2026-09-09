#  NeuralDyslexia ReadAssist
### *AI-Powered Dyslexia Assistive Portfolio Pipeline & Web Scraping Extraction Engine*

**Live Production Link:** [neural-dyslexia-read-assist-yl1y.vercel.app](https://neural-dyslexia-read-assist-yl1y.vercel.app/)



**Core Technical Stack:** 
*   **Frontend Architecture:** Next.js 15 (React 19 Server/Client Split) | TypeScript
*   **Backend Infrastructure:** FastAPI (High-Speed Python ASGI) | Pydantic v2
*   **AI Integration:** OpenAI Core API Layer (GPT-4o-mini Engine Model)
*   **Extraction Routing:** BeautifulSoup4 DOM Parsing | Async HTTPX Client
*   **Production Deployment:** Vercel Global Edge Network (UI) | Render Clusters (API)

---

###  Understanding the Challenge: What is Dyslexia?

Dyslexia is **not a reflection of intelligence, eyesight, or effort.** It is a specific neurological difference in how the human brain processes written language. 

For a fluent reader, looking at a page of text is effortless—the brain automatically maps visual letters into sounds and strings them together into meaning instantly. For an individual with dyslexia, **this automatic tracking system is fractured.** When reading standard digital text, a dyslexic brain experiences severe cognitive overloading due to three distinct neurological hurdles:

1. **Phonological Processing Fatigue (The Pacing Problem):** Because the brain has to manually decode every single letter fragment to pronounce a word, it rapidly drains short-term working memory. Reading speed slows down drastically, and by the end of a long sentence, the reader has often lost the contextual meaning of the beginning.
2. **Visual Crowding & White-Space Fatigue:** Standard digital layouts place letters too closely together. For a dyslexic reader, characters and lines visually bleed or melt into one another, creating an overlapping distortion that causes severe eye strain, headaches, and mental exhaustion.
3. **Rotational Inversion & Spatial Disorientation:** The brain struggles with spatial consistency. Geometric shapes like loops and lines look identical, causing letters to rotate, flip, or switch places in real-time. A `b` turns into a `d`, a `p` flips into a `q`, and words like `dog` visually transform into `bog` or `god`.

---

###  The Solution: How This Engineering Ecosystem Fixes It

This project does not simply change web colors; it acts as an **assistive neurological lens** by programmatically re-mapping the physical layout of text to relieve these cognitive pressure points:

*    **Bionic Fixation Points** solve the pacing problem. By instantly bolding the initial syllables of words, the engine guides the eyes to automatically anchor on the visual "trigger" of the word, allowing the brain to skip manual letter-by-letter decoding and read text fluently.
*    **Accessible Spacing Expansion** solves visual crowding. It dynamically re-spaces individual letters and expands the line height to give every token visual breathing room, completely eliminating the overlapping distortion effect.
*    **Inversion-Risk Highlighting** solves letter-flipping. By scanning text arrays using custom regex logic, the engine safely isolates vulnerable characters (`b`, `d`, `p`, `q`) and locks them into bright, distinct colored frames, giving the brain an immediate spatial anchor so it can instantly recognize the correct letter orientation before a flip can occur.
---

##  Key Feature Engineering & Core Capabilities

*    **Automated Live Web Scraper View:** Users can input any live third-party URL (e.g., news article or academic blog). The backend asynchronously bypasses tracking code, scrapes the raw elements using semantic layout selectors, pulls core OpenGraph metadata tags (`title`, `site_name`, `hero_image`), and generates an optimized distraction-free **Kindle-style Reader Canvas**.
*    **OpenAI Cognitive Restructuring Layer:** Integrates the `gpt-4o-mini` architecture to reduce linguistic complexity, untangle passive voice constructs, and shorten overwhelming paragraphs into scannable sentences while maintaining 100% of the core data accuracy.
*    **Asynchronous Data Layer Pipeline:** Built to decouple raw document parsing and semantic modification steps, isolating backend calculation blocks from front-end layout animations to guarantee smooth runtime stability.
*    **Pure Vanilla CSS Layout Optimization:** Bypasses heavy styling framework bundle overheads by leveraging native layout matrices and fluid element CSS layers. This guarantees instantaneous browser repaint layers and 0% cumulative layout shifts (CLS).

---

##  Production Architecture & Data Stream Flow

```text
  [ User Client UI ] (Next.js 15 App Router)
         │
         ▼  (POST /api/transform JSON Payload)
  [ Gateway Middleware Router ] (FastAPI Endpoint Mapping & CORS Policies)
         │
         ├──► [ Link Option Active ] ──► [ Asynchronous Web Scraper Service ] (BeautifulSoup4 / Httpx)
         │                                       │
         ▼                                       ▼ (Clean Body Content Target Vector)
  [ OpenAI Pipeline Sub-Service ] ◄──────────────┘
         │
         ▼ (GPT-4o-mini Cognitive Restructuring Token Synthesis)
  [ TextProcessor Tokenizer Service ] (Regex Parsing, Inversion Mapping, HTML Core Intercepts)
         │
         ▼ (Structured Pydantic Model Data Validation Array Mapping)
  [ Hydrated JSON Payload Response ] ──► [ Client State Layout Component Viewport ]
```

---

##  Stack & Engineering Metrics

### Frontend Architecture
*   **Framework:** Next.js 15 (React 19 Server & Client Component Split Architecture)
*   **Language:** TypeScript (Strict Compilation Mode Layout Mapping)

*   **Styling Engine:** High-performance Vanilla Layout Tokens (Zero execution rendering blocks)
*   **Deployment Channel:** Vercel Global Edge Networks

### Backend Infrastructure
*   **Runtime Core:** Python (FastAPI High-Speed ASGI Architecture)
*   **Validation Layer:** Pydantic v2 (Strict Object Schema Serialization Constraints)
*   **HTTP Engine Layer:** Async HTTPX Client with explicit Custom User-Agent Rotation Schemes
*   **Routing Pipeline:** BeautifulSoup4 (Semantic DOM Node Filtering Mapping)
*   **Deployment Channel:** Render Virtual Cluster Environment (Isolated Environment Sandboxing)

---

##  Local Installation & Workspace Execution Setup

To explore, profile, or review the internal execution boundaries locally, mirror these structural guidelines.

### Backend Infrastructure Setup
1. Clone the project workspace and navigate to the project directory root:
   ```bash
   cd ~/dyslexiaRead
   ```
2. Install the production-grade dependency package manifests safely:
   ```bash
   pip install --only-binary=:all: -r requirements.txt
   ```
3. Initialize your production configuration environment parameters. Create a clean `.env` file right alongside your `app/` folder and paste your access authorization parameters:
   ```text
   OPENAI_API_KEY=sk-proj-yourActualSecretOpenAIAccessKeyStringHere
   ```
4. Spin up your local ASGI development pipeline server loop:
   ```bash
   uvicorn app.main:app --reload
   ```

### Frontend Workspace Client Setup
1. Open an independent twin terminal session tab instance and route inside your sub-folder framework:
   ```bash
   cd frontend
   ```
2. Pull down the required project module dependencies:
   ```bash
   npm install
   ```
3. Boot up the local runtime client layout compiler engine:
   ```bash
   npm run dev
   ```
4. Launch your browser engine and route directly onto the production test viewport canvas: **`http://localhost:3000`**

---

##  Security & Optimization Review

*    **Credential Leak Prevention:** Fully strict tracking exclusions are built using explicit `.gitignore` target trees preventing localized `.env` data structures or hidden environment caches from uploading into public git branches.
*    **Memory-Leak Protection & Cache-Wipe Routing:** Incorporates dedicated clean pipeline steps (`rm -rf .next`) to drop frozen Webpack watch layers, stabilizing local deployment tracking matrices across dynamic file relocations.
*    **Zero Framework Overhead Design:** Core CSS structures operate directly off localized layout rules ensuring total optimization of critical styling threads and native mobile browser hardware acceleration support.




