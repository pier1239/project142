import Document, {Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
render () {
return (
          <html>
          <Head> 
         <title>The react app project 142</title>  
         <link rel="stylesheet" href="/_next/static/style.css" />       
          </Head>
           <body>
          <Main />
          <NextScript />
          </body>
          </html>
	);
}
}