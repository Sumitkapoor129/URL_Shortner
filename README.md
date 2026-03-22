# 🔗 URL Shortener Web App

A simple and efficient URL shortener built using **Node.js, Express, MongoDB, and EJS** that converts long URLs into short, shareable links.

---

## 🚀 Features

- 🔗 Convert long URLs into short links instantly  
- ⚡ Fast redirection using unique short IDs  
- ♻️ Prevents duplicate entries (same URL → same short link)  
- 🗄️ MongoDB database for storing URLs  
- 🎨 Clean and responsive UI using EJS  
- ❌ Error handling for invalid inputs  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express  
- **Database:** MongoDB, Mongoose  
- **Templating Engine:** EJS  
- **Utility:** nanoid  

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](./public/Screenshot%202026-03-22%20143506.png)

---

### 🔗 Short URL Generated
![Short URL](./public/Screenshot%202026-03-22%20143521.png)

---

## ⚙️ Installation & Setup


```bash
1️⃣ Clone the repository
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
MONGO_URL=your_mongodb_connection_string
PORT=4000

4️⃣ Run the server
npm start

### 🌐 Usage
Open browser and go to:
http://localhost:4000

Enter a long URL

Click Shorten URL

Copy and use the generated short link


🔁 API Endpoints
➤ Create Short URL
POST /url/short

➤ Redirect to Original URL
GET /:id
