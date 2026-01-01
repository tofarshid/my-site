import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/monokai.css';

import { useEffect, useRef } from 'react';

hljs.registerLanguage('javascript', javascript);

const CodeSnippet = () => {
    const codeRef = useRef(null);

    useEffect(() => {
        hljs.highlightBlock(codeRef.current!);
    }, []);

    return (
        <pre>
            <code className="javascript" ref={codeRef}>
                {`
  // get unique array
  const uniqueArray = arr => new Set(...arr);
  
  // capialize
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  
  // largest number
  const largestNumber = arr => Math.max(...arr);

  // remove white space
  const removeWhiteSpaces = str => str.replace(/\s/g, '');

  // check if a string is palindrom
  const isPalindrome = (str) =>
    str.toLowerCase().replace(/[^a-z0-9]/g, "") ===
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .reverse()
      .join("");  
`}
            </code>
        </pre>
    );
};

export default CodeSnippet;
