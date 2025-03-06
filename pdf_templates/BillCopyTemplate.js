module.exports = (content) => {
  console.log(content);

  const table_columns = [
    "CN Number", "Invoice No.", "From", "To", "Weight", "Charged", "Rate", "Freight", "ST", "Charges", "Others", "Amount"
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
            height: 100vh;
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
        <body style="margin: 0; padding: 0; box-sizing: border-box; display: flex; justify-content: center; align-items: center; height: 100vh;">
            <div style="border: 1px solid black; display: flex; flex-direction: column; justify-content: center;">
    <div>
      <p style="text-align: center;">JAY SHREE RAM</p>
      <div style="border: solid; text-align: center; text-decoration: underline;">
        <h6>Subject to Pune Jurisdiction Only</h6>
        <div style="display: flex; justify-content: space-evenly; align-items: center;">

          <div>
            <h2 style="font-size: 3rem; text-align: center; font-weight: bold; color: #0d75ba; font-style: italic;"><span style="color: red;">AKASH</span> ROAD CARRIERS</h2>
            <h5 style="text-align: center; font-size: 13px;">Shop No. 14, Plot No. 61-62, Sector No. 23, Transport Nagar, Nigdi, Pune-44.</h5>
            <h5 style="text-align: center; font-size: 13px;">Email: akashpune65@gmail.com</h5>
          </div>
          <div>
            <h6>Mob:</h6>
            <p>9890906607</p>
            <p>7875666607</p>
          </div>
        </div>
      </div>
    </div>
    <div style="display: grid; grid-template-columns: repeat(4, 1fr);">
      <div style="grid-column: span 3; border-right: 2px solid black; padding: 4px">
        <div style="display: flex; padding: 4px;">
          <h2>M/s: </h2>
          <h2 style="font-weight: normal; margin-left: 10px">${content.name}</h2>
        </div>
      </div>
      <div style="border-right: 2px solid black; padding: 4px;">
        <h2>Bill No.: ${content.billno}</h2>
        <h2>Date: ${content.date}</h2>
      </div>
    </div>
    <div style="display: flex; justify-content: center; white-space: nowrap; font-size: 12px; border: 1px solid black;">
      <h5>Being the Service Charges as per the following Details :</h5>
      <h5>(Interest @ 24% per annum will be charged on all outstanding Bills)</h5>
    </div>
    <table style="padding: 16px; width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="display: grid; grid-template-columns: repeat(12, 1fr);">
          ${table_columns.map(column => `<th style="font-size: 12px; border: 1px solid black;">${column}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${content.billDetails.map(bill => `
          <tr style="display: grid; grid-template-columns: repeat(12, 1fr); border: 1px solid black;">
            <td style="border: 1px solid black; text-align: center;">${bill.cn_number}</td>
            <td style="border: 1px solid black; text-align: center;">${bill.invoice_number}</td>
            <td style="border: 1px solid black; text-align: center;">${bill.from}</td>
            <td style="border: 1px solid black; text-align: center;">${bill.to}</td>
            <td style="border: 1px solid black; text-align: center;">${bill.weight}</td>
            <td style="border: 1px solid black; text-align: center;">${bill.charged}</td>
            <td style="border: 1px solid black; text-align: center;">${bill.rate}</td>
            <td style="border: 1px solid black; text-align: center;">${bill.freight}</td>
            <td style="border: 1px solid black; text-align: center;">${bill.st}</td>
            <td style="border: 1px solid black; text-align: center;">${bill.st_charges}</td>
            <td style="border: 1px solid black; text-align: center;">${bill.others}</td>
            <td style="border: 1px solid black; text-align: center;">${bill.amount}</td>
          </tr>`).join("")}
      </tbody>
    </table>
    <div style="display: flex; justify-content: space-between; padding: 8px;">
      <p>Rupees</p>
      <div>
        <p>TOTAL: ${content.billDetails.reduce((sum, bill) => sum + Number(bill.amount), 0).toFixed(2)}</p>
      </div>
    </div>
    <footer style="display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid black;">
      <div style="border-right: 2px solid black; padding: 8px;">
        <p>PAN: AKMPM6807F</p>
        <p>GST NO: 27AKMPM6807F2ZW</p>
        <p>GST Payable by: ${content.gst_payable_by}</p>
        <p style="font-size: 13px; font-weight: bold;">PLEASE PAY BY A/C PAYEE CHEQUE OR NEFT</p>
      </div>
      <div style="border-right: 2px solid black; padding: 8px;">
        <p style='font-weight: bold;'>AKASH ROAD CARRIERS</p>
        <p>Bank Name: IDBI Bank, Nigdi.</p>
        <p>Account No.: 087102000014243</p>
        <p>IFSE Code No.: IBKL0000087</p>
      </div>
      <div style="padding: 8px; text-align: center;">
        <p>For AKASH ROAD CARRIERS</p>
        <p>E.& O.E.</p>
      </div>
    </footer>
  </div>
</body>
</html>`;
};
