'use strict';

var response = require('../rest')
var connection = require('../koneksi')

exports.index = function(req, res){
    response.ok("Aplikasi REST API berjalan", res)
}

//GET data mahasisiwa
exports.tampilsemuamahasiswa = function(req, res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    })
}

// GET tampilkan data mahasiswa berdasarkan [id]
exports.tampilberdasarkanid = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id],
        function(error, rows, fields){
            if(error){
                console.log(error)
            }else{
                response.ok(rows, res)
            }
        }
    )
}

// POST data mahasiswa
exports.tambahmahasiswa = function(req, res){
    var { nim, nama, jurusan } = req.body; // Ambil data dari body request
    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?, ?, ?)', [nim, nama, jurusan], function(error, rows, fields){
        if(error){
            console.log(error);
            response.error("Terjadi kesalahan saat menambahkan data mahasiswa", res);
        } else {
            response.ok("Data mahasiswa berhasil ditambahkan", res);
        }
    })
}

// PUT data mahasiswa
exports.ubahmahasiswa = function(req, res){
    var { id_mahasiswa, nim, nama, jurusan } = req.body; // Ambil data dari body request
    connection.query('UPDATE mahasiswa SET nim = ?, nama = ?, jurusan = ? WHERE id_mahasiswa = ?', [nim, nama, jurusan, id_mahasiswa], function(error, rows, fields){
        if(error){
            console.log(error);
            response.error("Terjadi kesalahan saat mengubah data mahasiswa", res);
        } else {
            response.ok("Data mahasiswa berhasil diubah", res);
        }
    })
}

// DELETE data mahasiswa
exports.hapusmahasiswa = function(req, res){
    var id_mahasiswa = req.params.id; // Ambil ID mahasiswa dari parameter URL
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa = ?', [id_mahasiswa], function(error, rows, fields){
        if(error){
            console.log(error);
            response.error("Terjadi kesalahan saat menghapus data mahasiswa", res);
        } else {
            response.ok("Data mahasiswa berhasil dihapus", res);
        }
    })
}