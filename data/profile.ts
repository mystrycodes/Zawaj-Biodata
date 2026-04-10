export type Profile = {
  hero: {
    name: string;
    tagline: string;
    image: string;
  };
  personalInfo: Array<{ label: string; value: string }>;
  education: Array<{ title: string; detail: string }>;
  career: Array<{ label: string; value: string }>;
  family: {
    details: Array<{ label: string; value: string }>;
    siblings: string[];
    backgroundTitle: string;
    backgroundText: string;
  };
  partnerPreferences: Array<{ label: string; value: string }>;
  gallery: string[];
  contact: Array<{ label: string; value: string }>;
};

export const profile: Profile = {
  hero: {
    name: "Syed Anwaar Hussain",
    tagline: "Software Engineer | AI Solutions Architect | Systems Architect",
    image: "/gallery/Hero-1.jpeg"
  },
  personalInfo: [
    { label: "Full Name", value: "Syed Anwaar Hussain" },
    { label: "Date of Birth", value: "December 13, 1997" },
    { label: "Age", value: "28 years" },
    { label: "Height", value: "5'8\" (173 cm)" },
    { label: "Gender", value: "Male" },
    { label: "Religion", value: "Muslim" },
    { label: "Mother Tongue", value: "Urdu" },
    { label: "Marital Status", value: "Single" },
    { label: "Complexion", value: "Fair" },
    { label: "Hobbies & Interests", value: "Fitness, Traveling, Gaming" }
  ],
  education: [
    {
      title: "Master of Science (MS) in Computer Science",
      detail: "University of North Texas, Texas, United States (Graduated in 2024)"
    },
    {
      title: "Bachelor of Engineering (B.E.) in Electronics and Communication Engineering",
      detail: "Muffakham Jah College of Engineering and Technology, Hyderabad, India (Graduated in 2019)"
    }
  ],
  career: [
    { label: "Occupation", value: "Software Development Engineer" },
    { label: "Employer", value: "Paycom Software Inc., Texas, United States" },
    {
      label: "Career Goals",
      value:
        "A driven Software Development Engineer focused on architecting robust, AI-powered solutions. Passionate about technological innovation, continuous learning, and delivering high-quality software that makes a tangible impact."
    }
  ],
  family: {
    details: [
      { label: "Family Structure", value: "Nuclear Family" },
      { label: "Father's Name", value: "Syed Abrar Hussain" },
      { label: "Father's Occupation", value: "Real Estate Businessman" },
      { label: "Mother's Occupation", value: "Homemaker" }
    ],
    siblings: [
      "Syed Afraz Hussain - MS in Data Engineering, United States",
      "Syed Ibraheem Hussain - Currently in 8th grade, India",
      "Younger Sister - Pursuing B.E. in Computer Science, India",
      "Younger Sister - Pursuing B.E. in Computer Science, India"
    ],
    backgroundTitle: "Family Background and values:",
    backgroundText:
      "We are a well-educated and respected Sunni Muslim family that firmly follows the Qur'an and Hadith as the foundation of our faith and daily life. We uphold Islamic principles, emphasizing honesty, integrity, and humility in all aspects of life. Our family strictly adheres to Tawheed and does not engage in any form of shirk. Education and moral values are deeply important to us, and we take pride in maintaining a strong legacy of knowledge, ethical conduct, and service to the community. We believe in a balanced approach to life, fostering mutual respect, compassion, and strong family bonds."
  },
  partnerPreferences: [
    { label: "Preferred Age Range", value: "22-26 years" },
    {
      label: "Preferred Education Level",
      value:
        "At least a Bachelor's Degree, preferably in a professional field like Engineering, Medicine, Business or any other professional field"
    },
    {
      label: "Religious/Cultural Preferences",
      value:
        "Seeking a life partner who firmly adheres to the Qur'an and Sunnah, upholds daily prayers, and observes hijab in accordance with Islamic teachings. A strong commitment to faith, modesty, and righteous living is essential, along with a sincere dedication to Islamic values in both personal and family life."
    },
    {
      label: "Personality Traits",
      value:
        "Looking for a kind, well-mannered, and family-oriented partner who values integrity, mutual respect, and personal growth, while upholding Islamic principles in daily life."
    }
  ],
  gallery: [
    "/gallery/image1.JPEG",
    "/gallery/image2.JPEG",
    "/gallery/image3.jpg",
    "/gallery/hero.jpg",
    "/gallery/image5.jpg",
    "/gallery/image6.JPEG",
    "/gallery/image7.jpg",
    "/gallery/image8.jpg",
    "/gallery/image9.jpg",
    "/gallery/image10.jpg",
    "/gallery/image11.jpg",
    "/gallery/image4.JPEG"
  ],
  contact: [
    { label: "Phone Number", value: "+1 (940) 843-6383 / +1 (682) 557-2852" },
    { label: "Email Address", value: "syedanwar995@gmail.com" }
  ]
};
