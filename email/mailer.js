const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "karkuhkarkuh13@gmail.com",
        pass: "icokgzdkaogaimqy"
    }
});
let message = {
    from: '"LR JS 2022" <karkuhkarkuh13@gmail.com>',
    to: "karkuhkarkuh14@gmail.com",
    subject: "ЛР4 ТР-12 Каркушевський Владислав",
    text: `ПІБ: Каркушевський Владислав Леонідович\nГрупа: ТР-12\nОцінка: 10/10\n`
}

transporter.sendMail(message, function(err, info) {
    if (err) {
    console.log(err)
    } else {
    console.log(info);
    }
});