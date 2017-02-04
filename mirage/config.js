export default function() {
  this.namespace = '/api';
  this.post('/sessions', function(db, request) {
    let session = JSON.parse(request.requestBody).session;
    if(session.identification === 'agent'){
      return {token: '61a2e461109b6d7e802eef4447da23a6', email: 'djt@wh.com'};
    } else {
      return new Mirage.Response(401,{}, {});
    }
  });
}
