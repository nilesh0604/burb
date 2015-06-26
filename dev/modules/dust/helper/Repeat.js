/**
 * Repeat helper for Dust templating engine.
 */
module.exports = function(chunk, context, bodies, params) {
	var i, times, _i, _ref, _ref1, _ref2, _ref3;
	times = parseInt(_eval_dust_string(params.times, chunk, context));
	if ((times != null) && !isNaN(times)) {
		if ((_ref = context.stack.head) != null) {
			_ref['$len'] = times;
		}
		for (i = _i = 0; 0 <= times ? _i < times : _i > times; i = 0 <= times ? ++_i
				: --_i) {
			if ((_ref1 = context.stack.head) != null) {
				_ref1['$idx'] = i;
			}
			chunk = bodies.block(chunk, context.push(i, i, times));
		}
		if ((_ref2 = context.stack.head) != null) {
			_ref2['$idx'] = void 0;
		}
		if ((_ref3 = context.stack.head) != null) {
			_ref3['$len'] = void 0;
		}
	}
	return chunk;
};
function _eval_dust_string(str, chunk, context) {
      var buf;
      if (typeof str === "function") {
        if (str.length === 0) {
          str = str();
        } else {
          buf = '';
          (chunk.tap(function(data) {
            buf += data;
            return '';
          })).render(str, context).untap();
          str = buf;
        }
      }
      return str;
};