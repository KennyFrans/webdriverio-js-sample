
# 🧪 WebdriverIO JavaScript Sample (Minimal Setup)

A lightweight, no-frills end-to-end UI test automation setup using **WebdriverIO v9**, plain **JavaScript**, and simple **Mocha-style testing**.  
This repo is intentionally minimal, avoiding TypeScript, heavy frameworks, or complex configurations—ideal for quick test automation experiments or learning purposes.

---

## 🚀 Features

- ✅ **Plain JavaScript** — as basic and clear as possible
- 🧪 **WebdriverIO v9** — modern and powerful automation framework
- 🧼 **Minimal configuration** — focus on writing tests, not managing setup
- 🌐 **Cross-browser support** — Chrome and Edge configurations included
- 📊 **Allure reports** — visually rich test reporting with a single command
- 🧪 **Headless testing** — ready for CI/CD environments
- ⚙️ **Environment config support** — switch between dev and QA easily

---

## 📦 Prerequisites

- Node.js v18+
- npm v9+
- Basic JavaScript knowledge

---

## 🛠 Setup

```bash
# Clone the repo
git clone https://github.com/Test-Architect/automation-frameworks-catalog.git
cd webdriverio-js-sample

# Install dependencies
npm install
```

---

## ▶️ Run Tests

Use one of the following commands to run your tests. All are defined in `package.json`:

```bash
# Run tests in Chrome
npm run test-chrome

# Run tests in Edge
npm run test-edge

# Run tests in Chrome (Headless mode, great for CI)
npm run test-chrome-headless
```

---

## 🌱 Set Test Environment (Optional)

You can configure different environments like `dev` or `qa` using the `TEST_ENV` variable:

```bash
# Run using 'dev' environment
cross-env TEST_ENV=dev npm run test-chrome

# Run using 'qa' environment
cross-env TEST_ENV=qa npm run test-chrome
```

These values can be configured in your `.env` file.

---

## 📊 View Allure Reports

After running your tests:

```bash
npm run open-allure
```

---

## 📁 Directory Structure (Simplified)

```
.
├── src/
│   └── config/           # WDIO configs (e.g., chrome, headless)
├── tests/
│   └── form/             # Test specs (plain .js)
├── .env                  # Environment config
├── package.json
```

---

## 🤝 Contributing

This project is built for simplicity and educational value. Contributions, bug reports, or suggestions are welcome!
