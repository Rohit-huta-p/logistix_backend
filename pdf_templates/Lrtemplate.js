module.exports = (content ) => {
  console.log("Content inside template:", content);
  return (
  `
    <!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>PDF Result Template</title>
    <style>
  body {
            margin: 0;
            padding: 0;
        }
        p {
            margin: 0;
            padding: 0;
        }
        h2{ 
        margin: 0;
            padding: 0;
        }
       
    </style>
</head>

<body>
    <div class="p-4 bg-white rounded">
        <!-- Header Part -->
        <div>
            <p style="text-align: center;">JAY SHREE RAM</p>
            <div style="outline-style: solid; background-color: rgb(209, 213, 219);">
                <div style="display: flex;  align-items: center; justify-content: center; text-decoration: underline;">
                    <span>Subject to Pune Jurisdiction Only</span> 
                </div>

                <div style="display: flex; justify-content: space-evenly; outline: 1px solid black;">
                    <img style="height: 6rem;"
                        src="https://st.depositphotos.com/1202217/2063/i/450/depositphotos_20638759-stock-photo-logo-text-with-shadow-word.jpg"
                        alt="logo" />

                    <div class='p-2' style="padding: 8px;">
                        <h3 style="font-size: 1.5rem; margin-top: 0.5rem; margin-bottom: 0; text-align: center; font-weight: bold; color: #111827;">
                            ROAD CARRIERS
                        </h3>

                        <h5 style="text-align: center; margin-top: 0.4rem; margin-bottom: 0; font-size: 13px; font-weight: bold; text-align: start;">
                            Shop No. 14, Plot No. 61-62, Sector No. 23, Transport Nagar, Nigdi, Pune-44.
                        </h5>

                        <h5 style="text-align: start; margin-top: 0.4rem; text-align: center; margin-bottom: 0; font-size: 13px; font-weight: bold;">
                            Email: akashpune65@gmail.com
                        </h5>
                    </div>

                    <div class="margin-top: 1rem">
                        <div class="">
                            <h4 style="margin: 0;">Ph:</h4>
                            <div >
                                <span>020-27651762</span>
                                <span>020-7651804</span>
                            </div>
                        </div>

                        <div class="">
                            <h4 style="margin: 0;">Mob:</h4>
                            <div>
                                <span>9890906607</span>
                                <span>7875666607</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- --------------------HEADER END------------ -->
        <!-- GST No. Section -->
        <div style="background-color: #f1f5f9; border-bottom: 1px solid black; font-size: 0.875rem;">
            <p style='text-align: center; padding:5px '>GST No.: 27AKMPM6807F2ZW</p>
        </div>

        <!-- Main Flex Structure -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; ">
            <div style="grid-column: span 3 / span 3; display: flex; flex-direction: column; justify-content: space-between;">
                <!-- Left Section: 3/4 of the page width -->
                <div style=" border: 1px solid black;">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.25rem;">
                        <!-- PARTY PH Section -->
                        <div
                            style="padding: 0.5rem; border: 1px solid black; font-size: 0.75rem; gap: 0.5rem;">
                            <p style="border: 1px solid black; height: 2rem; padding: 0.25rem; font-weight: bold;">
                                Party Ph. 4324
                            </p>

                            <div style="border: 1px solid black; padding: 0.25rem;">
                                <p
                                    style="border-bottom: 1px solid black; font-size: 0.625rem; font-weight: bold; text-align: center;">
                                    Schedule of Demurrage Charges
                                </p>
                                <p>
                                    Demurrage Chargeable After ${content.demurrage_days}
                                    days from today @ Rs. ${content.demurrage_charges}
                                    per day per Qtl. on weight charged
                                </p>
                            </div>

                            <div style="border: 1px solid black; padding: 0.25rem;">
                                <span style="font-weight: bold;">NOTICE</span>
                                <p style="font-size: 0.5rem; font-weight: normal;">
                                    The Consignments covered by this Lorry Receipt shall be stored at the destination
                                    under
                                    the control of the Transport operator and shall be delivered to or the order of the
                                    Consignee bank whose name is mentioned in the Lorry Receipt. It will under no
                                    circumstances be delivered to anyone without the written authority from the
                                    consignee
                                    Bank on order endorsed on the Consignee Copy or on a Separate Letter of Authority.
                                </p>
                            </div>
                        </div>

                        <!-- CONSIGNEE Section -->
                        <div style="padding: 0.5rem; border: 1px solid black; font-size: 0.75rem; overflow: hidden;">
                            <p
                                style="text-align: center; border: 1px solid black; padding: 0.25rem; font-size: 1rem; font-weight: bold;">
                                Consignee Copy
                            </p>
                            <p style="text-align: center; padding: 0.25rem;">AT OWNER'S RISK</p>
                            <div style="border: 1px solid black; padding: 0.25rem;">
                                <p style="text-align: center; font-weight: bold;">INSURANCE</p>
                                <p style="font-size: 0.625rem;">The Customer has stated that:</p>
                                <p style="font-size: 0.75rem;">
                                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                        Consignee has insured the Consignment
                                       
                                    </label>

                                </p>

                                <p style="font-weight: bold;">Company: </p> ${content.insurance.companyName}
                                <p style="font-weight: bold;">Policy No. </p> ${content.insurance.policyNumber}
                                <p>Date ${content.insurance.date}</p>
                                <p style="display: flex; align-items: center; gap: 0.5rem; style="font-weight: bold;"">
                                    Amount
                                    </p>${content.insurance.amount}
                                <p style="font-weight: bold;">Risk </p>${content.insurance.risk}
                                <div style="border-top: 1px solid black; margin-top: 0.25rem;">
                                    <p style="font-weight: bold;">E-Way Bill NO.: </p>${content.insurance.eway_billNo}
                                </div>
                            </div>
                        </div>

                        <!-- CAUTION Section -->
                        <div style="padding: 0.5rem; font-size: 0.75rem; overflow:hidden">
                            <p style="text-align: center; font-weight: bold; font-size: 1rem;">Caution</p>
                            <p style="font-size: 0.75rem; text-align: left;">
                                This consignment will not be detained, diverted, re-routed, or rebooked without
                                Consignee
                                Bank's written permission. It will be delivered at destination.
                            </p>
                            <p style="font-size: 0.625rem; text-align: left;">
                                Address of Delivery office: ${content.caution.add_deliveryOffice}
                            </p>

                            <div style="padding-top: 1.2rem;">
                                <div
                                    style="border: 1px solid black; padding: 0.25rem; margin-top: 0.25rem; height: 8rem;">
                                    <p style="text-align: center; font-weight: bold;">CONSIGNMENT NOTE</p>
                                    <p style="font-weight: bold;">
                                        No. ${content.caution.consignment_note.consignment_note_no}
                                    </p>
                                    <p>Date: ${content.caution.consignment_note.consignment_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Address Section -->
                    <div style="border: 1px solid black; font-size: 0.75rem; display: flex; gap: 1rem;">
                        <div
                            style="display: flex; justify-content: space-between; width: 100%; margin: 0.25rem; border: 1px solid black; font-size: 0.75rem; height: 100%;">
                            
                            <div style="flex: 1;">
                                <p style="font-weight: bold;">Consignor's Details:</p>
                                <div style="display: flex;">
                                    <label>Name: </label>
                                    ${content.delivery_details.consignor.name}
                                </div>
                                    <div style="display: flex; align-items: center">
                                    <p>From</p> ${content.delivery_details.consignor.address}
                                </div>

                               
                            </div>

                            <div style="display: flex; flex-direction: column; justify-content: space-evenly;">
                                <p style="font-weight: bold;">Consignee's Details:</p>
                                <div style="display: flex;">
                                    <label>Name: </label>
                                    ${content.delivery_details.consignee.name}
                                </div>
                                    <div style="display: flex; align-items: center">
                                    <p>To:</p> ${content.delivery_details.consignee.address}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Table Section -->
                <div style="overflow: hidden; border: 1px solid black; grid-column: span 3;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr>
                                <th style="border: 1px solid black; text-align: left; vertical-align: top;">Packages
                                </th>
                                <th style="border: 1px solid black; text-align: left; vertical-align: top;" colspan="4">
                                    Description</th>
                                <th style="border: 1px solid black; text-align: left; vertical-align: top;" colspan="2">
                                    Weight
                                    in Kgs</th>
                                <th style="border: 1px solid black; text-align: left; vertical-align: top;" colspan="2">
                                    <p style="text-align: center;">Amount to Pay/Paid/Due</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <!-- Packages -->
                                <td style="border: 1px solid black; vertical-align: top; padding: 0;" rowspan="6">
                                    Package Name
                                </td>

                                <!-- Description -->
                                <td style="border: 1px solid black; text-align: left; vertical-align: top;" colspan="4"
                                    rowspan="6">Package Description</td>

                                <!-- Weight in KGs -->
                                <td style="border: 1px solid black; text-align: left; vertical-align: top;" rowspan="2">
                                    10</td>

                                <!-- Freight -->
                                <td></td>
                                <td style="border: 1px solid black; padding: 0; text-align: left;">Freight: 500</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid black; text-align: left;"></td>
                                <td style="border: 1px solid black; text-align: left;">Hamali 100</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid black; text-align: left; vertical-align: top;" rowspan="4">
                                    20</td>
                                <td style="border: 1px solid black; text-align: left; vertical-align: top;">
                                </td>
                                <td style="border: 1px solid black; text-align: center;">Sur. Ch. 50</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid black; text-align: left; vertical-align: top;"></td>
                                <td style="border: 1px solid black; text-align: center;">LR. Ch. 50</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid black; text-align: left; vertical-align: top;">
                                </td>
                                <td style="border: 1px solid black; text-align: center;">Risk Ch. 200</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid black; text-align: left; vertical-align: top;"></td>
                                <td style="border: 1px solid black; text-align: center;">Total 1000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



            <!-- Right Section: 1/4 of the page width -->
            <div style="
            border: 1px solid black;
            font-size: 0.75rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        ">
        
                <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
                    <h3 style="text-align: center;">PAN No.</h3>
                    <p style="text-align: center; font-size: 15px; font-style: normal;">
                      AKMPM6807F
                    </p>
                </div>

                <div style="

                outline: 1px solid black;
                padding: 0.25rem;
               
            ">
                    <h2 style="text-align: center;">GST Payable by</h2>
                    <h3 style="text-align: center;">
                    ${content.gst_payable_by}
                    </h3>
                    <p style="font-size: 10px;">
                        *We hereby declare and undertake that we have not claimed & will not avail CENVAT credit of duty
                        paid on
                        inputs or capital goods used for providing taxable GAT services & we have not availed the
                        benefit under the
                        notification of the government of India in ministry of finance (Department of revenue) no.
                        12/2003 dated
                        20-06-2003.
                    </p>
                </div>

                <div
                    style="border-bottom: 1px solid black; padding-left: 0.25rem; font-weight: bold; ">
                    <h3>Address of issuing office/agent</h3>
                    <p>
                    ${content.additional_delivery_details.issuing_address}
                    </p>
                </div>

                <div
                    style="flex: 1; border-bottom: 1px solid black; font-weight: bold; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <h3 style="margin-bottom: 0.75rem;">LORRY NO.</h3>
                    <span style="font-weight: normal">
                    ${content.additional_delivery_details.lorry_no}
                    </span>
                </div>

                <div
                    style="flex: 1; border-bottom: 1px solid black; font-weight: bold; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <h3 style="margin-bottom: 0.75rem;">Mode of Packing</h3>
                      ${content.additional_delivery_details.mode_of_packaging}
                </div>

                <div
                    style="flex: 1; border-bottom: 1px solid black; font-weight: bold; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <h3 style="margin-bottom: 0.75rem;">Invoice No.</h3>
                    <span style="font-weight: normal">
                      ${content.additional_delivery_details.invoice_no}
                      </span>
                </div>

                <div
                    style="flex: 1; border-bottom: 1px solid black; font-weight: bold; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <h3 style="margin-bottom: 0.75rem;">Consignor's GST No.</h3>
                    <span style="font-weight: normal">
                    ${content.additional_delivery_details.consignors_gst_no}
                    </span >
                </div>

                <div
                    style="flex: 1; border-bottom: 1px solid black; font-weight: bold; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <h3 style="margin-bottom: 0.75rem;">Remark:</h3>
                    <span style="font-weight: normal">
                     ${content.additional_delivery_details.remarks}
                    </span>
                </div>
            </div>

        </div>




        <body>

</html>
  `);
};
