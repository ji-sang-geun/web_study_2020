// sample URL http: // www.opentutorials.org:3000/main?id=HTML&page=12
// http : 프로토콜 (어떤 방식으로 사용자가 통신할지)
// opentutorials : host(domain) = 인터넷에 연결된 컴퓨터를 가르키는 주소
// 3000 : port (3000번 포트에 연결된 서버와 통신)
// main : path (어떤 디렉토리에 어떤 파일인지 가르킴)
// query string (query string의 값에 따라서 달라짐)

// 함수를 만드는 이유 : 중복 제거 및 코드 가독성 증가

//refactoring : 내부의 코드를 더 효율적으로 만드는 행위.
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

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
          var list = template.list(filelist);
          var body = `<h2>${title}</h2>${description}`;
          var control = `<a href="/create">create</a>`;
          var html = template.HTML(title, list, body, control);
          response.writeHead(200);
          response.end(html);
        });
      }
      else
      {
        fs.readdir('./data', function(error, filelist)
        {
          var filteredId = path.parse(queryData.id).base;
          fs.readFile(`data/${filteredId}`, 'utf8', function(err,description)
          {
            var title = queryData.id;
            var sanitizedTitle = sanitizeHtml(title);
            var sanitizedDescription = sanitizeHtml(description, {
              allowedTags:['h1']
            });
            var list = template.list(filelist);
            var body = `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`;
            var control = `<a href="/create">create</a> <a href="/update?id=${sanitizedTitle}">update</a>
            <form action ="delete_process" method="post" >
            <input type ="hidden" name="id" value="${sanitizedTitle}">
            <input type ="submit" value="delete">
            </form>`;
            var html = template.HTML(sanitizedTitle,list,body,control);
            response.writeHead(200);
            response.end(html);
          });
        });
      }
    }
    else if(pathname === '/create')
    {
      fs.readdir('./data', function(error, filelist)
      {
        var title = 'Web - create';
        var list = template.list(filelist);
        var body = `<form action="/create_process" method = "post">
        <p><input type="text" name ="title" placeholder = "title" ></p>
        <p>
          <textarea name = "description" placeholder = "description"></textarea>
          </p>
          <p>
            <input type="submit">
            </p>
        </form>
        `;
        var control = '';
        var html = template.HTML(title, list, body, control);
        response.writeHead(200);
        response.end(html);
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
        var filteredTitle = path.parse(title).base;
        fs.writeFile(`data/${filteredTitle}`, description, 'utf8', function(err)
      {
        response.writeHead(302, {Location: `/?id=${title}`});
        response.end();
      })
      });
    }
    else if(pathname === '/update')
    {
      fs.readdir('./data', function(error, filelist)
      {
        var filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function(err,description)
        {
          var title = queryData.id;
          var list = template.list(filelist);
          var body = `<form action="/update_process" method = "post">
          <input type="hidden" name="id" value = "${title}">
          <p><input type="text" name ="title" placeholder = "title" value="${title}"></p>
          <p>
            <textarea name = "description" placeholder = "description">${description}</textarea>
            </p>
            <p>
              <input type="submit">
              </p>
          </form>`;
          var control = `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`;
          var html = template.HTML(title,list,body,control);
          response.writeHead(200);
          response.end(html);
        });
      });
    }
    else if(pathname === '/update_process')
    {
      var body = '';
      request.on('data', function(data)
      {
          body = body + data;
      });
      request.on('end', function()
      {
        var post = qs.parse(body);
        var id = post.id;
        var title = post.title;
        var description = post.description;
        var filteredId = path.parse(id).base;
        var filteredTitle = path.parse(title).base;

        fs.rename(`data/${filteredId}`, `data/${filteredTitle}`, function(err)
        {
          fs.writeFile(`data/${title}`, description, 'utf8', function(err)
          {
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end();
          })
        })
    });
    }
    else if(pathname === '/delete_process')
    {
      var body = '';
      request.on('data', function(data)
      {
          body = body + data;
      });
      request.on('end', function()
      {
        var post = qs.parse(body);
        var id = post.id;
        var filteredId = path.parse(id).base;
        fs.unlink(`data/${filteredId}`, function(err)
        {
          response.writeHead(302, {Location: `/`});
          response.end();
        })
      });
    }
    else
    {
      response.writeHead(404);
      response.end('NOT FOUND');
    }
});
app.listen(3000);
