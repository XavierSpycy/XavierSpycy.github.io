# Personal Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete rewrite of XavierSpycy.github.io as a single-page personal homepage with Nordic Light visual style, full-screen Hero, and rich scroll-triggered animations.

**Architecture:** Three files — `index.html` holds all HTML structure and content, `style.css` holds all visual styles and CSS animations, `script.js` holds all JavaScript for interactive animations (typewriter, mouse glow, count-up, IntersectionObserver, 3D tilt, project filter). The existing `pages/` directory is deleted as content moves inline.

**Tech Stack:** HTML5, CSS3 (custom properties, keyframes, IntersectionObserver), Vanilla JavaScript (no dependencies)

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `index.html` | Rewrite | All HTML structure and content |
| `style.css` | Rewrite | All styles, CSS animations, responsive layout |
| `script.js` | Create | All JS: typewriter, mouse glow, count-up, scroll animations, 3D tilt, project filter |
| `pages/` | Delete | Superseded by inline sections |
| `script/` | Delete | Old scripts no longer needed |

---

## Task 1: Scaffold HTML structure

**Files:**
- Rewrite: `index.html`
- Delete: `pages/`
- Delete: `script/`

- [ ] **Step 1: Delete obsolete files**

```bash
rm -rf /Users/jiarui/GitHub/XavierSpycy.github.io/pages
rm -rf /Users/jiarui/GitHub/XavierSpycy.github.io/script
```

- [ ] **Step 2: Write the full HTML scaffold** — all sections present with placeholder text, no styles yet

