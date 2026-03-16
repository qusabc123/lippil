const toolsFallback = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    tagline: "通用对话与写作助手",
    description: "适合写作、总结、头脑风暴与日常生产力场景的通用 AI 助手。",
    category: "writing",
    price: "定价见官网",
    tags: ["对话", "写作", "通用"],
    link: "https://openai.com/chatgpt",
    affiliate: "https://openai.com/chatgpt",
    featured: true,
  },
  {
    id: "claude",
    name: "Claude",
    tagline: "长文本理解与对话",
    description: "主打长文理解与对话体验的 AI 助手，适合总结、提纲与分析。",
    category: "writing",
    price: "定价见官网",
    tags: ["长文", "总结", "对话"],
    link: "https://www.anthropic.com/claude",
    affiliate: "https://www.anthropic.com/claude",
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    tagline: "笔记与文档内的 AI 助手",
    description: "集成在 Notion 的 AI 写作与整理能力，适合团队知识库与协作。",
    category: "writing",
    price: "定价见官网",
    tags: ["笔记", "文档", "协作"],
    link: "https://www.notion.so/product/ai",
    affiliate: "https://www.notion.so/product/ai",
    featured: true,
  },
  {
    id: "midjourney",
    name: "Midjourney",
    tagline: "高质量图像生成",
    description: "以艺术风格和高质量图像生成著称的 AI 创作平台。",
    category: "design",
    price: "定价见官网",
    tags: ["图像生成", "创意", "风格"],
    link: "https://www.midjourney.com/",
    affiliate: "https://www.midjourney.com/",
    featured: true,
  },
  {
    id: "canva-magic",
    name: "Canva Magic",
    tagline: "一站式设计与内容生成",
    description: "Canva 的 AI 设计能力，适合快速生成海报、社媒与品牌素材。",
    category: "design",
    price: "定价见官网",
    tags: ["设计", "模板", "品牌"],
    link: "https://www.canva.com/magic/",
    affiliate: "https://www.canva.com/magic/",
  },
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    tagline: "生成式创意工具套件",
    description: "Adobe 的生成式 AI 创意工具，面向设计与内容生产。",
    category: "design",
    price: "定价见官网",
    tags: ["生成式", "创意", "图片"],
    link: "https://www.adobe.com/products/firefly.html",
    affiliate: "https://www.adobe.com/products/firefly.html",
  },
  {
    id: "runway",
    name: "Runway",
    tagline: "AI 视频生成与编辑",
    description: "面向内容团队的视频生成、编辑与创意工具平台。",
    category: "video",
    price: "定价见官网",
    tags: ["视频", "生成", "剪辑"],
    link: "https://runwayml.com/",
    affiliate: "https://runwayml.com/",
    featured: true,
  },
  {
    id: "descript",
    name: "Descript",
    tagline: "音视频编辑与转写",
    description: "集成转写、配音与剪辑的一体化音视频编辑工具。",
    category: "video",
    price: "定价见官网",
    tags: ["视频编辑", "播客", "转写"],
    link: "https://www.descript.com/",
    affiliate: "https://www.descript.com/",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    tagline: "AI 语音合成与配音",
    description: "高质量语音合成平台，适合配音、播客与有声内容。",
    category: "video",
    price: "定价见官网",
    tags: ["语音", "配音", "播客"],
    link: "https://elevenlabs.io/",
    affiliate: "https://elevenlabs.io/",
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    tagline: "AI 代码补全与对话",
    description: "GitHub 官方 AI 编程助手，支持代码补全与编程对话。",
    category: "dev",
    price: "定价见官网",
    tags: ["代码补全", "IDE", "编程"],
    link: "https://github.com/features/copilot",
    affiliate: "https://github.com/features/copilot",
    featured: true,
  },
  {
    id: "cursor",
    name: "Cursor",
    tagline: "AI 驱动的代码编辑器",
    description: "集成 AI 能力的代码编辑器，面向开发者的全流程辅助。",
    category: "dev",
    price: "定价见官网",
    tags: ["编辑器", "AI", "代码"],
    link: "https://www.cursor.com/",
    affiliate: "https://www.cursor.com/",
  },
  {
    id: "replit",
    name: "Replit",
    tagline: "在线 IDE 与 AI 开发",
    description: "在线开发环境与 AI 辅助能力结合的开发平台。",
    category: "dev",
    price: "定价见官网",
    tags: ["在线IDE", "协作", "开发"],
    link: "https://replit.com/",
    affiliate: "https://replit.com/",
  },
  {
    id: "intercom-fin",
    name: "Intercom Fin",
    tagline: "AI 客服与自助服务",
    description: "面向客服团队的 AI 助手，提升自助服务与支持效率。",
    category: "business",
    price: "定价见官网",
    tags: ["客服", "支持", "自动化"],
    link: "https://www.intercom.com/fin",
    affiliate: "https://www.intercom.com/fin",
    featured: true,
  },
  {
    id: "hubspot-ai",
    name: "HubSpot AI",
    tagline: "CRM 与营销 AI 助手",
    description: "HubSpot 的 AI 能力，面向营销、销售与客服场景。",
    category: "business",
    price: "定价见官网",
    tags: ["CRM", "营销", "销售"],
    link: "https://www.hubspot.com/artificial-intelligence",
    affiliate: "https://www.hubspot.com/artificial-intelligence",
  },
];
let tools = [];

const cardsEl = document.getElementById("cards");
const featuredCardsEl = document.getElementById("featuredCards");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const filterRow = document.getElementById("filterRow");
const newsletterSection = document.getElementById("newsletter");
const newsletterButtons = document.querySelectorAll("[data-action='newsletter']");

let activeFilter = "all";

