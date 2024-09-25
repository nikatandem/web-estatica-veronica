import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import download from 'downloadjs';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import "./generador.css"

const Generador = () => {
    const [inputValue, setInputValue] = useState('');
    const [qrValue, setQrValue] = useState('');
    const [qrSize, setQrSize] = useState(250);
    const [qrBgColor, setQrBgColor] = useState('#ffffff');
    const [qrFgColor, setQrFgColor] = useState('#000000');
    const [selectedFormat, setSelectedFormat] = useState('png');
    const [nombreRef, setNombreRef] = useState('qr-code');
    const [activeTab, setActiveTab] = useState('texto'); // Estado para controlar las pestañas activas
    const qrRef = useRef(null);

    // Función para cambiar entre las pestañas
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setInputValue(''); // Resetea el valor cuando cambias de tab
    };

    const handleGenerate = () => {
      if (inputValue.trim() !== '') {
        // Dependiendo de la pestaña activa, genera el valor QR
        let valueToEncode = '';
        switch (activeTab) {
            case 'url':
                valueToEncode = `URL:${inputValue}`;
                break;
            case 'telefono':
                valueToEncode = `TEL:${inputValue}`;
                break;
            case 'mapa':
                valueToEncode = `GEO:${inputValue}`; // Formato estándar de coordenadas
                break;
            default:
                valueToEncode = inputValue;
                break;
        }
        setQrValue(valueToEncode);
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

        {/* Sección de pestañas (tabs) */}
        <div style={{ marginBottom: '20px' }}>
          <button 
            onClick={() => handleTabChange('texto')} 
            className="button-black" 
            disabled={activeTab === 'texto'}
          >
            Texto
          </button>
          <button 
            onClick={() => handleTabChange('url')} 
            className="button-black" 
            disabled={activeTab === 'url'}
          >
            URL
          </button>
          <button 
            onClick={() => handleTabChange('telefono')} 
            className="button-black" 
            disabled={activeTab === 'telefono'}
          >
            Teléfono
          </button>
          <button 
            onClick={() => handleTabChange('mapa')} 
            className="button-black" 
            disabled={activeTab === 'mapa'}
          >
            Coordenadas
          </button>
        </div>

        {/* Dependiendo de la pestaña activa, muestra el input adecuado */}
        {activeTab === 'texto' && (
          <input
            className='dato'
            type='text'
            placeholder='Introduce el texto'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
           
          />
        )}

        {activeTab === 'url' && (
          <input
            className='dato'
            type='url'
            placeholder='Introduce la URL'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          
          />
        )}

        {activeTab === 'telefono' && (
          <input
            className='dato'
            type='tel'
            placeholder='Introduce el número de teléfono'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
           
          />
        )}

        {activeTab === 'mapa' && (
          <input
            className='dato'
            type='text'
            placeholder='Introduce las coordenadas (lat, long)'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            
          />
        )}

        <br />
  
        <label>Tamaño (px):</label>
        <input
          className='selector'
          type='number'
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
          style={{ margin: '10px' }}
        />
        <br />
  
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
        className='selector'
          type='color'
          value={qrFgColor}
          onChange={(e) => setQrFgColor(e.target.value)}
          style={{ margin: '10px' }}
        />
        <br />
  
        <button onClick={handleGenerate} className="button-red" style={{ marginTop: '10px' }}>
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
  
            <button onClick={handleConfirmDownload} className="button-red">
              Descargar QR
            </button>
          </div>
        )}
      </div>
    );
};

export default Generador;
