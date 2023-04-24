// Controller tiếp nhận request hiển thị ra nội dung index.html
exports.home =function(req,res){
    res.sendFile(__dirname.replace('app\\controllers','') + '/index.html')
}
