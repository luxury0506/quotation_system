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


            // FSG-3 矽套管1.5KV系列
            { code: 'FSG-3-01', name: '矽套管1.5KV 1.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-015', name: '矽套管1.5KV 1.5mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-02', name: '矽套管1.5KV 2.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-025', name: '矽套管1.5KV 2.5mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-03', name: '矽套管1.5KV 3.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-035', name: '矽套管1.5KV 3.5mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-04', name: '矽套管1.5KV 4.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-045', name: '矽套管1.5KV 4.5mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-05', name: '矽套管1.5KV 5.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-06', name: '矽套管1.5KV 6.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-07', name: '矽套管1.5KV 7.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-08', name: '矽套管1.5KV 8.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-09', name: '矽套管1.5KV 9.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-10', name: '矽套管1.5KV 10.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            { code: 'FSG-3-12', name: '矽套管1.5KV 12.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-3' },
            
             // FSG-2 矽套管2.5KV系列
             { code: 'FSG-2-01', name: '矽套管2.5KV 1.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-015', name: '矽套管2.5KV 1.5mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-02', name: '矽套管2.5KV 2.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-025', name: '矽套管2.5KV 2.5mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-03', name: '矽套管2.5KV 3.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-035', name: '矽套管2.5KV 3.5mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-04', name: '矽套管2.5KV 4.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-045', name: '矽套管2.5KV 4.5mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-05', name: '矽套管2.5KV 5.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-06', name: '矽套管2.5KV 6.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-07', name: '矽套管2.5KV 7.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-08', name: '矽套管2.5KV 8.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-09', name: '矽套管2.5KV 9.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-10', name: '矽套管2.5KV 10.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            { code: 'FSG-2-12', name: '矽套管2.5KV 12.0mm', unit: 'M', price: '', note: '100M/捲', category: 'FSG-2' },
            
            // HST 玻璃纖維細橡膠套管
            { code: 'HST-01', name: '玻璃纖維細橡膠套管 8KV 1.0mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            { code: 'HST-015', name: '玻璃纖維細橡膠套管 8KV 1.5mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            { code: 'HST-02', name: '玻璃纖維細橡膠套管 8KV 2.0mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            { code: 'HST-025', name: '玻璃纖維細橡膠套管 8KV 2.5mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            { code: 'HST-03', name: '玻璃纖維細橡膠套管 8KV 3.0mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            { code: 'HST-035', name: '玻璃纖維細橡膠套管 8KV 3.5mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            { code: 'HST-04', name: '玻璃纖維細橡膠套管 8KV 4.0mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            { code: 'HST-045', name: '玻璃纖維細橡膠套管 8KV 4.5mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            { code: 'HST-05', name: '玻璃纖維細橡膠套管 8KV 5.0mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            { code: 'HST-06', name: '玻璃纖維細橡膠套管 8KV 6.0mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            { code: 'HST-07', name: '玻璃纖維細橡膠套管 8KV 7.0mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            { code: 'HST-08', name: '玻璃纖維細橡膠套管 8KV 8.0mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            { code: 'HST-09', name: '玻璃纖維細橡膠套管 8KV 9.0mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            { code: 'HST-10', name: '玻璃纖維細橡膠套管 8KV 10.0mm', unit: 'M', price: '', note: '100M/捲', category: 'HST' },
            
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
            
            // SRG-4 矽橡膠玻璃纖維套管
            { code: 'SRG-4-01', name: '矽橡膠玻璃纖維套管 4KV  1.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-015', name: '矽橡膠玻璃纖維套管 4KV  1.5mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-02', name: '矽橡膠玻璃纖維套管 4KV  2.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-025', name: '矽橡膠玻璃纖維套管 4KV  2.5mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-03', name: '矽橡膠玻璃纖維套管 4KV  3.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-035', name: '矽橡膠玻璃纖維套管 4KV  3.5mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-04', name: '矽橡膠玻璃纖維套管 4KV  4.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-045', name: '矽橡膠玻璃纖維套管 4KV  4.5mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-05', name: '矽橡膠玻璃纖維套管 4KV  5.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-06', name: '矽橡膠玻璃纖維套管 4KV  6.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-07', name: '矽橡膠玻璃纖維套管 4KV  7.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-08', name: '矽橡膠玻璃纖維套管 4KV  8.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-09', name: '矽橡膠玻璃纖維套管 4KV  9.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-10', name: '矽橡膠玻璃纖維套管 4KV  10.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            { code: 'SRG-4-12', name: '矽橡膠玻璃纖維套管 4KV  12.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-4' },
            
            // SRG-7 矽橡膠玻璃纖維套管
            { code: 'SRG-7-01', name: '矽橡膠玻璃纖維套管 7KV  1.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-015', name: '矽橡膠玻璃纖維套管 7KV  1.5mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-02', name: '矽橡膠玻璃纖維套管 7KV  2.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-025', name: '矽橡膠玻璃纖維套管 7KV  2.5mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-03', name: '矽橡膠玻璃纖維套管 7KV  3.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-035', name: '矽橡膠玻璃纖維套管 7KV  3.5mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-04', name: '矽橡膠玻璃纖維套管 7KV  4.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-045', name: '矽橡膠玻璃纖維套管 7KV  4.5mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-05', name: '矽橡膠玻璃纖維套管 7KV  5.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-06', name: '矽橡膠玻璃纖維套管 7KV  6.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-07', name: '矽橡膠玻璃纖維套管 7KV  7.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-08', name: '矽橡膠玻璃纖維套管 7KV  8.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-09', name: '矽橡膠玻璃纖維套管 7KV  9.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-10', name: '矽橡膠玻璃纖維套管 7KV  10.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            { code: 'SRG-7-12', name: '矽橡膠玻璃纖維套管 7KV  12.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SRG-7' },
            
            // SR 矽橡膠套管
            { code: 'SR-01', name: '矽橡膠套管 1.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            { code: 'SR-015', name: '矽橡膠套管 1.5mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            { code: 'SR-02', name: '矽橡膠套管 2.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            { code: 'SR-025', name: '矽橡膠套管 2.5mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            { code: 'SR-03', name: '矽橡膠套管 3.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            { code: 'SR-035', name: '矽橡膠套管 3.5mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            { code: 'SR-04', name: '矽橡膠套管 4.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            { code: 'SR-045', name: '矽橡膠套管 4.5mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            { code: 'SR-05', name: '矽橡膠套管 5.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            { code: 'SR-06', name: '矽橡膠套管 6.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            { code: 'SR-07', name: '矽橡膠套管 7.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            { code: 'SR-08', name: '矽橡膠套管 8.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            { code: 'SR-09', name: '矽橡膠套管 9.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            { code: 'SR-10', name: '矽橡膠套管 10.0mm', unit: 'M', price: '', note: '100M/捲', category: 'SR' },
            
            // H 通用型熱收縮套管
            { code: 'H-008', name: '通用型熱收縮套管 0.8mm', unit: 'M', price: '', note: '200M/捲', category: 'H' },
            { code: 'H-01', name: '通用型熱收縮套管 1.0mm', unit: 'M', price: '', note: '200M/捲', category: 'H' },
            { code: 'H-015', name: '通用型熱收縮套管 1.5mm', unit: 'M', price: '', note: '200M/捲', category: 'H' },
            { code: 'H-02', name: '通用型熱收縮套管 2.0mm', unit: 'M', price: '', note: '200M/捲', category: 'H' },
            { code: 'H-025', name: '通用型熱收縮套管 2.5mm', unit: 'M', price: '', note: '200M/捲', category: 'H' },
            { code: 'H-03', name: '通用型熱收縮套管 3.2mm', unit: 'M', price: '', note: '200M/捲', category: 'H' },
            { code: 'H-035', name: '通用型熱收縮套管 3.2mm', unit: 'M', price: '', note: '200M/捲', category: 'H' },
            { code: 'H-04', name: '通用型熱收縮套管 4.0mm', unit: 'M', price: '', note: '200M/捲', category: 'H' },
            { code: 'H-045', name: '通用型熱收縮套管 4.0mm', unit: 'M', price: '', note: '200M/捲', category: 'H' },
            { code: 'H-05', name: '通用型熱收縮套管 5.0mm', unit: 'M', price: '', note: '200M/捲', category: 'H' },
            { code: 'H-06', name: '通用型熱收縮套管 6.0mm', unit: 'M', price: '', note: '200M/捲', category: 'H' },
            { code: 'H-07', name: '通用型熱收縮套管 7.0mm', unit: 'M', price: '', note: '200M/捲', category: 'H' },
            { code: 'H-08', name: '通用型熱收縮套管 8.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-09', name: '通用型熱收縮套管 9.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-10', name: '通用型熱收縮套管 10.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-11', name: '通用型熱收縮套管 11.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-12', name: '通用型熱收縮套管 12.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-13', name: '通用型熱收縮套管 13.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-14', name: '通用型熱收縮套管 14.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-15', name: '通用型熱收縮套管 15.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-16', name: '通用型熱收縮套管 16.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-17', name: '通用型熱收縮套管 17.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-18', name: '通用型熱收縮套管 18.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-19', name: '通用型熱收縮套管 19.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-20', name: '通用型熱收縮套管 20.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-21', name: '通用型熱收縮套管 21.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-22', name: '通用型熱收縮套管 22.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-23', name: '通用型熱收縮套管 23.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-24', name: '通用型熱收縮套管 24.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-25', name: '通用型熱收縮套管 25.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-26', name: '通用型熱收縮套管 26.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-27', name: '通用型熱收縮套管 27.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-28', name: '通用型熱收縮套管 28.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-29', name: '通用型熱收縮套管 29.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            { code: 'H-30', name: '通用型熱收縮套管 30.0mm', unit: 'M', price: '', note: '100M/捲', category: 'H' },
            
            // AIS 雙璧含膠型熱收縮套管
            { code: 'AIS-32', name: '雙璧含膠型熱收縮套管 3.2mm', unit: 'M', price: '', note: '100M/捲', category: 'AIS' },
            { code: 'AIS-40', name: '雙璧含膠型熱收縮套管 4.0mm', unit: 'M', price: '', note: '100M/捲', category: 'AIS' },
            { code: 'AIS-48', name: '雙璧含膠型熱收縮套管 4.8mm', unit: 'M', price: '', note: '100M/捲', category: 'AIS' },
            { code: 'AIS-64', name: '雙璧含膠型熱收縮套管 6.4mm', unit: 'M', price: '', note: '100M/捲', category: 'AIS' },
            { code: 'AIS-80', name: '雙璧含膠型熱收縮套管 8.0mm', unit: 'M', price: '', note: '100M/捲', category: 'AIS' },
            { code: 'AIS-95', name: '雙璧含膠型熱收縮套管 9.5mm', unit: 'M', price: '', note: '100M/捲', category: 'AIS' },
            { code: 'AIS-127', name: '雙璧含膠型熱收縮套管 12.7mm', unit: 'M', price: '', note: '100M/捲', category: 'AIS' },
            { code: 'AIS-160', name: '雙璧含膠型熱收縮套管 16.0mm', unit: 'M', price: '', note: '100M/捲', category: 'AIS' },
            { code: 'AIS-190', name: '雙璧含膠型熱收縮套管 19.0mm', unit: 'M', price: '', note: '100M/捲', category: 'AIS' },
            { code: 'AIS-254', name: '雙璧含膠型熱收縮套管 25.4mm', unit: 'M', price: '', note: '50M/捲', category: 'AIS' },
            { code: 'AIS-320', name: '雙璧含膠型熱收縮套管 32.0mm', unit: 'M', price: '', note: '50M/捲', category: 'AIS' },
            { code: 'AIS-381', name: '雙璧含膠型熱收縮套管 38.1mm', unit: 'M', price: '', note: '50M/捲', category: 'AIS' },
            { code: 'AIS-508', name: '雙璧含膠型熱收縮套管 50.8mm', unit: 'M', price: '', note: '25M/捲', category: 'AIS' },
            
            // PET 編織擴充管
            { code: 'PET-32', name: '編織擴充管 3.2mm', unit: 'M', price: '', note: '100M/捲', category: 'PET' },
            { code: 'PET-40', name: '編織擴充管 4.0mm', unit: 'M', price: '', note: '100M/捲', category: 'PET' },
            { code: 'PET-48', name: '編織擴充管 4.8mm', unit: 'M', price: '', note: '100M/捲', category: 'PET' },
            { code: 'PET-64', name: '編織擴充管 6.4mm', unit: 'M', price: '', note: '100M/捲', category: 'PET' },
            { code: 'PET-80', name: '編織擴充管 8.0mm', unit: 'M', price: '', note: '100M/捲', category: 'PET' },
            { code: 'PET-95', name: '編織擴充管 9.5mm', unit: 'M', price: '', note: '100M/捲', category: 'PET' },
            { code: 'PET-127', name: '編織擴充管 12.7mm', unit: 'M', price: '', note: '100M/捲', category: 'PET' },
            { code: 'PET-160', name: '編織擴充管 16.0mm', unit: 'M', price: '', note: '100M/捲', category: 'PET' },
            { code: 'PET-190', name: '編織擴充管 19.0mm', unit: 'M', price: '', note: '100M/捲', category: 'PET' },
            { code: 'PET-254', name: '編織擴充管 25.4mm', unit: 'M', price: '', note: '50M/捲', category: 'PET' },
            { code: 'PET-320', name: '編織擴充管 32.0mm', unit: 'M', price: '', note: '50M/捲', category: 'PET' },
            { code: 'PET-381', name: '編織擴充管 38.1mm', unit: 'M', price: '', note: '50M/捲', category: 'PET' },
            { code: 'PET-508', name: '編織擴充管 50.8mm', unit: 'M', price: '', note: '25M/捲', category: 'PET' },
            
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

