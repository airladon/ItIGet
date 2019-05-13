function tester(source) {
  const a = async () => {
    const mjAPI = require("mathjax-node");
    mjAPI.config({
      MathJax: {
        // traditional MathJax configuration
      },
    });
    mjAPI.start();

    const yourMath = 'E = mc^2';
    let output = 'Hello there';
    const p = mjAPI.typeset({
      math: yourMath,
      format: 'TeX', // or "inline-TeX", "MathML"
      mml: true,      // or svg:true, or html:true
    });
    await p.then((data) => {
      output = data.mml;
    });
    return output;
  };
  return 'Hello Hello Hello';
}

module.exports = function(source, map) {
  this.callback(null, tester(), map);
};

// function loader(source) {
//   var mjAPI = require("mathjax-node");
//   mjAPI.config({
//     MathJax: {
//       // traditional MathJax configuration
//     }
//   });
//   mjAPI.start();

//   var yourMath = 'E = mc^2';
//   output = 'Hello there';
//   mjAPI.typeset({
//     math: yourMath,
//     format: "TeX", // or "inline-TeX", "MathML"
//     mml:true,      // or svg:true, or html:true
//   }, function (data) {
//     if (!data.errors) {console.log(data.mml)}
//       output = data;
//     // will produce:
//     // <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
//     //   <mi>E</mi>
//     //   <mo>=</mo>
//     //   <mi>m</mi>
//     //   <msup>
//     //     <mi>c</mi>
//     //     <mn>2</mn>
//     //   </msup>
//     // </math>
//   });
//   return source;
// }

// module.exports = {
//   loader,
// };