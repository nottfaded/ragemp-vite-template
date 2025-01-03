# RAGE MP Project Template

This repository contains a template for building a RAGE MP project with modern tools and technologies. The setup includes:

- **Server-side**: Developed using .NET 8 for powerful and scalable backend functionality.
- **Client-side**: Managed with Vite for fast builds.
- **TypeScript Plugin**: The [@ragempcommunity/types-client](https://www.npmjs.com/package/@ragempcommunity/types-client) plugin is included for enhanced development experience, allowing easy access to RAGE MP methods and properties directly in VS Code.

## Getting Started

### Prerequisites

- Ensure you have the following installed on your system:
  - Node.js (LTS version recommended)
  - .NET 8 SDK

### Setup

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. Install client-side dependencies:

   - Navigate to the `scr_client` directory and install the required packages:
     ```bash
     cd scr_client
     npm install
     ```

3. Build and run the project:

   - Use the provided `.bat` file to build the client and immediately start it:
     ```bash
     start-server.bat
     ```



