var union = require('union');
var ecstatic = require('ecstatic');

var HTTPSServer = exports.HTTPSServer = function(options) {
    this.server = union.createServer({
        before: (options.before || []).concat([
            function (request,response) {
                options.log && options.log(request,response);
                response.emit('next');
            },
            ecstatic({
                root: options.root,
                cache: 3600,
                showDir: false,
                autoIndex: true,
                defaultExt: 'html'
            })
        ]),
        headers: options.headers || {},
        https: {
            key: options.key,
            cert: options.cert
        }
    });
};

HTTPSServer.prototype.listen = function() {
    this.server.listen.apply(this.server,arguments);
};

HTTPSServer.prototype.close = function() {
    return new HTTPSServer(options);
}

exports.createServer = function(options) {
    return new HTTPSServer(options);
};
