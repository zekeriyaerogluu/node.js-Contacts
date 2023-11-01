import contactModel from "../models/contactModel.js";

const contact_m = new contactModel();

// Tüm Kişiler
export const getAllContacts = (req, res) => {
  contact_m.getAllContacts((err, contacts) => {
    if (err) {
      return res.status(500).send("Şirketler listelenirken bir hata oluştu.");
    }

    res.render("index.ejs", { contacts: contacts });
  });
};

// Kişi Ekleme
export const createContact = (req, res) => {
  const { name, surname, phone } = req.body;

  const inputData = {
    name: name,
    surname: surname,
    phone: phone,
  };

  contact_m.createContact(inputData, (insertId) => {
    if (insertId > 0) {
      res.redirect("/");
    } else {
      return res.status(500).send("Kişi oluşturulurken bir hata oluştu.");
    }
  });
};
