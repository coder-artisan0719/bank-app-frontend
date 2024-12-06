# 🏦 Bank App Frontend

This is the **Frontend** of a **Banking Application** built using **Next.js** and **TypeScript**. The app allows users to perform key banking operations such as depositing, withdrawing, transferring money to IBAN accounts, and viewing transaction histories.

🚀 **Live Demo**: [Bank App Frontend](https://bank-app-frontend-omega.vercel.app/)

---

## 🔑 Features

- **Responsive Design**: Optimized for devices with a minimum width of 360px.
- **Deposit & Withdraw**: Manage deposits and withdrawals seamlessly.
- **Transfer Money to IBAN**: Securely transfer funds to valid IBAN accounts.
- **Account Statement**: View transaction history sorted by the most recent date.
- **IBAN Validation**: Prevent transfers to non-IBAN accounts.
- **Modern UI/UX**: Sleek, user-friendly design.

---

## 🗂 Project Structure

```plaintext
├── .env                       # Environment variables
├── .gitignore                 # Files/folders ignored by version control
├── netlify.toml               # Configuration for Netlify deployment
├── next.config.mjs            # Next.js configuration
├── public/                    # Static assets (images, logos, etc.)
│   ├── favicon.png
│   ├── images/
│       ├── backgrounds/
│       ├── logos/
│       └── profile/
├── src/                       # Application source code
│   ├── app/                   # Next.js App Router
│   │   ├── (DashboardLayout)  # Dashboard pages and layouts
│   │   ├── api/               # API calls or services
│   │   ├── components/        # Reusable components
│   │   ├── css/               # Global and component-specific styles
│   │   └── not-found.tsx      # Custom 404 page
│   └── utils/                 # Utility files (themes, types, etc.)
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🚀 Getting Started

### 📥 Prerequisites
`Node.js (version 16 or higher)`

`npm (version 8 or higher)`

### 📦 Clone the Repository
```
git clone https://github.com/coder-artisan0719/bank-app-frontend.git
cd bank-app-frontend
```

### 🛠 Install Dependencies
```
npm install
```

### 🔧 Start the Development Server
```
npm run dev
```

### 🌍 Environment Variables

Add a .env file to configure the app. Example:
```
NEXT_PUBLIC_API_URL=https://bank-app-server-69ir.onrender.com
```

### 🛡 Acknowledgments

```
React
Next.js
Tailwind CSS
ApexCharts
```