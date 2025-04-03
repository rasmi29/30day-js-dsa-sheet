# Password Strength Checker

## Overview
The **Password Strength Checker** is an API that evaluates the strength of a password based on predefined security criteria. It helps ensure that users create strong passwords to protect their accounts from potential attacks.

## Problem Statement
As a cybersecurity engineer at **ChaiCode**, you need to implement a function that checks if a given password meets specific strength criteria.

## Strength Criteria
A password is considered **"Strong"** if it meets all the following requirements:

1. It must be at least **8 characters long**.
2. It must contain at least **one uppercase letter** (A-Z).
3. It must contain at least **one lowercase letter** (a-z).
4. It must contain at least **one digit** (0-9).
5. It must contain at least **one special character** (e.g., `@, #, $, !, %, *`, etc.).

If any of these criteria are not met, the password is considered **"Weak"**.

## Input Format
- A single string `password`.
- The length of `password` will be between **1 and 1000 characters**.
- The password may contain any printable ASCII character.

## Output Format
- The function should return a single string:
  - **"Strong"** if the password meets all the criteria.
  - **"Weak"** otherwise.

## Example

### **Input:**
```plaintext
Password123!
```

### **Output:**
```plaintext
Strong
```

### **Explanation:**
- ✅ At least 8 characters long.
- ✅ Contains an uppercase letter (`P`).
- ✅ Contains a lowercase letter (`assword`).
- ✅ Contains a digit (`1, 2, 3`).
- ✅ Contains a special character (`!`).

## Constraints
- **1 ≤ Length of password ≤ 1000**
- The password may contain **any printable ASCII character**.

## Usage
This function can be integrated into authentication systems, signup forms, or password validation services to enforce strong password policies.

## License
This project is licensed under the **MIT License**.