# Chatty

Chatty is a real-time text and image sharing application that allows users to communicate efficiently through sharing content instantly.

## Installation Instructions

To set up the Chatty application on your local machine, follow these comprehensive steps:

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Git**: Make sure Git is installed on your machine. You can download it from [git-scm.com](https://git-scm.com/).
- **Database**: You will need MongoDB installed for storing user data and shared content.

### Steps to Install
1. **Clone the Repository**
   ```bash
   git clone https://github.com/susa001/Chatty.git
   cd Chatty
   ```

2. **Install Dependencies**
   Inside the project directory, run:
   ```bash
   npm install
   ```

3. **Set Up the Environment Variables**
   Create a `.env` file in the root project directory and include the following:
   ```env
   PORT=3000
   DB_URI=mongodb://localhost:27017/chatty
   ```
   Ensure you adjust the `DB_URI` if your MongoDB instance is configured differently.

4. **Run the Application**
   Start the server with:
   ```bash
   npm start
   ```
   The application should be running at `http://localhost:3000`.

5. **Access the Application**
   Open your browser and navigate to the URL mentioned above. You can start sharing messages and images instantly!

## Contributing

We welcome contributions! Please fork the repository and submit a pull request for your suggested changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.