# ReactDotnetReduxMarterialUI
React Redux Material UI .Net Web API

# API
Add-Migration {name} -o Data/Migrations
Remove-Migration

# React
HTTPS=true npm start

npx create-react-app client --template typescript --use-npm

json2ts.com
mui.com
jwt.io

npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto
npm install @mui/icons-material

npm install react-router-dom
npm install axios

npm install react-toastify

npm install @mui/lab

npm install redux react-redux
npm install @reduxjs/toolkit

npm install react-hook-form
npm install @hookform/resolvers yup

npm install --save @stripe/react-stripe-js @stripe/stripe-js

#STRIPE COMMANDS
stripe login
stripe listen
stripe listen -f http://localhost:5019/api/payments/webhook -e charge.succeeded

#ADDING SecretKeys in ASP.Net WEB API 6.0

dotnet user-secrets init 
dotnet user-secrets set "StripeSettings:PublishableKey" "pk_test_51MYsW4L9cMDwJt2vwb0wYTIWJHpfFy5rmUPMwTy96DvNHNWWWRrYIDxTuPNCxGDV7gWLdutOaFV0fix7Sx6BV7zf00zA9xoVLr"
dotnet user-secrets set "StripeSettings:SecretKey" "sk_test_51MYsW4L9cMDwJt2vX2KXJcbYl6zeB12gYvUXvOe282lB5TcsOy3BSW9Abeo324mCaWXIVJsNMyfIcTOd8MISwoK700oZWabh4c"
dotnet user-secrets set "StripeSettings:WhSecret" "whsec_509d81c4a68505e7c3e1e240cb84584e0f21a961264e800024d8565efc6746c0"
dotnet user-secrets list



