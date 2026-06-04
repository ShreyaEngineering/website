import { useState, useRef } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

interface LineItem { id: number; name: string; qty: number; rate: number }
interface InvoiceData {
    businessName: string
    subUnit: string
    ownerName: string
    gstin: string
    contact: string
    invoiceNo: string
    dateTime: string
    customerName: string
    customerMobile: string
    items: LineItem[]
    cgstPct: number
    sgstPct: number
    note: string
}

const now = () => {
    const d = new Date()
    return d.toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
}

const pad2 = (n: number) => String(n).padStart(2, '0')
const nextInvoiceNo = () => `SEW-${pad2(Math.floor(Math.random() * 99) + 1)}`

export default function Invoice() {
    const receiptRef = useRef<HTMLDivElement>(null)
    const [data, setData] = useState<InvoiceData>({
        businessName: 'Shreya Engineering Works',
        subUnit: 'A Second Unit of Shyam Machine Shop',
        ownerName: 'Er. Murari Sharma',
        gstin: '',
        contact: '+91 88263 55698',
        invoiceNo: nextInvoiceNo(),
        dateTime: now(),
        customerName: '',
        customerMobile: '',
        items: [{ id: 1, name: '', qty: 1, rate: 0 }],
        cgstPct: 0,
        sgstPct: 0,
        note: 'Thank You Visit Again !!',
    })
    const [saving, setSaving] = useState(false)

    const set = (key: keyof InvoiceData, val: any) => setData(d => ({ ...d, [key]: val }))

    const addItem = () => set('items', [...data.items, { id: Date.now(), name: '', qty: 1, rate: 0 }])
    const removeItem = (id: number) => set('items', data.items.filter(i => i.id !== id))
    const updateItem = (id: number, field: keyof LineItem, val: any) =>
        set('items', data.items.map(i => i.id === id ? { ...i, [field]: val } : i))

    const subtotal = data.items.reduce((s, i) => s + i.qty * i.rate, 0)
    const cgstAmt = +(subtotal * data.cgstPct / 100).toFixed(2)
    const sgstAmt = +(subtotal * data.sgstPct / 100).toFixed(2)
    const gross = subtotal + cgstAmt + sgstAmt
    const roundOff = +(Math.round(gross) - gross).toFixed(2)
    const grandTotal = Math.round(gross)

    const fmt = (n: number) => n.toLocaleString('en-IN', { minimumFractionDigits: 2 })

    const refreshInvoice = () => {
        set('invoiceNo', nextInvoiceNo())
        set('dateTime', now())
    }

    const downloadPDF = async () => {
        if (!receiptRef.current) return
        setSaving(true)
        try {
            const canvas = await html2canvas(receiptRef.current, { scale: 3, backgroundColor: '#fff', useCORS: true })
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF({ unit: 'mm', format: [80, canvas.height * 80 / canvas.width] })
            pdf.addImage(imgData, 'PNG', 0, 0, 80, canvas.height * 80 / canvas.width)
            pdf.save(`${data.invoiceNo}.pdf`)
        } finally { setSaving(false) }
    }

    const thermalPrint = () => window.print()

    const sendReceiptWhatsApp = async () => {
        await downloadPDF()

        const phone = data.customerMobile.replace(/\D/g, "")

        const message = `
Dear Customer,

Thank you for choosing Shreya Engineering Works.

Invoice No: ${data.invoiceNo}
Amount Paid: ₹${grandTotal}

We sincerely appreciate your business and trust in our services. Please find your receipt attached for your records.

If you have any questions or require further assistance, feel free to contact us.

Thank you for your support.

Regards,
Shreya Engineering Works
+91 88263 55698
`;

        window.open(
            `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`,
            "_blank"
        )
    }

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-[#f0ece4]">
            {/* Header */}
            <header className="border-b border-[#ea1414] px-12 py-6 flex items-center justify-between bg-amber-700">

            </header>

            <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">

                {/* FORM SIDE */}
                <div className="space-y-6">

                    {/* Business Info */}
                    <section className="bg-[#161616] border border-[#222] rounded-xl p-6">
                        <h2 className="mono text-xs text-amber-400 tracking-widest mb-4 uppercase">Business Details</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: 'Business Name', key: 'businessName' },
                                { label: 'Sub Unit / Description', key: 'subUnit' },
                                { label: 'Owner Name', key: 'ownerName' },
                                { label: 'GSTIN', key: 'gstin' },
                                { label: 'Contact', key: 'contact' },
                            ].map(({ label, key }) => (
                                <div key={key}>
                                    <label className="text-xs text-[#555] mono block mb-1">{label}</label>
                                    <input value={(data as any)[key]} onChange={e => set(key as any, e.target.value)}
                                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded px-3 py-2 text-sm text-[#f0ece4] focus:border-amber-400 focus:outline-none transition-colors mono"
                                        placeholder={label} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Invoice Meta */}
                    <section className="bg-[#161616] border border-[#222] rounded-xl p-6">
                        <h2 className="mono text-xs text-amber-400 tracking-widest mb-4 uppercase">Invoice Details</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs text-[#555] mono block mb-1">Invoice No</label>
                                <div className="flex gap-2">
                                    <input value={data.invoiceNo} onChange={e => set('invoiceNo', e.target.value)}
                                        className="flex-1 bg-[#0f0f0f] border border-[#2a2a2a] rounded px-3 py-2 text-sm text-[#f0ece4] focus:border-amber-400 focus:outline-none transition-colors mono" />
                                    <button onClick={refreshInvoice} title="Regenerate"
                                        className="px-3 py-2 border border-[#2a2a2a] rounded text-[#555] hover:border-amber-400 hover:text-amber-400 transition-all text-sm">↻</button>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs text-[#555] mono block mb-1">Date / Time</label>
                                <input value={data.dateTime} onChange={e => set('dateTime', e.target.value)}
                                    className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded px-3 py-2 text-sm text-[#f0ece4] focus:border-amber-400 focus:outline-none transition-colors mono" />
                            </div>
                            <div>
                                <label className="text-xs text-[#555] mono block mb-1">Customer Name</label>
                                <input value={data.customerName} onChange={e => set('customerName', e.target.value)}
                                    className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded px-3 py-2 text-sm text-[#f0ece4] focus:border-amber-400 focus:outline-none transition-colors mono"
                                    placeholder="Customer Name" />
                            </div>
                            <div>
                                <label className="text-xs text-[#555] mono block mb-1">Customer Mobile</label>
                                <input value={data.customerMobile} onChange={e => set('customerMobile', e.target.value)}
                                    className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded px-3 py-2 text-sm text-[#f0ece4] focus:border-amber-400 focus:outline-none transition-colors mono"
                                    placeholder="+91 XXXXX XXXXX" />
                            </div>
                        </div>
                    </section>

                    {/* Line Items */}
                    <section className="bg-[#161616] border border-[#222] rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="mono text-xs text-amber-400 tracking-widest uppercase">Line Items</h2>
                            <button onClick={addItem}
                                className="mono text-xs px-3 py-1.5 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all rounded">
                                + ADD ITEM
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-left">
                                        <th className="mono text-xs text-[#444] pb-3 font-normal">ITEM / SERVICE</th>
                                        <th className="mono text-xs text-[#444] pb-3 font-normal w-20 text-right">QTY</th>
                                        <th className="mono text-xs text-[#444] pb-3 font-normal w-28 text-right">RATE (₹)</th>
                                        <th className="mono text-xs text-[#444] pb-3 font-normal w-28 text-right">AMOUNT</th>
                                        <th className="w-8"></th>
                                    </tr>
                                </thead>
                                <tbody className="space-y-2">
                                    {data.items.map((item) => (
                                        <tr key={item.id} className="border-t border-[#1e1e1e]">
                                            <td className="py-2 pr-3">
                                                <input value={item.name} onChange={e => updateItem(item.id, 'name', e.target.value)}
                                                    className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded px-2 py-1.5 text-sm text-[#f0ece4] focus:border-amber-400 focus:outline-none transition-colors"
                                                    placeholder="Item name or service" />
                                            </td>
                                            <td className="py-2 pr-3">
                                                <input type="number" min="1" value={item.qty} onChange={e => updateItem(item.id, 'qty', +e.target.value)}
                                                    className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded px-2 py-1.5 text-sm text-right text-[#f0ece4] focus:border-amber-400 focus:outline-none transition-colors mono" />
                                            </td>
                                            <td className="py-2 pr-3">
                                                <input type="number" min="0" value={item.rate} onChange={e => updateItem(item.id, 'rate', +e.target.value)}
                                                    className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded px-2 py-1.5 text-sm text-right text-[#f0ece4] focus:border-amber-400 focus:outline-none transition-colors mono" />
                                            </td>
                                            <td className="py-2 pr-3 text-right mono text-[#f0ece4]">₹{fmt(item.qty * item.rate)}</td>
                                            <td className="py-2">
                                                {data.items.length > 1 && (
                                                    <button onClick={() => removeItem(item.id)}
                                                        className="text-[#444] hover:text-red-400 transition-colors text-lg leading-none">×</button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Tax & Note */}
                    <section className="bg-[#161616] border border-[#222] rounded-xl p-6">
                        <h2 className="mono text-xs text-amber-400 tracking-widest mb-4 uppercase">Tax & Footer</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="text-xs text-[#555] mono block mb-1">CGST %</label>
                                <input type="number" min="0" max="28" value={data.cgstPct} onChange={e => set('cgstPct', +e.target.value)}
                                    className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded px-3 py-2 text-sm text-[#f0ece4] focus:border-amber-400 focus:outline-none transition-colors mono" />
                            </div>
                            <div>
                                <label className="text-xs text-[#555] mono block mb-1">SGST %</label>
                                <input type="number" min="0" max="28" value={data.sgstPct} onChange={e => set('sgstPct', +e.target.value)}
                                    className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded px-3 py-2 text-sm text-[#f0ece4] focus:border-amber-400 focus:outline-none transition-colors mono" />
                            </div>
                            <div>
                                <label className="text-xs text-[#555] mono block mb-1">Footer Note</label>
                                <input value={data.note} onChange={e => set('note', e.target.value)}
                                    className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded px-3 py-2 text-sm text-[#f0ece4] focus:border-amber-400 focus:outline-none transition-colors" />
                            </div>
                        </div>
                    </section>

                </div>

                {/* RECEIPT PREVIEW SIDE */}
                <div className="lg:sticky lg:top-6 lg:self-start">
                    <div className="mono text-xs text-[#444] tracking-widest mb-3 uppercase">Live Preview</div>

                    {/* Thermal Receipt */}
                    <div id="thermal-receipt" ref={receiptRef}
                        className="bg-white text-black p-4 rounded-lg shadow-2xl"
                        style={{ fontFamily: 'Courier New, monospace', fontSize: '12px', width: '100%', maxWidth: '300px', margin: '0 auto' }}>

                        {/* Header */}
                        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{data.businessName || 'Business Name'}</div>
                            {data.subUnit && <div style={{ fontSize: '11px' }}>{data.subUnit}</div>}
                            {data.ownerName && <div style={{ fontSize: '11px' }}>{data.ownerName}</div>}
                            {data.gstin && <div style={{ fontSize: '10px', marginTop: '2px' }}>GSTIN: {data.gstin}</div>}
                            {data.contact && <div style={{ fontSize: '10px' }}>Contact: +91-{data.contact.replace('+91', '').replace('+91-', '')}</div>}
                        </div>

                        <Divider />

                        <Row label="Invoice" value={data.invoiceNo || 'SEW-XXXXX'} />
                        <Row label="Date/Time" value={data.dateTime} />
                        {data.customerName && <Row label="Customer" value={data.customerName} />}
                        {data.customerMobile && <Row label="Mobile" value={data.customerMobile} />}

                        <Divider />

                        {/* Items Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '4px', fontSize: '11px' }}>
                            <span style={{ flex: 1 }}>Item</span>
                            <span style={{ width: '30px', textAlign: 'right' }}>Qty</span>
                            <span style={{ width: '60px', textAlign: 'right' }}>Rate</span>
                            <span style={{ width: '65px', textAlign: 'right' }}>Amt</span>
                        </div>
                        <DashLine />

                        {data.items.map(item => (
                            <div key={item.id} style={{ marginBottom: '3px' }}>
                                <div style={{ fontWeight: '500', fontSize: '11px' }}>{item.name || '—'}</div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                                    <span style={{ flex: 1 }}></span>
                                    <span style={{ width: '30px', textAlign: 'right' }}>{item.qty}</span>
                                    <span style={{ width: '60px', textAlign: 'right' }}>{fmt(item.rate)}</span>
                                    <span style={{ width: '65px', textAlign: 'right' }}>{fmt(item.qty * item.rate)}</span>
                                </div>
                            </div>
                        ))}

                        <DashLine />

                        <Row label="Subtotal" value={fmt(subtotal)} />
                        <Row label={`CGST (${data.cgstPct}%)`} value={fmt(cgstAmt)} />
                        <Row label={`SGST (${data.sgstPct}%)`} value={fmt(sgstAmt)} />
                        <Row label="GST Total" value={fmt(cgstAmt + sgstAmt)} />
                        <Row label="Gross Total" value={fmt(gross)} />
                        <Row label="Round Off" value={fmt(roundOff)} />

                        <DashLine />

                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '13px', margin: '4px 0' }}>
                            <span>Grand Total</span>
                            <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                        </div>

                        <DashLine />

                        <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '11px', fontWeight: 'bold' }}>
                            {data.note}
                        </div>
                    </div>

                    {/* Action buttons below preview */}
                    <div className="flex gap-2 mt-4 max-w-[300px] mx-auto">
                        <button onClick={thermalPrint}
                            className="flex-1 mono text-xs py-2.5 border border-[#333] text-[#888] hover:border-amber-400 hover:text-amber-400 transition-all rounded">
                            🖨 PRINT
                        </button>
                        <button onClick={downloadPDF} disabled={saving}
                            className="flex-1 mono text-xs py-2.5 bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-all rounded disabled:opacity-50">
                            {saving ? '…' : '↓ PDF'}
                        </button>
                        <button
                            onClick={sendReceiptWhatsApp}
                            className="flex-1 mono text-xs py-2.5 bg-green-600 text-white rounded">
                            📱 WhatsApp
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

// Small helper components for receipt
function Divider() {
    return <hr style={{ border: 'none', borderTop: '1px dashed #aaa', margin: '6px 0' }} />
}
function DashLine() {
    return <div style={{ borderTop: '1px dashed #ccc', margin: '4px 0' }} />
}
function Row({ label, value }: { label: string; value: string | number }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', margin: '2px 0' }}>
            <span>{label}</span>
            <span>{value}</span>
        </div>
    )
}
