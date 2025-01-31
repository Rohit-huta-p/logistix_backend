module.exports = (content) => {
    console.log(content);
    
    const table_columns = [
        "CN Number",
        "Invoice No.",
        "From",
        "To",
        "Weight",
        "Charged",
        "Rate",
        "Freight",
        "ST",
        "Charges",
        "Others",
        "Amount",
    ];

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Invoice</title>
            <style>
                body{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    display: flex; 
                    justify-content: center;
                    align-items: center;
                    height: 100vh;"
                }
                p {
                margin: 0;
                }
                h1 {
                    margin: 0;
                }
                h2 {
                    margin: 0;
                }
                h3 {
                    margin: 0;
                }
                h4 {
                    margin: 0;
                }
                h5 {
                    margin: 0;
                }
                h6 {
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <div style="border: 1px solid black;display: flex; flex-direction:column; justify-content: center">
                <!-- Header -->
                <div>
                    <p style="text-align: center;">JAY SHREE RAM</p>
                    <div style="outline-style: solid;">
                        <h6 style="text-align: center; text-decoration: underline;">Subject to Pune Jurisdiction Only</h6>
        
                        <div style="display: flex; justify-content: space-evenly; outline: 1px solid black;">
                            <img style="height: 6rem;" src="https://st.depositphotos.com/1202217/2063/i/450/depositphotos_20638759-stock-photo-logo-text-with-shadow-word.jpg" alt="logo">
        
                            <div style="padding: 8px;">
                                <h2 style="font-size: 1.5rem; text-align: center; font-weight: bold; color: #111827;">ROAD CARRIERS</h2>
                                <h5 style="text-align: start; font-size: 13px; font-weight: bold;">Shop No. 14, Plot No. 61-62, Sector No. 23, Transport Nagar, Nigdi, Pune-44.</h5>
                                <h5 style="text-align: start; font-size: 13px; font-weight: bold;">Email: akashpune65@gmail.com</h5>
                            </div>
        
                            <div>
                                <div>
                                    <div>
                                        <h6>Ph:</h6>
                                        <div>
                                            <p>020-27651762</p>
                                            <p>020-7651804</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div>
                                        <h6>Mob:</h6>
                                        <div>
                                            <p>9890906607</p>
                                            <p>7875666607</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
                    <div style="grid-column: span 3; border-right: 2px solid black;">
                        <div style="display: flex; padding: 4px;">
                            <h2>M/s:</h2>
                            <h2 style="font-weight: normal;">${content.name}</h2>
                        </div>
                    </div>
        
                    <div style="border-right: 2px solid black; padding: 4px;">
                        <div style="display: flex; align-items: center;">
                            <h2>Bill No.:</h2>
                            <p style="margin-left: 4px">${content.billno}</p>
                        </div>
        
                        <div style="display: flex; align-items: center;">
                            <h2>Date:</h2>
                            <p>${content.date}</p>
                        </div>
                    </div>
                </div>
        
                <div style="display: flex; justify-content: center; white-space: nowrap; font-size: 12px; border: 1px solid black;">
                    <h5>Being the Service Charges as per the following Details :</h5>
                    <h5>(Interest @ 24% per annum will be charged on all out standing Bills)</h5>
                </div>
        
                <table style="padding: 16px; width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="display: grid; grid-template-columns: repeat(12, 1fr); ">
                            ${table_columns.map(column => `<th style="font-size: 12px; border: 1px solid black;">${column}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${content.billDetails.map(bill => `
                            <tr style="display: grid; grid-template-columns: repeat(12, 1fr); border: 1px solid black; padding: 4px;">
                                <td style="display: flex; justify-content: center; border: 1px solid black;">${bill.cn_number}</td>
                                <td style="display: flex; justify-content: center; border: 1px solid black;">${bill.invoice_number}</td>
                                <td style="display: flex; justify-content: center; border: 1px solid black;">${bill.from}</td>
                                <td style="display: flex; justify-content: center; border: 1px solid black;">${bill.to}</td>
                                <td style="display: flex; justify-content: center; border: 1px solid black;">${bill.weight}</td>
                                <td style="display: flex; justify-content: center; border: 1px solid black;">${bill.charged}</td>
                                <td style="display: flex; justify-content: center; border: 1px solid black;">${bill.rate}</td>
                                <td style="display: flex; justify-content: center; border: 1px solid black;">${bill.freight}</td>
                                <td style="display: flex; justify-content: center; border: 1px solid black;">${bill.st}</td>
                                <td style="display: flex; justify-content: center; border: 1px solid black;">${bill.st_charges}</td>
                                <td style="display: flex; justify-content: center; border: 1px solid black;">${bill.others}</td>
                                <td style="display: flex; justify-content: center; border: 1px solid black;">${bill.amount}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>

                <div style="border: 1px solid black; display: flex; justify-content: space-between; padding: 8px;">
                    <p>Rupees</p>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
                        <p>TOTAL:</p>
                        <p style="grid-column: span 2;">${content.billDetails.reduce((sum, bill) => sum + Number(bill.amount), 0).toFixed(2)}</p>
                    </div>
                </div>
        
                <footer style="display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid black;">
                    <div style="display: flex; flex-direction: column; gap: 16px; border-right: 2px solid black; padding: 8px;">
                        <p>PAN: AKMPM6807F</p>
                        <p>GST NO: 27AKMPM6807F2ZW</p>
                        <div style="display: flex; align-items: center;">
                        <p>GST Payable by: </p>
                        <p style="gap: 16px;">${content.gst_payable_by}</p>
                        </div>
                        <p style="font-size: 10px; font-weight: bold;">PLEASE PAY BY A/C PAYEE CHEQUE OR NEFT</p>
                    </div>
        
                    <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; border-right: 2px solid black; padding: 8px;">
                        <p>AKASH ROAD CARRIERS</p>
                        <p>Bank Name : IDBI Bank, Nigdi.</p>
                        <p>Account No.: 087102000014243</p>
                        <p>IFSE Code No.: IBKL0000087</p>
                    </div>
        
                    <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; padding: 8px;">
                        <p>For AKASH ROAD CARRIERS</p>
                        <p>E.& O.E.</p>
                    </div>
                </footer>
            </div>
        </body>
        </html>
    `;
};