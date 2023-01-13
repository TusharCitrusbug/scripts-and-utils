# scripts-and-utils

******Command to Install*******

npm i scripts-and-utils --save


# Add custom script command into package.json (You can write any name of the command)

'''
 "scripts": {
    
    "custom_scripts": "node node_modules/scripts-and-utils/index.js"
  }
'''

# Run updated command

npm run custom_scripts


**** Choose the options which'll be appear into command-line

'''
? Which do you want to perform? 
  1) add water mark
  2) abc
  3) xyz
  Answer: 
'''

# Command options

1) add water mark

    - Which will ask you for the name of the directory you want to add the watermark.
    - Then watermark message will be asked
    - and your watermark will be added to all the files and directoried.