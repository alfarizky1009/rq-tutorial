import React, { useState } from 'react';
import { MediaPlayer } from '../media-player'
// import Pdf from "./pdfFile.pdf";
// import file from './pdfFile.pdf';

// import { Document, Page } from 'react-pdf';



const NavigationTwo = () => {
    return (
        <div>
            <h3>Nav Two</h3>
            <p> A </p>
            <MediaPlayer />
            {/* <a href = {Pdf} target = "_blank">Download Pdf</a> */}
            {/* <button>
                <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="100%">
                    <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
                </object>
            </button> */}
            {/* <iframe
            style={{ width: "563px", height: "666px" }}
            src={file}
            // type='application/pdf'
            title='title'
          /> */}
        </div>
    )
}

export default NavigationTwo;