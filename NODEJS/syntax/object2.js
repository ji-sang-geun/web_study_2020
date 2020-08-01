var members = ['jungjunha', 'aboda', 'jun jjang'];
console.log(members[1]); //aboda

var i =0;

while(i < members.length)
{
  console.log('array loop',members[i]);
  i++;
}

var roles = {
  'programmer' : 'junggjunyoung', // key : value
  'designer' : 'jun jjang',
  'manager' : 'jun young'
}
console.log(roles.designer); // jun jjang

for(var name in roles)
{
  console.log('object =>', name, 'value =>', roles[name]);
  console.log('object =>', name, 'value =>', roles.name); // 여기선 roles.name의 name이 변수라 생각을 안하고 문자열이라 생각하기 때문에 undefined가 생성됨.
