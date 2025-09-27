```markdown
# RSS जानकारी Website

यह एक सरल static website है जिसमें **Rashtriya Swayamsevak Sangh (RSS)** के बारे में जानकारी दी गई है —  
इतिहास, उद्देश्य, संगठनात्मक ढाँचा, गतिविधियाँ, FAQ और संदर्भ स्रोत।  

वेबसाइट में एक न्यूज़लेटर सब्सक्रिप्शन फ़ॉर्म भी है जिससे उपयोगकर्ता ईमेल द्वारा अपडेट ले सकते हैं।  

---
```
## 📂 Project Structure

```
├── index.html   # मुख्य HTML पेज (पहले rss.html था)
├── rss.css      # styling (CSS)
├── rss.js       # functionality (JS)
└── README.md    # project documentation
````

---

## 🚀 Features
- 📖 About, History, Ideology, Activities, FAQ, Resources सेक्शन  
- 📩 Newsletter Subscription फ़ॉर्म (Formspree / EmailJS / backend integration ready)  
- 📱 Responsive Layout (mobile-first design)  
- ♿ Accessibility tags (`aria-*`, semantic HTML)  
- 🔒 Basic protection (inspect/zoom रोकने का JS code)  

---

## 💻 Run Locally
1. इस repo को clone करें:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
````

2. फ़ोल्डर खोलें:

   ```bash
   cd <repo-name>
   ```
3. `index.html` को browser में open कर लो।

👉 या एक static server चलाओ (VS Code + Live Server / Node serve):

```bash
npx serve .
```

---

## 🌐 Deploy on GitHub Pages

1. Repo → Settings → Pages → Branch → `main` और folder `/(root)` चुनो।
2. Save करने पर साइट यहाँ खुलेगी:

   ```
   https://<your-username>.github.io/<repo-name>/
   ```

---

## 🔧 Newsletter Form Setup

* Default में form का `action` placeholder है।
* Replace `endpoint` in **rss.js** with your service:

  * [Formspree](https://formspree.io) (quick setup)
  * [EmailJS](https://www.emailjs.com/) (client-side email)
  * या अपना backend API

Example (rss.js):

```js
const endpoint = "https://formspree.io/f/your-id";

---


```
## ⚠️ Note

```
* यह साइट केवल **सूचनात्मक उद्देश्य** से बनाई गई है।
* कंटेंट को cross-check करने के लिए हमेशा अधिकृत और विश्वसनीय स्रोतों का उपयोग करें।
* Zoom और Inspect रोकने वाला JS केवल casual users को रोकता है, 100% सुरक्षित नहीं है।

---
