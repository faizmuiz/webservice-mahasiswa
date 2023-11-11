'use strict';

//cek apakah req berhasil diberikan atau tidak, lalu kirim message ini
exports.ok = function(values, res){
    var data = {
        'status': 200,
        'values': values
    };
    res.json(data);
    res.end()
}