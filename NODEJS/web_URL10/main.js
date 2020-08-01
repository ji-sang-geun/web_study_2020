// sample URL http: // www.opentutorials.org:3000/main?id=HTML&page=12
// http : 프로토콜 (어떤 방식으로 사용자가 통신할지)
// opentutorials : host(domain) = 인터넷에 연결된 컴퓨터를 가르키는 주소
// 3000 : port (3000번 포트에 연결된 서버와 통신)
// main : path (어떤 디렉토리에 어떤 파일인지 가르킴)
// query string (query string의 값에 따라서 달라짐)

// 함수를 만드는 이유 : 중복 제거 및 코드 가독성 증가

var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

function templateHTML(title, list, body)
{
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    <a href="/create">create</a>
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist)
{
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length){
    list = list + `<li><a href = "/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i++;
  }
  list = list+'</ul>';
  return list;
}

var app = http.createServer(function(request,response)
{
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    console.log(url.parse(_url, true)); //path는 querystring 포함, pathname은 querystring이 포함되어 있어도 querystring을 제외한 path만 보여줌
    console.log(pathname);
    if(pathname === '/')
    {
      if(queryData.id === undefined)
      {
        fs.readdir('./data', function(error, filelist)
        {
          console.log(filelist);
          var title = 'Welcome to visit Homepage';
          var description = "Hello, Node.js";
          var list = templateList(filelist);
          var body = `<h2>${title}</h2>${description}`;
          var template = templateHTML(title, list, body);
          response.writeHead(200);
          response.end(template);
        });
      }
      else
      {
        fs.readdir('./data', function(error, filelist)
        {
          console.log(filelist);
          fs.readFile(`data/${queryData.id}`, 'utf8', function(err,description)
          {
            var title = queryData.id;
            var list = templateList(filelist);
            var body = `<h2>${title}</h2>${description}`;
            var template = templateHTML(title,list,body);
            response.writeHead(200);
            response.end(template);
          });
        });
      }
    }
    else if(pathname === '/create')
    {
      fs.readdir('./data', function(error, filelist)
      {
        console.log(filelist);
        var title = 'Web - create';
        var list = templateList(filelist);
        var body = `<form action="http://localhost:3000/create_process" method = "post">
        <form>
        <p><input type="text" name ="title" placeholder = "title" ></p>
        <p>
          <textarea name = "description" placeholder = "description"></textarea>
          </p>
          <p>
            <input type="submit">
            </p>
        </form>
        `;
        var template = templateHTML(title, list, body);
        response.writeHead(200);
        response.end(template);
      });
    }
    else if(pathname === '/create_process')
    {
      var body = '';
      request.on('data', function(data)
      {
          body = body + data;
      });
      request.on('end', function()
      {
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;
        console.log(post.title);
      });
      response.writeHead(200);
      response.end('success');
    }
    else
    {
      response.writeHead(404);
      response.end('NOT FOUND');
    }
});
app.listen(3000);
