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
  <title>AKASH ROAD CARRIERS</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .text-sm {
      font-size: 10px;
    }
    .text-xs {
      font-size: 8px;
    }
    .bg-white {
      background-color: white;
    }
    .p-3 {
      padding: 1rem;
    }
    .border {
      border: 1px solid black;
    }
    .rounded {
        border-radius: 10px;
    }
    .border-bold {
      border-width: 2px;
    }
    .pt-7 {
      padding-top: 1.75rem;
    }
    .pb-7 {
      padding-bottom: 1.75rem;
    }
    .bg-gray-300 {
      background-color: #d1d5db;
    }
    .text-center {
      text-align: center;
    }
    .font-bold {
      font-weight: bold;
    }
    .text-4xl {
      font-size: 2.25rem;
    }
    .pt-3 {
      padding-top: 0.75rem;
    }
    .pb-3 {
      padding-bottom: 0.75rem;
    }
    .pl-3 {
      padding-left: 0.75rem;
    }
    .outline-none {
      outline: none;
    }
    .border-b-2 {
      border-bottom-width: 2px;
    }
    .overflow-x-auto {
      overflow-x: auto;
    }
    .min-w-full {
      min-width: 100%;
    }
    .border-collapse {
      border-collapse: collapse;
    }
    .px-2 {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
    .py-1 {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }
    .bg-green-200 {
      background-color: #bbf7d0;
    }
    .bg-yellow-500 {
      background-color: #eab308;
    }
    .rounded {
      border-radius: 0.25rem;
    }
    .text-white {
      color: white;
    }
    .mt-3 {
      margin-top: 0.75rem;
    }
    .bg-blue-800 {
      background-color: #1e40af;
    }
    .hover\:bg-blue-600:hover {
      background-color: #2563eb;
    }
    .p-2 {
      padding: 0.5rem;
    }
    .w-full {
      width: 100%;
    }
  </style>
</head>
<body>
  <div class="bg-white p-3">
    <div class="border border-black border-bold pt-7 pb-7 bg-gray-300">
      <div>
        <h1 class="text-center font-bold text-4xl">AKASH ROAD CARRIERS</h1>
      </div>
    </div>

    <div class="pt-3 pb-3 pl-3">
      <h4>
        BOOKING REGISTER NUMBER: 
        
      ${content.bookingRegister_number}
      </h1>
    </div>

    <!-- Table -->
    <div class="pt-3 overflow-x-auto">
      <table class="min-w-full border-collapse border border-black">
        <thead>
          <tr>
            <th class="border border-black px-2 py-1 text-center text-sm">CN NO.</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Date</th>
            <th class="border border-black px-2 py-1 text-center text-sm">No. of Pkgs</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Destination</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Consignor</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Consignee</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Weight</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Bill Amount</th>
            <th class="border border-black px-2 py-1 text-center text-sm">To Pay TBB</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Bill No.</th>
            <th class="border border-black px-2 py-1 text-center text-sm">M.R No</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Broker Name</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Challan No.</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Lorry No.</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Hire</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Advance</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Balance</th>
            <th class="border border-black px-2 py-1 text-center text-sm">Remark</th>
          </tr>
        </thead>
        <tbody>
            {
                ${content.registerData.map((data, index) => `
                <tr>

                    <td class="border border-black px-2 py-1 text-xs">
                    ${data.cn_number}
                    </td>
                    <!-- date -->
                    <td class="border border-black px-2 py-1 text-xs">
                      ${data.date}
                    </td>
                    <!-- number_of_packages -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.number_of_packages}
                    </td>
                    <!-- destination -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.destination}
                    </td>
                    <!-- consignor -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.consignor}
                    </td>
                    <!-- consignee -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.consignee}
                    </td>
                    <!-- weight -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.weight}
                    </td>
                    <!-- bill_amount -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.bill_amount}
                    </td>
                    <!-- to_pay_tbb -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.to_pay_tbb}
                    </td>
                    <!-- bill_number -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.bill_number}
                    </td>
                    <!-- mr_number -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.mr_number}
                    </td>
                    <!-- broker_name -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.broker_name}
                    </td>
                    <!-- challan_number -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.challan_number}
                    </td>
                    <!-- lorry_number -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.lorry_number}
                    </td>
                    <!-- hire -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.hire}
                    </td>
                    <!-- advance -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.advance}
                    </td>
                    <!-- balance -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.balance}
                    </td>
                    <!-- remark -->
                    <td class="border border-black px-2 py-1 text-xs">
                        ${data.remark}
                    </td>
                  </tr>
                `)
            }
         
        </tbody>
      </table>

    </div>


  </div>
</body>
</html>
      `;
  };
  