import express from "express";
const router = express.Router();
import {
  getAllContacts,
  createContact,
} from "../controllers/contactController.js";

router.get("/", getAllContacts);
router.post("/", createContact);

export default router;
