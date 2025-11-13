# Solum Web Developer Test - Solutions

This repository contains solutions for three coding questions, including A. Mystic Waves (Java), B. CargoCraft Fleet (Java), and C. Frontend Test — Login Page (React, Bootstrap)


## Project Structure
```
SolumWebDevTest/
├── Qa/
|    ├── MysticWaves.java    # QA.Mystic Waves
│    └── MysticWavesTest.java
|
├── Qb/
|     ├── CargoCraft.java    # QB.CargoCraft Fleet
|     └── CargoCraftTest.java
├── Qc/login-porject    # C. Frontend Test — Login Page
|     ├── package.json
|     └── src/
|          ├── assets/
|          ├── login_page/
```


## Set up and Run
 - QA and QB: 
    - JDK 17 or higher
    - Command line or any IDE (e.g., IntelliJ / VS Code / Eclipse)
 - QC: 
    - > The project was developed and tested using npm v10.9.0, and Vite v7.2.2.  
    Other versions may work but are not guaranteed.
    - In your terminal:
        ```shell
        cd login-project
        npm install
        npm run dev
        ```
    - Then open the URL printed in your terminal (usually http://localhost:5173).
    - Simulated account: 
        - test@example.com, password: Test1234!
        - user@example.com, password: User.5678

## QC - Features Implemented

- Responsive layout (works on desktop and mobile)
- Simulated authentication using local data
- Password validation with regex
- Show/hide password eye icon

###
---
Author: Ziying (Lindsey) Long

Last updated: 13 Nov 2025