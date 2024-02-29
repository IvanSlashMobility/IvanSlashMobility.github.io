import React from 'react'
import iconVoice from './../../assets/icons/iconVoice.svg'
import lineaCoutaDeVozOn from './../../assets/icons/lineaCuotaDeVozOn.svg'
import lineaCoutaDeVozOff from './../../assets/icons/lineaCuotaDeVozOff.svg'

const RenderVoiceQuota = (props) => {

    const renderIcons = () => {
        let cadenaNumero = props.voiceQuota.toString();
        let posicionPunto = cadenaNumero.indexOf(".");
        let caracteresDespuesDelPunto = cadenaNumero.substring(posicionPunto + 1, posicionPunto + 4);
        let numeroRedondeado = Math.round(caracteresDespuesDelPunto / 10) * 10;

        let puntuacion;

        if (numeroRedondeado >= 100) {
            puntuacion = 5;
        } else if (numeroRedondeado < 90 && numeroRedondeado >= 80) {
            puntuacion = 4;
        } else if (numeroRedondeado < 80 && numeroRedondeado >= 70) {
            puntuacion = 3;
        } else if (numeroRedondeado < 70 && numeroRedondeado >= 60) {
            puntuacion = 2;
        } else if (numeroRedondeado < 60 && numeroRedondeado >= 50) {
            puntuacion = 1;
        } else {
            puntuacion = 1;
        }

        const icons = [];
        for (let i = 0; i < puntuacion; i++) {
            icons.push(<img key={`on-${i}`} src={lineaCoutaDeVozOn} style={{ marginRight: '6px' }} />);
        }
        for (let i = 5; i > puntuacion; i--) {
            icons.push(<img key={`off-${i}`} src={lineaCoutaDeVozOff} style={{ marginRight: '6px' }} />);
        }
        return icons;
    };

    return (
        <>
            <img src={iconVoice} alt="Voice Icon" />
            {renderIcons()}
        </>
    );
}

export default RenderVoiceQuota