import * as React from 'react';

export const CartIcon = () => {
    return (
        <a href='/cart'>
            <i className="material-icons right hide-on-med-and-down">shopping_cart</i>
        </a>
    );
};



// function click() {
//     function handleClick(e) {
//       e.preventDefault();
//       console.log('The link was clicked.');
//     }

//     return (
//       <a href="#" onClick={handleClick}>
//         Click me
//       </a>
//     );
//   }