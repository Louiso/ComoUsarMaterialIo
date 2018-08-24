// De esta manera se llama a los (paquetes,modulos) en javascript
// En ambos casos podemos ver q no se llama a todo el modulo en conjunto, sino a una parte de este el cual 
// MDCTextField es una clase que permite introducir codigo javascript para que los campos actuen de cierta forma
// Como por ejemplo, que cuando el cliente realice un focus en un campo de este ... La etiqueta se eleve dejando mayor espacio para
// que el cliente pueda llenarlos

import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));


new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.next'));