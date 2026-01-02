import { useState } from "react";
import api from "../services/api";

const ContactForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name required";
    if (!form.phone.trim()) errs.phone = "Phone required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const isValid =
    form.name &&
    form.phone &&
    /^\S+@\S+\.\S+$/.test(form.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const response =await api.post("/contacts", form);

    console.log("Contact created:", response.data);
    
    setForm({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setSuccess("Contact submitted successfully!");
    onSuccess();

    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <p>{errors.name}</p>}

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <p>{errors.email}</p>}

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      {errors.phone && <p>{errors.phone}</p>}

      <textarea
        placeholder="Message (optional)"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button disabled={!isValid}>Submit</button>

      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};

export default ContactForm;
