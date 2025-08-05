Your task is to expose ONE Rest API which will take list of strings as the input through postman request body, insert that in database, fetch it from database then apply one sorting logic and return the response.

Sorting logic : You need to first try to sort them on basis of their length in decreasing order, if two strings have same length then you will sort them on decreasing alphabetical order. Please Make sure you are following the input and output format

 

Input 1

{

  "strings": [

    "a",

    "ab",

    "abc"

  ]

}

 

 

Output 1

{

  "strings": [

    "abc",

    "ab",

    "a"

  ]

}

 

 

Input 2

{

  "strings": [

    "bc",

    "abc",

    "xy",

    "def"

  ]

}

Output 2

{

  "strings": [

    "def",

    "abc",

    "xy",

    "bc"

  ]

}