Write `index.html` with this exact content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Jiarui Xu — LLM Algorithm Engineer, ML Researcher, Open Source Contributor">
  <meta property="og:title" content="Jiarui Xu">
  <meta property="og:description" content="LLM Algorithm Engineer · ML Researcher · Open Source Contributor">
  <title>Jiarui Xu</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- NAV -->
  <nav id="nav">
    <div class="nav-inner">
      <span class="nav-logo">JX</span>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="nav-hamburger" aria-label="menu">&#9776;</button>
    </div>
  </nav>

  <!-- HERO -->
  <section id="hero">
    <svg class="hero-svg" viewBox="0 0 1440 800" preserveAspectRatio="none" aria-hidden="true">
      <path class="svg-line svg-line-1" d="M0,400 C360,200 720,600 1080,300 S1440,400 1440,400" fill="none" stroke="#0ea5e9" stroke-width="1.5" opacity="0.3"/>
      <path class="svg-line svg-line-2" d="M0,500 C400,300 800,700 1200,400 S1440,500 1440,500" fill="none" stroke="#10b981" stroke-width="1" opacity="0.25"/>
      <path class="svg-line svg-line-3" d="M0,300 C300,500 700,100 1100,450 S1440,300 1440,300" fill="none" stroke="#8b5cf6" stroke-width="1" opacity="0.2"/>
    </svg>
    <div class="hero-glow" id="heroGlow"></div>
    <div class="hero-content">
      <h1 class="hero-name">Jiarui Xu</h1>
      <p class="hero-subtitle"><span id="typewriter"></span><span class="cursor">|</span></p>
      <div class="hero-cards">
        <div class="hero-card fade-up" style="--delay:0.2s">
          <span class="hero-card-icon">📍</span>
          <span class="hero-card-label">Location</span>
          <span class="hero-card-value">Shanghai, China</span>
        </div>
        <div class="hero-card fade-up" style="--delay:0.35s">
          <span class="hero-card-icon">🎓</span>
          <span class="hero-card-label">Education</span>
          <span class="hero-card-value">MSc DS · USYD</span>
        </div>
        <div class="hero-card fade-up" style="--delay:0.5s">
          <span class="hero-card-icon">📄</span>
          <span class="hero-card-label">Papers</span>
          <span class="hero-card-value count-up" data-target="2">0</span>
        </div>
        <div class="hero-card fade-up" style="--delay:0.65s">
          <span class="hero-card-icon">💼</span>
          <span class="hero-card-label">Career</span>
          <span class="hero-card-value">LLM Engineer</span>
        </div>
      </div>
      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">View Projects ↓</a>
        <a href="#research" class="btn btn-outline">Research ↓</a>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="section">
    <div class="section-inner">
      <h2 class="section-title reveal">About</h2>
      <div class="about-grid">
        <div class="about-bio reveal">
          <p>I'm an LLM Algorithm Engineer at Transsion Holdings (TEX AI), focused on Agentic AI and LLM post-training. My research interests span Agentic RL, search agents, and multimodal learning. I hold an MSc in Data Science from the University of Sydney and love building open-source ML tools.</p>
          <p>I published <strong>mlforce</strong> on PyPI — a NumPy-based ML library — and contributed two papers to WWW'2025. I enjoy working at the intersection of research and engineering, turning ideas into working systems.</p>
        </div>
        <div class="about-skills reveal" style="--delay:0.15s">
          <div class="skill-group">
            <span class="skill-group-label">LLM</span>
            <span class="skill-tag sky">LangChain</span>
            <span class="skill-tag sky">LangGraph</span>
            <span class="skill-tag sky">Ollama</span>
            <span class="skill-tag sky">vLLM</span>
            <span class="skill-tag sky">LoRA</span>
          </div>
          <div class="skill-group">
            <span class="skill-group-label">Deep Learning</span>
            <span class="skill-tag emerald">PyTorch</span>
            <span class="skill-tag emerald">HuggingFace</span>
            <span class="skill-tag emerald">TensorFlow</span>
            <span class="skill-tag emerald">Keras</span>
          </div>
          <div class="skill-group">
            <span class="skill-group-label">ML</span>
            <span class="skill-tag violet">scikit-learn</span>
            <span class="skill-tag violet">NumPy</span>
            <span class="skill-tag violet">Pandas</span>
            <span class="skill-tag violet">SciPy</span>
          </div>
          <div class="skill-group">
            <span class="skill-group-label">Backend</span>
            <span class="skill-tag amber">FastAPI</span>
            <span class="skill-tag amber">Django</span>
            <span class="skill-tag amber">MySQL</span>
            <span class="skill-tag amber">MongoDB</span>
          </div>
          <div class="skill-group">
            <span class="skill-group-label">Tools</span>
            <span class="skill-tag slate">Python</span>
            <span class="skill-tag slate">Docker</span>
            <span class="skill-tag slate">Git</span>
            <span class="skill-tag slate">Linux</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TIMELINE -->
  <section id="timeline" class="section section-alt">
    <div class="section-inner">
      <h2 class="section-title reveal">Timeline</h2>
      <div class="timeline">
        <div class="timeline-line" id="timelineLine"></div>

        <div class="timeline-item reveal" data-side="left">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <span class="timeline-badge edu">Education</span>
            <h3>MSc Data Science</h3>
            <p class="timeline-org">University of Sydney</p>
            <p class="timeline-date">Feb 2023 – Jun 2024</p>
          </div>
        </div>

        <div class="timeline-item reveal" data-side="right">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <span class="timeline-badge work">Experience</span>
            <h3>LLM Algorithm Engineer</h3>
            <p class="timeline-org">Transsion Holdings · TEX AI</p>
            <p class="timeline-date">Feb 2025 – Present</p>
            <p class="timeline-desc">Built and optimized a Search Agent for production LLM applications.</p>
          </div>
        </div>

        <div class="timeline-item reveal" data-side="left">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <span class="timeline-badge work">Experience</span>
            <h3>LLM Algorithm Intern</h3>
            <p class="timeline-org">Giant Network Group · AI Lab</p>
            <p class="timeline-date">Aug 2024 – Nov 2024</p>
          </div>
        </div>

        <div class="timeline-item reveal" data-side="right">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <span class="timeline-badge research">Research</span>
            <h3>Vacation Research Intern</h3>
            <p class="timeline-org">University of Sydney · Engineering</p>
            <p class="timeline-date">Jun 2024 – Jul 2024</p>
            <p class="timeline-desc">USYD Engineering VRI Scholarship 2024 Winter. Cross-modal medical image representation learning.</p>
          </div>
        </div>

        <div class="timeline-item reveal" data-side="left">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <span class="timeline-badge work">Experience</span>
            <h3>AIGC Algorithm Intern</h3>
            <p class="timeline-org">Funplus · AI Tech</p>
            <p class="timeline-date">Dec 2023 – Feb 2024</p>
          </div>
        </div>

        <div class="timeline-item reveal" data-side="right">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <span class="timeline-badge edu">Education</span>
            <h3>BEng Industrial Engineering</h3>
            <p class="timeline-org">Nanjing Tech University</p>
            <p class="timeline-date">Sep 2017 – Jun 2021</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects" class="section">
    <div class="section-inner">
      <h2 class="section-title reveal">Projects</h2>
      <div class="filter-tabs reveal">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="numpy">NumPy</button>
        <button class="filter-btn" data-filter="pytorch">PyTorch</button>
        <button class="filter-btn" data-filter="huggingface">HuggingFace</button>
        <button class="filter-btn" data-filter="llm">LLM</button>
      </div>
      <div class="projects-grid" id="projectsGrid">

        <div class="project-card reveal" data-category="numpy">
          <div class="project-card-inner">
            <span class="project-badge numpy">NumPy</span>
            <h3><a href="https://github.com/XavierSpycy/MLForce" target="_blank" rel="noopener">MLForce</a></h3>
            <p>Open-source ML library published on PyPI, implemented from scratch with NumPy.</p>
            <div class="project-tags">
              <span class="tag">NumPy</span><span class="tag">PyPI</span><span class="tag">Open Source</span>
            </div>
          </div>
        </div>

        <div class="project-card reveal" data-category="numpy" style="--delay:0.05s">
          <div class="project-card-inner">
            <span class="project-badge numpy">NumPy</span>
            <h3><a href="https://github.com/XavierSpycy/NumPyMultilayerPerceptron" target="_blank" rel="noopener">NumPy MLP</a></h3>
            <p>Multilayer perceptron with autograd engine and Keras-like API, built purely in NumPy.</p>
            <div class="project-tags">
              <span class="tag">NumPy</span><span class="tag">Autograd</span><span class="tag">MLP</span>
            </div>
          </div>
        </div>

        <div class="project-card reveal" data-category="numpy" style="--delay:0.1s">
          <div class="project-card-inner">
            <span class="project-badge numpy">NumPy</span>
            <h3><a href="https://github.com/XavierSpycy/NumPyNMF" target="_blank" rel="noopener">NumPy NMF</a></h3>
            <p>9 Non-negative Matrix Factorization algorithms with noise robustness benchmarking.</p>
            <div class="project-tags">
              <span class="tag">NumPy</span><span class="tag">NMF</span><span class="tag">Benchmarking</span>
            </div>
          </div>
        </div>

        <div class="project-card reveal" data-category="pytorch" style="--delay:0.05s">
          <div class="project-card-inner">
            <span class="project-badge pytorch">PyTorch</span>
            <h3><a href="https://github.com/XavierSpycy/EMNIST-Classifier" target="_blank" rel="noopener">EMNIST Classifier</a></h3>
            <p>Handwritten character classifier reproducing AlexNet, VGGNet, SpinalNet, and ResNet.</p>
            <div class="project-tags">
              <span class="tag">PyTorch</span><span class="tag">ResNet</span><span class="tag">Classification</span>
            </div>
          </div>
        </div>

        <div class="project-card reveal" data-category="pytorch" style="--delay:0.1s">
          <div class="project-card-inner">
            <span class="project-badge pytorch">PyTorch</span>
            <h3><a href="https://github.com/XavierSpycy/CAT-ImageTextIntegrator" target="_blank" rel="noopener">CAT Multimodal</a></h3>
            <p>12 multimodal models using self/cross-attention across 4 image and 2 text pretrained backbones.</p>
            <div class="project-tags">
              <span class="tag">PyTorch</span><span class="tag">Multimodal</span><span class="tag">Attention</span>
            </div>
          </div>
        </div>

        <div class="project-card reveal" data-category="pytorch" style="--delay:0.15s">
          <div class="project-card-inner">
            <span class="project-badge pytorch">PyTorch</span>
            <h3><a href="https://github.com/XavierSpycy/Robust-Trainers-for-Noisy-Labels" target="_blank" rel="noopener">Robust Trainers</a></h3>
            <p>ForwardLossCorrection, CoTeaching, JoCoR, O2UNet for training with noisy labels.</p>
            <div class="project-tags">
              <span class="tag">PyTorch</span><span class="tag">Noisy Labels</span><span class="tag">ResNet34</span>
            </div>
          </div>
        </div>

        <div class="project-card reveal" data-category="pytorch" style="--delay:0.2s">
          <div class="project-card-inner">
            <span class="project-badge pytorch">PyTorch</span>
            <h3><a href="https://github.com/XavierSpycy/tabtransformers" target="_blank" rel="noopener">Tab Transformers</a></h3>
            <p>Transformer architectures adapted for tabular data, exploring attention on structured inputs.</p>
            <div class="project-tags">
              <span class="tag">PyTorch</span><span class="tag">Transformer</span><span class="tag">Tabular</span>
            </div>
          </div>
        </div>

        <div class="project-card reveal" data-category="pytorch" style="--delay:0.25s">
          <div class="project-card-inner">
            <span class="project-badge pytorch">PyTorch</span>
            <h3><a href="https://github.com/XavierSpycy/MultiCLIP" target="_blank" rel="noopener">MultiCLIP</a></h3>
            <p>Multimodal-Multilabel-Multistage classification using CLIP and BLIP as backbone models.</p>
            <div class="project-tags">
              <span class="tag">CLIP</span><span class="tag">BLIP</span><span class="tag">Multi-label</span>
            </div>
          </div>
        </div>

        <div class="project-card reveal" data-category="huggingface" style="--delay:0.05s">
          <div class="project-card-inner">
            <span class="project-badge huggingface">HuggingFace</span>
            <h3><a href="https://github.com/XavierSpycy/hands-on-lora" target="_blank" rel="noopener">Hands-on LoRA</a></h3>
            <p>Fine-tuning Gemma-IT (2B/QLoRA), Qwen 2 (1.5B/LoRA), and Llama 3 (8B/LoRA) hands-on.</p>
            <div class="project-tags">
              <span class="tag">LoRA</span><span class="tag">Gemma</span><span class="tag">Qwen</span><span class="tag">Llama</span>
            </div>
          </div>
        </div>

        <div class="project-card reveal" data-category="llm" style="--delay:0.05s">
          <div class="project-card-inner">
            <span class="project-badge llm">LLM</span>
            <h3><a href="https://github.com/XavierSpycy/llama-ops" target="_blank" rel="noopener">Llama3Ops</a></h3>
            <p>Full LLM pipeline from LoRA fine-tuning to quantization (AutoAWQ, AutoGPTQ) and deployment (vLLM, TensorRT-LLM, Triton).</p>
            <div class="project-tags">
              <span class="tag">LoRA</span><span class="tag">vLLM</span><span class="tag">Quantization</span><span class="tag">Triton</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- RESEARCH -->
  <section id="research" class="section section-alt">
    <div class="section-inner">
      <h2 class="section-title reveal">Research</h2>
      <div class="research-list">

        <div class="paper-card reveal">
          <div class="paper-accent"></div>
          <div class="paper-body">
            <div class="paper-venue">
              <span class="venue-badge">WWW'25 Workshop · TempWeb</span>
            </div>
            <h3 class="paper-title">BERTDetect: A Neural Topic Modelling Approach for Android Malware Detection</h3>
            <p class="paper-desc">Applies neural topic modelling to Android malware detection, leveraging BERT-based representations to identify malicious behavior patterns.</p>
            <a href="https://arxiv.org/abs/2503.18043" target="_blank" rel="noopener" class="paper-link">arXiv →</a>
          </div>
        </div>

        <div class="paper-card reveal" style="--delay:0.1s">
          <div class="paper-accent"></div>
          <div class="paper-body">
            <div class="paper-venue">
              <span class="venue-badge">WWW'25 Short Paper</span>
            </div>
            <h3 class="paper-title">A Framework to Assess Multilingual Vulnerabilities of LLMs</h3>
            <p class="paper-desc">A systematic framework for evaluating security vulnerabilities in large language models across multiple languages, revealing cross-lingual attack surfaces.</p>
            <a href="https://arxiv.org/abs/2503.13081" target="_blank" rel="noopener" class="paper-link">arXiv →</a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="section">
    <div class="section-inner contact-inner">
      <h2 class="section-title reveal">Contact</h2>
      <p class="contact-subtitle reveal">Feel free to reach out — I'm always open to interesting conversations.</p>
      <div class="contact-links reveal">
        <a href="https://github.com/XavierSpycy" target="_blank" rel="noopener" class="contact-link" aria-label="GitHub">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/jiarui-xu-xavierspycy98" target="_blank" rel="noopener" class="contact-link" aria-label="LinkedIn">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          <span>LinkedIn</span>
        </a>
        <a href="https://huggingface.co/XavierSpycy" target="_blank" rel="noopener" class="contact-link" aria-label="HuggingFace">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M11.894 4.05c-.557.052-1.088.192-1.587.41a5.59 5.59 0 00-1.362.883 5.606 5.606 0 00-.993 1.253 5.468 5.468 0 00-.557 1.547 5.38 5.38 0 00-.065 1.614 5.45 5.45 0 00.408 1.578 5.54 5.54 0 00.858 1.346 5.63 5.63 0 001.24.995 5.61 5.61 0 001.545.59 5.6 5.6 0 001.62.08 5.543 5.543 0 001.578-.384 5.61 5.61 0 001.355-.852 5.614 5.614 0 001.003-1.236 5.524 5.524 0 00.573-1.54 5.47 5.47 0 00.074-1.612 5.477 5.477 0 00-.395-1.583 5.543 5.543 0 00-.847-1.355 5.605 5.605 0 00-1.228-1.007 5.607 5.607 0 00-1.538-.602 5.6 5.6 0 00-1.683-.124zm.35 2.08a3.464 3.464 0 011.24.26 3.475 3.475 0 011.017.69 3.464 3.464 0 01.69 1.017 3.44 3.44 0 01.255 1.247 3.46 3.46 0 01-.174 1.271 3.474 3.474 0 01-.617 1.067 3.465 3.465 0 01-.978.754 3.44 3.44 0 01-1.226.362 3.46 3.46 0 01-1.274-.13 3.476 3.476 0 01-1.088-.569 3.465 3.465 0 01-.786-.949 3.44 3.44 0 01-.393-1.209 3.46 3.46 0 01.064-1.274 3.475 3.475 0 01.524-1.108 3.465 3.465 0 01.907-.822 3.44 3.44 0 011.167-.427 3.46 3.46 0 01.671-.18zm-5.59 9.207c-.68.036-1.338.206-1.94.503a4.698 4.698 0 00-1.524 1.2 4.716 4.716 0 00-.923 1.7 4.73 4.73 0 00-.17 1.923h1.754a2.972 2.972 0 01.183-1.109 2.96 2.96 0 01.565-1.002 2.952 2.952 0 01.91-.71 2.96 2.96 0 011.145-.305zm10.692 0c.399.02.788.1 1.157.238a2.96 2.96 0 011.645 1.578 2.972 2.972 0 01.251 1.31h1.754a4.73 4.73 0 00-.17-1.923 4.715 4.715 0 00-.923-1.7 4.698 4.698 0 00-1.524-1.2 4.698 4.698 0 00-1.94-.503 4.73 4.73 0 00-.25.2z"/></svg>
          <span>HuggingFace</span>
        </a>
        <a href="mailto:xujiarui98@foxmail.com" class="contact-link" aria-label="Email">
          <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          <span>Email</span>
        </a>
      </div>
    </div>
  </section>

  <footer>
    <p>© <span id="year"></span> Jiarui Xu · Built with ♥ and Vanilla JS</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: Verify the file exists and has expected structure**

