import React from 'react';
import jsPDF from 'jspdf';

import html2canvas from 'html2canvas';


const PdfPrint = () => {



    function redi() {
        let a = `?id=123&name=ajit`
        let b = "https://www.google.com/" + a
        console.log(b)
        window.location.href = b;
    }

    function printIT() {


        var HTML_Width = document.getElementById('divToPrint').offsetWidth;
        var HTML_Height = document.getElementById('divToPrint').offsetHeight;
        var top_left_margin = 15;
        var PDF_Width = HTML_Width + (top_left_margin * 2);
        var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
        // var PDF_Height = HTML_Height;
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;

        var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

        console.log("totalPDFPages", HTML_Height, HTML_Width, totalPDFPages)
        console.log("totalPDFPages", document.getElementById('divToPrint').offsetWidth)
        console.log("wid", document.getElementById('divToPrint'))
        // var doc = new jsPDF();

        html2canvas(document.getElementById('divToPrint'), { allowTaint: true }).then(canvas => {
            canvas.getContext('2d');
            console.log(canvas.height + "  " + canvas.width);
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jsPDF('p', 'pt');
            // var pdf = new jsPDF();
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
            // pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
            // pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*(2*i+1)), canvas_image_width,canvas_image_height);
            // pdf.addImage(imgData, 'JPG', 0, 0);

            for (var i = 1; i <= totalPDFPages; i++) {
                // pdf.addPage(PDF_Width, PDF_Height);
                pdf.addPage()
                // pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
                pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * (2 * i + 1)), canvas_image_width, canvas_image_height);
                // pdf.addImage(imgData, 'JPG', 0, 0);
            }


            pdf.save("HTML-Document.pdf");


            console.log("canvas", canvas);

        });


    }

    // window.onafterprint
    return (

        <div id="divToPrint">
            {

                function () {
                    let rows = [];
                    for (let i = 0; i < 7; i++) {
                        rows.push(<h1 style={{ color: "red" }}>Parent{i}</h1>)
                    }
                    return rows;
                }()
            }
            <button
                onClick={printIT}
            >Print</button>

            <button
                onClick={redi}
            >Print</button>
        </div>
    )

}

export default PdfPrint;

// let p = document.getElementById('divToPrint');
        // console.log("body", p)
        // // doc.text("Hello world!", 10, 10);
        // doc.html(p, {
        //     callback: function (doc) {
        //         doc.save("name.pdf");
        //     }
        // });

        // doc.save("name.pdf")

                // document.setE('amit')
            // doc.addImage(canvas.toDataURL("image/jpeg", 1.0), 'JPEG', 0, 0);
            // doc.addPage();
            // doc.save("name.pdf");
            // document.body.appendChild(canvas)