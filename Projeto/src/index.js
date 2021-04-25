// importar modulos

import React from 'react';
import ReactDom from 'react-dom';

// estrutura
const estrutura = 
<div>
    <h1> Meu primeiro render </h1>
    <p>Testando...next aula 5</p>

</div>
//Render
ReactDom.render(
    estrutura,
    document.getElementById('root')
);