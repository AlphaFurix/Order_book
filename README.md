# Order_book

A simple order book system with a C++ backend (using SQLite) and a browser-based frontend.  
You can place buy/sell orders through the web UI, which are instantly stored in a database and displayed live from your backend.

## Features

- **C++ backend server** (no frameworks required, uses [cpp-httplib](https://github.com/yhirose/cpp-httplib) for HTTP)
- **SQLite** for data persistence
- **REST API**: Place orders and view the full order book from your browser
- **Frontend**: Clean, simple HTML/CSS + JavaScript web app

---


## Requirements

- **Visual Studio** (or any C++17 compiler)
- [sqlite3.c / sqlite3.h / sqlite3.dll](https://www.sqlite.org/download.html) from SQLite website
- [httplib.h](https://github.com/yhirose/cpp-httplib) (single header, HTTP server)
- [json.hpp](https://github.com/nlohmann/json) (single header, JSON for Modern C++)

---

## Setup & Build Instructions

### 1. Backend

1. Download `sqlite3.c`, `sqlite3.h` and `sqlite3.dll` and place them in `Backend/`.
2. Download `httplib.h` and `json.hpp` (single header files) and put them in `Backend/`.
3. Open `Backend` as a project in Visual Studio.
4. **Add all C++ source/header files** to the project (make sure they are included).
5. Build the project (Ctrl+Shift+B).
6. After build, copy `sqlite3.dll` to your output folder (e.g., `Debug/`).
7. Run the backend executable (e.g., `.\Debug\Order_book.exe` or similar).
8. The console should display: `Server running at http://localhost:8080`

### 2. Frontend

1. Open `Frontend/index.html` in your web browser.
2. Place a buy/sell order in the form.
3. The order book table updates live, showing all orders!

---

## Usage

- Start the backend server (see **Setup & Build Instructions**).
- Open the frontend (`Frontend/index.html`) in your favorite browser.
- Place orders and watch them appear instantly!

---

## Technology Stack

- **Backend:** C++17, SQLite, [cpp-httplib](https://github.com/yhirose/cpp-httplib), [nlohmann/json](https://github.com/nlohmann/json)
- **Frontend:** HTML, JavaScript, CSS (vanilla, no frameworks)

---

## API Endpoints

- **POST `/order`**
    - Description: Place a buy/sell order
    - Example request body:
      ```
      {
        "type": "BUY",
        "symbol": "AAPL",
        "price": 100.5,
        "quantity": 10
      }
      ```
- **GET `/orderbook`**
    - Description: Returns all orders as JSON array

---

## Tips

- If you see `"sqlite3.dll"` missing error, copy it to your **output folder** (where the .exe is).
- If you update backend code, rebuild and restart the server before using the frontend.
- CORS headers are added; frontend can communicate cross-origin from `file://`.

---

## How to Contribute

1. Fork the repo and clone it
2. Create a branch for your changes
3. Submit a pull request!

---

## License

This project is open-sourced for learning and non-commercial uses.  

---

**Enjoy trading and learning! If you have questions or pull requests, open an issue or discussion.**