function createCard(tool, index) {
  const card = document.createElement("article");
  card.className = "card";
  card.style.animationDelay = `${index * 0.05}s`;
  card.innerHTML = `
    <div class="tag-row">
      <span class="tag">${labelForCategory(tool.category)}</span>
      <span class="tag">${tool.price}</span>
    </div>
    <h3>${tool.name}</h3>
    <p>${tool.tagline}</p>
    <div class="tag-row">
      ${tool.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
    <a href="tool.html?id=${tool.id}">查看详情</a>
  `;
  return card;
}

function labelForCategory(category) {
  const map = {
    writing: "写作与文案",
    design: "设计与图片",
    video: "视频与音频",
    dev: "开发与数据",
    business: "商业与增长",
  };
  return map[category] || "其他";
}

function renderCounts() {
  const totals = {
    writing: 0,
    design: 0,
    video: 0,
    dev: 0,
    business: 0,
  };
  tools.forEach((tool) => {
    if (totals[tool.category] !== undefined) {
      totals[tool.category] += 1;
    }
  });
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };
  const totalCount = tools.length;
  setText("count-total", totalCount);
  setText("count-total-main", totalCount);
  setText("count-writing", totals.writing);
  setText("count-design", totals.design);
  setText("count-video", totals.video);
  setText("count-dev", totals.dev);
  setText("count-business", totals.business);
}

function matchesSearch(tool, term) {
  if (!term) return true;
  const text = `${tool.name} ${tool.tagline} ${tool.description || ""} ${tool.tags.join(" ")}`.toLowerCase();
  return text.includes(term.toLowerCase());
}

function matchesFilter(tool) {
  if (activeFilter === "all") return true;
  return tool.category === activeFilter;
}

function renderTools() {
  if (!cardsEl || !searchInput) return;
  const term = searchInput.value.trim();
  cardsEl.innerHTML = "";
  const filtered = tools.filter((tool) => matchesSearch(tool, term) && matchesFilter(tool));
  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `
      <h3>没有找到匹配工具</h3>
      <p>尝试更换关键词或切换筛选标签。</p>
    `;
    cardsEl.appendChild(empty);
    return;
  }
  filtered.forEach((tool, index) => {
    cardsEl.appendChild(createCard(tool, index));
  });
}

function renderFeatured() {
  if (!featuredCardsEl) return;
  const featured = tools.filter((tool) => tool.featured);
  featuredCardsEl.innerHTML = "";
  featured.forEach((tool, index) => {
    featuredCardsEl.appendChild(createCard(tool, index));
  });
}

function renderCategoryPage() {
  const categoryList = document.getElementById("categoryList");
  const titleEl = document.getElementById("categoryTitle");
  const descEl = document.getElementById("categoryDesc");
  if (!categoryList || !titleEl || !descEl) return;
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat") || "writing";
  activeFilter = cat;
  titleEl.textContent = `${labelForCategory(cat)}工具`;
  descEl.textContent = `精选 ${labelForCategory(cat)} 相关工具，方便快速对比与试用。`;
  categoryList.innerHTML = "";
  tools.filter(matchesFilter).forEach((tool, index) => {
    categoryList.appendChild(createCard(tool, index));
  });
}

function renderToolDetail() {
  const detail = document.getElementById("toolDetail");
  const title = document.getElementById("toolTitle");
  const tagline = document.getElementById("toolTagline");
  const desc = document.getElementById("toolDesc");
  const meta = document.getElementById("toolMeta");
  const tags = document.getElementById("toolTags");
  const primary = document.getElementById("toolPrimary");
  const affiliate = document.getElementById("toolAffiliate");
  if (!detail || !title || !tagline || !desc || !meta || !tags || !primary || !affiliate) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const tool = tools.find((item) => item.id === id) || tools[0];
  title.textContent = tool.name;
  tagline.textContent = tool.tagline;
  desc.textContent = tool.description;
  meta.textContent = `分类：${labelForCategory(tool.category)} · 价格：${tool.price}`;
  tags.innerHTML = tool.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  primary.href = tool.link;
  affiliate.href = tool.affiliate || tool.link;
}

if (filterRow) {
  filterRow.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter");
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    document.querySelectorAll(".filter").forEach((el) => {
      el.classList.toggle("active", el === btn);
    });
    renderTools();
  });
}

if (searchInput) {
  searchInput.addEventListener("input", renderTools);
}

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    renderTools();
  });
}

if (newsletterButtons.length) {
  newsletterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (newsletterSection) {
        newsletterSection.scrollIntoView({ behavior: "smooth", block: "start" });
        const emailInput = document.getElementById("newsletterEmail");
        if (emailInput) {
          emailInput.focus();
        }
      } else {
        window.location.href = "index.html#newsletter";
      }
    });
  });
}

async function loadTools() {
  try {
    const response = await fetch("data/tools.json", { cache: "no-store" });
    if (!response.ok) throw new Error("tools fetch failed");
    const data = await response.json();
    tools = Array.isArray(data) ? data : data.tools || [];
  } catch (error) {
    tools = toolsFallback;
  }
}

function setupPaymentPage() {
  const planSelect = document.getElementById("planSelect");
  const amountInput = document.getElementById("amountInput");
  if (!planSelect || !amountInput) return;
  const params = new URLSearchParams(window.location.search);
  const plan = params.get("plan");
  const planMap = {
    fast: "199",
    sponsor: "899",
  };
  if (plan && planMap[plan]) {
    planSelect.value = plan;
    amountInput.value = planMap[plan];
  }
  planSelect.addEventListener("change", () => {
    amountInput.value = planMap[planSelect.value] || "";
  });
}

loadTools().then(() => {
  renderFeatured();
  renderTools();
  renderCategoryPage();
  renderToolDetail();
  renderCounts();
  setupPaymentPage();
});
