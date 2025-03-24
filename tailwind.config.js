/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/*/.{html,js}"],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   module.exports = { 
    content: ["./node_modules/flyonui/dist/js/*.js"], // Require only if you want to use FlyonUI JS component
  
    plugins: [
      require("flyonui"),
      require("flyonui/plugin") // Require only if you want to use FlyonUI JS component
    ]
  }
