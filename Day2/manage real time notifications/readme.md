# Manage Real-Time Notifications - JavaScript  

## 🚀 Problem Background  

As part of the **Spring Fest App**, you're building a **notification management system**. The app sends out notifications to users about **events, offers, and updates** during the festival. Each notification belongs to a **category** (like "Event", "Offer", "Update"). Your task is to **count the notifications received for each category** and display the counts in **alphabetical order**.  

---

## 📝 Problem Statement  

Given a **list of notifications**, where each notification belongs to a **category**, write a program to **count the notifications** for each category and output the counts in **alphabetical order** of the categories.  

### 🔍 Conditions:  

✅ Count occurrences of each notification category.  
✅ Sort the output **alphabetically** by the category name.  

---

## 📥 Input Format  

- `notifications`: An **array of strings**, where each string represents a **notification category**.  
  - `1 ≤` number of notifications `≤ 10^5`  
  - Each string contains **only uppercase and lowercase letters**  
  - `1 ≤` length of a category `≤ 50`  

---

## 📤 Output Format  

An **array of objects**, where each object contains:  

- `category`: The name of the category.  
- `count`: The number of notifications for that category.  
- The output must be **sorted alphabetically** by the category name.  

---

## 💡 Example  

### 🔹 Input  
```js
["Event", "Offer", "Event", "Update", "Offer", "Offer", "Event"]
```

### 🔹 Output  
```js
[
  {"category": "Event", "count": 3},
  {"category": "Offer", "count": 3},
  {"category": "Update", "count": 1}
]
```

### 🔹 Explanation  
- **"Event"** appears **3 times**.  
- **"Offer"** appears **3 times**.  
- **"Update"** appears **1 time**.  

Sorted alphabetically: **Event, Offer, Update**.  

---

🔥 **Can you optimize it further? Try it out!** 🚀

