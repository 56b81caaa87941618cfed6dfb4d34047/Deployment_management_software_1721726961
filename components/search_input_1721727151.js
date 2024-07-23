Vue.component('search_input_1721727151', 
    { template: `
     <div class="bg-white p-6 rounded-lg shadow-md">
        <form class="space-y-4">
            <input type="text" placeholder="Field 1" class="w-full px-4 py-2 text-black placeholder-gray-500 bg-white border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <input type="text" placeholder="Field 2" class="w-full px-4 py-2 text-black placeholder-gray-500 bg-white border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <div class="flex space-x-4">
                <label class="flex items-center">
                    <input type="radio" name="gender" value="male" class="mr-2 text-purple-600 focus:ring-purple-500">
                    <span class="text-gray-700">Male</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="gender" value="female" class="mr-2 text-purple-600 focus:ring-purple-500">
                    <span class="text-gray-700">Female</span>
                </label>
            </div>
            <button type="submit" class="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 ease-in-out">Submit</button>
        </form>
     </div>
  `, 
    delimiters: ['{','}'],
    data() { 
       return { 
            
       } 
    },
  })