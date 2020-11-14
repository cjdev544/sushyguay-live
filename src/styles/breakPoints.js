
const bp = {
    small: '576px',
    medium: '768px',
    large: '1024px',
    xlarge: '1440px'
}
  
  
const mq = (value, screemSize) => {
    if(screemSize !== 'small' && 
        screemSize !== 'medium' && 
        screemSize !== 'large' && 
        screemSize !== 'xlarge') {
            return console.error("Argumento MEDIA QUERY no valido. Primer argumento('min' o 'max') Segundo argumento('small', 'medium', 'large', 'xlarge').");
        }

    if(value === 'min') {
        return `@media (min-width: ${bp[screemSize]})`;
    }
    else if(value === 'max') {
        return `@media (max-width: ${bp[screemSize]})`;
    }
    else {
        return console.error("Argumento MEDIA QUERY no valido. Primer argumento('min' o 'max') Segundo argumento('small', 'medium', 'large', 'xlarge').");
    }
};

export default mq;