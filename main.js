// =======================
// 全域變數
// =======================
let allProducts = [];
let filteredProducts = [];
let currentCategory = "all";

let allCustomers = []; // 客戶資料（從 customers.json 載入）

// =======================
// 載入產品資料（products.json）
// =======================
fetch("products.json")
  .then(response => response.json())
  .then(data => {
    allProducts = data;
    filteredProducts = [...allProducts];
    renderProductCatalog(); // 初始化產品目錄
  })
  .catch(err => {
    console.error("載入 products.json 失敗", err);
  });

// =======================
// 折數計算（全域通用）
// =======================
function applyDiscount(price) {
  const rate = parseFloat(document.getElementById("discountRate")?.value || "1");
  const p = parseFloat(price);
  if (isNaN(rate) || isNaN(p)) return price;
  return (p * rate).toFixed(2);
}

// =======================
// 客戶資料載入 + 填入工具
// =======================

// 從 customers.json 載入
async function loadCustomerData() {
  try {
    const res = await fetch("customers.json");
    allCustomers = await res.json();
    console.log("客戶資料載入成功，共", allCustomers.length, "筆");
  } catch (e) {
    console.error("載入客戶資料失敗", e);
    allCustomers = [];
  }
}

// 共用：把客戶資料寫進欄位 & 預覽
function fillCustomerFields(customer) {
  const nameInput = document.getElementById("customerName");
  const contactInput = document.getElementById("contactPerson");
  const phoneInput = document.getElementById("customerPhone");
  const faxInput = document.getElementById("customerFax");
  const invoiceAddrInput = document.getElementById("invoiceAddress");
  const companyAddrInput = document.getElementById("companyAddress");
  const shippingAddrInput = document.getElementById("shippingAddress");

  if (nameInput) nameInput.value = customer.name || "";
  if (contactInput) contactInput.value = customer.contactPerson || "";
  if (phoneInput) phoneInput.value = customer.phone || "";
  if (faxInput) faxInput.value = customer.fax || "";
  if (invoiceAddrInput) invoiceAddrInput.value = customer.invoiceAddress || "";
  if (companyAddrInput) companyAddrInput.value = customer.companyAddress || "";
  if (shippingAddrInput) shippingAddrInput.value = customer.shippingAddress || "";

  // 同步預覽區
  const mapping = {
    customerName: "previewCustomerName",
    contactPerson: "previewContactPerson",
    customerPhone: "previewCustomerPhone",
    customerFax: "previewCustomerFax"
  };

  Object.entries(mapping).forEach(([inputId, spanId]) => {
    const input = document.getElementById(inputId);
    const span = document.getElementById(spanId);
    if (input && span) {
      span.textContent = input.value || "-";
    }
  });
}

// =======================
// DOMContentLoaded：統一初始化
// =======================
document.addEventListener("DOMContentLoaded", () => {
  // 原本的初始化
  setupEventListeners();
  renderProductCatalog();
  updatePreviewProducts();

  // 載入客戶資料
  loadCustomerData();

  // 綁定客戶名稱欄位的自動帶入
  const nameInput = document.getElementById("customerName");
  const contactInput = document.getElementById("contactPerson");

  if (!nameInput) return;

  // ❶ 輸入時：若找到符合的客戶，就同步帶入（模糊包含）
nameInput.addEventListener("input", () => {
  const keyword = nameInput.value.trim();

  // 👉 少於 2 個字就先不要自動帶入
  if (keyword.length < 2) return;

  const matched = allCustomers.find(c => c.name && c.name.includes(keyword));
  if (!matched) return;

  // ➤ 自動帶入（沿用 fillCustomerFields，避免重複邏輯 / 引用未宣告的變數）
  fillCustomerFields(matched);
});


  // ❷ 按 Tab：用關鍵字找「最接近的客戶」，自動補全 + 跳到聯絡人
  nameInput.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const keyword = nameInput.value.trim();
    if (keyword.length < 2) return;


    // 優先找「以關鍵字開頭」的
    let matches = allCustomers.filter(
      c => c.name && c.name.startsWith(keyword)
    );
    // 找不到再退而求其次「包含關鍵字」
    if (!matches.length) {
      matches = allCustomers.filter(
        c => c.name && c.name.includes(keyword)
      );
    }
    if (!matches.length) return;

    e.preventDefault(); // 攔截預設 Tab 行為

    const customer = matches[0];
    fillCustomerFields(customer);

    if (contactInput) contactInput.focus();
  });
});

