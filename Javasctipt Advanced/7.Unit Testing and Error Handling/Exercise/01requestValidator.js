function requestValidator(object) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validURI = /[^A-Za-z0-9\.\*]+/gm;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const validMessage = /[<>\\&'"]/mg;

    if (!object.hasOwnProperty('method') || !validMethods.includes(object['method']) || !object['method']) {
        throw new Error('Invalid request header: Invalid Method')
    }
    if (!object.hasOwnProperty('uri') || validURI.test(object['uri']) || !object['uri']) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!object.hasOwnProperty('version') || !validVersions.includes(object['version']) || !object['version']) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!object.hasOwnProperty('message') || validMessage.test(object['message'])) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return object;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }));
// console.log(requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }));
console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }));  