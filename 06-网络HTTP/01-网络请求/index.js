const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open('post', 'http://localhost:5000/api/user/users', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({ name: '张三', age: 18 }));
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
        const res = JSON.parse(xhr.response);
        console.log(res);
    }
}