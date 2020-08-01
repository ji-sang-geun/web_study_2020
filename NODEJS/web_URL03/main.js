// sample URL http: // www.opentutorials.org:3000/main?id=HTML&page=12
// http : 프로토콜 (어떤 방식으로 사용자가 통신할지)
// opentutorials : host(domain) = 인터넷에 연결된 컴퓨터를 가르키는 주소
// 3000 : port (3000번 포트에 연결된 서버와 통신)
// main : path (어떤 디렉토리에 어떤 파일인지 가르킴)
// query string (query string의 값에 따라서 달라짐)

var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    console.log(queryData.id);
    if(_url == '/'){
      title = 'Welcome to Homepage!';
      var template = `<!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>The World Wide Web (abbreviated WWW or the Web) is an information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet.[1] English scientist Tim Berners-Lee invented the World Wide Web in 1989. He wrote the first web browser computer program in 1990 while employed at CERN in Switzerland.[2][3] The Web browser was released outside of CERN in 1991, first to other research institutions starting in January 1991 and to the general public on the Internet in August 1991.
        </p>
      </body>
      </html>
      `;
      //web을 누르면 그냥 localhost:3000만 나오고
     //HTML을 누르면 localhost:3000/?id=HTML이 나오며,
     //CSS를 누르면 localhost:3000/?id=CSS가 나오고,
     //JavaScript를 누르면 localhost:3000/?id=JavaScript가 나옴
    }
    else if (_url == '/?id=HTML')
    {
      var template = `<!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
        <img src="coding.jpg" width="100%">
        </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
        </p>
      </body>
      </html>
      `; //web을 누르면 그냥 localhost:3000만 나오고
      //HTML을 누르면 localhost:3000/?id=HTML이 나오며,
      //CSS를 누르면 localhost:3000/?id=CSS가 나오고,
      //JavaScript를 누르면 localhost:3000/?id=JavaScript가 나옴
    }
    else if(_url == '/?id=CSS')
    {
      var template = `<!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>
          Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.
        </p>
      </body>
      </html>
      `; //web을 누르면 그냥 localhost:3000만 나오고
      //HTML을 누르면 localhost:3000/?id=HTML이 나오며,
      //CSS를 누르면 localhost:3000/?id=CSS가 나오고,
      //JavaScript를 누르면 localhost:3000/?id=JavaScript가 나옴
    }
    else if(_url = '/?id=JavaScript')
    {
      var template = `<!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>
          JavaScript (/ˈdʒɑːvəˌskrɪpt/[6]), often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA.
        </p>
      </body>
      </html>
      `; //web을 누르면 그냥 localhost:3000만 나오고
      //HTML을 누르면 localhost:3000/?id=HTML이 나오며,
      //CSS를 누르면 localhost:3000/?id=CSS가 나오고,
      //JavaScript를 누르면 localhost:3000/?id=JavaScript가 나옴
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    response.end(template);
});
app.listen(3000);
