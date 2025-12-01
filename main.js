// =======================
// 產品資料（可依需要繼續補）
// =======================
const presetProducts = [
    // PVC-3 範例
    { code: 'CFT-3-0A', name: 'PVC高壓套管 300V  0AWG 8.38mm', unit: 'M', price: '2.75', note: '152.5M/R', category: 'PVC-3' },
    { code: 'CFT-3-1A', name: 'PVC-3高壓套管 300V  1AWG 7.47mm', unit: 'M', price: '2.52', note: '152.5M/R', category: 'PVC-3' },
    { code: 'CFT-3-2A', name: 'PVC-3高壓套管 300V  2AWG 6.68mm', unit: 'M', price: '2.30', note: '152.5M/R', category: 'PVC-3' },

    // PVC-6 範例
    { code: 'CFT-6-0A', name: 'PVC高壓套管 600V  0AWG 8.38mm', unit: 'M', price: '2.75', note: '152.5M/R', category: 'PVC-6' },
    { code: 'CFT-6-1A', name: 'PVC高壓套管 600V  1AWG 7.47mm', unit: 'M', price: '2.52', note: '152.5M/R', category: 'PVC-6' },

    // FSG-3 範例（對應你 Word 報價單內容）
    { code: 'FSG-3-01',  name: '矽套管1.5KV 1.0mm',  unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-015', name: '矽套管1.5KV 1.5mm',  unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-02',  name: '矽套管1.5KV 2.0mm',  unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-025', name: '矽套管1.5KV 2.5mm',  unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-03',  name: '矽套管1.5KV 3.0mm',  unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-035', name: '矽套管1.5KV 3.5mm',  unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-04',  name: '矽套管1.5KV 4.0mm',  unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-045', name: '矽套管1.5KV 4.5mm',  unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-05',  name: '矽套管1.5KV 5.0mm',  unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-06',  name: '矽套管1.5KV 6.0mm',  unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-07',  name: '矽套管1.5KV 7.0mm',  unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-08',  name: '矽套管1.5KV 8.0mm',  unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-09',  name: '矽套管1.5KV 9.0mm',  unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-10',  name: '矽套管1.5KV 10.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
    { code: 'FSG-3-12',  name: '矽套管1.5KV 12.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
];

// 目前顯示中的產品（受篩選影響）
let filteredProducts = [...presetProducts];

// =======================
// 初始化
// =======================
document.addEventListener("DOMContentLoaded", () => {
    renderProductCatalog();
    bindFormEvents();
});

// =======================
// 產品目錄相關
// =======================
function renderProductCatalog() {
    const catalog = document.getElementById("productCatalog");
    catalog.innerHTML = "";

    if (!filteredProducts.length) {
        catalog.innerHTML = "<p>目前此分類沒有產品。</p>";
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

// 篩選分類
function filterByCategory(category) {
    const buttons = document.querySelectorAll(".category-filter");
    buttons.forEach(btn => {
        if (btn.dataset.category === category || (category === "all" && btn.dataset.category === "all")) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    if (category === "all") {
        filteredProducts = [...presetProducts];
        document.getElementById("categoryInfo").textContent = "顯示全部產品";
    } else {
        filteredProducts = presetProducts.filter(p => p.category === category);
        document.getElementById("categoryInfo").textContent = `顯示分類：${category}`;
    }

    renderProductCatalog();
}

// 搜尋產品
function searchProducts() {
    const keyword = document.getElementById("productSearch").value.trim().toLowerCase();
    if (!keyword) {
        // 回到目前分類的全部
        filterByCategory(document.querySelector(".category-filter.active")?.dataset.category || "all");
        return;
    }

    filteredProducts = presetProducts.filter(p => {
        return (
            (p.code && p.code.toLowerCase().includes(keyword)) ||
            (p.name && p.name.toLowerCase().includes(keyword))
        );
    });

    document.getElementById("categoryInfo").textContent = `搜尋結果：「${keyword}」`;
    renderProductCatalog();
}

// 全選
function selectAllProducts() {
    document.querySelectorAll(".product-select-checkbox").forEach(chk => {
        chk.checked = true;
    });
}

// 清除選擇
function clearAllProducts() {
    document.querySelectorAll(".product-select-checkbox").forEach(chk => {
        chk.checked = false;
    });
}

// =======================
// 已選產品列表 + 預覽表格
// =======================
function addSelectedProducts() {
    const checkboxes = document.querySelectorAll(".product-select-checkbox:checked");
    if (!checkboxes.length) return;

    checkboxes.forEach(chk => {
        const index = parseInt(chk.dataset.index, 10);
        const product = filteredProducts[index];
        if (product) addProductItem(product);
    });

    // 清除勾選
    clearAllProducts();
    updatePreviewProducts();
}

// 新增自訂產品
function addCustomProduct() {
    const emptyProduct = { code: "", name: "", unit: "", price: "", note: "" };
    addProductItem(emptyProduct);
    updatePreviewProducts();
}

// 建立一筆「已選產品」欄位
function addProductItem(product) {
    const list = document.getElementById("productList");

    const row = document.createElement("div");
    row.className = "product-item";

    row.innerHTML = `
        <input type="text" class="p-code" placeholder="產品編號" value="${product.code || ""}">
        <input type="text" class="p-name" placeholder="品名規格" value="${product.name || ""}">
        <input type="text" class="p-unit" placeholder="單位" value="${product.unit || ""}">
        <input type="text" class="p-price" placeholder="單價" value="${product.price || ""}">
        <input type="text" class="p-note" placeholder="備註" value="${product.note || ""}">
        <button type="button" class="btn btn-danger">刪除</button>
    `;

    // 欄位變動時更新預覽
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

// 更新預覽表格
function updatePreviewProducts() {
    const tbody = document.getElementById("previewProductList");
    tbody.innerHTML = "";

    const rows = document.querySelectorAll("#productList .product-item");
    if (!rows.length) {
        const emptyRow = document.createElement("tr");
        emptyRow.innerHTML = `<td colspan="5" class="no-product-row">請新增產品項目</td>`;
        tbody.appendChild(emptyRow);
        return;
    }

    rows.forEach(row => {
        const code = row.querySelector(".p-code").value;
        const name = row.querySelector(".p-name").value;
        const unit = row.querySelector(".p-unit").value;
        const price = row.querySelector(".p-price").value;
        const note = row.querySelector(".p-note").value;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${code || "&nbsp;"}</td>
            <td>${name || "&nbsp;"}</td>
            <td>${unit || "&nbsp;"}</td>
            <td>${price || "&nbsp;"}</td>
            <td>${note || "&nbsp;"}</td>
        `;
        tbody.appendChild(tr);
    });
}

// =======================
// 表單與預覽同步
// =======================
function bindFormEvents() {
    const mapping = [
        { inputId: "customerName", spanId: "previewCustomerName" },
        { inputId: "contactPerson", spanId: "previewContactPerson" },
        { inputId: "customerPhone", spanId: "previewCustomerPhone" },
        { inputId: "customerFax", spanId: "previewCustomerFax" },
        { inputId: "quotePerson", spanId: "previewQuotePerson" },
    ];

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
// 範例資料載入
// =======================
function loadPresetData() {
    document.getElementById("customerName").value = "銓銪工業廠";
    document.getElementById("contactPerson").value = "王先生";
    document.getElementById("customerPhone").value = "04-26351998";
    document.getElementById("customerFax").value = "04-26365689";
    document.getElementById("quotePerson").value = "黃麟傑";

    // 報價日期＝今天，有效日期＋7天（可自行調整）
    const today = new Date();
    const pad = n => (n < 10 ? "0" + n : n);
    const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

    const valid = new Date(today.getTime() + 7 * 86400000);
    const validStr = `${valid.getFullYear()}-${pad(valid.getMonth() + 1)}-${pad(valid.getDate())}`;

    document.getElementById("quoteDate").value = todayStr;
    document.getElementById("validDate").value = validStr;

    // 觸發同步
    document.getElementById("customerName").dispatchEvent(new Event("input"));
    document.getElementById("contactPerson").dispatchEvent(new Event("input"));
    document.getElementById("customerPhone").dispatchEvent(new Event("input"));
    document.getElementById("customerFax").dispatchEvent(new Event("input"));
    document.getElementById("quotePerson").dispatchEvent(new Event("input"));
    document.getElementById("quoteDate").dispatchEvent(new Event("change"));
    document.getElementById("validDate").dispatchEvent(new Event("change"));

    // 清空已選產品，填入 FSG-3 全系列（示意）
    document.getElementById("productList").innerHTML = "";
    const fsgProducts = presetProducts.filter(p => p.category === "FSG-3");
    fsgProducts.forEach(p => addProductItem(p));
    updatePreviewProducts();
}

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

        const imgWidth = pageWidth - 20; // 左右各留 10mm 邊界
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let position = 10;

        if (imgHeight < pageHeight - 20) {
            pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        } else {
            // 如果內容超過一頁，簡單切頁（粗略做法）
            let heightLeft = imgHeight;
            let y = 10;

            pdf.addImage(imgData, "PNG", 10, y, imgWidth, imgHeight);
            heightLeft -= (pageHeight - 20);

            while (heightLeft > 0) {
                pdf.addPage();
                y = 10;
                pdf.addImage(imgData, "PNG", 10, y - (imgHeight - heightLeft), imgWidth, imgHeight);
                heightLeft -= (pageHeight - 20);
            }
        }

        pdf.save("quotation.pdf");
    });
}
