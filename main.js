// =======================
// 產品資料（你可以依照格式自己繼續往下補）
// =======================
        const allProducts = [
            // PVC高壓套管300v系列
            { code: 'CFT-3-0A', name: 'PVC高壓套管 300V  0AWG 8.38mm', unit: 'M', price: '2.75', note: '152.5M/R', category: 'PVC-3' },
            { code: 'CFT-3-1A', name: 'PVC-3高壓套管 300V  1AWG 7.47mm', unit: 'M', price: '2.52', note: '152.5M/R', category: 'PVC-3' },
            { code: 'CFT-3-2A', name: 'PVC-3高壓套管 300V  2AWG 6.68mm', unit: 'M', price: '2.30', note: '152.5M/R', category: 'PVC-3' },
            { code: 'CFT-3-3A', name: 'PVC-3高壓套管 300V  3AWG 5.94mm', unit: 'M', price: '2.07', note: '152.5M/R', category: 'PVC-3' },
            { code: 'CFT-3-4A', name: 'PVC-3高壓套管 300V  4AWG 5.28mm', unit: 'M', price: '1.84', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-5A', name: 'PVC-3高壓套管 300V  5AWG 4.72mm', unit: 'M', price: '1.63', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-6A', name: 'PVC-3高壓套管 300V  6AWG 4.22mm', unit: 'M', price: '1.49', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-7A', name: 'PVC-3高壓套管 300V  7AWG 3.76mm', unit: 'M', price: '1.33', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-8A', name: 'PVC-3高壓套管 300V  8AWG 3.38mm', unit: 'M', price: '1.22', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-9A', name: 'PVC-3高壓套管 300V  9AWG 3.00mm', unit: 'M', price: '1.10', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-10A', name: 'PVC-3高壓套管 300V  10AWG 2.69mm', unit: 'M', price: '0.90', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-11A', name: 'PVC-3高壓套管 300V  11AWG 2.41mm', unit: 'M', price: '0.85', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-12A', name: 'PVC-3高壓套管 300V  12AWG 2.16mm', unit: 'M', price: '0.80', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-13A', name: 'PVC-3高壓套管 300V  13AWG 1.93mm', unit: 'M', price: '0.71', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-14A', name: 'PVC-3高壓套管 300V  14AWG 1.68mm', unit: 'M', price: '0.69', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-15A', name: 'PVC-3高壓套管 300V  15AWG 1.50mm', unit: 'M', price: '0.64', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-16A', name: 'PVC-3高壓套管 300V  16AWG 1.35mm', unit: 'M', price: '0.62', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-17A', name: 'PVC-3高壓套管 300V  17AWG 1.19mm', unit: 'M', price: '0.57', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-18A', name: 'PVC-3高壓套管 300V  18AWG 1.07mm', unit: 'M', price: '0.55', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-19A', name: 'PVC-3高壓套管 300V  19AWG 0.97mm', unit: 'M', price: '0.55', note: '305M/R', category: 'PVC-3' },
            { code: 'CFT-3-20A', name: 'PVC-3高壓套管 300V  20AWG 0.86mm', unit: 'M', price: '0.53', note: '305M/R', category: 'PVC-3' },
         
             // PVC高壓套管600v系列
             { code: 'CFT-6-0A', name: 'PVC高壓套管 600V  0AWG 8.38mm', unit: 'M', price: '2.75', note: '152.5M/R', category: 'PVC-6' },
            { code: 'CFT-6-1A', name: 'PVC高壓套管 600V  1AWG 7.47mm', unit: 'M', price: '2.52', note: '152.5M/R', category: 'PVC-6' },
            { code: 'CFT-6-2A', name: 'PVC-6高壓套管 600V  2AWG 6.68mm', unit: 'M', price: '2.30', note: '152.5M/R', category: 'PVC-6' },
            { code: 'CFT-6-3A', name: 'PVC高壓套管 600V  3AWG 5.94mm', unit: 'M', price: '2.07', note: '152.5M/R', category: 'PVC-6' },
            { code: 'CFT-6-4A', name: 'PVC-6高壓套管 600V  4AWG 5.28mm', unit: 'M', price: '1.84', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-5A', name: 'PVC-6高壓套管 600V  5AWG 4.72mm', unit: 'M', price: '1.63', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-6A', name: 'PVC-6高壓套管 600V  6AWG 4.22mm', unit: 'M', price: '1.49', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-7A', name: 'PVC-6高壓套管 600V  7AWG 3.76mm', unit: 'M', price: '1.33', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-8A', name: 'PVC-6高壓套管 600V  8AWG 3.38mm', unit: 'M', price: '1.22', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-9A', name: 'PVC-6高壓套管 600V  9AWG 3.00mm', unit: 'M', price: '1.10', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-10A', name: 'PVC-6高壓套管 600V  10AWG 2.69mm', unit: 'M', price: '0.90', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-11A', name: 'PVC-6高壓套管 600V  11AWG 2.41mm', unit: 'M', price: '0.85', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-12A', name: 'PVC-6高壓套管 600V  12AWG 2.16mm', unit: 'M', price: '0.80', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-13A', name: 'PVC-6高壓套管 600V  13AWG 1.93mm', unit: 'M', price: '0.71', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-14A', name: 'PVC-6高壓套管 600V  14AWG 1.68mm', unit: 'M', price: '0.69', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-15A', name: 'PVC-6高壓套管 600V  15AWG 1.50mm', unit: 'M', price: '0.64', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-16A', name: 'PVC-6高壓套管 600V  16AWG 1.35mm', unit: 'M', price: '0.62', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-17A', name: 'PVC-6高壓套管 600V  17AWG 1.19mm', unit: 'M', price: '0.57', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-18A', name: 'PVC-6高壓套管 600V  18AWG 1.07mm', unit: 'M', price: '0.55', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-19A', name: 'PVC-6高壓套管 600V  19AWG 0.97mm', unit: 'M', price: '0.55', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-20A', name: 'PVC-6高壓套管 600V  20AWG 0.86mm', unit: 'M', price: '0.53', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-5/16A', name: 'PVC-6高壓套管 600V  5/16A 7.94mm', unit: 'M', price: '0.53', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-3/8A', name: 'PVC-6高壓套管 600V  3/8A 9.53mm', unit: 'M', price: '0.53', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-7/16A', name: 'PVC-6高壓套管 600V  7/16A 11.1mm', unit: 'M', price: '0.53', note: '305M/R', category: 'PVC-6' },             
            { code: 'CFT-6-1/2A', name: 'PVC-6高壓套管 600V  1/2A 12.7mm', unit: 'M', price: '0.53', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-9/16A', name: 'PVC-6高壓套管 600V  9/16A 14.0mm', unit: 'M', price: '0.53', note: '305M/R', category: 'PVC-6' },
            { code: 'CFT-6-5/8A', name: 'PVC-6高壓套管 600V  5/8A 15.9mm', unit: 'M', price: '0.53', note: '305M/R', category: 'PVC-6' },


            // FSG-3 矽套管 1.5KV 系列（已補牌價）
                { code: "FSG-3-01",  name: "矽套管1.5KV 1.0mm",   unit: "M", price: "1.85", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-015", name: "矽套管1.5KV 1.5mm",   unit: "M", price: "2.20", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-02",  name: "矽套管1.5KV 2.0mm",   unit: "M", price: "2.70", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-025", name: "矽套管1.5KV 2.5mm",   unit: "M", price: "3.40", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-03",  name: "矽套管1.5KV 3.0mm",   unit: "M", price: "4.00", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-035", name: "矽套管1.5KV 3.5mm",   unit: "M", price: "4.70", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-04",  name: "矽套管1.5KV 4.0mm",   unit: "M", price: "5.40", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-045", name: "矽套管1.5KV 4.5mm",   unit: "M", price: "6.00", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-05",  name: "矽套管1.5KV 5.0mm",   unit: "M", price: "6.70", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-06",  name: "矽套管1.5KV 6.0mm",   unit: "M", price: "8.50", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-07",  name: "矽套管1.5KV 7.0mm",   unit: "M", price: "10.00", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-08",  name: "矽套管1.5KV 8.0mm",   unit: "M", price: "10.70", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-09",  name: "矽套管1.5KV 9.0mm",   unit: "M", price: "12.50", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-10",  name: "矽套管1.5KV 10.0mm",  unit: "M", price: "15.00", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-12",  name: "矽套管1.5KV 12.0mm",  unit: "M", price: "20.00", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-14",  name: "矽套管1.5KV 14.0mm",  unit: "M", price: "23.00", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-16",  name: "矽套管1.5KV 16.0mm",  unit: "M", price: "26.00", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-18",  name: "矽套管1.5KV 18.0mm",  unit: "M", price: "30.00", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-20",  name: "矽套管1.5KV 20.0mm",  unit: "M", price: "33.00", note: "100M/捲", category: "FSG-3" },
                { code: "FSG-3-22",  name: "矽套管1.5KV 22.0mm",  unit: "M", price: "36.00", note: "100M/捲", category: "FSG-3" },

            
             // FSG-2 矽套管 2.5KV 系列（已補牌價）
                { code: "FSG-2-01",  name: "矽套管2.5KV 1.0mm",   unit: "M", price: "3.60", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-015", name: "矽套管2.5KV 1.5mm",   unit: "M", price: "4.00", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-02",  name: "矽套管2.5KV 2.0mm",   unit: "M", price: "4.50", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-025", name: "矽套管2.5KV 2.5mm",   unit: "M", price: "5.00", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-03",  name: "矽套管2.5KV 3.0mm",   unit: "M", price: "6.00", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-035", name: "矽套管2.5KV 3.5mm",   unit: "M", price: "7.00", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-04",  name: "矽套管2.5KV 4.0mm",   unit: "M", price: "8.00", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-045", name: "矽套管2.5KV 4.5mm",   unit: "M", price: "9.00", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-05",  name: "矽套管2.5KV 5.0mm",   unit: "M", price: "9.60", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-06",  name: "矽套管2.5KV 6.0mm",   unit: "M", price: "11.60", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-07",  name: "矽套管2.5KV 7.0mm",   unit: "M", price: "15.00", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-08",  name: "矽套管2.5KV 8.0mm",   unit: "M", price: "17.20", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-09",  name: "矽套管2.5KV 9.0mm",   unit: "M", price: "20.00", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-10",  name: "矽套管2.5KV 10.0mm",  unit: "M", price: "22.00", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-12",  name: "矽套管2.5KV 12.0mm",  unit: "M", price: "25.00", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-14",  name: "矽套管2.5KV 14.0mm",  unit: "M", price: "30.00", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-16",  name: "矽套管2.5KV 16.0mm",  unit: "M", price: "35.00", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-18",  name: "矽套管2.5KV 18.0mm",  unit: "M", price: "42.00", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-20",  name: "矽套管2.5KV 20.0mm",  unit: "M", price: "46.20", note: "100M/捲", category: "FSG-2" },
                { code: "FSG-2-22",  name: "矽套管2.5KV 22.0mm",  unit: "M", price: "50.40", note: "100M/捲", category: "FSG-2" },

            
            // HST 系列（已補牌價）
                { code: 'HST-01',  name: '玻璃纖維細橡膠套管 8KV 1.0mm',  unit: 'M', price: '7.2',  note: '100M/捲', category: 'HST' },
                { code: 'HST-015', name: '玻璃纖維細橡膠套管 8KV 1.5mm',  unit: 'M', price: '8',    note: '100M/捲', category: 'HST' },
                { code: 'HST-02',  name: '玻璃纖維細橡膠套管 8KV 2.0mm',  unit: 'M', price: '10',   note: '100M/捲', category: 'HST' },
                { code: 'HST-025', name: '玻璃纖維細橡膠套管 8KV 2.5mm',  unit: 'M', price: '12',   note: '100M/捲', category: 'HST' },
                { code: 'HST-03',  name: '玻璃纖維細橡膠套管 8KV 3.0mm',  unit: 'M', price: '13.5', note: '100M/捲', category: 'HST' },
                { code: 'HST-035', name: '玻璃纖維細橡膠套管 8KV 3.5mm',  unit: 'M', price: '14.5', note: '100M/捲', category: 'HST' },
                { code: 'HST-04',  name: '玻璃纖維細橡膠套管 8KV 4.0mm',  unit: 'M', price: '16',   note: '100M/捲', category: 'HST' },
                { code: 'HST-045', name: '玻璃纖維細橡膠套管 8KV 4.5mm',  unit: 'M', price: '17.5', note: '100M/捲', category: 'HST' },
                { code: 'HST-05',  name: '玻璃纖維細橡膠套管 8KV 5.0mm',  unit: 'M', price: '23',   note: '100M/捲', category: 'HST' },
                { code: 'HST-06',  name: '玻璃纖維細橡膠套管 8KV 6.0mm',  unit: 'M', price: '25',   note: '100M/捲', category: 'HST' },
                { code: 'HST-07',  name: '玻璃纖維細橡膠套管 8KV 7.0mm',  unit: 'M', price: '28',   note: '100M/捲', category: 'HST' },
                { code: 'HST-08',  name: '玻璃纖維細橡膠套管 8KV 8.0mm',  unit: 'M', price: '34',   note: '100M/捲', category: 'HST' },
                { code: 'HST-09',  name: '玻璃纖維細橡膠套管 8KV 9.0mm',  unit: 'M', price: '38',   note: '100M/捲', category: 'HST' },
                { code: 'HST-10',  name: '玻璃纖維細橡膠套管 8KV 10.0mm', unit: 'M', price: '42',   note: '100M/捲', category: 'HST' },

        
            // GS 熱定型套管
            { code: 'GS-01', name: '熱定型套管 1.0mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            { code: 'GS-015', name: '熱定型套管 1.5mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            { code: 'GS-02', name: '熱定型套管 2.0mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            { code: 'GS-025', name: '熱定型套管 2.5mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            { code: 'GS-03', name: '熱定型套管 3.0mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            { code: 'GS-035', name: '熱定型套管 3.5mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            { code: 'GS-04', name: '熱定型套管 4.0mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            { code: 'GS-045', name: '熱定型套管 4.5mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            { code: 'GS-05', name: '熱定型套管 5.0mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            { code: 'GS-06', name: '熱定型套管 6.0mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            { code: 'GS-07', name: '熱定型套管 7.0mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            { code: 'GS-08', name: '熱定型套管 8.0mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            { code: 'GS-09', name: '熱定型套管 9.0mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            { code: 'GS-10', name: '熱定型套管 10.0mm', unit: 'M', price: '', note: '100M/捲', category: 'GS' },
            
                // SRG-4 系列（已補牌價）
                { code: 'SRG-4-01',  name: '矽橡膠玻璃纖維套管 4KV  1.0mm',  unit: 'M', price: '5.9',  note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-015', name: '矽橡膠玻璃纖維套管 4KV  1.5mm',  unit: 'M', price: '6',    note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-02',  name: '矽橡膠玻璃纖維套管 4KV  2.0mm',  unit: 'M', price: '7',    note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-025', name: '矽橡膠玻璃纖維套管 4KV  2.5mm',  unit: 'M', price: '8',    note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-03',  name: '矽橡膠玻璃纖維套管 4KV  3.0mm',  unit: 'M', price: '10',   note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-035', name: '矽橡膠玻璃纖維套管 4KV  3.5mm',  unit: 'M', price: '12.5', note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-04',  name: '矽橡膠玻璃纖維套管 4KV  4.0mm',  unit: 'M', price: '13.5', note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-045', name: '矽橡膠玻璃纖維套管 4KV  4.5mm',  unit: 'M', price: '14',   note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-05',  name: '矽橡膠玻璃纖維套管 4KV  5.0mm',  unit: 'M', price: '16',   note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-06',  name: '矽橡膠玻璃纖維套管 4KV  6.0mm',  unit: 'M', price: '17.5', note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-07',  name: '矽橡膠玻璃纖維套管 4KV  7.0mm',  unit: 'M', price: '20',   note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-08',  name: '矽橡膠玻璃纖維套管 4KV  8.0mm',  unit: 'M', price: '24',   note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-09',  name: '矽橡膠玻璃纖維套管 4KV  9.0mm',  unit: 'M', price: '30',   note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-10',  name: '矽橡膠玻璃纖維套管 4KV  10.0mm', unit: 'M', price: '34',   note: '100M/捲', category: 'SRG-4' },
                { code: 'SRG-4-12',  name: '矽橡膠玻璃纖維套管 4KV  12.0mm', unit: 'M', price: '38',   note: '100M/捲', category: 'SRG-4' },

            
                // SRG-7 系列（已補牌價）
                { code: 'SRG-7-01',  name: '矽橡膠玻璃纖維套管 7KV  1.0mm',  unit: 'M', price: '7',    note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-015', name: '矽橡膠玻璃纖維套管 7KV  1.5mm',  unit: 'M', price: '7.69', note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-02',  name: '矽橡膠玻璃纖維套管 7KV  2.0mm',  unit: 'M', price: '9',    note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-025', name: '矽橡膠玻璃纖維套管 7KV  2.5mm',  unit: 'M', price: '10.5', note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-03',  name: '矽橡膠玻璃纖維套管 7KV  3.0mm',  unit: 'M', price: '12.5', note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-035', name: '矽橡膠玻璃纖維套管 7KV  3.5mm',  unit: 'M', price: '14.5', note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-04',  name: '矽橡膠玻璃纖維套管 7KV  4.0mm',  unit: 'M', price: '16',   note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-045', name: '矽橡膠玻璃纖維套管 7KV  4.5mm',  unit: 'M', price: '16.5', note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-05',  name: '矽橡膠玻璃纖維套管 7KV  5.0mm',  unit: 'M', price: '17.5', note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-06',  name: '矽橡膠玻璃纖維套管 7KV  6.0mm',  unit: 'M', price: '20',   note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-07',  name: '矽橡膠玻璃纖維套管 7KV  7.0mm',  unit: 'M', price: '24',   note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-08',  name: '矽橡膠玻璃纖維套管 7KV  8.0mm',  unit: 'M', price: '30',   note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-09',  name: '矽橡膠玻璃纖維套管 7KV  9.0mm',  unit: 'M', price: '34',   note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-10',  name: '矽橡膠玻璃纖維套管 7KV 10.0mm',  unit: 'M', price: '39',   note: '100M/捲', category: 'SRG-7' },
                { code: 'SRG-7-12',  name: '矽橡膠玻璃纖維套管 7KV 12.0mm',  unit: 'M', price: '48',   note: '100M/捲', category: 'SRG-7' },

            
                // SR（白色） 系列（已補牌價）
                { code: 'SR-01',  name: '矽橡膠套管 1.0mm',  unit: 'M', price: '5',   note: '100M/捲', category: 'SR' },
                { code: 'SR-015', name: '矽橡膠套管 1.5mm',  unit: 'M', price: '5.5', note: '100M/捲', category: 'SR' },
                { code: 'SR-02',  name: '矽橡膠套管 2.0mm',  unit: 'M', price: '6',   note: '100M/捲', category: 'SR' },
                { code: 'SR-025', name: '矽橡膠套管 2.5mm',  unit: 'M', price: '6.5', note: '100M/捲', category: 'SR' },
                { code: 'SR-03',  name: '矽橡膠套管 3.0mm',  unit: 'M', price: '7',   note: '100M/捲', category: 'SR' },
                { code: 'SR-035', name: '矽橡膠套管 3.5mm',  unit: 'M', price: '7.5', note: '100M/捲', category: 'SR' },
                { code: 'SR-04',  name: '矽橡膠套管 4.0mm',  unit: 'M', price: '8',   note: '100M/捲', category: 'SR' },
                { code: 'SR-045', name: '矽橡膠套管 4.5mm',  unit: 'M', price: '8.5', note: '100M/捲', category: 'SR' },
                { code: 'SR-05',  name: '矽橡膠套管 5.0mm',  unit: 'M', price: '11',  note: '100M/捲', category: 'SR' },
                { code: 'SR-06',  name: '矽橡膠套管 6.0mm',  unit: 'M', price: '13.5',note: '100M/捲', category: 'SR' },
                { code: 'SR-07',  name: '矽橡膠套管 7.0mm',  unit: 'M', price: '16',  note: '100M/捲', category: 'SR' },
                { code: 'SR-08',  name: '矽橡膠套管 8.0mm',  unit: 'M', price: '20',  note: '100M/捲', category: 'SR' },
                { code: 'SR-09',  name: '矽橡膠套管 9.0mm',  unit: 'M', price: '25',  note: '100M/捲', category: 'SR' },
                { code: 'SR-10',  name: '矽橡膠套管 10.0mm', unit: 'M', price: '30',  note: '100M/捲', category: 'SR' },

            
                // H 通用型熱收縮套管（依進價，品號已調整）
                { code: 'H008',   name: '通用型熱收縮套管 0.8mm',   unit: 'M', price: '1.11',  note: '200M/捲', category: 'H' },
                { code: 'H01',    name: '通用型熱收縮套管 1.0mm',   unit: 'M', price: '0.72',  note: '200M/捲', category: 'H' },
                { code: 'H015',   name: '通用型熱收縮套管 1.5mm',   unit: 'M', price: '0.81',  note: '200M/捲', category: 'H' },
                { code: 'H02',    name: '通用型熱收縮套管 2.0mm',   unit: 'M', price: '0.87',  note: '200M/捲', category: 'H' },
                { code: 'H025',   name: '通用型熱收縮套管 2.5mm',   unit: 'M', price: '0.95',  note: '200M/捲', category: 'H' },
                { code: 'H03',    name: '通用型熱收縮套管 3.0mm',   unit: 'M', price: '1.03',  note: '200M/捲', category: 'H' },
                { code: 'H035',   name: '通用型熱收縮套管 3.5mm',   unit: 'M', price: '1.19',  note: '200M/捲', category: 'H' },
                { code: 'H04',    name: '通用型熱收縮套管 4.0mm',   unit: 'M', price: '1.35',  note: '200M/捲', category: 'H' },
                { code: 'H045',   name: '通用型熱收縮套管 4.5mm',   unit: 'M', price: '1.43',  note: '100M/捲', category: 'H' },
                { code: 'H05',    name: '通用型熱收縮套管 5.0mm',   unit: 'M', price: '1.75',  note: '100M/捲', category: 'H' },
                { code: 'H06',    name: '通用型熱收縮套管 6.0mm',   unit: 'M', price: '1.99',  note: '100M/捲', category: 'H' },
                { code: 'H07',    name: '通用型熱收縮套管 7.0mm',   unit: 'M', price: '2.31',  note: '100M/捲', category: 'H' },
                { code: 'H08',    name: '通用型熱收縮套管 8.0mm',   unit: 'M', price: '2.62',  note: '100M/捲', category: 'H' },
                { code: 'H09',    name: '通用型熱收縮套管 9.0mm',   unit: 'M', price: '2.78',  note: '100M/捲', category: 'H' },
                { code: 'H10',    name: '通用型熱收縮套管 10.0mm',  unit: 'M', price: '3.02',  note: '100M/捲', category: 'H' },
                { code: 'H11',    name: '通用型熱收縮套管 11.0mm',  unit: 'M', price: '3.34',  note: '100M/捲', category: 'H' },
                { code: 'H12',    name: '通用型熱收縮套管 12.0mm',  unit: 'M', price: '3.58',  note: '100M/捲', category: 'H' },
                { code: 'H13',    name: '通用型熱收縮套管 13.0mm',  unit: 'M', price: '4.13',  note: '100M/捲', category: 'H' },
                { code: 'H14',    name: '通用型熱收縮套管 14.0mm',  unit: 'M', price: '4.45',  note: '100M/捲', category: 'H' },
                { code: 'H15',    name: '通用型熱收縮套管 15.0mm',  unit: 'M', price: '4.85',  note: '100M/捲', category: 'H' },
                { code: 'H16',    name: '通用型熱收縮套管 16.0mm',  unit: 'M', price: '5.49',  note: '100M/捲', category: 'H' },
                { code: 'H17',    name: '通用型熱收縮套管 17.0mm',  unit: 'M', price: '6.52',  note: '100M/捲', category: 'H' },
                { code: 'H18',    name: '通用型熱收縮套管 18.0mm',  unit: 'M', price: '6.76',  note: '100M/捲', category: 'H' },
                { code: 'H20',    name: '通用型熱收縮套管 20.0mm',  unit: 'M', price: '8.19',  note: '100M/捲', category: 'H' },
                { code: 'H22',    name: '通用型熱收縮套管 22.0mm',  unit: 'M', price: '9.54',  note: '100M/捲', category: 'H' },
                { code: 'H25',    name: '通用型熱收縮套管 25.0mm',  unit: 'M', price: '11.13', note: '50M/捲',  category: 'H' },
                { code: 'H28',    name: '通用型熱收縮套管 28.0mm',  unit: 'M', price: '13.52', note: '50M/捲',  category: 'H' },
                { code: 'H30',    name: '通用型熱收縮套管 30.0mm',  unit: 'M', price: '14.15', note: '50M/捲',  category: 'H' },
                { code: 'H35',    name: '通用型熱收縮套管 35.0mm',  unit: 'M', price: '19.88', note: '50M/捲',  category: 'H' },
                { code: 'H40',    name: '通用型熱收縮套管 40.0mm',  unit: 'M', price: '25.84', note: '50M/捲',  category: 'H' },
                { code: 'H45',    name: '通用型熱收縮套管 45.0mm',  unit: 'M', price: '28.54', note: '',        category: 'H' },
                { code: 'H50',    name: '通用型熱收縮套管 50.0mm',  unit: 'M', price: '28.46', note: '',        category: 'H' },
                { code: 'H60',    name: '通用型熱收縮套管 60.0mm',  unit: 'M', price: '41.02', note: '',        category: 'H' },
                { code: 'H70',    name: '通用型熱收縮套管 70.0mm',  unit: 'M', price: '50.48', note: '',        category: 'H' },
                { code: 'H80',    name: '通用型熱收縮套管 80.0mm',  unit: 'M', price: '57.64', note: '',        category: 'H' },
                { code: 'H90',    name: '通用型熱收縮套管 90.0mm',  unit: 'M', price: '68.77', note: '',        category: 'H' },
                { code: 'H100',   name: '通用型熱收縮套管 100.0mm', unit: 'M', price: '81.73', note: '',        category: 'H' },
                { code: 'H120',   name: '通用型熱收縮套管 120.0mm', unit: 'M', price: '102',   note: '',        category: 'H' },
                { code: 'H150',   name: '通用型熱收縮套管 150.0mm', unit: 'M', price: '141.51',note: '',        category: 'H' },
                { code: 'H180',   name: '通用型熱收縮套管 180.0mm', unit: 'M', price: '194.78',note: '',        category: 'H' },

                // CB 超薄型熱收縮套管（依你提供進價）
                { code: 'H008CB',  name: '超薄熱縮套管 0.8mm',  unit: 'M', price: '1.11', note: '200M/捲', category: 'HCB' },
                { code: 'H01CB',   name: '超薄熱縮套管 1.0mm',  unit: 'M', price: '1.01', note: '200M/捲', category: 'HCB' },
                { code: 'H015CB',  name: '超薄熱縮套管 1.5mm',  unit: 'M', price: '1.09', note: '200M/捲', category: 'HCB' },
                { code: 'H02CB',   name: '超薄熱縮套管 2.0mm',  unit: 'M', price: '1.34', note: '200M/捲', category: 'HCB' },
                { code: 'H025CB',  name: '超薄熱縮套管 2.5mm',  unit: 'M', price: '0.95', note: '200M/捲', category: 'HCB' },
                { code: 'H03CB',   name: '超薄熱縮套管 3.0mm',  unit: 'M', price: '1.03', note: '200M/捲', category: 'HCB' },
                { code: 'H035CB',  name: '超薄熱縮套管 3.5mm',  unit: 'M', price: '1.19', note: '200M/捲', category: 'HCB' },
                { code: 'H04CB',   name: '超薄熱縮套管 4.0mm',  unit: 'M', price: '1.35', note: '200M/捲', category: 'HCB' },
                { code: 'H045CB',  name: '超薄熱縮套管 4.5mm',  unit: 'M', price: '1.43', note: '100M/捲', category: 'HCB' },
                { code: 'H05CB',   name: '超薄熱縮套管 5.0mm',  unit: 'M', price: '1.75', note: '100M/捲', category: 'HCB' },
                { code: 'H06CB',   name: '超薄熱縮套管 6.0mm',  unit: 'M', price: '1.99', note: '100M/捲', category: 'HCB' },
                { code: 'H07CB',   name: '超薄熱縮套管 7.0mm',  unit: 'M', price: '2.31', note: '100M/捲', category: 'HCB' },
                { code: 'H08CB',   name: '超薄熱縮套管 8.0mm',  unit: 'M', price: '2.62', note: '100M/捲', category: 'HCB' },
                { code: 'H09CB',   name: '超薄熱縮套管 9.0mm',  unit: 'M', price: '2.78', note: '100M/捲', category: 'HCB' },
                { code: 'H10CB',   name: '超薄熱縮套管 10.0mm', unit: 'M', price: '3.02', note: '100M/捲', category: 'HCB' },
                { code: 'H11CB',   name: '超薄熱縮套管 11.0mm', unit: 'M', price: '3.34', note: '100M/捲', category: 'HCB' },
                { code: 'H12CB',   name: '超薄熱縮套管 12.0mm', unit: 'M', price: '3.58', note: '100M/捲', category: 'HCB' },
                { code: 'H13CB',   name: '超薄熱縮套管 13.0mm', unit: 'M', price: '4.13', note: '100M/捲', category: 'HCB' },
                { code: 'H14CB',   name: '超薄熱縮套管 14.0mm', unit: 'M', price: '4.45', note: '100M/捲', category: 'HCB' },
                { code: 'H15CB',   name: '超薄熱縮套管 15.0mm', unit: 'M', price: '4.85', note: '100M/捲', category: 'HCB' },
                { code: 'H16CB',   name: '超薄熱縮套管 16.0mm', unit: 'M', price: '5.49', note: '100M/捲', category: 'HCB' },

                // H 透明通用型熱收縮套管（使用進價作為單價）
                { code: 'H01C',   name: '透明通用型熱收縮套管 1.0mm',   unit: 'M', price: '0.86',  note: '200M/捲', category: 'HC' },
                { code: 'H015C',  name: '透明通用型熱收縮套管 1.5mm',   unit: 'M', price: '0.93',  note: '200M/捲', category: 'HC' },
                { code: 'H02C',   name: '透明通用型熱收縮套管 2.0mm',   unit: 'M', price: '0.86',  note: '200M/捲', category: 'HC' },
                { code: 'H025C',  name: '透明通用型熱收縮套管 2.5mm',   unit: 'M', price: '1.01',  note: '200M/捲', category: 'HC' },
                { code: 'H03C',   name: '透明通用型熱收縮套管 3.0mm',   unit: 'M', price: '1.09',  note: '200M/捲', category: 'HC' },
                { code: 'H035C',  name: '透明通用型熱收縮套管 3.5mm',   unit: 'M', price: '1.24',  note: '200M/捲', category: 'HC' },
                { code: 'H04C',   name: '透明通用型熱收縮套管 4.0mm',   unit: 'M', price: '1.40',  note: '200M/捲', category: 'HC' },
                { code: 'H045C',  name: '透明通用型熱收縮套管 4.5mm',   unit: 'M', price: '1.48',  note: '100M/捲', category: 'HC' },
                { code: 'H05C',   name: '透明通用型熱收縮套管 5.0mm',   unit: 'M', price: '1.79',  note: '100M/捲', category: 'HC' },
                { code: 'H06C',   name: '透明通用型熱收縮套管 6.0mm',   unit: 'M', price: '2.10',  note: '100M/捲', category: 'HC' },
                { code: 'H07C',   name: '透明通用型熱收縮套管 7.0mm',   unit: 'M', price: '2.41',  note: '100M/捲', category: 'HC' },
                { code: 'H08C',   name: '透明通用型熱收縮套管 8.0mm',   unit: 'M', price: '2.72',  note: '100M/捲', category: 'HC' },
                { code: 'H09C',   name: '透明通用型熱收縮套管 9.0mm',   unit: 'M', price: '2.88',  note: '100M/捲', category: 'HC' },
                { code: 'H10C',   name: '透明通用型熱收縮套管 10.0mm',  unit: 'M', price: '3.11',  note: '100M/捲', category: 'HC' },
                { code: 'H11C',   name: '透明通用型熱收縮套管 11.0mm',  unit: 'M', price: '3.42',  note: '100M/捲', category: 'HC' },
                { code: 'H12C',   name: '透明通用型熱收縮套管 12.0mm',  unit: 'M', price: '3.73',  note: '100M/捲', category: 'HC' },
                { code: 'H13C',   name: '透明通用型熱收縮套管 13.0mm',  unit: 'M', price: '4.35',  note: '100M/捲', category: 'HC' },
                { code: 'H14C',   name: '透明通用型熱收縮套管 14.0mm',  unit: 'M', price: '4.47',  note: '100M/捲', category: 'HC' },
                { code: 'H15C',   name: '透明通用型熱收縮套管 15.0mm',  unit: 'M', price: '5.05',  note: '100M/捲', category: 'HC' },
                { code: 'H16C',   name: '透明通用型熱收縮套管 16.0mm',  unit: 'M', price: '5.60',  note: '100M/捲', category: 'HC' },
                { code: 'H17C',   name: '透明通用型熱收縮套管 17.0mm',  unit: 'M', price: '6.38',  note: '100M/捲', category: 'HC' },
                { code: 'H18C',   name: '透明通用型熱收縮套管 18.0mm',  unit: 'M', price: '7.00',  note: '100M/捲', category: 'HC' },
                { code: 'H20C',   name: '透明通用型熱收縮套管 20.0mm',  unit: 'M', price: '8.24',  note: '100M/捲', category: 'HC' },
                { code: 'H22C',   name: '透明通用型熱收縮套管 22.0mm',  unit: 'M', price: '9.95',  note: '100M/捲', category: 'HC' },
                { code: 'H25C',   name: '透明通用型熱收縮套管 25.0mm',  unit: 'M', price: '11.04', note: '50M/捲',  category: 'HC' },
                { code: 'H28C',   name: '透明通用型熱收縮套管 28.0mm',  unit: 'M', price: '14.46', note: '50M/捲',  category: 'HC' },
                { code: 'H30C',   name: '透明通用型熱收縮套管 30.0mm',  unit: 'M', price: '14.77', note: '50M/捲',  category: 'HC' },
                { code: 'H35C',   name: '透明通用型熱收縮套管 35.0mm',  unit: 'M', price: '21.00', note: '50M/捲',  category: 'HC' },
                { code: 'H40C',   name: '透明通用型熱收縮套管 40.0mm',  unit: 'M', price: '24.26', note: '50M/捲',  category: 'HC' },
                { code: 'H50C',   name: '透明通用型熱收縮套管 50.0mm',  unit: 'M', price: '27.99', note: '',        category: 'HC' },
                { code: 'H60C',   name: '透明通用型熱收縮套管 60.0mm',  unit: 'M', price: '39.81', note: '',        category: 'HC' },

                // H 彩色通用型熱收縮套管（0.8mm～16mm，紅R／黃Y／綠G／藍BL，同價）
                { code: 'H008R',  name: '彩色通用型熱收縮套管 0.8mm (紅)', unit: 'M', price: '1.35', note: '200M/捲', category: 'H' },
                { code: 'H008Y',  name: '彩色通用型熱收縮套管 0.8mm (黃)', unit: 'M', price: '1.35', note: '200M/捲', category: 'H' },
                { code: 'H008G',  name: '彩色通用型熱收縮套管 0.8mm (綠)', unit: 'M', price: '1.35', note: '200M/捲', category: 'H' },
                { code: 'H008BL', name: '彩色通用型熱收縮套管 0.8mm (藍)', unit: 'M', price: '1.35', note: '200M/捲', category: 'H' },

                // 1.0mm price: 0.87
                { code: 'H01R',   name: '彩色通用型熱收縮套管 1.0mm (紅)', unit: 'M', price: '0.87', note: '200M/捲', category: 'H' },
                { code: 'H01Y',   name: '彩色通用型熱收縮套管 1.0mm (黃)', unit: 'M', price: '0.87', note: '200M/捲', category: 'H' },
                { code: 'H01G',   name: '彩色通用型熱收縮套管 1.0mm (綠)', unit: 'M', price: '0.87', note: '200M/捲', category: 'H' },
                { code: 'H01BL',  name: '彩色通用型熱收縮套管 1.0mm (藍)', unit: 'M', price: '0.87', note: '200M/捲', category: 'H' },

                // 1.5mm price: 0.95
                { code: 'H015R',  name: '彩色通用型熱收縮套管 1.5mm (紅)', unit: 'M', price: '0.95', note: '200M/捲', category: 'H' },
                { code: 'H015Y',  name: '彩色通用型熱收縮套管 1.5mm (黃)', unit: 'M', price: '0.95', note: '200M/捲', category: 'H' },
                { code: 'H015G',  name: '彩色通用型熱收縮套管 1.5mm (綠)', unit: 'M', price: '0.95', note: '200M/捲', category: 'H' },
                { code: 'H015BL', name: '彩色通用型熱收縮套管 1.5mm (藍)', unit: 'M', price: '0.95', note: '200M/捲', category: 'H' },

                // 2.0mm price: 1.02
                { code: 'H02R',   name: '彩色通用型熱收縮套管 2.0mm (紅)', unit: 'M', price: '1.02', note: '200M/捲', category: 'H' },
                { code: 'H02Y',   name: '彩色通用型熱收縮套管 2.0mm (黃)', unit: 'M', price: '1.02', note: '200M/捲', category: 'H' },
                { code: 'H02G',   name: '彩色通用型熱收縮套管 2.0mm (綠)', unit: 'M', price: '1.02', note: '200M/捲', category: 'H' },
                { code: 'H02BL',  name: '彩色通用型熱收縮套管 2.0mm (藍)', unit: 'M', price: '1.02', note: '200M/捲', category: 'H' },

                // 2.5mm price: 1.17
                { code: 'H025R',  name: '彩色通用型熱收縮套管 2.5mm (紅)', unit: 'M', price: '1.17', note: '200M/捲', category: 'H' },
                { code: 'H025Y',  name: '彩色通用型熱收縮套管 2.5mm (黃)', unit: 'M', price: '1.17', note: '200M/捲', category: 'H' },
                { code: 'H025G',  name: '彩色通用型熱收縮套管 2.5mm (綠)', unit: 'M', price: '1.17', note: '200M/捲', category: 'H' },
                { code: 'H025BL', name: '彩色通用型熱收縮套管 2.5mm (藍)', unit: 'M', price: '1.17', note: '200M/捲', category: 'H' },

                // 3.0mm price: 1.33
                { code: 'H03R',   name: '彩色通用型熱收縮套管 3.0mm (紅)', unit: 'M', price: '1.33', note: '200M/捲', category: 'H' },
                { code: 'H03Y',   name: '彩色通用型熱收縮套管 3.0mm (黃)', unit: 'M', price: '1.33', note: '200M/捲', category: 'H' },
                { code: 'H03G',   name: '彩色通用型熱收縮套管 3.0mm (綠)', unit: 'M', price: '1.33', note: '200M/捲', category: 'H' },
                { code: 'H03BL',  name: '彩色通用型熱收縮套管 3.0mm (藍)', unit: 'M', price: '1.33', note: '200M/捲', category: 'H' },

                // 3.5mm price: 1.60
                { code: 'H035R',  name: '彩色通用型熱收縮套管 3.5mm (紅)', unit: 'M', price: '1.60', note: '200M/捲', category: 'H' },
                { code: 'H035Y',  name: '彩色通用型熱收縮套管 3.5mm (黃)', unit: 'M', price: '1.60', note: '200M/捲', category: 'H' },
                { code: 'H035G',  name: '彩色通用型熱收縮套管 3.5mm (綠)', unit: 'M', price: '1.60', note: '200M/捲', category: 'H' },
                { code: 'H035BL', name: '彩色通用型熱收縮套管 3.5mm (藍)', unit: 'M', price: '1.60', note: '200M/捲', category: 'H' },

                // 4.0mm price: 1.71
                { code: 'H04R',   name: '彩色通用型熱收縮套管 4.0mm (紅)', unit: 'M', price: '1.71', note: '200M/捲', category: 'H' },
                { code: 'H04Y',   name: '彩色通用型熱收縮套管 4.0mm (黃)', unit: 'M', price: '1.71', note: '200M/捲', category: 'H' },
                { code: 'H04G',   name: '彩色通用型熱收縮套管 4.0mm (綠)', unit: 'M', price: '1.71', note: '200M/捲', category: 'H' },
                { code: 'H04BL',  name: '彩色通用型熱收縮套管 4.0mm (藍)', unit: 'M', price: '1.71', note: '200M/捲', category: 'H' },

                // 4.5mm price: 1.86
                { code: 'H045R',  name: '彩色通用型熱收縮套管 4.5mm (紅)', unit: 'M', price: '1.86', note: '100M/捲', category: 'H' },
                { code: 'H045Y',  name: '彩色通用型熱收縮套管 4.5mm (黃)', unit: 'M', price: '1.86', note: '100M/捲', category: 'H' },
                { code: 'H045G',  name: '彩色通用型熱收縮套管 4.5mm (綠)', unit: 'M', price: '1.86', note: '100M/捲', category: 'H' },
                { code: 'H045BL', name: '彩色通用型熱收縮套管 4.5mm (藍)', unit: 'M', price: '1.86', note: '100M/捲', category: 'H' },

                // 5.0mm price: 2.23
                { code: 'H05R',   name: '彩色通用型熱收縮套管 5.0mm (紅)', unit: 'M', price: '2.23', note: '100M/捲', category: 'H' },
                { code: 'H05Y',   name: '彩色通用型熱收縮套管 5.0mm (黃)', unit: 'M', price: '2.23', note: '100M/捲', category: 'H' },
                { code: 'H05G',   name: '彩色通用型熱收縮套管 5.0mm (綠)', unit: 'M', price: '2.23', note: '100M/捲', category: 'H' },
                { code: 'H05BL',  name: '彩色通用型熱收縮套管 5.0mm (藍)', unit: 'M', price: '2.23', note: '100M/捲', category: 'H' },

                // 6.0mm price: 2.73
                { code: 'H06R',   name: '彩色通用型熱收縮套管 6.0mm (紅)', unit: 'M', price: '2.73', note: '100M/捲', category: 'H' },
                { code: 'H06Y',   name: '彩色通用型熱收縮套管 6.0mm (黃)', unit: 'M', price: '2.73', note: '100M/捲', category: 'H' },
                { code: 'H06G',   name: '彩色通用型熱收縮套管 6.0mm (綠)', unit: 'M', price: '2.73', note: '100M/捲', category: 'H' },
                { code: 'H06BL',  name: '彩色通用型熱收縮套管 6.0mm (藍)', unit: 'M', price: '2.73', note: '100M/捲', category: 'H' },

                // 7.0mm price: 3.21
                { code: 'H07R',   name: '彩色通用型熱收縮套管 7.0mm (紅)', unit: 'M', price: '3.21', note: '100M/捲', category: 'H' },
                { code: 'H07Y',   name: '彩色通用型熱收縮套管 7.0mm (黃)', unit: 'M', price: '3.21', note: '100M/捲', category: 'H' },
                { code: 'H07G',   name: '彩色通用型熱收縮套管 7.0mm (綠)', unit: 'M', price: '3.21', note: '100M/捲', category: 'H' },
                { code: 'H07BL',  name: '彩色通用型熱收縮套管 7.0mm (藍)', unit: 'M', price: '3.21', note: '100M/捲', category: 'H' },

                // 8.0mm price: 3.48
                { code: 'H08R',   name: '彩色通用型熱收縮套管 8.0mm (紅)', unit: 'M', price: '3.48', note: '100M/捲', category: 'H' },
                { code: 'H08Y',   name: '彩色通用型熱收縮套管 8.0mm (黃)', unit: 'M', price: '3.48', note: '100M/捲', category: 'H' },
                { code: 'H08G',   name: '彩色通用型熱收縮套管 8.0mm (綠)', unit: 'M', price: '3.48', note: '100M/捲', category: 'H' },
                { code: 'H08BL',  name: '彩色通用型熱收縮套管 8.0mm (藍)', unit: 'M', price: '3.48', note: '100M/捲', category: 'H' },

                // 9.0mm price: 3.71
                { code: 'H09R',   name: '彩色通用型熱收縮套管 9.0mm (紅)', unit: 'M', price: '3.71', note: '100M/捲', category: 'H' },
                { code: 'H09Y',   name: '彩色通用型熱收縮套管 9.0mm (黃)', unit: 'M', price: '3.71', note: '100M/捲', category: 'H' },
                { code: 'H09G',   name: '彩色通用型熱收縮套管 9.0mm (綠)', unit: 'M', price: '3.71', note: '100M/捲', category: 'H' },
                { code: 'H09BL',  name: '彩色通用型熱收縮套管 9.0mm (藍)', unit: 'M', price: '3.71', note: '100M/捲', category: 'H' },

                // 10.0mm price: 4.09
                { code: 'H10R',   name: '彩色通用型熱收縮套管 10.0mm (紅)', unit: 'M', price: '4.09', note: '100M/捲', category: 'H' },
                { code: 'H10Y',   name: '彩色通用型熱收縮套管 10.0mm (黃)', unit: 'M', price: '4.09', note: '100M/捲', category: 'H' },
                { code: 'H10G',   name: '彩色通用型熱收縮套管 10.0mm (綠)', unit: 'M', price: '4.09', note: '100M/捲', category: 'H' },
                { code: 'H10BL',  name: '彩色通用型熱收縮套管 10.0mm (藍)', unit: 'M', price: '4.09', note: '100M/捲', category: 'H' },

                // 11.0mm price: 4.35
                { code: 'H11R',   name: '彩色通用型熱收縮套管 11.0mm (紅)', unit: 'M', price: '4.35', note: '100M/捲', category: 'H' },
                { code: 'H11Y',   name: '彩色通用型熱收縮套管 11.0mm (黃)', unit: 'M', price: '4.35', note: '100M/捲', category: 'H' },
                { code: 'H11G',   name: '彩色通用型熱收縮套管 11.0mm (綠)', unit: 'M', price: '4.35', note: '100M/捲', category: 'H' },
                { code: 'H11BL',  name: '彩色通用型熱收縮套管 11.0mm (藍)', unit: 'M', price: '4.35', note: '100M/捲', category: 'H' },

                // 12.0mm price: 4.84
                { code: 'H12R',   name: '彩色通用型熱收縮套管 12.0mm (紅)', unit: 'M', price: '4.84', note: '100M/捲', category: 'H' },
                { code: 'H12Y',   name: '彩色通用型熱收縮套管 12.0mm (黃)', unit: 'M', price: '4.84', note: '100M/捲', category: 'H' },
                { code: 'H12G',   name: '彩色通用型熱收縮套管 12.0mm (綠)', unit: 'M', price: '4.84', note: '100M/捲', category: 'H' },
                { code: 'H12BL',  name: '彩色通用型熱收縮套管 12.0mm (藍)', unit: 'M', price: '4.84', note: '100M/捲', category: 'H' },

                // 13.0mm price: 5.75
                { code: 'H13R',   name: '彩色通用型熱收縮套管 13.0mm (紅)', unit: 'M', price: '5.75', note: '100M/捲', category: 'H' },
                { code: 'H13Y',   name: '彩色通用型熱收縮套管 13.0mm (黃)', unit: 'M', price: '5.75', note: '100M/捲', category: 'H' },
                { code: 'H13G',   name: '彩色通用型熱收縮套管 13.0mm (綠)', unit: 'M', price: '5.75', note: '100M/捲', category: 'H' },
                { code: 'H13BL',  name: '彩色通用型熱收縮套管 13.0mm (藍)', unit: 'M', price: '5.75', note: '100M/捲', category: 'H' },

                // 14.0mm price: 6.11
                { code: 'H14R',   name: '彩色通用型熱收縮套管 14.0mm (紅)', unit: 'M', price: '6.11', note: '100M/捲', category: 'H' },
                { code: 'H14Y',   name: '彩色通用型熱收縮套管 14.0mm (黃)', unit: 'M', price: '6.11', note: '100M/捲', category: 'H' },
                { code: 'H14G',   name: '彩色通用型熱收縮套管 14.0mm (綠)', unit: 'M', price: '6.11', note: '100M/捲', category: 'H' },
                { code: 'H14BL',  name: '彩色通用型熱收縮套管 14.0mm (藍)', unit: 'M', price: '6.11', note: '100M/捲', category: 'H' },

                // 15.0mm price: 6.53
                { code: 'H15R',   name: '彩色通用型熱收縮套管 15.0mm (紅)', unit: 'M', price: '6.53', note: '100M/捲', category: 'H' },
                { code: 'H15Y',   name: '彩色通用型熱收縮套管 15.0mm (黃)', unit: 'M', price: '6.53', note: '100M/捲', category: 'H' },
                { code: 'H15G',   name: '彩色通用型熱收縮套管 15.0mm (綠)', unit: 'M', price: '6.53', note: '100M/捲', category: 'H' },
                { code: 'H15BL',  name: '彩色通用型熱收縮套管 15.0mm (藍)', unit: 'M', price: '6.53', note: '100M/捲', category: 'H' },

                // 16.0mm price: 7.26
                { code: 'H16R',   name: '彩色通用型熱收縮套管 16.0mm (紅)', unit: 'M', price: '7.26', note: '100M/捲', category: 'H' },
                { code: 'H16Y',   name: '彩色通用型熱收縮套管 16.0mm (黃)', unit: 'M', price: '7.26', note: '100M/捲', category: 'H' },
                { code: 'H16G',   name: '彩色通用型熱收縮套管 16.0mm (綠)', unit: 'M', price: '7.26', note: '100M/捲', category: 'H' },
                { code: 'H16BL',  name: '彩色通用型熱收縮套管 16.0mm (藍)', unit: 'M', price: '7.26', note: '100M/捲', category: 'H' },


                // AIS 含膠熱縮套管 (黑色 / 一般型) 
                { code: 'AIS-032', name: '含膠熱縮套管 3.2mm (黑) (1/8")',    unit: 'M', price: '8.200',  note: '包裝：200M',  category: 'AIS' },
                { code: 'AIS-048', name: '含膠熱縮套管 4.8mm (黑) (3/16")',   unit: 'M', price: '10.200', note: '包裝：100M',  category: 'AIS' },
                { code: 'AIS-064', name: '含膠熱縮套管 6.4mm (黑) (1/4")',    unit: 'M', price: '13.300', note: '包裝：100M',  category: 'AIS' },
                { code: 'AIS-095', name: '含膠熱縮套管 9.5mm (黑) (3/8")',    unit: 'M', price: '17.800', note: '包裝：50M',   category: 'AIS' },
                { code: 'AIS-127', name: '含膠熱縮套管 12.7mm (黑) (1/2")',   unit: 'M', price: '34.700', note: '包裝：1.22M', category: 'AIS' },
                { code: 'AIS-150', name: '含膠熱縮套管 15.0mm (黑) (5/8")',   unit: 'M', price: '50.200', note: '包裝：1.22M', category: 'AIS' },
                { code: 'AIS-191', name: '含膠熱縮套管 19.1mm (黑) (3/4")',   unit: 'M', price: '52.400', note: '包裝：1.22M', category: 'AIS' },
                { code: 'AIS-254', name: '含膠熱縮套管 25.4mm (黑) (1")',     unit: 'M', price: '82.700', note: '包裝：1.22M', category: 'AIS' },
                { code: 'AIS-381', name: '含膠熱縮套管 38.1mm (黑) (1-1/2")', unit: 'M', price: '110.000',note: '包裝：1.22M', category: 'AIS' },


                
                // AIS 透明含膠熱縮套管（含包裝資訊）
                { code: 'AIS-032C', name: '含膠熱縮套管 3.2mm (透明) (1/8")',    unit: 'M', price: '4.56',  note: '包裝：200M',   category: 'AISC' },
                { code: 'AIS-048C', name: '含膠熱縮套管 4.8mm (透明) (3/16")',   unit: 'M', price: '6.60',  note: '包裝：100M',   category: 'AISC' },
                { code: 'AIS-064C', name: '含膠熱縮套管 6.4mm (透明) (1/4")',    unit: 'M', price: '7.92',  note: '包裝：100M',   category: 'AISC' },
                { code: 'AIS-095C', name: '含膠熱縮套管 9.5mm (透明) (3/8")',    unit: 'M', price: '13.20', note: '包裝：50M',    category: 'AISC' },
                { code: 'AIS-127C', name: '含膠熱縮套管 12.7mm (透明) (1/2")',   unit: 'M', price: '20.40', note: '包裝：1.22M',  category: 'AISC' },
                { code: 'AIS-150C', name: '含膠熱縮套管 15.0mm (透明) (5/8")',   unit: 'M', price: '26.40', note: '包裝：1.22M',  category: 'AISC' },
                { code: 'AIS-191C', name: '含膠熱縮套管 19.1mm (透明) (3/4")',   unit: 'M', price: '31.70', note: '包裝：1.22M',  category: 'AISC' },
                { code: 'AIS-254C', name: '含膠熱縮套管 25.4mm (透明) (1")',     unit: 'M', price: '43.40', note: '包裝：1.22M',  category: 'AISC' },
                { code: 'AIS-381C', name: '含膠熱縮套管 38.1mm (透明) (1-1/2")', unit: 'M', price: '101.90',note: '包裝：1.22M',  category: 'AISC' },


                // PET 擴充編織網管
                { code: 'PET-032', name: '擴充編織網管 3.2mm (1/8")',       unit: 'M', price: '3.36',  note: '包裝：305m/卷', category: 'PET' },
                { code: 'PET-064', name: '擴充編織網管 6.4mm (1/4")',       unit: 'M', price: '3.90',  note: '包裝：305m/卷', category: 'PET' },
                { code: 'PET-095', name: '擴充編織網管 9.5mm (3/8")',       unit: 'M', price: '4.50',  note: '包裝：152m/卷', category: 'PET' },
                { code: 'PET-127', name: '擴充編織網管 12.7mm (1/2")',      unit: 'M', price: '5.70',  note: '包裝：152m/卷', category: 'PET' },
                { code: 'PET-150', name: '擴充編織網管 15.0mm',             unit: 'M', price: '8.41',  note: '包裝：152m/卷', category: 'PET' },
                { code: 'PET-191', name: '擴充編織網管 19.1mm (3/4")',      unit: 'M', price: '9.70',  note: '包裝：77m/卷',  category: 'PET' },
                { code: 'PET-320', name: '擴充編織網管 32.0mm (1-1/4")',    unit: 'M', price: '20.80', note: '包裝：77m/卷',  category: 'PET' },
                { code: 'PET-381', name: '擴充編織網管 38.1mm (1-1/2")',    unit: 'M', price: '28.80', note: '包裝：61m/卷',  category: 'PET' },
                { code: 'PET-445', name: '擴充編織網管 44.5mm (1-3/4")',    unit: 'M', price: '31.70', note: '包裝：61m/卷',  category: 'PET' },
                { code: 'PET-500', name: '擴充編織網管 50.0mm (2")',        unit: 'M', price: '32.30', note: '包裝：61m/卷',  category: 'PET' },

            
            // 裁切費
            { code: 'Z043', name: '裁切費 0~999mm', unit: 'M', price: '0.3', note: '加工服務', category: '裁切費' },
            { code: 'Z044', name: '裁切費 1m以上', unit: 'M', price: '0.5', note: '加工服務', category: '裁切費' }
        ];

let currentCategory = "all";
let filteredProducts = [...allProducts];

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