```bash
grep -c "<section" /Users/jiarui/GitHub/XavierSpycy.github.io/index.html
```
Expected output: `6` (hero, about, timeline, projects, research, contact)

- [ ] **Step 4: Commit**

```bash
cd /Users/jiarui/GitHub/XavierSpycy.github.io
git add index.html
git rm -r --cached pages/ script/ 2>/dev/null || true
git commit -m "feat: scaffold single-page HTML structure with all 6 sections"
```

---

## Task 2: Base styles — layout, typography, nav, hero

**Files:**
- Rewrite: `style.css`

- [ ] **Step 1: Write style.css with reset, custom properties, nav, and hero styles**

Write `style.css` with this exact content:

```css
/* ===== CUSTOM PROPERTIES ===== */
:root {
  --sky: #0ea5e9;
  --sky-light: #e0f2fe;
  --sky-mid: #bae6fd;
  --emerald: #10b981;
  --emerald-light: #d1fae5;
  --violet: #8b5cf6;
  --violet-light: #ede9fe;
  --amber: #f59e0b;
  --amber-light: #fef3c7;
  --slate-50: #f8fafc;
  --slate-100: #f1f5f9;
  --slate-200: #e2e8f0;
  --slate-400: #94a3b8;
  --slate-500: #64748b;
  --slate-600: #475569;
  --slate-900: #0f172a;
  --white: #ffffff;
  --font-serif: Georgia, 'Times New Roman', serif;
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --transition: 0.3s ease;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.1);
}

/* ===== RESET ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-sans);
  background: var(--white);
  color: var(--slate-900);
  line-height: 1.6;
  overflow-x: hidden;
}
a { text-decoration: none; color: inherit; }
img { max-width: 100%; }

/* ===== NAV ===== */
#nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--slate-200);
  transition: box-shadow var(--transition);
}
#nav.scrolled { box-shadow: var(--shadow-md); }
.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--slate-900);
  letter-spacing: 0.05em;
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}
.nav-links a {
  font-size: 0.875rem;
  color: var(--slate-500);
  transition: color var(--transition);
  position: relative;
  padding-bottom: 2px;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0; right: 100%;
  height: 1.5px;
  background: var(--sky);
  transition: right var(--transition);
}
.nav-links a:hover, .nav-links a.active { color: var(--sky); }
.nav-links a:hover::after, .nav-links a.active::after { right: 0; }
.nav-hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--slate-600);
  padding: 0.25rem;
}

/* ===== HERO ===== */
#hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(160deg, var(--white) 0%, var(--slate-50) 50%, #f0fdf4 100%);
}
.hero-svg {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
}
.svg-line-1 {
  animation: flowLine1 12s ease-in-out infinite;
}
.svg-line-2 {
  animation: flowLine2 16s ease-in-out infinite;
}
.svg-line-3 {
  animation: flowLine3 14s ease-in-out infinite;
}
@keyframes flowLine1 {
  0%, 100% { d: path("M0,400 C360,200 720,600 1080,300 S1440,400 1440,400"); }
  50%       { d: path("M0,350 C360,550 720,150 1080,500 S1440,350 1440,350"); }
}
@keyframes flowLine2 {
  0%, 100% { d: path("M0,500 C400,300 800,700 1200,400 S1440,500 1440,500"); }
  50%       { d: path("M0,450 C400,650 800,250 1200,600 S1440,450 1440,450"); }
}
@keyframes flowLine3 {
  0%, 100% { d: path("M0,300 C300,500 700,100 1100,450 S1440,300 1440,300"); }
  50%       { d: path("M0,350 C300,150 700,550 1100,200 S1440,350 1440,350"); }
}
.hero-glow {
  position: absolute;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: left 0.12s ease, top 0.12s ease;
  will-change: left, top;
}
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  max-width: 700px;
  width: 100%;
}
.hero-name {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  color: var(--slate-900);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 1rem;
}
.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--sky);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
  min-height: 1.8em;
  margin-bottom: 2.5rem;
}
.cursor {
  display: inline-block;
  animation: blink 0.8s step-end infinite;
  color: var(--sky);
  font-weight: 300;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
.hero-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.875rem;
  max-width: 480px;
  margin: 0 auto 2.5rem;
}
.hero-card {
  background: rgba(255,255,255,0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.9);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  box-shadow: var(--shadow-sm);
  opacity: 0;
  transform: translateY(16px);
  animation: fadeUp 0.5s ease forwards;
  animation-delay: var(--delay, 0s);
}
@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}
.hero-card-icon { font-size: 1.25rem; }
.hero-card-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--slate-400);
  font-weight: 600;
}
.hero-card-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--slate-900);
}
.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn {
  padding: 0.65rem 1.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all var(--transition);
  cursor: pointer;
  border: none;
}
.btn-primary {
  background: var(--sky);
  color: var(--white);
}
.btn-primary:hover {
  background: #0284c7;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(14,165,233,0.3);
}
.btn-outline {
  background: transparent;
  color: var(--sky);
  border: 1.5px solid var(--sky);
}
.btn-outline:hover {
  background: var(--sky);
  color: var(--white);
  transform: translateY(-2px);
}

/* ===== SECTION SHARED ===== */
.section { padding: 6rem 1.5rem; }
.section-alt { background: var(--slate-50); }
.section-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.section-title {
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--slate-900);
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
}
.section-title::after {
  content: '';
  display: block;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, var(--sky), var(--emerald));
  border-radius: 2px;
  margin-top: 0.4rem;
}

/* ===== SCROLL REVEAL ===== */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: var(--delay, 0s);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== ABOUT ===== */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}
.about-bio p {
  color: var(--slate-600);
  font-size: 1rem;
  line-height: 1.75;
  margin-bottom: 1rem;
}
.about-bio p:last-child { margin-bottom: 0; }
.skill-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}
.skill-group-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--slate-400);
  min-width: 80px;
}
.skill-tag {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  border: 1px solid transparent;
}
.skill-tag.sky    { background: var(--sky-light);     color: #0369a1; border-color: var(--sky-mid); }
.skill-tag.emerald { background: var(--emerald-light); color: #065f46; border-color: #a7f3d0; }
.skill-tag.violet { background: var(--violet-light);  color: #5b21b6; border-color: #ddd6fe; }
.skill-tag.amber  { background: var(--amber-light);   color: #92400e; border-color: #fde68a; }
.skill-tag.slate  { background: var(--slate-100);     color: var(--slate-600); border-color: var(--slate-200); }

/* ===== TIMELINE ===== */
.timeline {
  position: relative;
  padding: 1rem 0;
}
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0; bottom: 0;
  width: 2px;
  background: var(--slate-200);
  transform: translateX(-50%);
}
.timeline-line::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  background: linear-gradient(to bottom, var(--sky), var(--emerald));
  height: 0%;
  transition: height 1.2s ease;
}
.timeline-line.animated::after { height: 100%; }
.timeline-item {
  display: flex;
  width: 50%;
  padding: 1rem 3rem 1rem 0;
  position: relative;
}
.timeline-item[data-side="right"] {
  margin-left: 50%;
  padding: 1rem 0 1rem 3rem;
}
.timeline-dot {
  position: absolute;
  right: -6px;
  top: 1.5rem;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--white);
  border: 2px solid var(--sky);
  z-index: 2;
  transition: background var(--transition), transform var(--transition);
}
.timeline-item[data-side="right"] .timeline-dot {
  right: auto;
  left: -6px;
}
.timeline-item:hover .timeline-dot {
  background: var(--sky);
  transform: scale(1.3);
}
.timeline-card {
  background: var(--white);
  border: 1px solid var(--slate-200);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  width: 100%;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition), transform var(--transition);
}
.timeline-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.timeline-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--slate-900);
  margin-bottom: 0.25rem;
}
.timeline-org { font-size: 0.875rem; color: var(--sky); font-weight: 500; margin-bottom: 0.2rem; }
.timeline-date { font-size: 0.78rem; color: var(--slate-400); margin-bottom: 0.4rem; }
.timeline-desc { font-size: 0.85rem; color: var(--slate-500); line-height: 1.5; }
.timeline-badge {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  margin-bottom: 0.5rem;
}
.timeline-badge.edu    { background: var(--sky-light);     color: #0369a1; }
.timeline-badge.work   { background: var(--emerald-light); color: #065f46; }
.timeline-badge.research { background: var(--violet-light);  color: #5b21b6; }

/* ===== PROJECTS ===== */
.filter-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.filter-btn {
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  border: 1.5px solid var(--slate-200);
  background: var(--white);
  color: var(--slate-500);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition);
}
.filter-btn:hover, .filter-btn.active {
  background: var(--sky);
  border-color: var(--sky);
  color: var(--white);
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
.project-card {
  perspective: 800px;
  cursor: default;
}
.project-card-inner {
  background: var(--white);
  border: 1px solid var(--slate-200);
  border-radius: 12px;
  padding: 1.5rem;
  height: 100%;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition), transform var(--transition), border-color var(--transition);
  transform-style: preserve-3d;
}
.project-card:hover .project-card-inner {
  box-shadow: var(--shadow-lg);
  border-color: var(--sky-mid);
}
.project-card h3 { font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; }
.project-card h3 a { color: var(--slate-900); transition: color var(--transition); }
.project-card h3 a:hover { color: var(--sky); }
.project-card p { font-size: 0.875rem; color: var(--slate-500); line-height: 1.6; margin-bottom: 0.875rem; }
.project-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.tag {
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.15rem 0.55rem;
  border-radius: 4px;
  background: var(--slate-100);
  color: var(--slate-600);
}
.project-badge {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  margin-bottom: 0.6rem;
}
.project-badge.numpy      { background: #fef3c7; color: #92400e; }
.project-badge.pytorch    { background: #fee2e2; color: #991b1b; }
.project-badge.huggingface { background: #fef9c3; color: #713f12; }
.project-badge.llm        { background: var(--violet-light); color: #5b21b6; }
.project-card.hidden {
  display: none;
}

/* ===== RESEARCH ===== */
.research-list { display: flex; flex-direction: column; gap: 1.25rem; }
.paper-card {
  display: flex;
  background: var(--white);
  border: 1px solid var(--slate-200);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition), transform var(--transition);
}
.paper-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.paper-accent {
  width: 4px;
  flex-shrink: 0;
  background: linear-gradient(to bottom, var(--sky), var(--emerald));
}
.paper-body { padding: 1.5rem; flex: 1; }
.venue-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: var(--sky-light);
  color: #0369a1;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}
.paper-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--slate-900);
  line-height: 1.4;
  margin-bottom: 0.6rem;
}
.paper-desc { font-size: 0.875rem; color: var(--slate-500); line-height: 1.65; margin-bottom: 1rem; }
.paper-link {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--sky);
  letter-spacing: 0.03em;
  transition: color var(--transition), letter-spacing var(--transition);
}
.paper-link:hover { color: #0284c7; letter-spacing: 0.08em; }

/* ===== CONTACT ===== */
.contact-inner { text-align: center; max-width: 600px; margin: 0 auto; }
.contact-subtitle { color: var(--slate-500); margin-bottom: 2.5rem; font-size: 1.05rem; }
.contact-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.contact-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: var(--slate-500);
  transition: color var(--transition), transform var(--transition);
  font-size: 0.78rem;
  font-weight: 600;
}
.contact-link:hover { color: var(--sky); transform: translateY(-4px); }
.contact-icon { width: 2rem; height: 2rem; }

/* ===== FOOTER ===== */
footer {
  text-align: center;
  padding: 2rem;
  border-top: 1px solid var(--slate-200);
  font-size: 0.85rem;
  color: var(--slate-400);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1023px) {
  .timeline-item, .timeline-item[data-side="right"] {
    width: 100%;
    margin-left: 0;
    padding: 0.5rem 0 0.5rem 3rem;
  }
  .timeline-line { left: 16px; }
  .timeline-dot { right: auto; left: -6px !important; }
}
@media (max-width: 767px) {
  .nav-links { display: none; }
  .nav-links.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px; left: 0; right: 0;
    background: rgba(255,255,255,0.97);
    border-bottom: 1px solid var(--slate-200);
    padding: 1rem 2rem 1.5rem;
    gap: 1rem;
  }
  .nav-hamburger { display: block; }
  .about-grid { grid-template-columns: 1fr; gap: 2rem; }
  .projects-grid { grid-template-columns: 1fr; }
  .hero-cards { grid-template-columns: 1fr 1fr; max-width: 360px; }
  .section { padding: 4rem 1.25rem; }
}
```

