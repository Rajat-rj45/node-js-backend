const fs = require("fs");
const queryString=require('querystring')

function userForm(req,res){
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Registration Form</title>
    <!-- Load Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Custom configuration for Tailwind -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        'primary': '#4f46e5', // Indigo 600
                        'primary-dark': '#4338ca', // Indigo 700
                    }
                }
            }
        }
    </script>
    <style>
        /* Apply a default font */
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-4">

    <!-- Form Container (Card) -->
    <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200">

        <h2 class="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Create Your Account
        </h2>
        <p class="text-gray-500 mb-8 text-center">
            Join our community today! All fields are required.
        </p>

        <form action="/submit" method="POST" class="space-y-6">

            <!-- Full Name Input -->
            <div>
                <label for="full_name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    placeholder="Jane Doe"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                >
            </div>

            <!-- Email Address Input -->
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jane.doe@example.com"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                >
            </div>

            <!-- Password Input -->
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                >
            </div>

            <!-- Role Selection (Dropdown) -->
            <div>
                <label for="role" class="block text-sm font-medium text-gray-700 mb-1">Your Role</label>
                <select
                    id="role"
                    name="role"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition duration-150 ease-in-out appearance-none bg-white"
                >
                    <option value="">Select a role...</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <!-- Comments/Bio (Textarea) -->
            <div>
                <label for="bio" class="block text-sm font-medium text-gray-700 mb-1">Short Bio / Comments</label>
                <textarea
                    id="bio"
                    name="bio"
                    rows="3"
                    placeholder="Tell us a little about yourself (optional)"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                ></textarea>
            </div>

            <!-- Checkbox for Terms -->
            <div class="flex items-center">
                <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    class="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                >
                <label for="terms" class="ml-2 block text-sm text-gray-900">
                    I agree to the <a href="#" class="font-medium text-primary hover:text-primary-dark">Terms and Conditions</a>
                </label>
            </div>

            <!-- Submit Button -->
            <div>
                <button
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out transform hover:scale-[1.01]"
                >
                    Register Now
                </button>
            </div>

        </form>
    </div>

</body>
</html>
`);      
}

module.exports=userForm;