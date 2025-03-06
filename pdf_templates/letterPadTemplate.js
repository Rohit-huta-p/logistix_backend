module.exports = (content) => {
  return `
     <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                body {
                    padding: 0;
                    margin: 0;
                }
                h1, h2, h3, h4, h5, h6 {
                    margin: 0;
                }
                p {
                    margin: 0;
                }

            </style>
        </head>
        <body>
            <div style="background-color: white;">
                <div style="position: relative;">
                <p style="text-align: center;">JAY SHREE RAM</p>
                <div style="outline: solid;">
                    <p style="text-align: center; text-decoration: underline;">
                    Subject to Pune Jurisdiction Only
                    </p>
                    <div style="display: flex; justify-content: space-evenly; align-items: center;">
                    <h3 style="font-size: 35px; color: #c92c1e; font-weight: bold;">AKASH</h3>
                    <div style="padding: 8px;">
                        <h2 style="font-size: 3rem; text-align: center; font-weight: bold; color: #0d75ba; font-style: italic;">
                        ROAD CARRIERS
                        </h2>
                        <h5 style="text-align: start; font-size: 13px;">
                        Shop No. 14, Plot No. 61-62, Sector No. 23, Transport Nagar, Nigdi, Pune-44.
                        </h5>
                        <h5 style="text-align: center; font-size: 13px;">
                        Email: akashpune65@gmail.com
                        </h5>
                    </div>
                    <div>
                        <div>
                        <h6>Ph:</h6>
                        <p>020-27651762</p>
                        <p>020-7651804</p>
                        </div>
                        <div>
                        <h6>Mob:</h6>
                        <p>9890906607</p>
                        <p>7875666607</p>
                        </div>
                    </div>
                    </div>
                </div>
                    <p style="padding: 20px">${content.text}</p>
                </div>
           
            </div>
            
        </body>
        </html>
        `;
};