// =======================
// 工具：依分類 + 關鍵字過濾產品
// =======================
function getFilteredProducts(category, keyword = "") {
  let base = allProducts;

  if (category && category !== "all") {
    base = base.filter(p => p.category === category);
  }

  if (keyword) {
    const k = keyword.toLowerCase();
    base = base.filter(
      p =>
        (p.code && p.code.toLowerCase().includes(k)) ||
        (p.name && p.name.toLowerCase().includes(k))
    );
  }

  return base;
}

// =======================
// 產品目錄渲染
// =======================
function renderProductCatalog() {
  const catalog = document.getElementById("productCatalog");
  if (!catalog) return;

  catalog.innerHTML = "";

  if (!filteredProducts.length) {
    catalog.innerHTML = `<p>目前此分類沒有符合條件的產品。</p>`;
    return;
  }

  filteredProducts.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <input type="checkbox" class="product-select-checkbox" data-index="${index}">
      <div class="product-card-main">
        <div class="product-card-code">${p.code}</div>
        <div class="product-card-name">${p.name}</div>
        <div class="product-card-meta">
          單位：${p.unit || "-"}　｜　單價：${p.price || "-"}　｜　備註：${p.note || "-"}
        </div>
      </div>
    `;
    catalog.appendChild(card);
  });
}

// =======================
// 分類篩選
// =======================
function filterByCategory(category) {
  currentCategory = category;

  // 更新按鈕樣式
  const buttons = document.querySelectorAll(".category-filter");
  buttons.forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add("active");
    } else if (category === "all" && btn.dataset.category === "all") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // 套用分類 + 搜尋關鍵字
  const keyword = (document.getElementById("productSearch")?.value || "").trim();
  filteredProducts = getFilteredProducts(category, keyword);

  const info = document.getElementById("categoryInfo");
  if (info) {
    if (keyword) {
      info.textContent = `分類：${category === "all" ? "全部" : category}，關鍵字：「${keyword}」`;
    } else if (category === "all") {
      info.textContent = "顯示全部產品";
    } else {
      info.textContent = `顯示分類：${category}`;
    }
  }

  renderProductCatalog();
}

// =======================
// 搜尋產品
// =======================
function searchProducts() {
  const keyword = (document.getElementById("productSearch")?.value || "").trim();
  filteredProducts = getFilteredProducts(currentCategory, keyword);

  const info = document.getElementById("categoryInfo");
  if (info) {
    if (keyword) {
      info.textContent = `搜尋結果：「${keyword}」`;
    } else if (currentCategory === "all") {
      info.textContent = "顯示全部產品";
    } else {
      info.textContent = `顯示分類：${currentCategory}`;
    }
  }

  renderProductCatalog();
}

// =======================
// 選取 / 新增產品到報價清單
// =======================
function selectAllProducts() {
  document.querySelectorAll(".product-select-checkbox").forEach(chk => {
    chk.checked = true;
  });
}

function clearAllProducts() {
  document.querySelectorAll(".product-select-checkbox").forEach(chk => {
    chk.checked = false;
  });
}

// ===== 工具函式（若你原本就有，可保留你原本的） =====
function toNumber(v) {
  // 支援 "1,234.50" 這種格式
  return parseFloat(String(v).replace(/,/g, '')) || 0;
}

function applyDiscount(priceNumber) {
  const rateEl = document.getElementById('discountRate');
  const rate = rateEl ? parseFloat(rateEl.value || 1) : 1;
  // 統一回傳 number（兩位小數）
  return Math.round(priceNumber * rate * 100) / 100;
}

// =====【請整段覆蓋你原本的 addSelectedProducts】=====
function addSelectedProducts() {
  const checkboxes = document.querySelectorAll(".product-select-checkbox:checked");
  if (!checkboxes.length) return;

  checkboxes.forEach(chk => {
    const idx = parseInt(chk.dataset.index, 10);
    const product = filteredProducts[idx];
    if (!product) return;

    // 1️⃣ 原始單價（永遠不變）
    const basePrice = toNumber(product.price);

    // 2️⃣ 折後單價（唯一顯示/輸出的價格）
    const finalPrice = applyDiscount(basePrice);

    // 3️⃣ 不要覆蓋 price，保留清楚的欄位
    const item = {
      ...product,
      basePrice,     // 原價（數字）
      finalPrice     // 折後價（數字）
    };

    addProductItem(item);
  });

  // 清除勾選狀態
  clearAllProducts();

  // 強制同步預覽（PDF 與畫面一致）
  updatePreviewProducts();
}


function addCustomProduct() {
  addProductItem({
    code: "",
    name: "",
    unit: "",
    price: applyDiscount(0),
    note: ""
  });
  updatePreviewProducts();
}

function addProductItem(p) {
  const list = document.getElementById("productList");
  if (!list) return;

  const row = document.createElement("div");
  row.className = "product-item";
  
  // 取得基準原價與目前的預設折數
  const basePrice = p.basePrice || p.price || 0;
  const currentDefaultRate = document.getElementById("discountRate")?.value || "1";

  row.innerHTML = `
    <input type="text" class="p-code" placeholder="產品編號" value="${p.code || ""}">
    <input type="text" class="p-name" placeholder="品名規格" value="${p.name || ""}">
    <input type="text" class="p-unit" placeholder="單位" value="${p.unit || ""}">
    <input type="number" class="p-discount" step="0.01" min="0" max="1" value="${currentDefaultRate}" title="個別折數">
    <input type="text" class="p-price" data-base-price="${basePrice}" placeholder="單價" value="${(basePrice * currentDefaultRate).toFixed(2)}">
    <input type="text" class="p-note" placeholder="備註" value="${p.note || ""}">
    <button type="button" class="btn btn-danger">刪除</button>
  `;

  // 當個別折數變動時，重新計算該行的單價
  row.querySelector(".p-discount").addEventListener("input", (e) => {
    const rate = parseFloat(e.target.value || "1");
    const priceInput = row.querySelector(".p-price");
    const base = parseFloat(priceInput.dataset.basePrice);
    if (!isNaN(base)) {
      priceInput.value = (base * rate).toFixed(2);
      updatePreviewProducts();
    }
  });

  // 原有的監聽與刪除邏輯...
  row.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updatePreviewProducts);
  });
  row.querySelector(".btn-danger").addEventListener("click", () => {
    row.remove();
    updatePreviewProducts();
  });

  list.appendChild(row);
}

// =======================
// 將目前已選產品同步到預覽表格
// =======================
function updatePreviewProducts() {
  const tbody = document.getElementById("previewProductList");
  if (!tbody) return;

  tbody.innerHTML = "";
  const rows = document.querySelectorAll("#productList .product-item");

  if (!rows.length) {
    const empty = document.createElement("tr");
    empty.innerHTML = `<td colspan="5" class="no-product-row">請新增產品項目</td>`;
    tbody.appendChild(empty);
    return;
  }

  rows.forEach(row => {
    const code = row.querySelector(".p-code")?.value || "";
    const name = row.querySelector(".p-name")?.value || "";
    const unit = row.querySelector(".p-unit")?.value || "";
    const price = row.querySelector(".p-price")?.value || ""; // 直接抓取 input 的值
    const note = row.querySelector(".p-note")?.value || "";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${code || "&nbsp;"}</td>
      <td>${name || "&nbsp;"}</td>
      <td>${unit || "&nbsp;"}</td>
      <td>${price || "&nbsp;"}</td> 
      <td>${note || "&nbsp;"}</td>
    `;
    // 💡 這裡移除了 applyDiscount(price)，確保預覽跟上方 input 完全同步
    tbody.appendChild(tr);
  });
}

