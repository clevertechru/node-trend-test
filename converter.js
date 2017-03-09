let Promise = require('q');
const MAX_LOOP_COUNT = 1000;

/*
  @param  (Array) arr
  @return (String)
 */
module.exports.convert = (arr) => {
  if ('undefined' === typeof(arr) ){
    return Promise.resolve('');
  }
  else {
    return _convert(arr)
      .then( (result) => {
        return result.join();
    });
  }
};

let _convert = (arr, opt) => {
  return Promise.resolve()
    .then( () => {
      let newArr  = []
        , _opt    = opt || {}
        , idx     = _opt['idx']     || 0
        , startEl = _opt['startEl'] || null
        , endEl   = _opt['endEl']   || null;

      while (idx < arr.length) {
        if (arr[idx] + 1 === arr[idx + 1]) {
          if (! startEl) startEl = arr[idx];
          endEl   = arr[idx + 1];
        }
        else if (startEl && endEl) {
          newArr.push(startEl + 1 === endEl ? [startEl, endEl] : [startEl, endEl].join('-'));
          startEl = null;
        }
        else {
          newArr.push(arr[idx]);
        }
        idx ++;

        if (idx % MAX_LOOP_COUNT === 0) {
          process.nextTick( () => {
            _convert(arr, {
              idx     : idx,
              startEl : startEl,
              endEl   : endEl
            })
              .then( (result) => {
                return Promise.resolve(result);
              });
          });
        }

      }

      return newArr;
    })

};