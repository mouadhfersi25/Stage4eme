import { Mail, Phone, MapPin, Linkedin, Youtube, Facebook } from "lucide-react"
import "./Contact.css"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    companyName: "",
    country: "",
    phoneNumber: "",
    subject: "",
    message: "",
    contactTime: "anytime",
  })

  // mise à jour des champs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // envoi au backend
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://127.0.0.1:8000/api/form/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          email_address: formData.emailAddress,
          company_name: formData.companyName,
          country: formData.country,
          phone_number: formData.phoneNumber,
          subject: formData.subject,
          message: formData.message,
          contact_time: formData.contactTime,
        }),
      })

      if (response.ok) {
        alert("✅ Message envoyé avec succès !")
        setFormData({
          fullName: "",
          emailAddress: "",
          companyName: "",
          country: "",
          phoneNumber: "",
          subject: "",
          message: "",
          contactTime: "anytime",
        })
      } else {
        const errorData = await response.json()
        console.error("Erreur backend:", errorData)
        alert("❌ Erreur: " + JSON.stringify(errorData))
      }
    } catch (error) {
      console.error("Erreur réseau:", error)
      alert("❌ Impossible de contacter le serveur")
    }
  }

  return (
    <div className="contact-page">
      {/* Section infos + formulaire */}
      <section className="contact-hero-section">
        {/* Partie infos fixes */}
        <div className="contact-info">
          <p className="contact-subtitle">CONTACT US</p>
          <h1 className="contact-title">Let's Elevate Retail Together</h1>
          <p className="contact-description">
            We'd love to connect! Whether you're curious about our technology, want to schedule a live demo, or have a
            partnership idea — we're here to talk.
          </p>
          <div className="contact-details">
            <div className="detail-item">
              <Mail className="detail-icon" />
              <span>info@visshopai.com</span>
            </div>
            <div className="detail-item">
              <Phone className="detail-icon" />
              <span>216 99801260</span>
            </div>
            <div className="detail-item">
              <MapPin className="detail-icon" />
              <span>Sousse, Tunisia</span>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="fullName">Enter your full name*</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="emailAddress">Email Address*</label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="Enter your work email"
                  required
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="companyName">Company Name*</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your company or organization name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country*</label>
                <select id="country" name="country" value={formData.country} onChange={handleChange} required>
                  <option value="">Select your country</option>
                  <option value="tunisia">Tunisia</option>
                  <option value="france">France</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject*</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select your subject</option>
                  <option value="demo">Book a Demo</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="support">Support</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Preferred Contact Time</label>
              <div className="radio-group">
                <label htmlFor="morning">
                  <input
                    type="radio"
                    id="morning"
                    name="contactTime"
                    value="morning"
                    checked={formData.contactTime === "morning"}
                    onChange={handleChange}
                  />{" "}
                  Morning
                </label>
                <label htmlFor="afternoon">
                  <input
                    type="radio"
                    id="afternoon"
                    name="contactTime"
                    value="afternoon"
                    checked={formData.contactTime === "afternoon"}
                    onChange={handleChange}
                  />{" "}
                  Afternoon
                </label>
                <label htmlFor="anytime">
                  <input
                    type="radio"
                    id="anytime"
                    name="contactTime"
                    value="anytime"
                    checked={formData.contactTime === "anytime"}
                    onChange={handleChange}
                  />{" "}
                  Anytime
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us more about your request"
                required
              ></textarea>
            </div>

            <button type="submit" className="send-message-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Section Google Map */}
      <section className="map-section">
        <p className="map-subtitle">WE'RE EXCITED TO MEET YOU. LET'S SCHEDULE A VISIT.</p>
        <h2 className="map-title">Find Us at Our Office</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.1126048542865!2d11.0551252!3d35.5010613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302230057c48749%3A0x70740c846040e4cd!2sVisShop%20AI!5e0!3m2!1sfr!2stn!4v1690000000000!5m2!1sfr!2stn"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VisShop AI Office Location"
          ></iframe>
        </div>
      </section>

      {/* Section réseaux sociaux */}
      <section className="social-media-section">
       <a 
  href="https://www.linkedin.com/company/visshop-ai/posts/?feedView=all" 
  className="social-card"
  target="_blank" 
  rel="noopener noreferrer"
>
  <Linkedin className="social-icon" />
  <span>LinkedIn</span>
</a>

        <a href="#" className="social-card">
          <Youtube className="social-icon" />
          <span>Youtube</span>
        </a>
        <a href="#" className="social-card">
          <Facebook className="social-icon" />
          <span>Facebook</span>
        </a>
      </section>
    </div>
  )
}

export default Contact
