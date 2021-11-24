const fs = require('fs-extra');
const concat = require('concat');


build = async () =>{
    const files = [
        './dist/reva-chatbot/runtime.js',
        './dist/reva-chatbot/polyfills.js',
        './dist/reva-chatbot/main.js'
      ];
    
      await fs.ensureDir('widget');
      await concat(files, 'widget/chat-widget.js');
}

build();

