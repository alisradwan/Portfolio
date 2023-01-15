import React from "react";

function ContactIcons() {
  const contactLinks = [
    {
      name: "email",
      url: "mailto:aloshradwan44@gmail.com",
      classes: "far fa-envelope ",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/ali-radwan-5b510124b/",
      classes: "fab fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/alisradwan",
      classes: "fab fa-github",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/aislrn/",
      classes: "fab fa-instagram",
    },
  ];

  return (
    <div className="mt-2 mt-lg-0">
      {contactLinks.map((contactLink) => {
        return (
          <a
            href={contactLink.url}
            key={contactLink.name}
            target="_blank"
            rel="noopener noreferrer"
            className="m-3 iconss"
          >
            <span>
              <i className={contactLink.classes}></i>
            </span>
          </a>
        );
      })}
    </div>
  );
}

export default ContactIcons;
