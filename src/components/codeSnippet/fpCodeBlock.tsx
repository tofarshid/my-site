import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/monokai.css';

import { useEffect, useRef } from 'react';

hljs.registerLanguage('javascript', javascript);

const FPCodeBlock = () => {
    const codeRef = useRef(null);

    useEffect(() => {
        hljs.highlightBlock(codeRef.current!);
    }, []);

    return (
        <pre>
            <code className="javascript" ref={codeRef}>
                {`
  // Pure Functions
  
  // Immutability
  
  // Currying

  // Memotization

  // Monads

    const numbers = [1, 2, 3, 4, 5, 6];

    const double = (num) => num * 2;
    const isEven = (num) => num % 2 === 0;

    const result = numbers
      .map(double)
      .filter(isEven)
      .reduce((acc, num) => acc + num, 0);

    console.log(result); // 42

`}
            </code>
        </pre>
    );
};

export default FPCodeBlock;