- [ ] **Step 2: Verify file looks right**

```bash
grep -c "@keyframes" /Users/jiarui/GitHub/XavierSpycy.github.io/style.css
```
Expected: `4` (fadeUp, blink, flowLine1, flowLine2 — flowLine3 may also be counted)

- [ ] **Step 3: Commit**

```bash
cd /Users/jiarui/GitHub/XavierSpycy.github.io
git add style.css
git commit -m "feat: add Nordic Light styles with hero, nav, sections, and responsive layout"
```

---

## Task 3: JavaScript — all animations and interactions

**Files:**
- Create: `script.js`

- [ ] **Step 1: Create script.js with all animation logic**

Write `script.js` with this exact content:

```js
// ===== NAV =====
const nav = document.getElementById('nav');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.nav-hamburger');
const allNavLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  updateActiveNav();
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target)) navLinks.classList.remove('open');
});

allNavLinks.forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
  });
  allNavLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

// ===== HERO MOUSE GLOW =====
const hero = document.getElementById('hero');
const glow = document.getElementById('heroGlow');

hero.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect();
  glow.style.left = (e.clientX - rect.left) + 'px';
  glow.style.top  = (e.clientY - rect.top)  + 'px';
});

// ===== TYPEWRITER =====
const phrases = [
  'LLM Algorithm Engineer',
  'ML Researcher',
  'Open Source Contributor',
  'Agentic AI Builder',
];
const el = document.getElementById('typewriter');
let pi = 0, ci = 0, deleting = false;

function typeStep() {
  const phrase = phrases[pi];
  if (!deleting) {
    el.textContent = phrase.slice(0, ++ci);
    if (ci === phrase.length) { deleting = true; setTimeout(typeStep, 1800); return; }
    setTimeout(typeStep, 70);
  } else {
    el.textContent = phrase.slice(0, --ci);
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(typeStep, 300); return; }
    setTimeout(typeStep, 35);
  }
}
typeStep();

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== COUNT-UP =====
function countUp(el, target, duration) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      countUp(el, parseInt(el.dataset.target), 1200);
      countObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.count-up').forEach(el => countObserver.observe(el));

// ===== TIMELINE LINE DRAW =====
const timelineLine = document.getElementById('timelineLine');
if (timelineLine) {
  const lineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) timelineLine.classList.add('animated');
    });
  }, { threshold: 0.1 });
  lineObserver.observe(document.getElementById('timeline'));
}

// ===== PROJECT FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
      if (match) {
        card.style.animation = 'none';
        card.offsetHeight;
        card.style.animation = '';
        card.classList.remove('visible');
        setTimeout(() => card.classList.add('visible'), 30);
      }
    });
  });
});

// ===== 3D CARD TILT =====
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.querySelector('.project-card-inner').style.transform =
      `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.querySelector('.project-card-inner').style.transform = '';
  });
});

