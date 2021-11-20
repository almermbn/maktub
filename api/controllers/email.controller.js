'use strict';
var nodemailer = require('nodemailer');
var mongoose = require('mongoose'),
Email = mongoose.model('Email');

exports.send_email = function(req, res) {
	
    var eventModel = new Email(req.body);

    var response = {
        statusOk: true,
        object: eventModel,
        message: 'Mensagem enviada com sucesso!'
    }

    var transporter = nodemailer.createTransport({
    service: 'gmail',
        auth: {
            user: 'expressomaktub2019@gmail.com',
            pass: 'maktub2019'
        },
        secure: false,
        tls: {
            rejectUnauthorized: false
        }
    });

    var subject = 'Contato: ' + eventModel.name + ' ' + eventModel.lastName;
    eventModel.company ? subject += ' - ' + eventModel.company : subject;

    var header = '<p><b>Nome: ' + eventModel.name + ' ' + eventModel.lastName + '</b></p>';
    var subheader = '<p><b>Telefone: ' + eventModel.phone + '</b></p>';
    var body = '<p>' + eventModel.description + '</p>';
    var contentWrapper = header + subheader + body;

    var mailOptions = {
        from: 'expressomaktub2019@gmail.com',
        to: 'comercialbhz@expressomaktub.com.br',
        subject: subject,
        html: contentWrapper
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    var mailOptions2 = {
        from: 'expressomaktub2019@gmail.com',
        to: 'atendimentobhz@expressomaktub.com.br',
        subject: subject,
        html: contentWrapper
    };

    transporter.sendMail(mailOptions2, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.json( response );
};

