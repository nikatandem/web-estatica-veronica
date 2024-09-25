
import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import download from 'downloadjs';
import { toPng, toJpeg, toSvg } from 'html-to-image';

const Generador = () => {
    const [inputValue, setInputValue] = useState('');
    const [qrValue, setQrValue] = useState('');
    const [qrSize, setQrSize] = useState(250);
    const [qrBgColor, setQrBgColor] = useState('#ffffff');
    const [qrFgColor, setQrFgColor] = useState('#000000');
    const [selectedFormat, setSelectedFormat] = useState('png');
    const [nombreRef, setNombreRef] = useState('qr-code');
    const qrRef = useRef(null);
  


    const handleGenerate = () => {
      if (inputValue.trim() !== '') {
        setQrValue(inputValue);
      }
    };
  
    const handleConfirmDownload = async () => {
      if (qrRef.current) {
        const node = qrRef.current;
        let dataUrl;
        if (selectedFormat === 'png') {
          dataUrl = await toPng(node);
        } else if (selectedFormat === 'jpeg') {
          dataUrl = await toJpeg(node);
        } else if (selectedFormat === 'svg') {
          dataUrl = await toSvg(node);
        }
        download(dataUrl, `${nombreRef}.${selectedFormat}`);
      }
    };
  
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Generador de Código QR</h2>
        
        <input
  className='dato'
  type='text'
  placeholder='Introduce el texto o URL'
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  style={{ padding: '10px', width: '80%', margin: '10px 0' }}
/>
        <br />
  
        <label>Tamaño (px):</label>
<input
  className='selector'
  type='number'
  value={qrSize}
  onChange={(e) => setQrSize(e.target.value)}
  style={{ margin: '10px' }}
/>
<br/>
  
<label>Color de fondo (claro):</label>
<input
  className='selector'
  type='color'
  value={qrBgColor}
  onChange={(e) => setQrBgColor(e.target.value)}
  style={{ margin: '10px' }}
/>
        <br />
  
        <label>Color del código (oscuro):</label>
        <input
          type='color'
          value={qrFgColor}
          onChange={(e) => setQrFgColor(e.target.value)}
          style={{ margin: '10px' }}
        />
        <br />
  
        <button onClick={handleGenerate} style={{ padding: '10px', marginTop: '10px' }}>
          Generar Código QR
        </button>
  
        {qrValue && (
          <div>
            <div id='qrCode' ref={qrRef} style={{ margin: '20px auto', padding: '10px' }}>

            
              <QRCodeSVG value={qrValue} size={qrSize} bgColor={qrBgColor} fgColor={qrFgColor} />

  
</div>

  
            <label>Formato:</label>
            <select value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)}>
              <option value='png'>PNG</option>
              <option value='jpeg'>JPEG</option>
              <option value='svg'>SVG</option>
            </select>
            <br />
  
            <label>Nombre del archivo:</label>
            <input
              type='text'
              value={nombreRef}
              onChange={(e) => setNombreRef(e.target.value)}
              style={{ margin: '10px' }}
            />
            <br />
  
            <button onClick={handleConfirmDownload} style={{ padding: '10px' }}>
              Descargar QR
            </button>
          </div>
        )}
      </div>
    );
  };

export default Generador