// ===== FOOTER YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();
```

- [ ] **Step 2: Verify script has all required functions**

```bash
grep -E "typeStep|countUp|revealObserver|filterBtns|timelineLine|heroGlow|3D|tilt" /Users/jiarui/GitHub/XavierSpycy.github.io/script.js
```
Expected: lines matching each of `typeStep`, `countUp`, `revealObserver`, `filterBtns`, `timelineLine`, `heroGlow`, `rotateY` (3D tilt)

- [ ] **Step 3: Commit**

```bash
cd /Users/jiarui/GitHub/XavierSpycy.github.io
git add script.js
git commit -m "feat: add all JS animations — typewriter, mouse glow, count-up, scroll reveal, 3D tilt, project filter"
```

---

## Task 4: Visual verification and polish

**Files:**
- Possibly edit: `style.css`, `script.js`, `index.html`

- [ ] **Step 1: Open the page in a browser**

```bash
open /Users/jiarui/GitHub/XavierSpycy.github.io/index.html
```

- [ ] **Step 2: Verify the checklist manually**

Check each item visually:
- [ ] Hero fills full screen, name and typewriter text visible
- [ ] Frosted-glass cards slide up on load with stagger
- [ ] Typewriter cycles through all 4 phrases smoothly
- [ ] Mouse moving over Hero causes the glow to follow
- [ ] Scrolling down triggers About section to fade in
- [ ] Timeline cards appear with line draw animation
- [ ] Project filter tabs switch correctly (NumPy/PyTorch/etc.)
- [ ] Hovering a project card produces 3D tilt effect
- [ ] Paper cards have left accent stripe and hover lift
- [ ] Contact icons lift on hover
- [ ] Nav highlights active section while scrolling
- [ ] Page looks correct on narrow window (mobile simulation)

- [ ] **Step 3: Fix any issues found, then commit**

```bash
cd /Users/jiarui/GitHub/XavierSpycy.github.io
git add -A
git commit -m "fix: visual polish after browser verification"
```

(Skip this commit if no changes were needed.)

---

## Task 5: Final cleanup and git state

**Files:**
- Possibly: `.gitignore`

- [ ] **Step 1: Check for leftover files**

```bash
ls /Users/jiarui/GitHub/XavierSpycy.github.io/
```
Expected: `assets/` (optional), `docs/`, `index.html`, `style.css`, `script.js`  
Not expected: `pages/`, `script/`

- [ ] **Step 2: Add .gitignore for brainstorm artifacts**

Append to `.gitignore` (create if missing):

```
.superpowers/
```

```bash
echo ".superpowers/" >> /Users/jiarui/GitHub/XavierSpycy.github.io/.gitignore
```

- [ ] **Step 3: Final commit**

```bash
cd /Users/jiarui/GitHub/XavierSpycy.github.io
git add .gitignore
git status
git commit -m "chore: add .gitignore, finalize homepage"
```

---

## Self-Review: Spec Coverage Check

| Spec requirement | Task |
|---|---|
| Nordic Light color palette | Task 2 (CSS custom properties) |
| Hero full-screen with SVG flow lines | Task 1 (HTML) + Task 2 (CSS keyframes) |
| Typewriter cycling subtitles | Task 3 (JS typeStep) |
| Mouse-following gradient glow | Task 3 (JS mousemove + heroGlow) |
| Frosted-glass info cards with count-up | Task 1 (HTML cards) + Task 3 (JS countUp) |
| Scroll reveal for all sections | Task 2 (CSS reveal) + Task 3 (JS IntersectionObserver) |
| About: bio + skill tag cloud | Task 1 (HTML about section) |
| Timeline: education + experience | Task 1 (HTML timeline items) |
| Timeline line draw animation | Task 2 (CSS timeline-line::after) + Task 3 (JS lineObserver) |
| Projects: 10 cards with filter tabs | Task 1 (HTML 10 project cards) |
| Project 3D tilt hover | Task 3 (JS card mousemove) |
| Research: 2 papers with arXiv links | Task 1 (HTML paper cards) |
| Contact: GitHub, LinkedIn, HF, Email | Task 1 (HTML contact links) |
| Responsive layout (mobile/tablet) | Task 2 (CSS media queries) |
| Hamburger nav on mobile | Task 1 (HTML button) + Task 2/3 |
| Fixed nav with active link highlight | Task 2 (CSS) + Task 3 (JS updateActiveNav) |
