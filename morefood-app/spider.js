var Crawler = require("crawler");
var url = require('url');
var fs = require('fs');

var c = new Crawler({
    maxConnections: 10,
    callback: function (error, result, $) {
        var arr = [];
        $('.plist_box').each(function (index, li) {
            var $li = $(li);
            var obj = {};
            obj.img = $($($li.find('.plist_img')).find('a')).find('img').attr('src2');
            obj.url = $($li.find('.plist_tit')).find('a').attr('href');
            obj.title = $li.find('.plist_tit').text();
            obj.price = $($li.find('.plist_price')).find('.price').text();
            obj.price2 = $($li.find('.plist_price')).find('.plist_price2').text();
            obj.priceUrl = $($($li.find('.plist_price')).find('.plist_buy')).find('a').attr('href');
            arr.push(obj);
        })
        fs.writeFileSync('./data/plist_box.json', JSON.stringify(arr));
    }
})




function decodeData(li) {
    var $li = $(li);
    var obj = {};
    obj.img = $li.find('.plist_img').attr('src');
    obj.url = $li.find('.plist_tit').attr('href');
    obj.title = $li.find('.plist_tit').text();
    obj.price = $($li.find('.plist_price')).find('.price').text();
    obj.price2 = $($li.find('.plist_price')).find('.plist_price2').text();
    obj.priceUrl = $($li.find('.plist_price')).find('.price_buy').attr('href');
    return obj;
}

c.queue('http://www.morefood.com/');