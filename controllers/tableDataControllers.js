import Table from '../models/Table.js';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

export const createTable = async (req, res) => {
  const newTable = new Table({
    _id: new mongoose.Types.ObjectId(),
    tdata: [
      {
        idx: 1,
        name: 'Bibhash',
        phone: 8548896774,
        email: 'test@gmail.com',
        hobbies: 'cricket, fan',
      },
    ],
  });

  try {
    await newTable.save();
    res.status(201).json(newTable);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getData = async (req, res) => {
  try {
    const table = await Table.findById('60c9ed57ee9cfc0d24eb38dd');
    res.status(200).json(table.tdata);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateData = async (req, res) => {
  const table = await Table.findById('60c9ed57ee9cfc0d24eb38dd');
  try {
    table.tdata = req.body;
    await table.save();
    res.status(201).json(table);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const sendMail = async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bibhashbest06@gmail.com',
      pass: process.env.pass,
    },
  });

  let mailOptions = {
    from: 'bibhashbest06@gmail.com',
    to: 'info@redpositive.in',
    subject: 'Selected Table Data from backend',
    text: JSON.stringify(req.body),
  };

  try {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(404).send(error);
      } else {
        res.status(201).json(info.messageId);
      }
    });
  } catch (err) {
    res.status(404).send(err);
  }
};
