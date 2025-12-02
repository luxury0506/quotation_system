// =======================
// 產品資料（你可以依照格式自己繼續往下補）
// =======================
let allProducts = [];
let filteredProducts = [];

fetch('products.json')
  .then(response => response.json())
  .then(data => {
    allProducts = data;
    filteredProducts = [...allProducts];
    renderProductCatalog(); // 你原本初始化畫面用的函式
  })
  .catch(err => {
    console.error('載入 products.json 失敗', err);
  });


// =======================
// 初始化
// =======================
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  renderProductCatalog();
  updatePreviewProducts(); // 初始先畫一列「請新增產品項目」
});

// =======================
// 折數計算 （核心功能）
// =======================
function applyDiscount(price) {
  const rate = parseFloat(document.getElementById("discountRate")?.value || "1");
  const p = parseFloat(price);
  if (isNaN(p)) return price;  // 若沒有價格就不處理
  return (p * rate).toFixed(2);
}

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
// 折數計算 （核心功能）
// =======================
function applyDiscount(price) {
  const rate = parseFloat(document.getElementById("discountRate")?.value || "1");
  const p = parseFloat(price);
  if (isNaN(p)) return price;  // 若沒有價格就不處理
  return (p * rate).toFixed(2);
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

function addSelectedProducts() {
  const checkboxes = document.querySelectorAll(".product-select-checkbox:checked");
  if (!checkboxes.length) return;

  checkboxes.forEach(chk => {
    const idx = parseInt(chk.dataset.index, 10);
    const product = filteredProducts[idx];

    if (product) {
      const discounted = {
        ...product,
        price: applyDiscount(product.price)
      };
      addProductItem(discounted);
    }
  });

  clearAllProducts();
  updatePreviewProducts();
}

function addCustomProduct() {
  addProductItem({
    code: "",
    name: "",
    unit: "",
    price: applyDiscount(0), // 你可以改成空字串
    note: ""
  });
  updatePreviewProducts();
}


// 建立一列可編輯的產品欄位
function addProductItem(p) {
  const list = document.getElementById("productList");
  if (!list) return;

  const row = document.createElement("div");
  row.className = "product-item";
  row.innerHTML = `
    <input type="text" class="p-code" placeholder="產品編號" value="${p.code || ""}">
    <input type="text" class="p-name" placeholder="品名規格" value="${p.name || ""}">
    <input type="text" class="p-unit" placeholder="單位" value="${p.unit || ""}">
    <input type="text" class="p-price" placeholder="單價" value="${p.price || ""}">
    <input type="text" class="p-note" placeholder="備註" value="${p.note || ""}">
    <button type="button" class="btn btn-danger">刪除</button>
  `;

  // 監聽欄位變動 → 更新預覽
  row.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updatePreviewProducts);
  });

  // 刪除按鈕
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
    const price = row.querySelector(".p-price")?.value || "";
    const note = row.querySelector(".p-note")?.value || "";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${code || "&nbsp;"}</td>
      <td>${name || "&nbsp;"}</td>
      <td>${unit || "&nbsp;"}</td>
      <td>${price ? applyDiscount(price) : "&nbsp;"}</td>
      <td>${note || "&nbsp;"}</td>
    `;
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
    { inputId: "quotePerson", spanId: "previewQuotePerson" },
    { inputId: "quotePerson", spanId: "previewQuotePersonFooter" }, // 簽章區承辦業務
  ];

   

  function applyDiscount(price) {
  const rate = parseFloat(document.getElementById("discountRate")?.value || "1");
  const p = parseFloat(price);
  if (isNaN(rate) || isNaN(p)) return price;
  return (p * rate).toFixed(2);
}


 const discount = document.getElementById("discountRate");
    if (discount) {
    discount.addEventListener("input", () => {
        updatePreviewProducts();
    });
    }
    
  mapping.forEach(m => {
    const input = document.getElementById(m.inputId);
    const span = document.getElementById(m.spanId);
    if (!input || !span) return;

    input.addEventListener("input", () => {
      span.textContent = input.value || "-";
    });
  });

  const quoteDate = document.getElementById("quoteDate");
  const validDate = document.getElementById("validDate");

  if (quoteDate) {
    quoteDate.addEventListener("change", () => {
      document.getElementById("previewQuoteDate").textContent =
        quoteDate.value || "-";
    });
  }
  if (validDate) {
    validDate.addEventListener("change", () => {
      document.getElementById("previewValidDate").textContent =
        validDate.value || "-";
    });
  }
}

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

// ==========================================
// 客戶資料自動帶入（從 customers.json）
// ==========================================
let allCustomers = [];

async function loadCustomerData() {
  try {
    const res = await fetch("customers.json");
    allCustomers = await res.json();
    console.log("客戶資料載入成功，共", allCustomers.length, "筆");
  } catch (e) {
    console.error("載入客戶資料失敗", e);
  }
}
// 共用：把客戶資料寫進各個欄位 & 預覽區
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

  // 同步預覽區（如果你有這些 span）
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

// 載入後綁定事件
document.addEventListener("DOMContentLoaded", () => {
  loadCustomerData();

  const nameInput = document.getElementById("customerName");
  const contactInput = document.getElementById("contactPerson");
  const phoneInput = document.getElementById("customerPhone");
  const faxInput = document.getElementById("customerFax");
  const invoiceAddrInput = document.getElementById("invoiceAddress");
  const companyAddrInput = document.getElementById("companyAddress");
  const shippingAddrInput = document.getElementById("shippingAddress");

  if (!nameInput) return;

  nameInput.addEventListener("input", () => {
    const keyword = nameInput.value.trim();
    if (!keyword) return;

    const matched = allCustomers.find(c => c.name && c.name.includes(keyword));
    if (!matched) return;

    // ➤ 自動帶入
    if (contactInput) contactInput.value = matched.contactPerson || "";
    if (phoneInput) phoneInput.value = matched.phone || "";
    if (faxInput) faxInput.value = matched.fax || "";

    if (invoiceAddrInput) invoiceAddrInput.value = matched.invoiceAddress || "";
    if (companyAddrInput) companyAddrInput.value = matched.companyAddress || "";
    if (shippingAddrInput) shippingAddrInput.value = matched.shippingAddress || "";

    // ➤ 同步到預覽（如果你有預覽區）
    const previewMap = {
      customerName: "previewCustomerName",
      contactPerson: "previewContactPerson",
      customerPhone: "previewCustomerPhone",
      customerFax: "previewCustomerFax"
    };

    Object.entries(previewMap).forEach(([inputId, spanId]) => {
      const input = document.getElementById(inputId);
      const span = document.getElementById(spanId);
      if (input && span) span.textContent = input.value || "-";
    });
  });
});


// =======================
// 產生 PDF
// =======================
function generatePDF() {
  const preview = document.getElementById("quotationPreview");
  if (!preview) return;

  const { jsPDF } = window.jspdf;

  html2canvas(preview, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const margin = 10;
    const imgWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (imgHeight <= pageHeight - margin * 2) {
      pdf.addImage(imgData, "PNG", margin, margin, imgWidth, imgHeight);
    } else {
      // 粗略多頁切分
      let position = 0;
      let heightLeft = imgHeight;

      let page = 1;
      while (heightLeft > 0) {
        if (page > 1) pdf.addPage();
        const y = margin - position;
        pdf.addImage(imgData, "PNG", margin, y, imgWidth, imgHeight);
        heightLeft -= pageHeight - margin * 2;
        position += pageHeight - margin * 2;
        page++;
      }
    }

    pdf.save("quotation.pdf");
  });
}

// =======================
// 若有需要列印紙本（非 PDF），可以用這個（選用）
// =======================
function printQuotation() {
  window.print();
}


