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
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
    console.log(url.parse(_url, true)); //path는 querystring 포함, pathname은 querystring이 포함되어 있어도 querystring을 제외한 path만 보여줌

    if(pathname === '/')
    {
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err,description){
        var template = `
        <!doctype html>
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
          <p>${description}</p>
        </body>
        </html>
        `;
      response.writeHead(200);
      response.end(template);
      });
    }
    else {
      response.writeHead(404);
      response.end('NOT FOUND');
    }


  });
app.listen(3000);