// =======================
// 表單欄位 ↔ 預覽區同步
// =======================
function setupEventListeners() {
  const mapping = [
    { inputId: "customerName", spanId: "previewCustomerName" },
    { inputId: "contactPerson", spanId: "previewContactPerson" },
    { inputId: "customerPhone", spanId: "previewCustomerPhone" },
    { inputId: "customerFax", spanId: "previewCustomerFax" },
    { inputId: "quotePerson", spanId: "previewQuotePerson" }
  ];

  // 1. 處理折數變動：更新上方輸入框數值，再同步預覽
  const discount = document.getElementById("discountRate");
  if (discount) {
    discount.addEventListener("input", () => {
      const rate = parseFloat(discount.value || "1");
      const rows = document.querySelectorAll("#productList .product-item");

      rows.forEach(row => {
        const discountInput = row.querySelector(".p-discount");
        const priceInput = row.querySelector(".p-price");
        const base = parseFloat(priceInput.dataset.basePrice);

        // 更新每一行的折數框，讓上方視覺保持同步
        if (discountInput) discountInput.value = rate;

        if (!isNaN(base)) {
          priceInput.value = (base * rate).toFixed(2);
        }
      });

      // 重新整理下方預覽表格
      updatePreviewProducts();
    });
  }

  // 2. 處理文字欄位同步
  mapping.forEach(m => {
    const input = document.getElementById(m.inputId);
    const span = document.getElementById(m.spanId);
    if (!input || !span) return;

    input.addEventListener("input", () => {
      span.textContent = input.value || "-";
    });
  });

  // 3. 處理日期欄位同步
  const quoteDate = document.getElementById("quoteDate");
  const validDate = document.getElementById("validDate");

  if (quoteDate) {
    quoteDate.addEventListener("change", () => {
      document.getElementById("previewQuoteDate").textContent = quoteDate.value || "-";
    });
  }
  if (validDate) {
    validDate.addEventListener("change", () => {
      document.getElementById("previewValidDate").textContent = validDate.value || "-";
    });
  }
} // <--- 這是結束 setupEventListeners 的大括號
// =======================
// 載入範例資料（FSG-3全系列）
// =======================
function loadPresetData() {
  const setValue = (id, value) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.value = value;
    if (el.tagName.toLowerCase() === "input") {
      el.dispatchEvent(new Event("input"));
      el.dispatchEvent(new Event("change"));
    }
  };

  setValue("customerName", "銓銪工業廠");
  setValue("contactPerson", "王先生");
  setValue("customerPhone", "04-26351998");
  setValue("customerFax", "04-26365689");
  setValue("quotePerson", "黃麟傑");

  // 報價日期 = 今天，有效日期 = ＋7 天
  const today = new Date();
  const pad = n => (n < 10 ? "0" + n : n);
  const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(
    today.getDate()
  )}`;

  const valid = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const validStr = `${valid.getFullYear()}-${pad(valid.getMonth() + 1)}-${pad(
    valid.getDate()
  )}`;

  const quoteDate = document.getElementById("quoteDate");
  const validDate = document.getElementById("validDate");
  if (quoteDate) {
    quoteDate.value = todayStr;
    quoteDate.dispatchEvent(new Event("change"));
  }
  if (validDate) {
    validDate.value = validStr;
    validDate.dispatchEvent(new Event("change"));
  }

  // 填入 FSG-3 全系列
  const list = document.getElementById("productList");
  if (list) list.innerHTML = "";
  const fsg3 = allProducts.filter(p => p.category === "FSG-3");
  fsg3.forEach(p => addProductItem(p));
  updatePreviewProducts();
}

// =======================
// 產生 PDF
// =======================
function generatePDF() {
  const preview = document.getElementById("quotationPreview");
  if (!preview) return;

  const { jsPDF } = window.jspdf;

  // scale 從 2 降到 1.5：畫面截圖解析度仍足夠列印清晰，但像素量少了約 44%
  html2canvas(preview, {
    scale: 1.5,
    useCORS: true,
    backgroundColor: "#ffffff"
  }).then(canvas => {
    // 用 JPEG（有損壓縮）取代 PNG（無損），這是檔案暴增的主因：
    // 同一張截圖，PNG 常常是 JPEG 的 5~10 倍大，尤其這種大面積色塊+文字的版面
    const imgData = canvas.toDataURL("image/jpeg", 0.85);

    const pdf = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
      compress: true // 開啟 jsPDF 內部的 PDF 資料流壓縮
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const margin = 10;
    const imgWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (imgHeight <= pageHeight - margin * 2) {
      pdf.addImage(imgData, "JPEG", margin, margin, imgWidth, imgHeight);
    } else {
      // 粗略多頁切分
      let position = 0;
      let heightLeft = imgHeight;

      let page = 1;
      while (heightLeft > 0) {
        if (page > 1) pdf.addPage();
        const y = margin - position;
        pdf.addImage(imgData, "JPEG", margin, y, imgWidth, imgHeight);
        heightLeft -= pageHeight - margin * 2;
        position += pageHeight - margin * 2;
        page++;
      }
    }

    pdf.save("quotation.pdf");
  });
}

// =======================
// 純列印（選用）
// =======================
function printQuotation() {
  window.print();
}

// =======================
// 產生 WORD（.docx）
// 走「真實 HTML/文字」路線，而不是像 PDF 那樣截圖，
// 所以檔案很小、文字可以被選取/搜尋，圖片也用 base64 內嵌避免路徑失效
// =======================
async function toDataUrl(url) {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (e) {
    console.warn("圖片轉換為 base64 失敗，WORD 檔中該圖片可能無法顯示：", url, e);
    return null;
  }
}

async function generateWord() {
  const preview = document.getElementById("quotationPreview");
  if (!preview) return;

  // 複製一份，避免動到畫面上實際顯示的內容
  const clone = preview.cloneNode(true);

  // LOGO 用相對路徑（fig/logo.png），docx 檔案脫離網頁環境後這種相對路徑會失效，
  // 所以在匯出前先轉成 base64 內嵌進去
  const img = clone.querySelector(".company-logo");
  if (img) {
    const dataUrl = await toDataUrl(img.getAttribute("src"));
    if (dataUrl) img.setAttribute("src", dataUrl);
  }

  // Word 不會讀取外部 style.css，必要的樣式要內嵌在 <style> 裡
  const styles = `
    <style>
      body { font-family: "Microsoft JhengHei", Arial, sans-serif; }
      .company-header { text-align: center; margin-bottom: 20px; }
      .company-logo { width: 90px; }
      .company-title h1 { font-size: 24pt; letter-spacing: 6px; margin: 0; }
      .company-title h2 { font-size: 18pt; margin: 6px 0 0 0; }
      table { border-collapse: collapse; width: 100%; margin-bottom: 16px; }
      td, th { border: 1px solid #ddd; padding: 6px 10px; }
      .product-table th { background: #2c3e50; color: #ffffff; text-align: center; }
      .product-table td { text-align: center; }
      .info-table td { background: #f8f9fa; }
      .terms { margin-top: 20px; }
      .terms h3 { margin-bottom: 8px; }
      .terms ul { list-style: none; padding-left: 0; }
      .terms li { margin-bottom: 6px; }
      .company-contact { text-align: center; margin-top: 12px; color: #555; }
    </style>
  `;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head><meta charset="utf-8">${styles}</head>
      <body>${clone.innerHTML}</body>
    </html>
  `;

  if (!window.htmlDocx) {
    alert("WORD 匯出套件尚未載入，請確認網路連線與 CDN script 是否正確引入。");
    return;
  }

  const converted = window.htmlDocx.asBlob(htmlContent);
  const url = URL.createObjectURL(converted);
  const a = document.createElement("a");
  a.href = url;
  a.download = "quotation.docx";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
